import React, { useState, useEffect } from 'react';
import './EnhancedStrapi.css';

const EnhancedStrapiIntegration = () => {
  const [globalData, setGlobalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const API_URL = 'http://192.168.0.106:1337';
  const API_ENDPOINT = `${API_URL}/api/global?populate=deep`;

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          setGlobalData(data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGlobalData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Vielen Dank für Ihre Nachricht, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Lade Inhalte...</p>
      </div>
    );
  }

  const data = globalData || {
    title: "David Hoffert",
    description: "Ich bin David Hoffert, Softwareentwickler aus Berlin. Aktuell befinde ich mich im Abschlussjahr meiner Umschulung und arbeite an spannenden Projekten im Bereich Webentwicklung. Meine Leidenschaft gilt der Erstellung moderner, nutzerfreundlicher Anwendungen mit aktuellen Technologien."
  };

  return (
    <div className="enhanced-strapi">
      {/* Hero Section mit modernem Design */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">David Hoffert</h1>
          <p className="hero-subtitle">Softwareentwickler & Technik-Enthusiast</p>
          <div className="hero-cta">
            <button className="cta-button primary">Projekte entdecken</button>
            <button className="cta-button secondary">Kontakt aufnehmen</button>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>Über Mich</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>{data.description}</p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="container">
          <div className="section-header">
            <h2>Technologien</h2>
            <div className="section-divider"></div>
          </div>
          <div className="tech-grid">
            {['JavaScript', 'React', 'CSS', 'WordPress', 'Docker', 'Kubernetes', 'HTML/CSS'].map((tech, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">
                  {getTechIcon(tech)}
                </div>
                <h3>{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="hobbies-section">
        <div className="container">
          <div className="section-header">
            <h2>Privat</h2>
            <div className="section-divider"></div>
            <p>Wenn ich nicht gerade Code schreibe, beschäftige ich mich mit:</p>
          </div>
          <div className="hobbies-grid">
            {[
              { name: '3D-Druck', icon: '🖨️', color: '#ff6b6b' },
              { name: 'Gartenarbeit', icon: '🌿', color: '#51cf66' },
              { name: 'DIY-Projekte', icon: '🔨', color: '#ffa94d' },
              { name: 'Technik-Basteleien', icon: '🔧', color: '#339af0' },
              { name: 'Dinge live-Testen', icon: '🚀', color: '#cc5de8' }
            ].map((hobby, index) => (
              <div key={index} className="hobby-card" style={{ '--hobby-color': hobby.color }}>
                <div className="hobby-icon">{hobby.icon}</div>
                <h3>{hobby.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Kontakt</h2>
            <div className="section-divider"></div>
            <p>Treten Sie mit mir in Verbindung</p>
          </div>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Ihr Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Ihre E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Ihre Nachricht"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Nachricht senden</button>
            </form>
            
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div>
                  <h4>Adresse</h4>
                  <p>Berlin, Deutschland</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>davidhoffert@ymail.com</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📱</div>
                <div>
                  <h4>Telefon</h4>
                  <p>0178 8166644</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="enhanced-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>David Hoffert</h3>
              <p>Softwareentwickler & Technik-Enthusiast</p>
            </div>
            <div className="footer-section">
              <h4>Navigation</h4>
              <nav className="footer-nav">
                <a href="#about">Über Mich</a>
                <a href="#tech">Technologien</a>
                <a href="#hobbies">Hobbies</a>
                <a href="#contact">Kontakt</a>
              </nav>
            </div>
            <div className="footer-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">🐙</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 David Hoffert | Alle Rechte vorbehalten</p>
            <p>Daten bereitgestellt von Strapi CMS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Hilfsfunktion für Tech-Icons
const getTechIcon = (tech) => {
  const icons = {
    'JavaScript': '⚡',
    'React': '⚛️',
    'CSS': '🎨',
    'WordPress': '📝',
    'Docker': '🐳',
    'Kubernetes': '☸️',
    'HTML/CSS': '🌐'
  };
  return icons[tech] || '💻';
};

export default EnhancedStrapiIntegration;