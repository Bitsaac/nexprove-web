/**
 * Simple in-memory rate limiter for API routes
 * Tracks requests by IP address with sliding window
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up expired entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetAt) {
      rateLimitStore.delete(key)
    }
  }
}, 10 * 60 * 1000)

export interface RateLimitConfig {
  /**
   * Maximum number of requests allowed in the time window
   * @default 5
   */
  maxRequests?: number

  /**
   * Time window in milliseconds
   * @default 900000 (15 minutes)
   */
  windowMs?: number
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  resetAt: number
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result with remaining attempts
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {},
): RateLimitResult {
  const maxRequests = config.maxRequests ?? 5
  const windowMs = config.windowMs ?? 15 * 60 * 1000 // 15 minutes

  const now = Date.now()
  const entry = rateLimitStore.get(identifier)

  // No previous requests or window expired
  if (!entry || now > entry.resetAt) {
    const resetAt = now + windowMs
    rateLimitStore.set(identifier, { count: 1, resetAt })
    return {
      success: true,
      limit: maxRequests,
      remaining: maxRequests - 1,
      resetAt,
    }
  }

  // Within rate limit
  if (entry.count < maxRequests) {
    entry.count++
    return {
      success: true,
      limit: maxRequests,
      remaining: maxRequests - entry.count,
      resetAt: entry.resetAt,
    }
  }

  // Rate limit exceeded
  return {
    success: false,
    limit: maxRequests,
    remaining: 0,
    resetAt: entry.resetAt,
  }
}

/**
 * Get client IP address from Next.js request
 */
export function getClientIp(request: Request): string {
  // Check Vercel-specific headers first
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  // Check other common headers
  const realIp = request.headers.get('x-real-ip')
  if (realIp) {
    return realIp.trim()
  }

  // Fallback to a default (localhost in development)
  return '127.0.0.1'
}
