import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const projects = [
  {
    title: "Smart City Dashboard",
    description:
      "Real-time smart city dashboard for monitoring urban data, visualizing metrics and managing city operations through an interactive interface.",
    tech: ["React", "TypeScript", "React Query", "WebSocket"],
    repo: "https://github.com/phuc527/smart-city-dashboard",
  },
  {
    title: "BE Engineering Lab",
    description:
      "Backend engineering lab covering API design, authentication, concurrency, caching, database optimization, system design and scalable backend patterns.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    repo: "https://github.com/phuc527/be-engineering-lab",
  },
  {
    title: "Learn Design System",
    description:
      "Reusable frontend design system with scalable UI components, consistent design tokens and component-driven development practices.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    repo: "https://github.com/phuc527/learn-design-system",
  },
  {
    title: "Airbnb Clone",
    description:
      "Modern accommodation booking application focused on reusable UI, property listings, search, filtering, responsive layouts and modern React application architecture.",
    tech: ["Next.js", "TypeScript", "ReactJS", "Tailwind CSS"],
    repo: "https://github.com/phuc527/airbnb-clone",
  },
];

const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS"],
  Backend: ["PHP", "Laravel", "Node.js", "REST API", "Authentication"],
  Database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  Tools: ["Git", "Docker", "GitHub", "Cursor", "GitHub Copilot"],
};

const experience = [
  {
    period: "09/2023 — 05/2026",
    title: "Frontend Developer",
    company: "NAMLONG SOFTWARE",
    description:
      "Delivered responsive, scalable, and performance-optimized frontend solutions for enterprise product-based applications. Built reusable React.js components, managed complex application state, integrated RESTful APIs and real-time data pipelines, and collaborated in an Agile/Scrum international cross-functional team.",
    tags: ["React.js", "TypeScript", "Redux", "RESTful API", "Kafka"],
  },
  {
    period: "02/2022 — 08/2023",
    title: "Full-stack Developer",
    company: "COZWORK JSC",
    description:
      "Delivered client outsourcing projects from database modeling and API development to interactive frontend features. Built business logic and RESTful APIs with PHP/Laravel, developed responsive React.js interfaces, and worked with real-time communication, third-party integrations, cloud infrastructure, and reporting dashboards.",
    tags: ["React.js", "PHP", "Laravel", "MySQL", "GCP"],
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function GithubIcon() {
  return <Github size={18} strokeWidth={1.8} />;
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">
          PH<span>ÚC</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-github"
          href="https://github.com/phuc527"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
      </nav>

      <section id="home" className="hero section-shell">
        <div className="hero-copy">
          <div className="status">
            <span className="status-dot" />
            Available for opportunities
          </div>

          <p className="hero-kicker">HELLO, I&apos;M PHÚC</p>

          <h1>
            Fullstack
            <br />
            <span>Developer.</span>
          </h1>

          <p className="hero-description">
            I build reliable, scalable web applications with a focus on clean
            code, practical architecture and great user experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View my work <ArrowUpRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/phuc527"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20} /> GitHub
            </a>
            <span>•</span>
            <a href="#contact">
              <Mail size={19} /> Email
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal-top">
            <span />
            <span />
            <span />
            <small>phuc@dev ~ </small>
          </div>
          <pre>
            {`const developer = {
  name: "Phúc",
  role: "Fullstack Developer",
  frontend: [
    "React",
    "TypeScript",
    "Next.js"
  ],
  backend: [
    "PHP",
    "Laravel",
    "Node.js"
  ],
  mindset: "Build & Learn"
};`}
          </pre>
          <div className="terminal-cursor">_</div>
        </div>

        <a className="scroll-hint" href="#about">
          <ArrowDown size={17} />
          Scroll to explore
        </a>
      </section>

      <section id="about" className="section-shell section">
        <SectionTitle
          eyebrow="01 / ABOUT"
          title="I turn ideas into working products."
          description="A developer profile focused on practical engineering, maintainable code and continuous learning."
        />

        <div className="about-grid">
          <div className="about-photo">
            <img
              src="https://github.com/phuc527.png"
              alt="Phúc GitHub avatar"
            />
            <div className="photo-tag">
              <Code2 size={16} />
              <span>PHUC527</span>
            </div>
          </div>

          <div className="about-content">
            <p>
              I&apos;m a Fullstack Developer working mainly with React,
              TypeScript, PHP, Laravel and Node.js. I enjoy building web
              applications from frontend interfaces to backend APIs and data
              flows.
            </p>
            <p>
              My approach is simple: understand the problem, design a clean
              solution, write maintainable code and improve it through feedback.
            </p>

            <div className="about-facts">
              <div>
                <MapPin size={18} />
                <span>Vietnam</span>
              </div>
              <div>
                <BriefcaseBusiness size={18} />
                <span>Fullstack Developer</span>
              </div>
              <div>
                <Terminal size={18} />
                <span>React · PHP · Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-shell section section-dark">
        <SectionTitle
          eyebrow="02 / SKILLS"
          title="Tools I use to build."
          description="The stack is intentionally focused on technologies useful for real-world fullstack applications."
        />

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <div className="skill-icon">
                {category === "Frontend" && <Code2 size={22} />}
                {category === "Backend" && <Server size={22} />}
                {category === "Database" && <Terminal size={22} />}
                {category === "Tools" && <Sparkles size={22} />}
              </div>
              <h3>{category}</h3>
              <div className="skill-list">
                {items.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell section">
        <SectionTitle
          eyebrow="03 / EXPERIENCE"
          title="What I do."
          description="A compact overview of my current development work."
        />

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.period}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-line">
                <span />
              </div>
              <div className="timeline-content">
                <span className="muted">{item.company}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-row">
                  <span>React</span>
                  <span>PHP</span>
                  <span>Laravel</span>
                  <span>REST API</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-shell section section-projects">
        <SectionTitle
          eyebrow="04 / PROJECTS"
          title="Selected work."
          description="Projects pulled from my public GitHub profile and presented as portfolio case studies."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-card-top">
                <Github size={24} />
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <ArrowUpRight size={19} />
                </a>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                View repository <ArrowUpRight size={17} />
              </a>
            </article>
          ))}
        </div>

        <div className="github-cta">
          <div>
            <span className="eyebrow">GITHUB</span>
            <h3>See more of my code.</h3>
            <p>
              Explore my public repositories, experiments and learning projects.
            </p>
          </div>
          <a
            className="button button-light"
            href="https://github.com/phuc527"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            github.com/phuc527
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-shell contact-inner">
          <div>
            <span className="eyebrow">05 / CONTACT</span>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              Have a project, opportunity or just want to talk about
              development? Feel free to reach out.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:phucbo755@gmail.com">
              <Mail size={21} />
              phucbo755@gmail.com
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://github.com/phuc527"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={21} />
              github.com/phuc527
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={21} />
              LinkedIn
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="section-shell footer-inner">
          <span>© {new Date().getFullYear()} Phúc. Built with Next.js.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
