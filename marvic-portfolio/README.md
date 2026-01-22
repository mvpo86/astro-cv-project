# Marvic.io Portfolio

A modern portfolio website built with Astro and Svelte.

## Tech Stack

- **Astro** - Static site generator
- **Svelte** - Component framework
- **Node.js** - JavaScript runtime
- **Docker** - Containerization
- **Nginx** - Web server
- **Caddy** - Reverse proxy on Raspberry Pi 5

## Development

### Prerequisites

- Node.js 20+
- npm or pnpm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will be available at `http://localhost:4321`

## Deployment

### Using Docker on Ubuntu Workstation

1. Build the Docker image:
```bash
docker build -t marvic-portfolio .
```

2. Run with Docker Compose:
```bash
docker-compose up -d
```

The site will be available at `http://localhost:3000`

### Caddy Reverse Proxy Setup (Raspberry Pi 5)

1. Copy the Caddyfile to your Raspberry Pi:
```bash
scp Caddyfile pi@your-pi-ip:/etc/caddy/Caddyfile
```

2. Update the reverse_proxy directive in the Caddyfile to point to your Ubuntu workstation IP:
```
reverse_proxy your-ubuntu-ip:3000
```

3. Restart Caddy:
```bash
sudo systemctl restart caddy
```

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # Svelte components
│   ├── layouts/     # Astro layouts
│   ├── pages/       # Astro pages (routes)
│   └── styles/      # Global styles
├── Dockerfile
├── docker-compose.yml
├── Caddyfile
└── astro.config.mjs
```

## License

MIT
