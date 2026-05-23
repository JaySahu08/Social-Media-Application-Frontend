# Social Media Application Frontend

A modern, responsive social media application frontend built with **React 19** and **Vite**, providing a fast and seamless user experience.

## 🚀 Features

- **Fast Performance**: Built with Vite for instant module replacement (HMR) and optimized build times
- **Modern React**: Uses React 19.2.6 with latest features and best practices
- **Type Safety**: TypeScript support with comprehensive type definitions
- **Code Quality**: ESLint configuration with React hooks and refresh rules enabled
- **Responsive Design**: Mobile-first approach for all screen sizes

## 📋 Prerequisites

- **Node.js**: v16 or higher
- **npm** or **yarn**: Package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/JaySahu08/Social-Media-Application-Frontend.git
cd Social-Media-Application-Frontend
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Getting Started

### Development Server

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Output files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check code quality and lint errors:
```bash
npm run lint
```

## 📦 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.6 | UI Framework |
| React DOM | 19.2.6 | DOM Rendering |
| Vite | 8.0.12 | Build Tool & Dev Server |
| ESLint | 10.3.0 | Code Quality & Linting |
| TypeScript | 19.2.x | Type Safety |

## 📁 Project Structure

```
Social-Media-Application-Frontend/
├── src/                 # Source code
├── public/              # Static assets
├── dist/                # Production build output
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint rules configuration
└── README.md            # This file
```

## 🔌 ESLint Configuration

The project includes ESLint with the following plugins:
- `@eslint/js` - Core ESLint rules
- `eslint-plugin-react-hooks` - React Hooks best practices
- `eslint-plugin-react-refresh` - React Refresh support

To add TypeScript support with type-aware lint rules, refer to the [official Vite template for React + TypeScript](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).

## ⚡ Performance Notes

- **React Compiler**: Not enabled by default due to dev/build performance impact. To enable it, see the [React Compiler Installation Guide](https://react.dev/learn/react-compiler/installation).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**JaySahu08** - [GitHub Profile](https://github.com/JaySahu08)

## 🔗 Related Projects

- Backend API: [Social-Media-Application-Backend](#) (if available)

---

**Last Updated**: May 16, 2026
