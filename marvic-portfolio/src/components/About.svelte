<script lang="ts">
  const skills = [
    { name: 'C# / .NET', level: 90, color: '#68217a' },
    { name: 'Java', level: 85, color: '#f89820' },
    { name: 'Relational Databases', level: 85, color: '#336791' },
    { name: 'Swift', level: 80, color: '#fa7343' },
    { name: 'Android Development', level: 75, color: '#3ddc84' },
    { name: 'JavaScript', level: 70, color: '#f7df1e' },
    { name: 'AWS Cloud Services', level: 70, color: '#ff9900' },
    { name: 'Kotlin', level: 70, color: '#7f52ff' }
  ];

  const interests = ['🎮 Game Servers', '🐧 Linux & Homelab', '🤖 AI Exploration'];
</script>

<section id="about" class="about">
  <div class="container">
    <div class="section-header">
      <span class="section-number">01.</span>
      <h2>About Me</h2>
      <div class="line"></div>
    </div>

    <div class="content">
      <div class="bio">
        <p class="intro">
          Hi, I'm <span class="highlight">Martin</span>—a backend engineer passionate about
          building systems that power the digital economy.
        </p>

        <p>
          With over a decade in software development, my journey has taken me from building
          mobile apps and interactive kiosks to architecting payment infrastructure that
          processes transactions at scale. Since 2014, I've also been helping businesses grow
          through freelance web development, crafting custom WordPress solutions and e-commerce
          platforms. Today, I specialize in backend engineering for fintech, where I design and
          build the secure, reliable systems that enable seamless financial transactions.
        </p>

        <p>
          I thrive on tackling complex technical challenges and staying ahead of the curve with
          emerging technologies. When I'm not engineering payment systems or exploring the latest
          in AI, you'll find me developing game servers, tinkering with Linux, pushing my physical
          limits with cross training, or breaking things in my homelab to figure out how they
          really work.
        </p>

        <div class="interests">
          {#each interests as interest}
            <span class="interest-tag">{interest}</span>
          {/each}
        </div>
      </div>

      <div class="skills">
        <h3>Technical Skills</h3>
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
                  style="width: {skill.level}%; background: {skill.color};"
                ></div>
              </div>
            </div>
          {/each}
        </div>

        <h3 style="margin-top: 3rem;">Education & Languages</h3>
        <div class="education">
          <div class="education-item">
            <div class="edu-title">Certificate in Advanced Java Programming</div>
            <div class="edu-details">Fundación Confemetal • 212 hours • 2013</div>
          </div>
          <div class="education-item">
            <div class="edu-title">Software Development (CFGS)</div>
            <div class="edu-details">San Clemente • Santiago de Compostela, Spain • 2013</div>
          </div>
          <div class="education-item">
            <div class="edu-title">Languages</div>
            <div class="edu-details">
              English & Spanish (Native) • Galician (Working) • Portuguese (Conversational)
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

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .bio p {
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
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
    background: rgba(0, 255, 136, 0.1);
    border: 1px solid var(--color-accent);
    border-radius: 20px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
  }

  .interest-tag:hover {
    background: rgba(0, 255, 136, 0.2);
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
    background: rgba(255, 255, 255, 0.02);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  .skill-item:hover {
    border-color: rgba(0, 255, 136, 0.3);
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
    background: rgba(255, 255, 255, 0.05);
    border-radius: 3px;
    overflow: hidden;
  }

  .skill-progress {
    height: 100%;
    border-radius: 3px;
    transition: width 1s ease;
    box-shadow: 0 0 10px currentColor;
  }

  .education {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .education-item {
    background: rgba(255, 255, 255, 0.02);
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  .education-item:hover {
    border-color: rgba(0, 255, 136, 0.3);
    transform: translateX(5px);
  }

  .edu-title {
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }

  .edu-details {
    color: rgba(255, 255, 255, 0.7);
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
