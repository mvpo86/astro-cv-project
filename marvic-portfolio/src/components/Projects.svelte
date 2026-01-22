<script lang="ts">
  interface Project {
    title: string;
    description: string;
    tags: string[];
    category: string;
    image?: string;
    github?: string;
    demo?: string;
  }

  const projects: Project[] = [
       {
      title: 'Fraud Detection & Compliance Platform',
      description: 'Maintained and enhanced fraud detection and compliance monitoring system for UK-based fintech client. Implemented real-time fraud prevention features and regulatory compliance tools with CI/CD pipeline automation.',
      tags: ['C#', '.NET', 'AWS', 'Docker', 'PostgreSQL', 'Jenkins'],
      category: 'backend'
    },
    {
      title: 'Gift Recommendation Mobile Platform',
      description: 'Co-founded and built cross-platform mobile application for creating gift recommendation engine. Developed iOS and Android native apps with backend API services and cloud infrastructure on Azure.',
      tags: ['Java', 'Kotlin', 'Swift', 'Node.js', 'Firebase', 'Azure'],
      category: 'fullstack'
    },
    {
      title: 'Healthcare Integration System',
      description: 'Designed custom Java frameworks for Galician Government health agencies. Built HL7 messaging integration channels using Mirth Connect for seamless data exchange between healthcare organizations.',
      tags: ['Java', 'Mirth Connect', 'HL7', 'PostgreSQL', 'Jasper Reports'],
      category: 'backend'
    },
    {
      title: 'Interactive Kiosk & Queue Management',
      description: 'Developed enterprise software for healthcare organizations and government agencies. Built interactive kiosk systems, queue management solutions, and digital signage platforms with integrated backend services.',
      tags: ['Java', 'Android', 'JavaScript', 'MySQL', 'MS SQL Server'],
      category: 'fullstack'
    },
    {
      title: 'WordPress & E-commerce Solutions',
      description: 'Custom WordPress and WooCommerce development for diverse clients since 2014. Built responsive websites, e-commerce backends, and REST API integrations for small to medium-sized businesses.',
      tags: ['PHP', 'WordPress', 'WooCommerce', 'JavaScript', 'MySQL'],
      category: 'frontend'
    }
  ];

  let activeFilter = $state('all');

  const filters = ['all', 'fullstack', 'frontend', 'backend'];

  $effect(() => {
    // Can add animation effects when filter changes
  });

  function getFilteredProjects() {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.category === activeFilter);
  }
</script>

<section id="projects" class="projects">
  <div class="container">
    <div class="section-header">
      <span class="section-number">02.</span>
      <h2>Projects</h2>
      <div class="line"></div>
    </div>

    <div class="filters">
      {#each filters as filter}
        <button
          class="filter-btn"
          class:active={activeFilter === filter}
          onclick={() => activeFilter = filter}
        >
          {filter}
        </button>
      {/each}
    </div>

    <div class="projects-grid">
      {#each getFilteredProjects() as project (project.title)}
        <div class="project-card">
          <div class="card-content">
            <div class="card-header">
              <h3>{project.title}</h3>
              <div class="card-links">
                {#if project.github}
                  <a href={project.github} class="icon-link" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                {/if}
                {#if project.demo}
                  <a href={project.demo} class="icon-link" aria-label="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                {/if}
              </div>
            </div>

            <p class="description">{project.description}</p>

            <div class="tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    min-height: 100vh;
    padding: 8rem 2rem;
    background: var(--color-bg);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;
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

  .filters {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 0.6rem 1.5rem;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    text-transform: capitalize;
    transition: all 0.3s ease;
    font-size: 0.95rem;
  }

  .filter-btn:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  .filter-btn.active {
    background: var(--color-accent);
    color: var(--color-bg);
    border-color: var(--color-accent);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--color-accent), #00ccff);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    border-color: rgba(0, 255, 136, 0.3);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
  }

  .project-card:hover::before {
    transform: scaleX(1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .card-header h3 {
    color: var(--color-text);
    font-size: 1.4rem;
    margin: 0;
  }

  .card-links {
    display: flex;
    gap: 0.8rem;
  }

  .icon-link {
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease;
  }

  .icon-link:hover {
    color: var(--color-accent);
    transform: translateY(-2px);
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    background: rgba(0, 255, 136, 0.1);
    color: var(--color-accent);
    border-radius: 4px;
    border: 1px solid rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 768px) {
    .projects {
      padding: 6rem 1.5rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .line {
      display: none;
    }
  }
</style>
