# relationsAI Landing Page

A modern, clean landing page built with Next.js, TypeScript, and CSS Modules, matching the design specification exactly.

## Features

- ✅ Responsive header with logo, navigation, and CTA button
- ✅ Hero section with serif headline and sans-serif sub-headline
- ✅ Decorative colorful shapes at the bottom
- ✅ Modern design with proper typography and spacing
- ✅ Fully responsive for mobile and desktop

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header with logo and navigation
│   │   ├── Hero.tsx            # Main hero section
│   │   └── DecorativeShapes.tsx # Bottom decorative elements
│   ├── layout.tsx              # Root layout with fonts
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Google Fonts** - Inter (sans-serif) and Playfair Display (serif)

## Design Details

- **Background**: Light gray (#F8F8F8)
- **Header**: White with subtle shadow
- **Logo**: Light blue icon (#66B2FF) with "relationsAI" text
- **Buttons**: Black background with white text
- **Headline**: Large serif font (Playfair Display, 700 weight)
- **Sub-headline**: Sans-serif (Inter, regular weight)
- **Decorative shapes**: Magenta, Yellow, and Blue circular shapes at bottom
