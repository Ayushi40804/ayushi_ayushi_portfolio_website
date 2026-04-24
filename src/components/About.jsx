import React from 'react';
import { Code, Terminal, Database, Cloud } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Languages', icon: <Code size={24} />, items: 'Python, Java, Go, C, TypeScript, Bash' },
    { name: 'Backend', icon: <Terminal size={24} />, items: 'FastAPI, Flask, Spring Boot, Microservices' },
    { name: 'Data & DB', icon: <Database size={24} />, items: 'PostgreSQL, SQLite, Supabase, Data Preprocessing' },
    { name: 'Cloud & AI', icon: <Cloud size={24} />, items: 'GCP, Docker, CI/CD, PyTorch, Hugging Face, LLMs' }
  ];

  return (
    <section id="about" className="about">
      <h2>About <span className="text-accent">Me</span></h2>
      <div className="about-content">
        <div className="about-text glass-card">
          <p>
            I'm a Computer Science Engineering student (CGPA: 9.05/10.00) at Kalinga Institute of Industrial Technology, Bhubaneswar. My coursework includes advanced topics like AI, Machine Learning, and NLP.
          </p>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <strong>Leadership & Responsibility:</strong>
            <br />• <strong>Vice Lead</strong>, Microsoft Learn Student Ambassador KIIT Chapter
            <br />• <strong>Team Leader</strong>, Smart India Hackathon 2024 (Built an Interview Evaluation System for DRDO)
          </p>
          <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <strong>Achievements & Open Source:</strong>
            <br />• <strong>Hacktoberfest Supercontributor</strong> (Earned the prestigious Supercontributor Gold Badge and Level 4 Contributor status)
          </p>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
