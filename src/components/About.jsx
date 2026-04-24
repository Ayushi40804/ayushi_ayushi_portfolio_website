import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cloud } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { name: 'Languages', icon: <Code size={24} />, items: 'Python, Java, Go, C, TypeScript, Bash' },
    { name: 'Backend', icon: <Terminal size={24} />, items: 'FastAPI, Flask, Spring Boot, Microservices' },
    { name: 'Data & DB', icon: <Database size={24} />, items: 'PostgreSQL, SQLite, Supabase, Data Preprocessing' },
    { name: 'Cloud & AI', icon: <Cloud size={24} />, items: 'GCP, Docker, CI/CD, PyTorch, Hugging Face, LLMs' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        About <span className="text-accent">Me</span>
      </motion.h2>
      <div className="about-content">
        <motion.div 
          className="about-text glass-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="skill-card glass-card" variants={itemVariants} whileHover={{ y: -5 }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.items}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
