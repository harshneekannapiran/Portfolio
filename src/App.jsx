import { useEffect, useState } from 'react';
const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const aboutStats = [
  { value: '3+', label: 'Years of Study' },
  { value: '5+', label: 'Projects Completed' },
  { value: '3+', label: 'Technologies Learned' },
];

const educationItems = [
  {
    icon: 'fas fa-graduation-cap',
    title: 'B.Tech Information Technology',
    institution: 'Kongu Engineering College, Perundurai',
    duration: '2023 - 2027',
    result: 'CGPA: 8.84',
  },
  {
    icon: 'fas fa-school',
    title: 'Higher Secondary (HSC)',
    institution: 'Buds Matric Hr.Sec.School, Oddanchatram',
    duration: '2022',
    result: 'Percentage: 90.66%',
  },
  {
    icon: 'fas fa-book',
    title: 'Secondary (SSLC)',
    institution: 'Buds Matric Hr.Sec.School, Oddanchatram',
    duration: '2020',
    result: 'Percentage: 100%',
  },
];

const projectItems = [
  {
    icon: 'fas fa-hand-paper',
    title: 'Sign Language Converter',
    description: 'Real-time sign language translation using Python and OpenCV.',
    technologies: ['Python', 'OpenCV', 'TensorFlow'],
    link: 'https://github.com/harshneekannapiran/Sign-Language-Converter',
  },
  {
    icon: 'fas fa-wallet',
    title: 'Expense Manager',
    description: 'Finance management app with Angular and MySQL for expense tracking.',
    technologies: ['Angular', 'MySQL', 'JavaScript'],
    link: 'https://github.com/harshneekannapiran/expese-manager-angular-WT-',
  },
  {
    icon: 'fas fa-leaf',
    title: 'YogShala - Wellness Platform',
    description: 'MERN stack platform for yoga session booking and scheduling.',
    technologies: ['MongoDB', 'React', 'Node.js'],
    link: 'https://github.com/harshneekannapiran/YOGSHALA',
  },
  {
    icon: 'fas fa-hotel',
    title: 'Hostel Room Allocation System',
    description: 'MERN stack hostel management system for room allocation.',
    technologies: ['MongoDB', 'React', 'Node.js'],
    link: '',
  },
  {
    icon: 'fas fa-tasks',
    title: 'Task Manager Application',
    description: 'MERN stack task management system with user authentication.',
    technologies: ['MongoDB', 'React', 'Node.js'],
    link: 'https://github.com/harshneekannapiran/TASKMANAGER',
  },
];

const achievementItems = [
  {
    icon: 'fas fa-trophy',
    title: 'Top 3 Team - Techno-Cultural Fest',
    description: 'Selected among the top three teams at the intra-department level.',
  },
  {
    icon: 'fas fa-hourglass-half',
    title: 'More Achievements Coming Soon',
    description: 'Stay tuned for updates on my journey!',
  },
];

const certificationItems = [
  {
    icon: 'fas fa-database',
    title: 'MongoDB Associate Developer',
    description:
      'Achieved global certification in MongoDB fundamentals, CRUD operations, indexing, and aggregation framework',
    year: '2025',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Oracle APEX Cloud Developer',
    description:
      'Global certification in Oracle APEX cloud development, including low-code application design and deployment',
    year: '2025',
  },
];

const presentationItems = [
  {
    icon: 'fas fa-project-diagram',
    title: 'Hostel Room Allocation System',
    description:
      'Presented at the Techno-Cultural Fest, Intradepartment level, and selected among the Top 3 teams.',
  },
  {
    icon: 'fas fa-hands-helping',
    title: 'Indian Sign Language Converter',
    description: 'Project presented at Government College of Engineering, Coimbatore.',
  },
  {
    icon: 'fas fa-microchip',
    title: 'IoT in Depression Detection',
    description: 'Paper presented at KPR College of Technology, Coimbatore.',
  },
  {
    icon: 'fas fa-user-secret',
    title: 'Deepfake Detection',
    description: 'Paper presented at Bannari Amman Institute of Technology, Sathyamangalam.',
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    bars: [
      { name: 'C', value: 70 },
      { name: 'Java', value: 75 },
      { name: 'Python', value: 80 },
      { name: 'JavaScript', value: 75 },
      { name: 'HTML/CSS', value: 85 },
    ],
  },
  {
    title: 'Frameworks & Tools',
    tools: [
      { icon: 'fab fa-node', name: 'Node.js' },
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fab fa-angular', name: 'Angular' },
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-leaf', name: 'MongoDB' },
      { icon: 'fab fa-git-alt', name: 'Git' },
    ],
  },
];

const contactMethods = [
  { icon: 'fas fa-envelope', value: 'harshneekannapiran@gmail.com' },
  { icon: 'fas fa-phone', value: '+91 9884775851' },
  { icon: 'fas fa-map-marker-alt', value: 'Erode, TamilNadu, India' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [heroTagline, setHeroTagline] = useState('');
  const [scrollToTopVisible, setScrollToTopVisible] = useState(false);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const taglineText = 'B.Tech IT Student';
    let index = 0;
    setHeroTagline('');

    const intervalId = window.setInterval(() => {
      index += 1;
      setHeroTagline(taglineText.slice(0, index));

      if (index >= taglineText.length) {
        window.clearInterval(intervalId);
      }
    }, 80);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.fade-in, .fade-in-delay, .fade-in-delay-2, .fade-in-delay-3, .fade-in-delay-4'
    );

    const skillBars = document.querySelectorAll('.skill-fill');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = `${width}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    skillBars.forEach((element) => skillObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      skillObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 220;
      let currentSection = 'home';

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.getAttribute('id') || currentSection;
        }
      });

      setActiveSection(currentSection);
      setScrollToTopVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMobileMenuOpen((current) => !current);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setFormState({ status: 'idle', message: '' });

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      setFormState({ status: 'error', message: 'Please fill in all fields.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({ status: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        if (response.status === 404) {
          setFormState({
            status: 'error',
            message:
              'The email backend is not running in this preview. Use Vercel deployment or run vercel dev locally so /api/contact exists.',
          });
          return;
        }

        const payload = await response.json().catch(() => ({}));
        setFormState({
          status: 'error',
          message: payload?.message || 'Unable to send the message right now.',
        });
        return;
      }

      setFormState({
        status: 'success',
        message: 'Your message was sent successfully. I will get back to you soon.',
      });
      formElement.reset();
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Sorry, the message could not be sent right now. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <a href="#home" onClick={handleNavClick}>
              Portfolio
            </a>
          </div>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {navigationItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in">Harshnee K S</h1>
              <p className="hero-tagline fade-in-delay typing-effect">{heroTagline}</p>
              <p className="hero-bio fade-in-delay">
                Passionate about creating efficient, user-friendly web and software applications.
                Actively exploring full-stack development, AI-driven solutions, and real-time
                applications.
              </p>
              <div className="hero-buttons fade-in-delay-2">
                <a href="#contact" className="btn btn-primary" onClick={handleNavClick}>
                  Get In Touch
                </a>
                <a href="#projects" className="btn btn-secondary" onClick={handleNavClick}>
                  View Work
                </a>
              </div>
            </div>

            <div className="hero-image fade-in-delay-3">
              <div>
                <img
                  src="/profile.jpg"
                  alt="Harshnee profile photo"
                  className="profile-img"
                />
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <div className="about-content">
            <div className="about-text fade-in-delay">
              <h3>Education</h3>
              <p>
                I am a pre-final year B.Tech Information Technology student at Kongu Engineering
                College. My studies provide a strong foundation in programming, data structures,
                algorithms, and software development practices. I actively apply these concepts in
                practical projects to gain hands-on experience and improve my problem-solving
                skills.
              </p>

              <h3>Academic Focus</h3>
              <p>
                My academic focus includes web development, full-stack application development, and
                exploring emerging technologies. I am particularly interested in projects that
                combine software engineering principles with practical implementation, allowing me
                to create solutions that are both efficient and user-friendly.
              </p>

              <h3>Learning Journey</h3>
              <p>
                I believe in learning by doing. I strengthen my understanding by building projects,
                experimenting with new tools, and collaborating with peers. This approach allows me
                to continuously expand my knowledge, improve my technical skills, and prepare for
                real-world challenges in software development and IT projects.
              </p>
            </div>

            <div className="about-stats fade-in-delay-2">
              {aboutStats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title fade-in">Education</h2>
          <div className="education-grid">
            {educationItems.map((item, index) => (
              <div className={`education-item fade-in-delay${index === 1 ? '-2' : index === 2 ? '-3' : ''}`} key={item.title}>
                <div className="education-icon">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p className="education-institution">{item.institution}</p>
                <p className="education-duration">{item.duration}</p>
                <p className="education-cgpa">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title fade-in">Academic Projects</h2>
          <div className="projects-grid">
            {projectItems.map((project, index) => (
              <div
                className={`project-card fade-in-delay${index === 1 ? '-2' : index === 2 ? '-3' : index >= 3 ? '-4' : ''}`}
                key={project.title}
              >
                <div className="project-image">
                  <i className={project.icon} aria-hidden="true" />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((technology) => (
                      <span className="tech-tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <div className="project-links">
                      <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                        <i className="fab fa-github" aria-hidden="true" /> Code
                      </a>
                    </div>
                  ) : (
                    <div className="project-links">
                      <span className="project-link project-link-disabled">Code on request</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title fade-in">Achievements</h2>
          <div className="achievements-carousel">
            {achievementItems.map((achievement, index) => (
              <div
                className={`achievement-item fade-in-delay${index === 1 ? '-2' : ''}`}
                key={achievement.title}
              >
                <div className="achievement-icon">
                  <i className={achievement.icon} aria-hidden="true" />
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title fade-in">Certifications & Training</h2>
          <div className="certifications-grid">
            {certificationItems.map((certification, index) => (
              <div
                className={`certification-item fade-in-delay${index === 1 ? '-2' : ''}`}
                key={certification.title}
              >
                <div className="certification-icon">
                  <i className={certification.icon} aria-hidden="true" />
                </div>
                <h3>{certification.title}</h3>
                <p>{certification.description}</p>
                <span className="certification-date">{certification.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="presentations" className="presentations">
        <div className="container">
          <h2 className="section-title fade-in">Papers & Projects Presented</h2>
          {presentationItems.map((presentation, index) => (
            <div
              className={`presentation-item fade-in-delay${index === 1 ? '-2' : index === 2 ? '-3' : index === 3 ? '-4' : ''}`}
              key={presentation.title}
            >
              <div className="presentation-icon">
                <i className={presentation.icon} aria-hidden="true" />
              </div>
              <div>
                <h3>{presentation.title}</h3>
                <p>{presentation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title fade-in">Technical Skills</h2>
          <div className="skills-content">
            <div className="skills-category fade-in-delay">
              <h3>Programming Languages</h3>
              <div className="skill-bars">
                {skillCategories[0].bars.map((skill) => (
                  <div className="skill-bar" key={skill.name}>
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="skill-fill" data-width={skill.value} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category fade-in-delay-2">
              <h3>Frameworks & Tools</h3>
              <div className="skills-grid">
                {skillCategories[1].tools.map((tool) => (
                  <div className="skill-item" key={tool.name}>
                    <i className={tool.icon} aria-hidden="true" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-download">
        <div className="container">
          <div className="resume-content fade-in">
            <h2>Download My Resume</h2>
            <p>Get a detailed overview of my academic background, research experience, and technical skills.</p>
            <a href="/resume.pdf" className="btn btn-primary btn-large" download>
              <i className="fas fa-download" aria-hidden="true" />
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info fade-in-delay">
              <h3>Let's Connect</h3>
              <p>
                I am always interested in new research opportunities, collaborations, and
                interesting projects. Feel free to reach out!
              </p>

              <div className="contact-methods">
                {contactMethods.map((method) => (
                  <div className="contact-method" key={method.value}>
                    <i className={method.icon} aria-hidden="true" />
                    <span>{method.value}</span>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/harshnee-k-s/"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/harshneekannapiran"
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github" aria-hidden="true" />
                </a>
                <a href="mailto:harshneekannapiran@gmail.com" className="social-link" aria-label="Email">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>

            <form className="contact-form fade-in-delay-2" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-group">
                <textarea id="message" name="message" rows="5" required placeholder=" " />
                <label htmlFor="message">Message</label>
              </div>

              {formState.message ? (
                <p className={`form-status form-status-${formState.status}`}>{formState.message}</p>
              ) : null}

              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`} aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Harshnee K S. All rights reserved.</p>
        </div>
      </footer>

      {scrollToTopVisible ? (
        <button type="button" className="scroll-to-top" onClick={handleScrollToTop} aria-label="Scroll to top">
          <i className="fas fa-arrow-up" aria-hidden="true" />
        </button>
      ) : null}
    </>
  );
}

export default App;
