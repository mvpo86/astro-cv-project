<script lang="ts">
  import { onMount } from 'svelte';
  import { i18n } from '../stores/i18nStore.svelte';

  let mounted = $state(false);
  let mouseX = $state(0);
  let mouseY = $state(0);

  onMount(() => {
    mounted = true;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  });

  let currentRole = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      const roles = i18n.t('hero.roles') as string[];
      currentRole = (currentRole + 1) % roles.length;
    }, 3000);

    return () => clearInterval(interval);
  });

  function scrollToSection(e: Event, target: string) {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="hero">
  <div
    class="bg-gradient"
    style="transform: translate({mouseX * 20}px, {mouseY * 20}px)"
  ></div>

  <div class="container" class:mounted>
    <div class="greeting">
      <span class="wave">👋</span>
      <span>{i18n.t('hero.greeting')}</span>
    </div>

    <h1 class="name">
      <span class="name-text">{i18n.t('hero.name')}</span>
    </h1>

    <div class="role-container">
      <p class="role">
        {#key currentRole}
          <span class="role-text">{(i18n.t('hero.roles') as string[])[currentRole]}</span>
        {/key}
      </p>
    </div>

    <p class="description">
      {i18n.t('hero.description')}
    </p>

    <div class="links">
      <a href="#projects" class="btn" onclick={(e) => scrollToSection(e, '#projects')}>
        {i18n.t('hero.viewWork')}
      </a>
      <a href="#contact" class="btn btn-secondary" onclick={(e) => scrollToSection(e, '#contact')}>
        {i18n.t('hero.letsTalk')}
      </a>
    </div>

    <div class="scroll-indicator">
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <span>{i18n.t('hero.scrollToExplore')}</span>
    </div>
  </div>
</section>

<style>
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    overflow: hidden;
  }

  .bg-gradient {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      var(--color-shadow) 0%,
      transparent 50%
    );
    pointer-events: none;
    transition: transform 0.3s ease;
  }

  .container {
    position: relative;
    text-align: center;
    max-width: 900px;
    z-index: 1;
  }

  .container.mounted .greeting,
  .container.mounted .name,
  .container.mounted .role-container,
  .container.mounted .description,
  .container.mounted .links {
    animation: fadeInUp 0.8s ease forwards;
  }

  .container.mounted .name {
    animation-delay: 0.2s;
  }

  .container.mounted .role-container {
    animation-delay: 0.4s;
  }

  .container.mounted .description {
    animation-delay: 0.6s;
  }

  .container.mounted .links {
    animation-delay: 0.8s;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .greeting {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
    opacity: 0;
  }

  .wave {
    display: inline-block;
    animation: wave 2.5s ease-in-out infinite;
    transform-origin: 70% 70%;
  }

  @keyframes wave {
    0%, 100% {
      transform: rotate(0deg);
    }
    10%, 30% {
      transform: rotate(14deg);
    }
    20%, 40% {
      transform: rotate(-8deg);
    }
  }

  .name {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    margin: 0 0 1rem 0;
    opacity: 0;
  }

  .name-text {
    color: var(--color-text);
  }

  .role-container {
    height: 3rem;
    margin-bottom: 2rem;
    opacity: 0;
  }

  .role {
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    font-weight: 600;
    color: var(--color-accent);
    font-family: var(--font-mono);
  }

  .role-text {
    display: inline-block;
    animation: slideIn 0.5s ease;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .description {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    color: var(--color-text-muted);
    line-height: 1.8;
    margin-bottom: 3rem;
    opacity: 0;
  }

  .links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    opacity: 0;
  }

  .btn {
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    transition: all 0.3s ease;
    background: var(--color-accent);
    color: var(--color-background);
    position: relative;
    overflow: hidden;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  .btn:hover::before {
    width: 300px;
    height: 300px;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px var(--color-shadow);
  }

  .btn-secondary {
    background: transparent;
    color: var(--color-text);
    border: 2px solid var(--color-accent);
  }

  .btn-secondary:hover {
    background: var(--color-accent);
    color: var(--color-background);
    border-color: var(--color-accent);
  }

  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-text-muted);
    font-size: 0.9rem;
    animation: fadeInUp 1s ease 1.5s forwards, bounce 2s ease-in-out 2s infinite;
    opacity: 0;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .mouse {
    width: 24px;
    height: 38px;
    border: 2px solid var(--color-border);
    border-radius: 12px;
    position: relative;
  }

  .wheel {
    width: 3px;
    height: 8px;
    background: var(--color-accent);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 1.5s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(12px);
    }
  }

  @media (max-width: 768px) {
    .greeting {
      font-size: 1.2rem;
    }

    .description br {
      display: none;
    }

    .scroll-indicator {
      margin-top: 2rem;
    }
  }
</style>
