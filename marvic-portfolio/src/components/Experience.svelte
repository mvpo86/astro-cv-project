<script lang="ts">
  import { i18n } from '../stores/i18nStore.svelte';

  interface ExperienceItem {
    company: string;
    translationKey: string;
    period: string;
    technologies: string[];
  }

  const experiences: ExperienceItem[] = [
    {
      company: 'Mews',
      translationKey: 'mews_acquiring',
      period: 'July 2025 - Present',
      technologies: ['C#', '.NET', 'Cloud Infrastructure', 'Microservices']
    },
    {
      company: 'Mews',
      translationKey: 'mews_payments',
      period: '2022 - July 2025',
      technologies: ['C#', '.NET', 'Payment APIs', 'SQL', 'Cloud Services']
    },
    {
      company: 'STK GDC SL (Softtek)',
      translationKey: 'softtek_developer',
      period: 'April 2020 - 2022',
      technologies: ['C#', '.NET', 'AWS', 'Docker', 'PostgreSQL', 'MSSQL', 'Jenkins', 'Splunk']
    },
    {
      company: 'STK GDC SL (Softtek)',
      translationKey: 'softtek_support',
      period: 'October 2019 - April 2020',
      technologies: ['Monitoring Tools', 'SQL', 'Operations Management', 'KPI Reporting']
    },
    {
      company: 'P-Dub Inc',
      translationKey: 'pdub',
      period: 'December 2016 - September 2019',
      technologies: ['Java', 'Kotlin', 'Swift', 'Node.js', 'Azure', 'Firebase', 'MS SQL Server']
    },
    {
      company: 'Zemsania - Everis SL',
      translationKey: 'zemsania',
      period: 'May 2016 - November 2019',
      technologies: ['Java', 'Mirth Connect', 'HL7', 'PostgreSQL', 'MS SQL Server', 'Jasper Reports']
    },
    {
      company: 'Freelance',
      translationKey: 'freelance',
      period: 'January 2014 - Present',
      technologies: ['PHP', 'WordPress', 'JavaScript', 'MySQL', 'HTML/CSS', 'jQuery', 'REST APIs']
    },
    {
      company: 'Plexus Technologies SL',
      translationKey: 'plexus',
      period: 'December 2013 - November 2015',
      technologies: ['Java', 'JavaScript', 'Android', 'MySQL', 'MS SQL Server', 'CSS']
    }
  ];
</script>

<section id="experience" class="experience">
  <div class="container">
    <div class="section-header">
      <span class="section-number">03.</span>
      <h2>{i18n.t('experience.title')}</h2>
      <div class="line"></div>
    </div>

    <div class="timeline">
      {#each experiences as exp, index}
        <div class="timeline-item" style="--delay: {index * 0.1}s">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
          </div>

          <div class="timeline-content">
            <div class="content-header">
              <div>
                <h3>{i18n.t(`experience.jobs.${exp.translationKey}.position`)}</h3>
                <h4>{exp.company}</h4>
              </div>
              <span class="period">{exp.period}</span>
            </div>

            <ul class="responsibilities">
              {#each i18n.t(`experience.jobs.${exp.translationKey}.description`) as desc}
                <li>{desc}</li>
              {/each}
            </ul>

            <div class="technologies">
              {#each exp.technologies as tech}
                <span class="tech-tag">{tech}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .experience {
    min-height: 100vh;
    padding: 8rem 2rem;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
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

  .timeline {
    position: relative;
    padding-left: 2rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--color-accent), rgba(0, 255, 136, 0.2));
  }

  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
    padding-left: 2rem;
    animation: fadeInUp 0.6s ease forwards;
    animation-delay: var(--delay);
    opacity: 0;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
    from {
      opacity: 0;
      transform: translateY(20px);
    }
  }

  .timeline-marker {
    position: absolute;
    left: -2rem;
    top: 0;
  }

  .marker-dot {
    width: 16px;
    height: 16px;
    background: var(--color-accent);
    border-radius: 50%;
    border: 3px solid var(--color-bg);
    box-shadow: 0 0 0 4px rgba(0, 255, 136, 0.2);
    transition: all 0.3s ease;
  }

  .timeline-item:hover .marker-dot {
    transform: scale(1.3);
    box-shadow: 0 0 0 6px rgba(0, 255, 136, 0.3);
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
  }

  .timeline-content:hover {
    border-color: rgba(0, 255, 136, 0.3);
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 1rem;
  }

  .content-header h3 {
    color: var(--color-text);
    font-size: 1.4rem;
    margin: 0 0 0.5rem 0;
  }

  .content-header h4 {
    color: var(--color-accent);
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
  }

  .period {
    font-family: var(--font-mono);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    white-space: nowrap;
  }

  .responsibilities {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem 0;
  }

  .responsibilities li {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.8;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .responsibilities li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-size: 1.2rem;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    background: rgba(0, 255, 136, 0.05);
    color: var(--color-accent);
    border-radius: 4px;
    border: 1px solid rgba(0, 255, 136, 0.2);
  }

  @media (max-width: 768px) {
    .experience {
      padding: 6rem 1.5rem;
    }

    .timeline {
      padding-left: 1.5rem;
    }

    .timeline-marker {
      left: -1.5rem;
    }

    .content-header {
      flex-direction: column;
    }

    .period {
      align-self: flex-start;
    }

    .line {
      display: none;
    }
  }
</style>
