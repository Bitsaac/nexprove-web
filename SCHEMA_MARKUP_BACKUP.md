# Schema Markup Backup (Removed from Wrappers)

This schema markup was added in Phase 3 but removed per user request to revert to original blog layout.
Can be re-added later after proper review and planning.

## Blog Article Schema (for wrapper.tsx)

Add this after line 21 in `src/app/[locale]/blog/wrapper.tsx`:

```tsx
      {/* Article Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            dateModified: article.date,
            author: {
              '@type': 'Person',
              name: article.author.name,
              jobTitle: article.author.role,
            },
            publisher: {
              '@type': 'Organization',
              name: 'NexProve',
              url: 'https://nexprove.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://nexprove.com/favicon.ico',
              },
            },
            articleSection: 'Product Development',
            keywords: 'product development, MVP development, startup advice, software engineering, digital products',
          }),
        }}
      />
```

## Case Study CreativeWork Schema (for work/wrapper.tsx)

Add this after line 22 in `src/app/[locale]/work/wrapper.tsx`:

```tsx
      {/* CreativeWork Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: caseStudy.title,
            description: caseStudy.description,
            datePublished: caseStudy.date,
            creator: {
              '@type': 'Organization',
              name: 'NexProve',
              url: 'https://nexprove.com',
            },
            customer: {
              '@type': 'Organization',
              name: caseStudy.client,
            },
            genre: caseStudy.service,
            image: caseStudy.image.src,
            audience: {
              '@type': 'Audience',
              audienceType: 'Business Decision Makers',
            },
            keywords: 'case study, product development, MVP development, custom software, digital products',
          }),
        }}
      />
```

## Benefits

- **Article Schema**: Helps Google understand blog posts are articles, enabling rich snippets
- **CreativeWork Schema**: Helps Google understand case studies are professional work samples
- Both improve SEO visibility and click-through rates from search results

## Testing

After adding back, validate with:
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org validator: https://validator.schema.org/
