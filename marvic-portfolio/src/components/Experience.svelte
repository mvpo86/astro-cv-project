<script lang="ts">
  interface ExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string[];
    technologies: string[];
  }

  const experiences: ExperienceItem[] = [
    {
      company: 'Mews',
      position: 'Backend Engineer - Acquiring Team',
      period: 'July 2025 - Present',
      description: [
        'Backend engineer working on payment infrastructure and financial services',
        'Developing enterprise-scale backend systems',
        'Building secure, reliable financial technology solutions'
      ],
      technologies: ['C#', '.NET', 'Cloud Infrastructure', 'Microservices']
    },
    {
      company: 'Mews',
      position: 'Backend Engineer - Payments Team',
      period: '2022 - July 2025',
      description: [
        'Develop secure financial transaction systems and payment processing infrastructure',
        'Built integrations with global payment gateways for seamless payment operations',
        'Implemented scalable backend services for the hospitality and travel industry'
      ],
      technologies: ['C#', '.NET', 'Payment APIs', 'SQL', 'Cloud Services']
    },
    {
      company: 'STK GDC SL (Softtek)',
      position: '.NET Developer',
      period: 'April 2020 - 2022',
      description: [
        'Maintained and enhanced fraud detection and compliance systems for UK-based fintech client',
        'Made improvements to transaction monitoring engine allowing for processing up to 90k transactions a day',
        'Managed application monitoring, alerting infrastructure, and CI/CD pipelines',
        'Mentored junior developers through technical discussion and comprehensive code reviews'
      ],
      technologies: ['C#', '.NET', 'AWS', 'Docker', 'PostgreSQL', 'MSSQL', 'Jenkins', 'Splunk']
    },
    {
      company: 'STK GDC SL (Softtek)',
      position: 'Application Management Support',
      period: 'October 2019 - April 2020',
      description: [
        'Provided operations support for major Spanish multinational clothing company',
        'Monitored system health, performance metrics, and service availability',
        'Streamlined operational processes and implemented KPI reporting with automated alerts'
      ],
      technologies: ['Monitoring Tools', 'SQL', 'Operations Management', 'KPI Reporting']
    },
    {
      company: 'P-Dub Inc',
      position: 'Tech Lead / Co-Founder',
      period: 'December 2016 - September 2019',
      description: [
        'Co-founded and led technical direction for mobile development startup based in Seattle',
        'Architected and developed cross-platform mobile applications for iOS and Android',
        'Built gift recommendation platform with backend services and mobile client applications',
        'Built prototype in iOS and Android to read utility bills with OCR to calculate savings for average households'
      ],
      technologies: ['Java', 'Kotlin', 'Swift', 'Node.js', 'Azure', 'Firebase', 'MS SQL Server']
    },
    {
      company: 'Zemsania - Everis SL',
      position: 'Junior Java Developer',
      period: 'May 2016 - November 2019',
      description: [
        'Developed custom Java frameworks and applications for Galician Government agencies',
        'Built healthcare integration services with HL7 messaging standards for public health systems',
        'Implemented reporting solutions using Jasper Reports and Mirth Connect integration channels'
      ],
      technologies: ['Java', 'Mirth Connect', 'HL7', 'PostgreSQL', 'MS SQL Server', 'Jasper Reports']
    },
    {
      company: 'Freelance',
      position: 'Web Developer',
      period: 'January 2014 - Present',
      description: [
        'Providing PHP web development and WordPress solutions for diverse clients',
        'Building custom WooCommerce backends and e-commerce solutions',
        'Developing responsive web applications with modern JavaScript and CSS frameworks'
      ],
      technologies: ['PHP', 'WordPress', 'JavaScript', 'MySQL', 'HTML/CSS', 'jQuery', 'REST APIs']
    },
    {
      company: 'Plexus Technologies SL',
      position: 'Junior Java Developer',
      period: 'December 2013 - November 2015',
      description: [
        'Developed enterprise software for healthcare organizations, government agencies, and private sector',
        'Built interactive kiosk systems and queue management solutions using Java and Android',
        'Created digital signage platforms with integrated backend services'
      ],
      technologies: ['Java', 'JavaScript', 'Android', 'MySQL', 'MS SQL Server', 'CSS']
    }
  ];
</script>

<section id="experience" class="experience">
  <div class="container">
    <div class="section-header">
      <span class="section-number">03.</span>
      <h2>Experience</h2>
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
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
              </div>
              <span class="period">{exp.period}</span>
            </div>

            <ul class="responsibilities">
              {#each exp.description as desc}
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
