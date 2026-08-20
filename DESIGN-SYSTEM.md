# Toughjobs Design System Documentation

## Core Messaging & Brand Principles

### Operating Philosophy
- **"If the phone doesn't ring, we didn't do our job."** — Success is measured in booked jobs and calendar volume, not vanity metrics.
- **Authentic partnership** — We require analytics access, honest feedback, and clear business goals from clients.
- **Transparency first** — Monthly detailed reporting on every dollar spent and every lead generated.
- **Collaborative workflow** — Quick approvals keep campaigns fresh and relevant. Authentic photos/videos from client teams make marketing real.

### The Five Pillars of Service

**1. Websites (Platform-Agnostic)**
- WordPress, Webflow, or custom code — platform chosen based on client needs, not our convenience
- Ownership: Clients own the code, data, and domain
- Mobile-first, fast-loading (<2s on rural LTE)
- Lead capture across 3+ channels (phone, form, chat)
- Analytics access and transparent reporting

**2. Local SEO**
- High-intent, high-volume local searches ("HVAC repair near me," not brand keywords)
- Google Business Profile optimization (60% of local SEO battle)
- Citations, service-area pages, review generation, monthly keyword tracking
- Monthly reporting with clear ROI metrics

**3. Social Media Management**
- **"Posts aren't strategy. Community is."** — Real engagement (comments, shares, saves) over vanity metrics
- Consistent, authentic content (4–6 posts/week per platform)
- Content strategy developed with client input
- Quick approvals to keep posts timely and relevant
- Monthly reporting: engagement rate, reach, clicks, leads traced back to posts
- Doesn't just post and ghost — builds relationships and responds to community

**4. Paid Advertising (Google, Bing, Meta)**
- Weekly keyword set optimization, daily underperformer pauses, bi-weekly A/B testing
- Client spend caps set to comfort level during testing phase
- Respect for Cost Per Lead (CPL) targets
- Three-platform approach: Google Ads (high-intent search), Bing Ads (older homeowners, cheaper CPCs), Meta (retargeting + awareness in target zips)
- Quick feedback loops and honest adjustment strategies

**5. Branding + Fleet Wraps**
- Names, logos, color palettes, voice & tone guides
- Wrapped truck impressions: 40,000+/day metro market = $0.002 per impression vs. $0.04 PPC
- Big type, clean layout, readable phone number from 50 feet
- 48-hour turnaround design to install
- 3–7 year vinyl warranty on every install

**6. AI Automations & Smart Systems**
- **Marketing automation:** Lead nurturing sequences, automated follow-ups, appointment reminders
- **Chatbots & conversational AI:** Website chat that qualifies leads, books appointments, answers FAQs — available 24/7
- **Review & reputation management:** Automated review requests via SMS/email, monitoring & alerts for new reviews
- **Predictive lead scoring:** Identifying which leads are most likely to convert based on behavior patterns
- **Reporting automation:** Monthly dashboards and reports generated automatically, emailed on schedule
- **Integration & data sync:** CRM automation, form-to-calendar workflows, customer data synchronized across platforms
- **Always on:** These systems work when your team is off the clock, so you don't miss opportunities

### Client Requirements
Toughjobs requires:
- **Quick approvals & feedback** — Rapid responses prevent campaign delays and keep social/ads relevant
- **Asset sharing** — Clear, authentic photos/videos of products, team, jobs enable tailored marketing
- **Clear goals & communication** — Specific business goals, industry expertise, honest feedback on deliverables
- **Transparency & data access** — Access to website analytics, customer data, social media platforms for informed decisions

### Why These Are Essential
- **Consistency** — Constant, updated content maintains brand presence
- **Efficiency** — Quick, collaborative feedback reduces production bottlenecks, especially for fast-moving social trends
- **Context** — Deep knowledge of the business allows differentiation from competitors
- **Results** — Data-driven decisions over assumptions

---

## Design System

## Color Palette

### Primary Colors
- **Primary Red**: `#C8262A` — Accent, CTAs, emphasis
- **Dark Red**: `#A90100` — Logo red, deeper accent
- **Navy**: `#002768` — Brand navy (alternate palette lead)
- **Ink (black)**: `#0A0F1C` — Default text, dark backgrounds
- **White**: `#FFFFFF` — Light text, negative space

### Secondary & Neutrals
- **Gray background**: `#282828`
- **Smoke**: `#5B6471` — Body text on light
- **Mute**: `#C7CBD2` — Muted headlines
- **Hairline**: `#E5E7EB` — Borders, dividers
- **Surface**: `#FCFCFD` — Light section backgrounds
- **Surface Alt**: `#F4F5F7` — Alternate light sections

### CSS Custom Properties
```css
:root {
  --ink: #0A0F1C;
  --navy: #002768;
  --red: #C8262A;
  --accent: var(--red);
  --accent-ink: var(--white);
  --bg-dark: var(--ink);
  --headline-a: var(--ink);
  --headline-b: var(--accent);
  --headline-mute: var(--mute);
}
```

---

## Typography

### Fonts
- **Display/Headlines**: `"Archivo Black"` — All-caps, tight tracking, 900 weight
- **Body/UI**: `"Archivo"` — Weights 400–900, clean sans-serif
- **Monospace (technical)**: `ui-monospace, Menlo, Consolas` — Drawing stamps, code-style details

### Type Scale
- **Hero Display**: `clamp(59px, 8.4vw, 126px)`
- **Section Headlines**: `clamp(40px, 5vw, 72px)`
- **CTA Headlines**: `clamp(48px, 6.5vw, 104px)`
- **Body**: `17–18px`, line-height `1.5–1.6`
- **Eyebrow**: `12px`, 800 weight, `0.08em` letter-spacing, all-caps

### Type Classes
```css
.display {
  font-family: "Archivo Black", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  line-height: 0.95;
  text-wrap: balance;
}

.eyebrow {
  font-family: "Archivo", sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}
```

### Split Headlines
Two-tone headlines using `.split` class with `.a` (primary), `.b` (accent), `.m` (muted) spans:
```html
<h2 class="display split">
  <span class="a">Four levers</span>
  <span class="b">Every one</span>
  <span class="m">pulled hard</span>
  <span style="color: var(--accent)">WITH PURPOSE</span>
</h2>
```

---


## Blueprint Components

### Drawing Stamps
Engineering callout tags in top-right of each section:
```jsx
<DrawingStamp
  no="TJ-02"
  title="SERVICES"
  scale="1:4"
  color="rgba(140,170,220,.45)"
  style={{ top: 28, right: 88 }}
/>
```

**Drawing Numbers by Section**:
- TJ-02: Services (1:4)
- TJ-03: Fleet Wraps (1:1)
- TJ-04A: The Principle (1:1)
- TJ-05: Service Area (1:60)
- TJ-06: Field Insights (N.T.S.)
- TJ-07: Contact (1:1)

### Registration Marks
Crosshair-with-circle marks at four corners:
```jsx
<BlueprintMarks color="rgba(140,170,220,.28)" inset={28} size={40} />
```

**Color variants**:
- Navy sections: `rgba(140,170,220,.28)`
- Red sections: `rgba(0,0,0,.35)`
- Light sections: `rgba(0,39,104,.32)`

### Architect Annotations
Animated SVG markup overlays — dimension arrows, revision clouds, callouts, checkmarks — that draw on using stroke-dasharray reveal:

```jsx
<ArchitectAnnotations variant="services" color="rgba(200,38,42,.65)" />
```

**Variants**:
- `services`: Dimension arrow ("470MM CLEAR"), revision cloud, "4-CARD LAYOUT" callout
- `wraps`: Checkmark, dimension line for stats strip
- `statement`: Double underline emphasis
- `servicearea`: Circle around HQ, "12 ZONES" arrow

**Animation**:
```css
@keyframes drawStroke {
  to { stroke-dashoffset: 0; }
}
```
Applied with `strokeDasharray` and `strokeDashoffset` set to path length, animated to 0 over 1.2s–4s.


---

## Navigation

### Desktop Nav Bar
- **Height**: 120px (full), 60px (scrolled/shrunk by 50%)
- **Background**: `var(--ink)` (black)
- **Logo**: `toughjobs-monogram-logo.png` at 150×100px (full), 75×50px (scrolled)
- **Wordmark**: "TOUGH" (red) + "JOBS" (white) in Archivo Black, 28px (full), 14px (scrolled)
- **Links**: Services, Work, About, Insights, Contact — uppercase, 12px, 700 weight, accent underline on hover
- **CTA**: "Request a Quote" red button
- **Phone**: (309) 741-4599 visible in header
- **Scroll behavior**: Shrinks at `window.scrollY > 50`, smooth 0.3s ease transitions

---

## Buttons

### Primary Button
```css
.btn {
  padding: 16px 26px;
  font-family: "Archivo", sans-serif;
  font-weight: 800;
  letter-spacing: 0.06em;
  font-size: 13px;
  text-transform: uppercase;
  background: var(--accent);
  color: var(--accent-ink);
  border: 0;
  transition: transform 0.15s ease, filter 0.2s ease;
}
.btn:hover { filter: brightness(0.92); }
.btn:active { transform: translateY(1px); }
```

### Variants
- `.btn-dark`: Black background, white text
- `.btn-ghost`: Transparent with `2px solid var(--ink)` border, ink text → inverts to solid black bg on hover

---

## Layout

### Container
```css
.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 32px;
}
```

### Section Padding
- **Default**: `120px` vertical (`var(--pad-section)`)
- **Compact mode**: `80px` vertical
- Sections with `.section-equal` class use `min-height: clamp(680px, 80vh, 900px)` + flexbox vertical centering

---

## Service Cards

4-up grid with engineering schematic background overlay (50% opacity). Each card:
- **Height**: `380px`
- **Background**: Red (resting) → Black (hover)
- **Icon**: Metallic geometric SVG icons with gradient fills
- **Badge**: Pill-style index ("01", "02"...) in top-left, flips color on hover
- **Hover effect**: Background flips to black, text/icon to white, arrow slides right

---

## Wrap Tiles

Featured left (tall), two stacked right (compact). Each tile:
- **Cover photo**: Full-bleed background image
- **Badge**: Top-left red pill "View build →" slides in from above on hover
- **Format label**: Bottom-left "WRAP — service truck" etc. in white with accent eyebrow
- **Overlay scrim**: Dark gradient from mid to bottom for readability

**Stats strip** below tiles: 4 columns with key metrics ("40K+", "3–7 YR", "$0.002", "48 HR")

---

## Service Area Tiles

12 cities in 3×4 grid. 4 style variants (toggle via Tweaks):

### Stamp (default)
Industrial nameplate: black card, chamfered corner ticks, zone code + distance ("Z-01 · 0 MI"), city in display font. Hover: flips to red, ticks invert, "Active service zone →" fades in.

### Sweep
Muted gray field, red panel sweeps in from left on hover, red square morphs to white arrow, label slides right.

### Pin
Map pin icon + city + distance. Hover: pin bounces, distance gets accent underline.

### Slash
Thin red diagonal wedge on right edge expands to fill tile on hover, city label flips white.

---

## Insights Cards

3-up grid, equal height (420px min). Each card:
- **Cover**: 16:10 aspect ratio image
- **Content panel**: Red background, white text
- **Tag**: Eyebrow ("Field guide", "Teardown", "Playbook")
- **Title**: Display font, 22px
- **Read time**: Bottom-right, muted white
- **Hover**: Subtle lift (`translateY(-4px)`)

---

## Tweaks System

In-page design controls (toggle via toolbar):

### Available Tweaks
- **Palette lead**: Navy-led, Red-led, Mono-accent
- **Accent hue**: 6 preset colors (brand red, logo red, navy, ink, safety yellow, hot orange)
- **Headline style**: Split (two-tone), Solid (monochrome), Outlined (stroke only on accent)
- **Density**: Spacious (120px padding), Compact (80px padding)
- **Hero variant**: Photo (full-bleed), Geometric-typographic (outlined word)
- **City tile style**: Sweep, Stamp, Pin, Slash
- **Chevron section cuts**: Toggle (legacy, now disabled)

Tweaks use `useTweaks()` hook and persist state via `window.__TWEAK_DEFAULTS__` JSON block.

---

## Animation

### Page Load Stagger
Blueprint annotations draw on sequentially using stroke-dasharray reveal:
- Services: 0.5s → 1s → 2.5s (arrow → cloud → callout)
- Wraps: 0.8s → 1.5s (checkmark → dimension)
- Statement: 0.5s (underline)
- Service Area: 1s → 2s (circle → arrow)

### Scroll Behavior
- Nav shrinks at 50px scroll threshold
- Smooth 0.3s ease transitions on all nav elements

### Hover States
- Cards: 0.25s ease color/background transitions
- Buttons: 0.15s transform, 0.2s filter brightness
- Lift effect: `translateY(-4px)` on Insights cards

---

## Assets

### Logo
- **File**: `assets/toughjobs-monogram-logo.png`
- **Usage**: Nav, footer
- **Dimensions**: 150×100px (nav full), 75×50px (nav scrolled), 46px height (footer)

### Images
- `electrician-hero.png` — Hero section background
- `girl-saw.png` — Transparent PNG, Services section (woman with cut-saw)
- `wrap-truck-erik.png`, `wrap-trailer-guacnroll.png`, `wrap-sedan-herbert.png` — Fleet wrap photos
- `engineering-schematics.png` — Service card grid background overlay
- `insight-*.png` — Blog/insights card covers (3)

---

## Contact Information

- **Phone**: (309) 741-4599
- **Address**: 416 Main St, Peoria, IL 61602
- **Email**: hello@toughjobs.com

---

## Technical Notes

### React + Babel
Inline JSX using Babel standalone. All components consume CSS custom properties set on `<body>` by `app.jsx`.

### File Structure
```
v1-quad-cities/
├── index.html              # Main page shell
├── app.jsx                 # Root component, Tweaks wiring
├── components.jsx          # All page components
├── tweaks-panel.jsx        # Tweaks UI controls
└── assets/                 # Images, logos
```

### Browser Compatibility
- CSS Grid, Flexbox, Custom Properties
- Sticky positioning for nav
- CSS animations (stroke-dasharray)
- No IE11 support required

---

## Design Principles

1. **Industrial authenticity** — Real blueprint grids, not decorative patterns
2. **Architect's hand** — Annotations mimic red-line construction markup
3. **Technical precision** — Monospace callouts, dimension arrows, drawing stamps
4. **Bold hierarchy** — Dominant headlines, sharp accent pops, generous negative space
5. **Trades-first language** — No corporate jargon, speak like the job site

---

## Interior Pages Strategy

### Design Philosophy
Interior pages showcase **our creative approach and methodology**, not past case studies. We position Toughjobs as the strategic creative partner by demonstrating how we'd transform a contractor's existing marketing.

### Page Structure (Services, Work, About, Contact)

#### Background & Color Treatment
- **Primary**: Light cream/white (`#F4F1E8`, `#FCFCFD`)
- **Accent bands**: Yellow/gold (`#FCD34D` or `#F59E0B`) + red (`#C8262A`)
- **NO blueprint grids** on inner pages — save the engineering aesthetic for homepage only
- **Alternating sections** create visual rhythm and break up content blocks

#### Content Architecture
Each inner page follows this pattern:

1. **Hero Section** (light background)
   - Eyebrow
   - Headline (bold, benefit-focused)
   - Subheading (what we'll show them)

2. **Problem/Insight Sections** (white/light)
   - Real contractor pain points
   - Why their current approach isn't working
   - Visual examples of common mistakes

3. **Solution Sections** (accent color band)
   - Our creative approach
   - How we'd transform it
   - Before/after examples (audits, not case studies)

4. **Methodology Section** (white)
   - Step-by-step process
   - Timeline
   - What they'll get

5. **Social Proof/Trust Signals** (accent band)
   - Testimonials (if available, or focus on process instead)
   - Key metrics/outcomes
   - Team credentials

6. **CTA Band** (yellow/gold + icon)
   - Strong action button
   - Secondary messaging
   - Free audit offer

### Services Page: "Here's How We'd Rebuild YOUR Marketing"

**Hero**
- "We'd audit your [Website/SEO/Ads/Brand]"
- "Here's what we'd fix first"

**4 Service Sections** (alternating left/right layout)
1. **Websites** 
   - Problem: "Your site loads in 4 seconds. Lost the lead."
   - Solution: "Here's how we'd redesign it"
   - Example: Screenshot of typical contractor site → optimized version

2. **SEO**
   - Problem: "You're ranking for your company name, not 'emergency plumber'"
   - Solution: "Service-area pages + GBP optimization"
   - Example: Keyword audit before/after

3. **Paid Ads**
   - Problem: "You're spending $80/lead. It should be $40."
   - Solution: "Targeting refinement + bid strategy"
   - Example: Ad copy variations tested

4. **Branding**
   - Problem: "Your truck looks generic. Competitors look like you."
   - Solution: "Bold branding that owns the market"
   - Example: Logo exploration, wrap design concepts

### Work Page: "Example Transformations"

**Hero**
- "Here's how we'd audit your marketing"
- "Real examples of contractor marketing we'd fix"

**3–5 Example Audits** (NOT real case studies, clearly labeled "EXAMPLE")
- **Format**: "Before" screenshot → "What we'd change" → "After" mockup
- **Examples of typical contractor sites**:
  - Plumbing co with outdated site
  - HVAC business with no SEO strategy
  - Electrician with generic branding
  
- **Each includes**:
  - Current state screenshot
  - Our audit (3–5 key findings)
  - Proposed changes
  - Estimated impact

**Results from applying our methodology**
- "When contractors follow our approach..."
- Grid of outcomes: leads↑, cost/lead↓, conversion rate↑, etc.

**"Ready to audit your marketing?"** CTA

### About Page: "Our Approach"

**Hero**
- "We're creative problem-solvers for the trades"
- "We focus on making your phone ring, not our portfolio look good"

**Our Methodology** (3 pillars)
1. **Strategic Audit** — Deep dive into your current situation
2. **Creative Transformation** — Design the solution
3. **Relentless Optimization** — Monthly refinement based on results

**Why Different**
- We don't sell you one thing and disappear
- We run all 4 cylinders (web, SEO, ads, branding)
- We speak job-site, not boardroom
- We measure success in booked jobs

**Our Process** (timeline visual)
- Week 1: Audit
- Week 2: Strategy
- Week 3–4: Creative development
- Month 2: Launch + optimization
- Ongoing: Monthly reviews + iteration

**The Team** (if applicable)
- Brief bios of key people
- Credentials/specialties
- Why they care about trades

### Contact Page: "Let's Start With a Free Audit"

**Hero**
- "Scared to hire an agency you don't know?"
- "We'll audit your marketing for free"

**The Audit Form**
- Business type (HVAC/Plumbing/Electrical/Roofing/Other)
- Current marketing (Website Y/N, ads Y/N, social Y/N, wraps Y/N)
- Pain point (low leads, high cost/lead, weak brand, etc.)
- Budget range (optional)
- Timeline
- Message

**What Happens Next**
1. We review your current marketing
2. 30-min strategy call (no pitch, just insights)
3. Written audit report (3–5 page recommendations)
4. You decide if you want to work together

**Location + Contact Info**
- Address
- Phone
- Hours
- Service area map

---

## Inner Page Visual Style

### Typography
- **Eyebrows**: 12px, 800 weight, letter-spacing 0.08em, all-caps, accent color
- **Section Headlines**: `clamp(32px, 4vw, 56px)`, Archivo Black, all-caps, ink color (light background) or white (accent background)
- **Body**: 16–17px, line-height 1.6, gray/smoke on light backgrounds, white on dark
- **Labels/Captions**: 13px, 700 weight, all-caps, muted color

### Layout
- **Alternating sections**: Left text + right image, then right text + left image
- **Image mockups**: Laptop screens, phone screens, before/after comparisons
- **Grid sections**: 2–3 column cards for methodology steps, audit findings, etc.
- **Spacing**: 100–120px vertical padding per section (no min-height requirement)

### Color Palette for Inner Pages
- **Light background**: `#F4F1E8` or `#FCFCFD`
- **Accent band**: `#FCD34D` (yellow-gold) or `#F59E0B` (warm gold)
- **Text on light**: `var(--ink)`, `var(--smoke)`
- **Text on accent**: `var(--ink)` (high contrast)
- **Dark accent**: `var(--accent)` red for emphasis

### Buttons on Inner Pages
- Primary CTA: Red (`var(--accent)`)
- Secondary CTA: Yellow/gold band with red text
- Ghost buttons: Border only, no fill

### Navigation Persistence
- Same sticky nav (shrinks on scroll)
- Drawing stamp + registration marks NOT used on inner pages
- Clean, minimal aesthetic

---

**Last updated**: May 2026  
**Maintained by**: Toughjobs Digital
