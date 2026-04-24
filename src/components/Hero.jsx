import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import profilePic from '../assets/ayushi_3.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="hero-greeting">Hello, I'm</h3>
        <h1 className="hero-title">
          Ayushi
        </h1>
        <h2 className="hero-subtitle">
          Computer Science <span className="text-accent">Engineer</span>
        </h2>
        <p className="hero-desc">
          I'm a B.Tech CSE student at KIIT with a passion for building robust software systems, AI pipelines, and modern web applications.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight className="btn-icon" size={20} />
          </a>
          <a href="https://github.com/Ayushi40804" target="_blank" rel="noreferrer" className="btn-outline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/Ayushi40804" target="_blank" rel="noreferrer" className="btn-outline">
            LinkedIn
          </a>
        </div>
      </motion.div>
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-image-glow"></div>
        {/* Placeholder image that the user can replace later */}
        <img
          src={profilePic} alt="Ayushi" className="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
