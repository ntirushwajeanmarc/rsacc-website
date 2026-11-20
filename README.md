# RSACC Website Clone

A modern, responsive clone of the Rwanda Society of Anesthesia and Critical Care (RSACC) website built with Next.js 14 and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design matching the original RSACC website
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Components**: Animated sections, carousels, and hover effects
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Fonts**: Google Fonts (Rubik, Jost)
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rsacc-clone
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
rsacc-clone/
├── app/
│   ├── components/
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section with slider
│   │   ├── About.js           # About section
│   │   ├── Members.js         # Team members carousel
│   │   ├── Membership.js      # Membership information
│   │   ├── MissionVision.js   # Mission, Vision, Values
│   │   ├── Gallery.js         # Photo gallery
│   │   ├── Contact.js         # Contact form and info
│   │   └── Footer.js          # Footer section
│   ├── globals.css            # Global styles
│   ├── layout.js              # Root layout
│   └── page.js                # Home page
├── public/                    # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#091D3E',      // Dark blue
  secondary: '#33B9CB',    // Teal
  accent: '#091D3E',       // Accent color
  dark: '#152847',         // Dark background
  'dark-light': '#1c2f4d', // Lighter dark
}
```

### Content
- Update member information in `app/components/Members.js`
- Modify contact details in `app/components/Contact.js` and `app/components/Footer.js`
- Update mission/vision statements in `app/components/MissionVision.js`

### Styling
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations and utilities are defined in the CSS file

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

The static files will be generated in the `.next` folder.

## Key Components

### Header
- Responsive navigation with mobile menu
- Search functionality
- Contact information display

### Hero Section
- Auto-rotating slider
- Call-to-action buttons
- Smooth animations

### Members Carousel
- Interactive team member display
- Navigation controls
- Responsive grid layout

### Contact Form
- Form validation
- Responsive layout
- Contact information display

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: contact@rsacc.pro
- Website: https://rsacc.pro

---

Built with ❤️ for the Rwanda Society of Anesthesia and Critical Care