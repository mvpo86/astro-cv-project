<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let mobileMenuOpen = $state(false);

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 50;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  function handleNavClick(e: Event) {
    mobileMenuOpen = false;
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<nav class="nav" class:scrolled>
  <div class="container">
    <a href="/" class="logo">
      <span class="logo-bracket">{'<'}</span>
      <span class="logo-text">M</span>
      <span class="logo-bracket">{'/>'}</span>
    </a>

    <button
      class="mobile-toggle"
      class:open={mobileMenuOpen}
      onclick={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-links" class:open={mobileMenuOpen}>
      {#each navItems as item}
        <li>
          <a href={item.href} onclick={handleNavClick}>
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: all 0.3s ease;
    background: transparent;
  }

  .nav.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    box-shadow: 0 2px 20px rgba(0, 255, 136, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    align-items: center;
    gap: 0.25rem;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .logo-bracket {
    color: var(--color-accent);
    font-family: var(--font-mono);
  }

  .logo-text {
    color: var(--color-text);
  }

  .mobile-toggle {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .mobile-toggle span {
    width: 24px;
    height: 2px;
    background: var(--color-accent);
    transition: all 0.3s ease;
  }

  .mobile-toggle.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .mobile-toggle.open span:nth-child(2) {
    opacity: 0;
  }

  .mobile-toggle.open span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-links a {
    color: var(--color-text);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width 0.3s ease;
  }

  .nav-links a:hover {
    color: var(--color-accent);
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: flex;
    }

    .nav-links {
      position: fixed;
      top: 80px;
      left: 0;
      right: 0;
      flex-direction: column;
      background: rgba(10, 10, 10, 0.98);
      backdrop-filter: blur(10px);
      padding: 2rem;
      gap: 1.5rem;
      transform: translateY(-120%);
      opacity: 0;
      transition: all 0.3s ease;
      border-bottom: 2px solid var(--color-accent);
    }

    .nav-links.open {
      transform: translateY(0);
      opacity: 1;
    }

    .nav-links a {
      font-size: 1.2rem;
    }
  }
</style>
