# The Office Shed (`shed.deland.io`)

A fast, lightweight static micro-site showcasing my backyard shed-to-office conversion in the Michigan woods—built to share whenever it comes up in casual conversations at work.

🌐 **Live Site:** [https://shed.deland.io](https://shed.deland.io)  
📸 **Full Google Photos Album:** [https://photos.app.goo.gl/he7WUdpjvK15HbTU6](https://photos.app.goo.gl/he7WUdpjvK15HbTU6)

---

## ✨ What's Inside

- **Hero Bento Showcase & Specs Bar**: Immediate visual overview of the exterior in summer, the interior multi-monitor desk setup, and the snow-covered winter woods, alongside key specs (~30-second commute, 4.5-hour day-one move-in, R-13 + R-5 insulation, buried conduit + Square D subpanel).
- **"Questions People Ask on Calls" FAQ**: Answers the most common questions about heating in Michigan winters, power & internet trenching, and moving in the same afternoon it was delivered.
- **4-Stage Chronological Build Tour (23 Curated Photos)**:
  1. **Stage 01 · Delivery Day** (June – July 25, 2023): Leveling the gravel pad and backing the shed across the lawn.
  2. **Stage 02 · Day 1 Move-In** (July 25, 2023): Bare 2×4 studs and moving the standing desk in 4.5 hours after delivery on a yellow extension cord.
  3. **Stage 03 · Power & Insulation** (July – October 2023): Square D subpanel, R-13 kraft-faced fiberglass batts, window A/C, and trenching electrical conduit from the main house.
  4. **Stage 04 · Winterized in the Woods** (December 2023 – January 2024): Foamular R-5 ceiling panels, space heater, and snowstorms in the woods.
- **Interactive Lightbox & Stage Filters**: Keyboard-navigable (`←`, `→`, `Esc`) full-screen photo viewer and dark/light theme toggle.

---

## 🚀 Development & Deployment (`cf` CLI)

Hosted on **Cloudflare Workers Static Assets** on custom domain `shed.deland.io`.

```powershell
# Install dependencies
npm install

# Run local dev server
cf dev

# Deploy to Cloudflare
cf deploy
```
