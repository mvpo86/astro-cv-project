<script lang="ts">
  import { themeStore } from '../stores/themeStore.svelte';
  import { getAllThemes } from '../config/themes';

  const themes = getAllThemes();
  let isOpen = $state(false);

  function selectTheme(themeId: string) {
    themeStore.setTheme(themeId);
    isOpen = false;
  }

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.theme-switcher')) {
      isOpen = false;
    }
  }

  $effect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }

      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });
</script>

<div class="theme-switcher">
  <button
    class="theme-button"
    onclick={toggleDropdown}
    aria-label="Select theme"
    aria-expanded={isOpen}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <span class="theme-name">{themeStore.theme.name}</span>
  </button>

  {#if isOpen}
    <div class="theme-dropdown">
      {#each themes as theme}
        <button
          class="theme-option"
          class:active={themeStore.theme.id === theme.id}
          onclick={() => selectTheme(theme.id)}
        >
          <span class="theme-indicator" style="background: {theme.colors.primary}"></span>
          {theme.name}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .theme-switcher {
    position: relative;
  }

  .theme-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }

  .theme-button:hover {
    background: var(--color-secondary);
    border-color: var(--color-primary);
  }

  .theme-button svg {
    color: var(--color-primary);
  }

  .theme-name {
    display: none;
  }

  .theme-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 160px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.5rem;
    padding: 0.5rem;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .theme-option {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.75rem;
    background: transparent;
    border: none;
    border-radius: 0.375rem;
    color: var(--color-text);
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    font-size: 0.9rem;
  }

  .theme-option:hover {
    background: var(--color-secondary);
  }

  .theme-option.active {
    background: var(--color-secondary);
    color: var(--color-primary);
  }

  .theme-indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  @media (min-width: 768px) {
    .theme-name {
      display: inline;
    }
  }
</style>
