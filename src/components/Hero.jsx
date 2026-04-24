import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';
import profilePic from '../assets/ayushi_3.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
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
      </div>
      <div className="hero-image-wrapper">
        <div className="hero-image-glow"></div>
        {/* Placeholder image that the user can replace later */}
        <img
          src={profilePic} alt="Ayushi" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
