import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link with the form data
    const mailtoLink = `mailto:ayushi40804@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
    
    // Clear the form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In <span className="text-accent">Touch</span></h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email. 👋</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>ayushi40804@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 9455626057</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Bhubaneswar, Odisha</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-primary w-100">
            Send Message <Send className="btn-icon" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
