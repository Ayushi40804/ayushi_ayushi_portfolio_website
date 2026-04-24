import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: 'Web3 DApp',
      description: 'A gamified NFT platform with hybrid auth (Google OAuth + MetaMask) and gasless minting for 50+ users.',
      tech: ['FastAPI', 'Solidity', 'Hardhat', 'IPFS'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    },
    {
      title: 'Text2Scene: AI Video Pipeline',
      description: 'An agent-based AI pipeline generating videos from text prompts, optimized for multi-stage orchestration.',
      tech: ['PyTorch', 'Hugging Face', 'Diffusion Models'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    },
    {
      title: 'Web Proxy',
      description: 'A browser-based web proxy handling 300+ concurrent HTTP requests with real-time packet inspection.',
      tech: ['Python', 'Sockets', 'Flask'],
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    },
    {
      title: 'Interview Evaluation System',
      description: 'An LLM-driven evaluation system over a 250+ doc knowledge base using RAG, built for a DRDO problem statement.',
      tech: ['Python', 'LangChain', 'Groq API', 'RAG'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804/Interview-Evaluation-System',
      live: '#'
    },
    {
      title: 'Agro-Ocean Monitoring Platform',
      description: 'A full-stack AI-powered monitoring system with a React dashboard, FastAPI backend, and an integrated LLM-based assistant for real-time environmental insights.',
      tech: ['React', 'FastAPI', 'IoT APIs', 'LLMs'],
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804/Agro-Ocean-Monitoring-Platform',
      live: '#'
    },
    {
      title: 'Stable Diffusion LoRA Fine-Tuning',
      description: 'Fine-tuned Stable Diffusion models using LoRA to generate domain-specific images with improved style consistency and optimized training compute.',
      tech: ['PyTorch', 'Diffusion Models', 'Hugging Face'],
      image: 'https://images.unsplash.com/photo-1625296068254-20cecd3a7041?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/MLSAKIIT/stablediffusionlora',
      live: '#'
    },
    {
      title: 'VS Code Extension',
      description: 'An automated environment-provisioning tool that detects project requirements and applies optimized workspace settings via the VS Code API.',
      tech: ['TypeScript', 'Node.js', 'VS Code API'],
      image: 'https://images.unsplash.com/photo-1607799279861-4dddf8473d71?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    },
    {
      title: 'Apocalypse Bot: LLM Survival Guide',
      description: 'A RAG-Powered AI real-time survival assistant capable of processing complex map descriptions and generating actionable survival plans.',
      tech: ['Python', 'Groq API', 'FAISS', 'Streamlit'],
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    },
    {
      title: 'Arachnet: Vulnerability Scanner',
      description: 'A comprehensive vulnerability scanning tool featuring modules for DNS dumping, IDOR, and XSS detection.',
      tech: ['Python', 'Shell Scripting'],
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804/Arachnet',
      live: '#'
    },
    {
      title: 'Hacktoberfest Contributions',
      description: 'Actively contributed to various open-source projects during Hacktoberfest, earning the exclusive "Supercontributor" Gold Badge.',
      tech: ['Open Source', 'Git', 'GitHub', 'Collaboration'],
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=800',
      github: 'https://github.com/Ayushi40804',
      live: '#'
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        Featured <span className="text-accent">Projects</span>
      </motion.h2>
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <motion.div key={index} className="project-card glass-card" variants={itemVariants} whileHover={{ y: -5 }}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub Link">
                  <Code2 size={24} />
                </a>
                <a href={project.live} className="project-link" aria-label="Live Demo Link">
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
