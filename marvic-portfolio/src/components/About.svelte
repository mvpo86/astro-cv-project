<script lang="ts">
  import { i18n } from '../stores/i18nStore.svelte';

  const skills = [
    { name: 'C# / .NET', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Relational Databases', level: 85 },
    { name: 'Swift', level: 80 },
    { name: 'Android Development', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'AWS Cloud Services', level: 70 },
    { name: 'Kotlin', level: 70 }
  ];
</script>

<section id="about" class="about">
  <div class="container">
    <div class="section-header">
      <span class="section-number">01.</span>
      <h2>{i18n.t('about.title')}</h2>
      <div class="line"></div>
    </div>

    <div class="content">
      <div class="bio">
        <p class="intro">
          {i18n.t('about.introPart1')} <span class="highlight">{i18n.t('about.introPart2')}</span>{i18n.t('about.introPart3')}
        </p>

        <p>
          {i18n.t('about.paragraph1')}
        </p>

        <p>
          {i18n.t('about.paragraph2')}
        </p>

        <div class="interests">
          {#each i18n.t('about.interests') as interest}
            <span class="interest-tag">{interest}</span>
          {/each}
        </div>
      </div>

      <div class="skills">
        <h3>{i18n.t('about.technicalSkills')}</h3>
        <div class="skills-grid">
          {#each skills as skill}
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{skill.name}</span>
                <span class="skill-percent">{skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  style="width: {skill.level}%;"
                ></div>
              </div>
            </div>
          {/each}
        </div>

        <h3 style="margin-top: 3rem;">{i18n.t('about.educationLanguages')}</h3>
        <div class="education">
          <div class="education-item">
            <div class="edu-title">{i18n.t('about.education.cert1Title')}</div>
            <div class="edu-details">{i18n.t('about.education.cert1Details')}</div>
          </div>
          <div class="education-item">
            <div class="edu-title">{i18n.t('about.education.cert2Title')}</div>
            <div class="edu-details">{i18n.t('about.education.cert2Details')}</div>
          </div>
          <div class="education-item">
            <div class="edu-title">{i18n.t('about.education.languagesTitle')}</div>
            <div class="edu-details">
              {i18n.t('about.education.languagesDetails')}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    min-height: 100vh;
    padding: 8rem 2rem;
    background: var(--color-secondary);
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

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .bio p {
    margin-bottom: 1.5rem;
    color: var(--color-text-muted);
    line-height: 1.8;
    font-size: 1.1rem;
  }

  .intro {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .highlight {
    color: var(--color-accent);
    font-weight: 700;
  }

  .interests {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .interest-tag {
    padding: 0.5rem 1rem;
    background: var(--color-surface);
    border: 1px solid var(--color-accent);
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .interest-tag:hover {
    background: var(--color-border);
    transform: translateY(-2px);
  }

  .skills h3 {
    color: var(--color-text);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .skill-item {
    background: var(--color-surface);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: all 0.3s ease;
  }

  .skill-item:hover {
    border-color: var(--color-accent);
    transform: translateX(5px);
  }

  .skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .skill-name {
    font-weight: 600;
    color: var(--color-text);
  }

  .skill-percent {
    font-family: var(--font-mono);
    color: var(--color-accent);
    font-size: 0.9rem;
  }

  .skill-bar {
    height: 6px;
    background: var(--color-border);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    border-radius: 3px;
    background: var(--color-primary);
    transition: width 1s ease;
    box-shadow: 0 0 10px var(--color-primary);
  }

  .education {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .education-item {
    background: var(--color-surface);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    transition: all 0.3s ease;
  }

  .education-item:hover {
    border-color: var(--color-accent);
    transform: translateX(5px);
  }

  .edu-title {
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }

  .edu-details {
    color: var(--color-text-muted);
    font-size: 0.9rem;
  }

  @media (max-width: 968px) {
    .content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .section-header {
      margin-bottom: 3rem;
    }

    .line {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .about {
      padding: 6rem 1.5rem;
    }
  }
</style>
