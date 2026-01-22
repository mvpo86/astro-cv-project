# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a parent directory containing multiple Astro-based projects:

- **marvic-portfolio/** - Primary project: A modern portfolio website for Martin Penabad (marvic.io)
- **--typescript/** - Minimal Astro starter template

The primary project is `marvic-portfolio`, a production portfolio website deployed via Docker.

## Development Commands

All commands should be run from within the `marvic-portfolio/` directory:

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro <command>
```

## Architecture

### Tech Stack

- **Astro 5.16+** - Static site generator with island architecture
- **Svelte 5** - Component framework for interactive islands
- **TypeScript** - Type-safe development
- **Docker** - Multi-stage containerized deployment (Node builder + Nginx server)
- **Nginx** - Production web server
- **Caddy** - Reverse proxy on Raspberry Pi 5

### Project Structure

```
marvic-portfolio/
├── src/
│   ├── components/      # Svelte interactive components
│   │   ├── Navigation.svelte
│   │   ├── Hero.svelte
│   │   ├── About.svelte
│   │   ├── Projects.svelte
│   │   ├── Experience.svelte
│   │   └── Contact.svelte
│   ├── layouts/         # Astro layout wrappers
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   └── index.astro
│   └── styles/          # (Currently empty, global styles in BaseLayout)
├── public/              # Static assets (favicon, images)
├── astro.config.mjs     # Astro configuration with Svelte integration
├── Dockerfile           # Multi-stage build (Node + Nginx)
├── docker-compose.yml   # Container orchestration
├── nginx.conf           # Nginx server configuration
└── Caddyfile            # Reverse proxy config for Pi deployment
```

### Architecture Patterns

**Component Strategy**: The site uses Astro's island architecture where:
- Pages are `.astro` files that compose Svelte components
- Svelte components handle all interactivity with strategic hydration:
  - `client:load` - Navigation (immediate hydration)
  - `client:visible` - Content sections (lazy load on viewport entry)

**Styling**: CSS-in-JS approach where:
- Global styles and CSS variables defined in `BaseLayout.astro`
- Component-specific styles scoped within each `.svelte` file
- Design uses custom properties for theming (dark mode focused)

**Single Page Application**: All content sections are composed in `index.astro` as a one-page portfolio site with smooth scroll navigation.

## Deployment

### Docker Build and Run

Build the Docker image:
```bash
cd marvic-portfolio
docker build -t marvic-portfolio .
```

Run with Docker Compose:
```bash
docker-compose up -d
```

The site runs on port 3000 (maps container's port 80 to host's 3000).

### Production Setup

The deployment uses a two-tier setup:
1. **Ubuntu Workstation**: Runs the Docker container with Nginx serving the static build
2. **Raspberry Pi 5**: Runs Caddy as a reverse proxy to the workstation

To update Caddy configuration:
```bash
scp Caddyfile pi@<pi-ip>:/etc/caddy/Caddyfile
ssh pi@<pi-ip> "sudo systemctl restart caddy"
```

## Build Output

- TypeScript strict mode enabled (`astro/tsconfigs/strict`)
- Static output mode (no SSR)
- Build artifacts in `./dist/`
- Inlined stylesheets for optimal performance
