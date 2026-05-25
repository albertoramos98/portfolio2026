import { useState } from 'react'
import './App.css'

function App() {
  const handleDownloadResume = () => {
    // Assuming the file is in the public folder or root for now
    window.open('/Curriculo_Alberto_Ramos.docx', '_blank');
  };

  return (
    <>
      <nav className="nav-header">
        <div className="nav-content">
          <span className="nav-logo">AR</span>
          <div className="nav-links">
            <a href="#summary">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experiência</a>
            <button onClick={handleDownloadResume} className="resume-btn-small">CV</button>
          </div>
        </div>
      </nav>

      <div className="floating-logos-container">
        <div className="floating-logo python">Python</div>
        <div className="floating-logo mongodb">MongoDB</div>
        <div className="floating-logo sql">SQL</div>
        <div className="floating-logo react">React</div>
        <div className="floating-logo node">Node.js</div>
        <div className="floating-logo ai">IA</div>
        <div className="floating-logo ts">TypeScript</div>
      </div>

      <section id="center" className="animate-in">
        <div>
          <h1>Alberto Ramos</h1>
          <p className="hero-subtitle">
            Desenvolvedor Full Stack & Engenheiro de Automação (IA)
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="counter"
              onClick={handleDownloadResume}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Baixar Currículo
            </button>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="summary" className="content-section animate-in">
        <h2>Sobre Mim</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Sou um desenvolvedor Full Stack focado em criar soluções digitais escaláveis e automatizar operações complexas utilizando Inteligência Artificial. Tenho experiência sólida na construção de sistemas web modernos, integrações de APIs e fluxos automatizados que reduzem trabalho manual e aumentam a produtividade.
        </p>
      </section>

      <div className="ticks"></div>

      <section id="skills" className="content-section animate-in">
        <h2>Minha Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Front-End
            </h3>
            <div className="tags">
              <span>React.js</span>
              <span>TypeScript</span>
              <span>JavaScript (ES6+)</span>
              <span>Python</span>
              <span>UX/UI Design</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.1 12.3"></path><path d="M12 2a10 10 0 0 1 10 10"></path><path d="M12 12L19 19"></path></svg>
              IA & Automação
            </h3>
            <div className="tags">
              <span>Python (FastAPI/Flask)</span>
              <span>Agentes de IA</span>
              <span>Prompt Engineering</span>
              <span>n8n / Make</span>
              <span>Integração SaaS</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
              Back-End & Dados
            </h3>
            <div className="tags">
              <span>Python</span>
              <span>Node.js</span>
              <span>APIs REST</span>
              <span>SQL</span>
              <span>MongoDB</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Soft Skills
            </h3>
            <div className="tags">
              <span>Resolução de Problemas</span>
              <span>Aprendizado Rápido</span>
              <span>Comunicação</span>
              <span>Organização</span>
              <span>Pensamento Analítico</span>
              <span>Adaptabilidade</span>
              <span>Trabalho em Equipe</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="experience" className="content-section animate-in">
        <h2>Minha Jornada</h2>
        <div className="experience-list">
          <div className="exp-item">
            <div className="exp-header">
              <h3>Full Stack & Automação (IA)</h3>
              <span className="exp-date">2026</span>
            </div>
            <span className="exp-company">
              HCvape (Projeto Comercial) | 
              <a href="https://hcvape.vercel.app/" target="_blank" rel="noreferrer" className="exp-link"> Ver Projeto</a>
            </span>
            <ul>
              <li>Projetei e desenvolvi integralmente um sistema Full Stack para gestão de pedidos.</li>
              <li>Estruturei fluxos administrativos integrados com IA, centralizando a operação.</li>
              <li>Realizei a modelagem de banco de dados e criei APIs REST em TypeScript.</li>
            </ul>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <h3>Diretor Criativo & Desenvolvedor Web</h3>
              <span className="exp-date">2025</span>
            </div>
            <span className="exp-company">
              B3 Ambientes Corporativos (Freelance) | 
              <a href="https://www.b3ambientescorporativos.com.br/" target="_blank" rel="noreferrer" className="exp-link"> Ver Site</a>
            </span>
            <ul>
              <li>Construí um website institucional moderno focado em conversão e performance.</li>
              <li>Atuei diretamente na interface e experiência do usuário (UI/UX).</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Vamos Conversar</h2>
          <p>Conecte-se comigo</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/albertoramos123l" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/albertoramos98" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:albertinhorss@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
