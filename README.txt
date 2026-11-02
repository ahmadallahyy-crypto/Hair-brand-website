AURELIA HAIR STUDIO

Run the Next.js website
1. Install dependencies with: npm install
2. Start the development server with: npm run dev
3. Open http://localhost:3000

Pages
- / : Hero style carousel, illustrative before-and-after showcase, product edit, style lookbook, studio story, service preview, wedding inspiration, team intro, FAQs
- /gallery : Browse braid, wedding, and wig styling inspiration by category
- /services : Salon services
- /shop : Separate customer product enquiries from salon-use product questions
- /about : Founder and team profile space
- /faqs : Booking, wedding, product, and gallery questions
- /booking : Appointment and product enquiry form

Project structure
- app/ : Next.js routes and shared app layout
- components/layout/ : Site header, footer, and scroll reveal behavior
- components/sections/ : Reusable page sections and content grids
- components/forms/ : Appointment and product enquiry form
- components/ui/ : Shared presentational components
- lib/config/ : Site information and navigation
- lib/content/ : Service, product, and portfolio content
- styles/ : Global stylesheet layers, responsive rules, and design tokens

Homepage conversion paths
- The full-viewport hero cycles through the style lookbook, with previous/next and slide controls. It pauses on hover/focus, supports manual pause, and does not autoplay when reduced motion is preferred.
- Appointment requests go to /booking.
- Product enquiries go to /booking with the product enquiry type and selected product prefilled.
- Style and service enquiries prefill the requested style or service.
- Product availability/pricing are studio-confirmed; online checkout is not connected.

Booking requests
The booking form hands off to WhatsApp only when a verified studio number is configured.
Create a local .env.local file and set NEXT_PUBLIC_WHATSAPP_NUMBER to the international number using digits only.
Do not use the sample number from the original HTML. The form remains disabled until a real number is configured.

Shop status
Product names and images are illustrative examples, not confirmed stock; prices are not shown because product details are unverified. Customer products and stylist supplies are separate enquiry paths. Online checkout is not connected.

Gallery and brand content
- The homepage carousel and /gallery filters use lib/content/style-gallery.ts. Update the weekly set there with approved braid photos; mark verified portfolio photos with status "studio".
- Homepage transformation examples use lib/content/transformations.ts. Replace both photos in each pair with studio-approved before-and-after photos before presenting a real client transformation.
- Current gallery, transformation, and product photos are illustrative stock references, not verified weekly work, wedding client results, or confirmed stock.
- Replace image, title, alt text, and status only with studio-approved photos and accurate descriptions.
- Founder/team profile spaces are intentionally awaiting names, roles, biographies, and approved portraits.

Impeccable
The project-local Impeccable skill is installed under .agents/skills/impeccable. PRODUCT.md records the confirmed project context and content constraints.
