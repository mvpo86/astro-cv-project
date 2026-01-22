<script lang="ts">
  import { i18n } from '../stores/i18nStore.svelte';

  interface Social {
    name: string;
    url: string;
    icon: string;
  }

  const socials: Social[] = [
     {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/martin-penabad-82261963/',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    }
  ];
</script>

<section id="contact" class="contact">
  <div class="container">
    <div class="section-header">
      <span class="section-number">04.</span>
      <h2>{i18n.t('contact.title')}</h2>
      <div class="line"></div>
    </div>

    <div class="content">
      <div class="text-content">
        <h3>{i18n.t('contact.heading')}</h3>
        <p>
          {i18n.t('contact.description')}
        </p>
        <a href="mailto:martin.penabad@gmail.com" class="cta-button">
          {i18n.t('contact.sayHello')}
        </a>
      </div>

      <div class="social-links">
        <h4>{i18n.t('contact.findMeOnline')}</h4>
        <div class="socials-grid">
          {#each socials as social}
            <a
              href={social.url}
              class="social-card"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <svg
                class="social-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={social.icon} />
              </svg>
              <span>{social.name}</span>
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>

  <footer class="footer">
    <p>{i18n.t('contact.footerBuiltWith')} <span class="heart">♥</span> {i18n.t('contact.footerUsing')}</p>
    <p class="copyright">{i18n.t('contact.copyright')}</p>
  </footer>
</section>

<style>
  .contact {
    min-height: 100vh;
    padding: 8rem 2rem 4rem;
    background: var(--color-bg);
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    flex: 1;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  .section-number {
    font-family: var(--font-mono);
    color: var(--color-accent);
    font-size: 1.5rem;
    font-weight: 700;
  }

  .section-header h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: var(--color-text);
    white-space: nowrap;
  }

  .line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--color-accent), transparent);
    margin-left: 1rem;
  }

  .content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .text-content h3 {
    font-size: 2rem;
    color: var(--color-text);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--color-accent), #00ccff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .text-content p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .cta-button {
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2.5rem;
    background: var(--color-accent);
    color: var(--color-bg);
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 255, 136, 0.3);
  }

  .cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 255, 136, 0.4);
  }

  .social-links h4 {
    color: var(--color-text);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  .socials-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .social-card:hover {
    border-color: var(--color-accent);
    background: rgba(0, 255, 136, 0.05);
    transform: translateX(5px);
  }

  .social-icon {
    color: var(--color-accent);
    flex-shrink: 0;
  }

  .footer {
    margin-top: 6rem;
    padding-top: 3rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .footer p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }

  .heart {
    color: var(--color-accent);
    animation: pulse 1.5s ease infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  .copyright {
    font-family: var(--font-mono);
    font-size: 0.85rem;
  }

  @media (max-width: 968px) {
    .content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 768px) {
    .contact {
      padding: 6rem 1.5rem 3rem;
    }

    .line {
      display: none;
    }

    .text-content h3 {
      font-size: 1.5rem;
    }

    .footer {
      margin-top: 4rem;
    }
  }
</style>
