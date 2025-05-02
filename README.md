# Next.js Full-Stack Template with Tauri

This is a comprehensive full-stack template built with Next.js 15.3.1 that includes authentication, internationalization, theming, MongoDB integration, and Tauri for desktop application capabilities.

## Features

- **Next.js 15.3.1** - The React framework for production
- **React 19.0.0** - Latest React version with Suspense and Concurrent Mode
- **TypeScript** - For type safety and better developer experience
- **Authentication** - Complete auth flow with multiple providers via NextAuth.js 4.24.11
- **Internationalization** - Multi-language support with next-intl 4.1.0
- **Theming** - Dark/light mode with next-themes 0.4.6
- **Database** - MongoDB integration with Mongoose 8.14.1
- **Styling** - TailwindCSS 4 for utility-first styling
- **Tauri** - Cross-platform desktop app framework for building native apps
- **Turbopack** - For faster development experience

## Tech Stack

### Core
- **Next.js**: 15.3.1
- **React**: 19.0.0
- **React DOM**: 19.0.0
- **TypeScript**: 5.x

### Authentication (NextAuth.js 4.24.11)
- Email Provider (with Nodemailer 6.10.1)
- Google Provider
- Facebook Provider
- Discord Provider
- GitHub Provider
- MongoDB Adapter for session and user storage

### Internationalization
- **next-intl**: 4.1.0
- Supported languages: English and Arabic
- RTL support for Arabic language
- Internationalized routing

### Theming
- **next-themes**: 0.4.6
- Dark mode, light mode, and system preference detection
- Persistent theme selection

### Database
- **MongoDB** with Mongoose 8.14.1
- User profiles and data storage
- MongoDB adapter for NextAuth

### Styling
- **TailwindCSS**: 4.x
- Responsive design
- Dark/light mode compatible styles

### Desktop Application
- **Tauri**: 2.5.0 - Build smaller, faster, and more secure desktop applications
- Cross-platform support (Windows, macOS, Linux)
- Native performance with a small binary size
- Built-in security features

## Project Structure

```
src/
  ├── app/                      # Next.js App Router
  │   ├── [locale]/             # Internationalized routes
  │   │   ├── auth/             # Authentication pages
  │   │   ├── layout.tsx        # Root layout with providers
  │   │   └── page.tsx          # Home page
  │   └── api/                  # API routes
  │       ├── auth/             # NextAuth API
  │       └── user-profile/     # User profile API
  ├── components/               # Reusable components
  │   ├── AuthProvider.tsx      # NextAuth provider
  │   └── ThemeSwitcher.tsx     # Theme toggle component
  ├── i18n/                     # Internationalization setup
  │   ├── messages/             # Translations
  │   ├── navigation.ts         # Navigation utilities
  │   ├── request.ts            # Request utilities
  │   └── routing.ts            # Routing configuration
  └── lib/                      # Library code
      ├── auth/                 # Auth configuration
      ├── models/               # Mongoose models
      └── mongodb.ts            # MongoDB connection
```

## Getting Started

First, clone this repository and install dependencies:

```bash
# Using npm
npm install

# Using Bun
bun install
```

Create a `.env.local` file based on the provided `.env.example`:

```bash
# Required environment variables for authentication and database
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
MONGODB_URI=your-mongodb-connection-string

# Email provider (for magic link authentication)
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email
EMAIL_SERVER_PASSWORD=your-password
EMAIL_FROM=no-reply@example.com

# OAuth providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
DISCORD_CLIENT_ID=your-discord-client-id
DISCORD_CLIENT_SECRET=your-discord-client-secret
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret
```

Then, run the development server:

```bash
# Using npm
npm run dev

# Using Bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication

This template includes a complete authentication system with NextAuth.js, supporting:

- **Email Authentication**: Magic link sign-in
- **OAuth Providers**: Google, Facebook, Discord, and GitHub
- **Custom Pages**: Sign-in, sign-out, error, and verification request pages
- **MongoDB Storage**: User data, sessions, and verification tokens

## Internationalization

The template supports multiple languages with automatic language detection:

- **Supported Languages**: English (en) and Arabic (ar)
- **RTL Support**: Automatic RTL layout for Arabic
- **Internationalized Routes**: URLs prefixed with locale code
- **Translation Files**: Located in `src/i18n/messages/`

## Theming

Toggle between light, dark, and system themes:

- **ThemeSwitcher Component**: Located in `src/components/ThemeSwitcher.tsx`
- **Theme Storage**: Persists user preference
- **System Preference**: Automatically detects system theme preference

## Database Integration

MongoDB integration using Mongoose:

- **Models**: User profile model in `src/lib/models/`
- **API Routes**: CRUD operations for user data
- **NextAuth Adapter**: Stores auth data in MongoDB

## Desktop Application with Tauri

This template includes Tauri integration for building desktop applications with your Next.js project.

### Running the Desktop App in Development Mode

```bash
# Using npm
npm run tauri:dev

# Using Bun
bun tauri:dev
```

This will start both the Next.js development server and the Tauri development window.

### Building the Desktop App for Production

```bash
# Using npm
npm run tauri:build

# Using Bun
bun tauri:build
```

This will build both your Next.js application and package it into a native desktop application for your current platform.

### Requirements

To build Tauri applications, you need to install platform-specific dependencies:

#### Windows
- Microsoft Visual Studio C++ Build Tools
- WebView2 (installed automatically with recent Windows 10/11 updates)
- Rust (install via rustup.rs)

#### macOS
- Xcode Command Line Tools
- Rust (install via rustup.rs)

#### Linux
- Development packages (varies by distribution)
- Rust (install via rustup.rs)

For detailed installation instructions, visit [Tauri Prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites).

## Learn More

To learn more about the technologies used in this template:

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)
- [next-intl Documentation](https://next-intl-docs.vercel.app)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Tauri Documentation](https://tauri.app/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
