import React from 'react';
import { Code2, Briefcase, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>Ayushi<span className="text-accent">.</span></h2>
          <p>Computer Science Engineer & Developer.</p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Ayushi40804" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={20} /></a>
          <a href="https://linkedin.com/in/Ayushi40804" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={20} /></a>
          <a href="mailto:ayushi40804@gmail.com" aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ayushi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
