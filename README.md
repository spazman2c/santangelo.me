# Christopher Santangelo - Personal Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient backgrounds
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎭 Smooth fade-in animations
- 🔗 Social media integration
- 📝 Project showcase section

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # Reusable components (future)
└── lib/              # Utility functions (future)
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Inter Font** - Typography

## Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Name and title
- Profile image URL
- Social media links
- About section content
- Project details

### Styling
The design uses Tailwind CSS classes. You can customize:
- Colors in the gradient backgrounds
- Typography in `tailwind.config.ts`
- Animations and transitions

## Deployment

The project can be deployed to:
- Vercel (recommended)
- Netlify
- Any static hosting service

## License

This project is open source and available under the [MIT License](LICENSE). 