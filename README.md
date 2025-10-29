# A1 Holiday Company Website

A modern, responsive static website for A1 Holiday Company built with Next.js 16, TypeScript, and Tailwind CSS.

## Project Overview

This is a professional website for A1 Holiday Company, offering premium holiday packages and time-sharing memberships. The website features:

- **Home Page** - Company introduction with service highlights
- **Holiday Packages** - Showcase of 5-star hotels, flight packages, round trips, and cab services
- **TimeShare** - Exclusive membership program details with benefits
- **Contact Us** - Inquiry form with Google Maps integration

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** SVG (Heroicons)

## Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Modern gradient designs and animations  
✅ SEO-optimized with proper meta tags  
✅ Client-side form handling with validation  
✅ Google Maps integration  
✅ Clean, maintainable code structure  
✅ Fast performance and optimized assets

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
even_holidays/
├── app/
│   ├── page.tsx              # Home page
│   ├── packages/
│   │   └── page.tsx          # Holiday packages page
│   ├── timeshare/
│   │   └── page.tsx          # TimeShare page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── layout.tsx            # Root layout with Header/Footer
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Footer component
└── public/                   # Static assets
```

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `components/Footer.tsx` - Footer contact info
- `app/contact/page.tsx` - Contact page details

### Update Google Maps

Replace the Google Maps embed URL in `app/contact/page.tsx` with your actual business location.

### Modify Colors & Branding

Update Tailwind classes in components to match your brand colors. Primary colors used:
- Blue: `blue-600`, `blue-700`
- Purple: `purple-600`, `purple-700`
- Yellow: `yellow-400`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` folder. You can deploy to any hosting service that supports Node.js applications.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Project Details

**Client:** A1 Holiday Company  
**Developer:** WebUtsav Digital Solutions  
**Project Type:** Static Website  
**Timeline:** 5-7 Working Days  
**Investment:** ₹5,000/-

## Support & Maintenance

1-month free support post-deployment is included. For extended support, please contact WebUtsav Digital Solutions.

## License

This project is proprietary and confidential. © 2025 A1 Holiday Company. All rights reserved.
