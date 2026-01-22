<script lang="ts">
  import { i18n } from '../stores/i18nStore.svelte';
  import type { Locale } from '../types/translations';

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  function selectLanguage(code: Locale) {
    i18n.setLocale(code);
  }
</script>

<div class="language-switcher">
  {#each languages as lang}
    <button
      class="lang-button"
      class:active={i18n.locale === lang.code}
      onclick={() => selectLanguage(lang.code)}
      aria-label="Switch to {lang.label}"
    >
      {lang.label}
    </button>
  {/each}
</div>

<style>
  .language-switcher {
    display: flex;
    gap: 0.25rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 0.25rem;
  }

  .lang-button {
    padding: 0.4rem 0.8rem;
    background: transparent;
    border: none;
    border-radius: 0.375rem;
    color: var(--color-text-muted);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .lang-button:hover {
    color: var(--color-text);
    background: var(--color-secondary);
  }

  .lang-button.active {
    background: var(--color-primary);
    color: var(--color-background);
  }

  @media (max-width: 768px) {
    .language-switcher {
      width: 100%;
      justify-content: center;
    }
  }
</style>
