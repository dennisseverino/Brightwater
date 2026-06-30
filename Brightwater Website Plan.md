# Brightwater Family Law Website Plan

## Project Goal

Design and build a premium, high-converting single-page website for Brightwater Family Law, a boutique family law firm based in Brisbane and servicing Brisbane and the Gold Coast.

The website should help emotionally overwhelmed visitors answer one core question quickly:

> Can I trust these people to help me?

The page should feel calm, reassuring, human, premium, approachable, and clear. It should avoid generic legal imagery, aggressive sales language, and corporate law-firm tropes.

## Design Strategy

Brightwater should feel like a calm professional guide, not a hard-selling law firm. The emotional job of the page is to lower anxiety quickly: visitors should feel that they are in the right place, that the firm understands the difficulty of their situation, and that the next step is manageable.

The visual direction should sit between a premium healthcare practice and a modern software product: warm, minimal, structured, soft, and trustworthy. The design should avoid courthouse imagery, gavels, scales of justice, dark navy and gold cliches, fake luxury, giant stock photos, and walls of text.

Key design principles:

- Calm first impression within 3 seconds.
- Human warmth without becoming sentimental.
- Clear expertise without sounding self-important.
- Conversion path that feels like relief, not pressure.
- Short sections with generous spacing and strong hierarchy.

## Information Architecture

### 1. Sticky Navigation

Purpose: Give anxious visitors orientation and keep the primary next step available.

Content:

- Brightwater Family Law brand mark/name.
- Practice Areas.
- Approach.
- Team.
- FAQ.
- Primary CTA: Book a free consultation.
- Mobile menu with clear tap targets.

### 2. Hero

Purpose: Immediately establish emotional trust, relevance, and the primary action.

Content:

- Strong emotional headline focused on reassurance.
- Supporting copy explaining Brisbane and Gold Coast family law support.
- Primary CTA: Book a free 20-minute consultation.
- Secondary CTA: See how we can help.
- Human, warm image treatment.
- Immediate proof point: principal solicitor with 18 years experience.

Suggested copy direction:

> Family law guidance for the moments that feel hardest to navigate.

Supporting tone:

> When life changes unexpectedly, you deserve clear advice, steady support, and a team who can help you understand your options before you make your next decision.

### 3. Trust Indicators

Purpose: Turn vague reassurance into concrete credibility.

Suggested indicators:

- 18 years principal solicitor experience.
- 4 family lawyers.
- Brisbane and Gold Coast.
- Clear fixed-fee guidance available.

Tone should be understated and factual, not boastful.

### 4. Practice Areas

Purpose: Help visitors quickly confirm that Brightwater handles their situation.

Cards:

- Divorce & Separation.
- Property Settlements.
- Parenting & Child Custody.
- Mediation.

Each card should use plain language and answer: "Is this what I need help with?"

### 5. Why Choose Brightwater

Purpose: Explain the service experience and differentiate the firm beyond credentials.

Themes:

- Calm legal guidance.
- Plain-English advice.
- Regular communication.
- Practical pathways before conflict.
- Transparent guidance around options, likely steps, and costs.

### 6. Meet the Team

Purpose: Humanize the firm and reduce intimidation for first-time legal clients.

Content:

- Four lawyers.
- Principal solicitor highlighted with 18 years experience.
- Short, warm biographies.
- Professional but approachable photography.

Avoid exaggerated expert positioning or overly polished corporate language.

### 7. Testimonials

Purpose: Provide restrained social proof around trust, clarity, and emotional support.

Direction:

- Use believable testimonials.
- Focus on feeling heard, understanding next steps, responsiveness, and calm guidance.
- Avoid exaggerated outcome claims.

### 8. FAQ

Purpose: Remove hesitation before the consultation CTA.

Questions to address:

- How much does it cost?
- What happens in the free consultation?
- Can you help if children are involved?
- How are property settlements handled?
- How long does the process take?
- What should I prepare before the first call?

### 9. Consultation CTA + Form

Purpose: Convert trust into a low-friction next step.

Content:

- Large calm CTA section.
- Reassuring copy that the visitor does not need to have everything figured out.
- Form fields:
  - Name.
  - Email.
  - Phone.
  - Brief message.
- Client-side validation only.
- Success message after submission.
- No backend.

### 10. Footer

Purpose: Reinforce legitimacy and provide practical contact details.

Content:

- Contact details.
- Brisbane office.
- Gold Coast service area.
- Practice areas.
- Quick links.
- Small legal disclaimer.

## Conversion Strategy

The conversion path should feel like a safe next step rather than a sales funnel.

Primary CTA:

> Book a free 20-minute consultation

Secondary CTA:

> See how we can help

CTA placement:

- Sticky navigation.
- Hero.
- Mid-page after credibility and approach.
- Final consultation form.

Friction reduction:

- Mention the free 20-minute consultation early.
- State that the consultation is no obligation.
- Explain what happens after submitting the form.
- Use the FAQ section to address common fears.
- Keep the form short.
- Use calm microcopy such as: "You do not need to know exactly what to ask yet."

Trust builders:

- Specific location: Brisbane and Gold Coast.
- Specific team size: four lawyers.
- Specific experience: principal solicitor with 18 years experience.
- Human team section.
- Plain-English explanations.
- Professional restraint.

## Color Palette

Use a warm, calming palette that avoids the navy-and-gold legal cliche.

Recommended palette:

- Warm white: `#F8F5EF`
- Soft ivory: `#FFFCF7`
- Sage: `#A8B8A3`
- Muted teal: `#5F8F8A`
- Deep charcoal: `#26302E`
- Warm gray: `#7B7770`
- Soft border: `#E6DED2`

Usage:

- Warm white and ivory for primary backgrounds.
- Deep charcoal for body text and headings.
- Warm gray for supporting text.
- Sage and muted teal for accents, calls to action, icons, and subtle section contrast.
- Soft border for cards, dividers, and form fields.

## Typography

Use modern, readable typography with a premium but understated feel.

Recommended approach:

- Headings: refined serif stack such as `Georgia`, `Cambria`, or a loaded display serif if the project later warrants it.
- Body and UI: modern system sans stack such as `Inter`, `ui-sans-serif`, `system-ui`, `-apple-system`, `BlinkMacSystemFont`, and `Segoe UI`.

Typography rules:

- Large but gentle hero heading.
- Comfortable line-height.
- Short reading widths.
- Smaller, denser UI labels.
- Avoid excessive all-caps.
- Ensure readability on mobile.

## Visual Direction

The site should use human photography or carefully composed image treatment that feels warm, grounded, and real.

Avoid:

- Courthouse imagery.
- Gavels.
- Scales of justice.
- Giant generic stock photos.
- Overly dark corporate interiors.
- Aggressive lawyer poses.

Prefer:

- Warm portraits.
- Calm consultation-room details.
- Natural light.
- Close human compositions.
- Soft cropping and rounded corners.
- Subtle shadows.

## UX Requirements

The website should be:

- Mobile-first.
- Responsive.
- Accessible.
- Keyboard navigable.
- Semantically structured.
- Easy to scan.
- Emotionally calm.

Implementation details:

- Sticky navigation.
- Smooth scrolling.
- Visible focus states.
- Reduced-motion support for animations.
- Client-side form validation.
- Clear error messages.
- Success state after submission.

## Technical Plan

Build with:

- React.
- Vite.
- Tailwind CSS.
- Component architecture.
- Reusable section and UI components.
- No backend.
- No database.
- No authentication.
- No CMS.
- No unnecessary libraries.

Suggested structure:

```text
src/
  components/
    Navigation.jsx
    Hero.jsx
    TrustBar.jsx
    PracticeAreas.jsx
    Approach.jsx
    Team.jsx
    Testimonials.jsx
    FAQ.jsx
    ConsultationForm.jsx
    Footer.jsx
  data/
    siteContent.js
  App.jsx
  main.jsx
  index.css
```

## SEO Plan

Include:

- Proper page title.
- Meta description.
- Open Graph title.
- Open Graph description.
- Open Graph type.
- Semantic headings.
- Descriptive alt text.
- Clear page structure with one `h1`.

Suggested title:

> Brightwater Family Law | Brisbane & Gold Coast Family Lawyers

Suggested meta description:

> Calm, practical family law guidance for divorce, separation, parenting matters, property settlements, and mediation across Brisbane and the Gold Coast.

## Performance Plan

Performance priorities:

- Minimal JavaScript.
- No unnecessary dependencies.
- Lazy-load non-critical images.
- Use optimized image dimensions.
- Avoid heavy animation.
- Respect `prefers-reduced-motion`.
- Keep Tailwind output lean.
- Use semantic HTML instead of overbuilt components.

## Section Rationale

- Navigation exists to orient visitors and keep the primary action available.
- Hero exists to answer the trust question immediately.
- Trust indicators exist to make credibility specific and scannable.
- Practice areas exist to confirm relevance.
- Why Choose Brightwater exists to explain the firm's service experience.
- Team exists to make the firm feel human and approachable.
- Testimonials exist to validate trust without overstating outcomes.
- FAQ exists to reduce anxiety and answer common objections.
- Consultation form exists to turn trust into a manageable next step.
- Footer exists to reinforce legitimacy and provide practical details.

## Implementation Notes

The current workspace initially appeared to contain only `.git`, so the implementation may require scaffolding a new React, Vite, and Tailwind project unless additional project files are restored or revealed later.

Before implementation, confirm whether to:

- Scaffold a fresh Vite React app in this directory.
- Use generated/local image assets or remote image URLs.
- Keep fonts system-first or add external font loading.
