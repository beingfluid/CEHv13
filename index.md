---
layout: default
title: "CEH v13 Study Guide"
permalink: /
---

<div class="home-container">
  <header class="hero-section">
    <h1>{{ site.title }}</h1>
    <p class="hero-description">{{ site.description }}</p>
    <div class="hero-stats">
      <div class="stat">
        <strong>{{ site.modules.size | default: 20 }}</strong>
        <span>Modules</span>
      </div>
      <div class="stat">
        <strong>500+</strong>
        <span>Practice Questions</span>
      </div>
      <div class="stat">
        <strong>100%</strong>
        <span>CEH v13 Coverage</span>
      </div>
    </div>
  </header>

  <section class="quick-links">
    <h2>Quick Start</h2>
    <div class="link-grid">
      <a href="{{ '/introduction/' | relative_url }}" class="quick-link">
        <i class="fa fa-play-circle"></i>
        <h3>Getting Started</h3>
        <p>Introduction to the CEH certification and study approach</p>
      </a>
      
      <a href="{{ '/study-tips/' | relative_url }}" class="quick-link">
        <i class="fa fa-lightbulb"></i>
        <h3>Study Tips</h3>
        <p>Effective strategies for CEH exam preparation</p>
      </a>
      
      <a href="{{ '/exam-info/' | relative_url }}" class="quick-link">
        <i class="fa fa-info-circle"></i>
        <h3>Exam Information</h3>
        <p>Official CEH v13 exam details and requirements</p>
      </a>
      
      <a href="{{ '/tools-reference/' | relative_url }}" class="quick-link">
        <i class="fa fa-tools"></i>
        <h3>Tools Reference</h3>
        <p>Complete guide to ethical hacking tools and techniques</p>
      </a>
    </div>
  </section>

  <section class="modules-overview">
    <h2>Study Modules</h2>
    <div class="modules-grid">
      {% assign modules = site.modules | sort: 'weight' %}
      {% for module in modules limit: 8 %}
      <a href="{{ module.url | relative_url }}" class="module-card">
        <div class="module-number">{{ module.module }}</div>
        <h3>{{ module.title }}</h3>
        <p>{{ module.content | strip_html | truncate: 80 }}</p>
        {% if module.tags %}
        <div class="module-tags">
          {% for tag in module.tags limit: 3 %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </a>
      {% endfor %}
    </div>
    
    <div class="view-all-link">
      <a href="{{ '/modules/' | relative_url }}" class="btn-primary">
        View All {{ site.modules.size | default: 20 }} Modules
        <i class="fa fa-arrow-right"></i>
      </a>
    </div>
  </section>
</div>

<style>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero-section {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.05), rgba(139, 92, 246, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.25rem;
  color: var(--fg);
  opacity: 0.8;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat strong {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--sidebar-active);
}

.stat span {
  font-size: 0.9rem;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.quick-links, .modules-overview {
  margin-bottom: 4rem;
}

.quick-links h2, .modules-overview h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--fg);
}

.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.quick-link {
  background: var(--theme-popup-bg);
  border: 2px solid var(--theme-popup-border);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: var(--fg);
  transition: all 0.3s ease;
  text-align: center;
}

.quick-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
  border-color: var(--sidebar-active);
}

.quick-link i {
  font-size: 3rem;
  color: var(--sidebar-active);
  margin-bottom: 1rem;
}

.quick-link h3 {
  margin: 1rem 0 0.5rem;
  font-size: 1.25rem;
}

.quick-link p {
  opacity: 0.8;
  margin: 0;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.module-card {
  background: var(--theme-popup-bg);
  border: 2px solid var(--theme-popup-border);
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: var(--fg);
  transition: all 0.3s ease;
  position: relative;
}

.module-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--sidebar-active);
}

.module-number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--sidebar-active);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
}

.module-card h3 {
  margin: 0 0 1rem;
  font-size: 1.2rem;
  padding-right: 4rem;
}

.module-card p {
  opacity: 0.8;
  margin: 0 0 1rem;
  line-height: 1.5;
}

.module-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: rgba(37, 99, 235, 0.1);
  color: var(--sidebar-active);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.view-all-link {
  text-align: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
  color: white;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }
  
  .link-grid {
    grid-template-columns: 1fr;
  }
  
  .modules-grid {
    grid-template-columns: 1fr;
  }
}
</style>
