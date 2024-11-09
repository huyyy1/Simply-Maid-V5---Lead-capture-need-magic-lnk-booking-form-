# Simply Maid - Professional Cleaning Services Platform

A modern, full-stack Next.js 14 application for connecting professional cleaners with customers across Australia. Built with a focus on creating peaceful, clean spaces and fostering a supportive community.

## 🚀 Features

- **Modern Stack**: Next.js 14, React 18, TypeScript
- **Beautiful UI**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **State Management**: React Hooks + Context
- **Form Handling**: React Hook Form + Zod
- **Database**: Supabase
- **Deployment**: Vercel

## 📦 Project Structure

```
components/
├── shared/           # Reusable components
│   ├── layouts/      # Base layouts (PageLayout, SectionLayout)
│   ├── sections/     # Reusable sections (HeroSection, FeatureGrid)
│   └── ui/          # Base UI components (Button, Card, etc.)
├── sections/         # Page-specific sections
└── ui/              # Extended UI components

lib/
├── constants/       # Single source of truth for constants
├── styles/         # Theme and style tokens
├── types/          # TypeScript types and interfaces
└── utils/          # Utility functions and hooks
```

## 🛠 Development

1. Clone and install dependencies:
```bash
git clone https://github.com/your-org/simply-maid.git
cd simply-maid
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

3. Start development server:
```bash
npm run dev
```

## 🔐 Environment Variables

Required environment variables:
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Email
RESEND_API_KEY=
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e
```

## 📈 Performance

Current Lighthouse scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 📚 Documentation

- [Component Guidelines](docs/COMPONENTS.md)
- [Error Handling](docs/ERROR_HANDLING.md)
- [Google API Integration](docs/GOOGLE_API.md)
- [Design System](docs/DESIGN_SYSTEM.md)

## 📝 License

MIT License - see [LICENSE.md](LICENSE.md)