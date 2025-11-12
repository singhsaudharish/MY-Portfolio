const defaultConfig = {
  background_color: "#0f172a",
  surface_color: "#1e293b",
  text_color: "#f1f5f9",
  primary_action_color: "#3b82f6",
  secondary_action_color: "#64748b",
  font_family: "Inter",
  font_size: 16,
  name: "Harish Singh Saud",
  tagline: "Web Developer",
  about_title: "About Me",
  about_text: "I'm a passionate developer who loves creating beautiful and functional web experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.",
  projects_title: "Featured Projects",
  contact_title: "Get In Touch",
  contact_email: "singhsaudharish00@gmail.com"
  
};

let config = {};

function createPortfolio() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <!-- Navigation -->
    <nav id="nav" class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div id="nav-name" class="text-xl font-bold"></div>
        <div class="flex gap-6">
          <a href="#about" class="nav-link">About</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-full flex items-center justify-center px-6 py-20">
      <div class="text-center max-w-4xl">
        <h1 id="hero-name" class="mb-4 font-bold"></h1>
        <p id="hero-tagline" class="mb-8"></p>
        <a href="#contact" class="contact-button inline-block px-8 py-3 rounded-lg font-semibold">
          Let's Work Together
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="px-6 py-20">
      <div class="max-w-4xl mx-auto">
        <h2 id="about-title" class="mb-6 font-bold"></h2>
        <p id="about-description" class="leading-relaxed"></p>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="px-6 py-20">
      <div class="max-w-6xl mx-auto">
        <h2 id="projects-title" class="mb-12 font-bold text-center"></h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="project-card rounded-lg p-6">
            <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-3xl">🎨</div>
            <h3 class="text-xl font-bold mb-2">Design System</h3>
            <p class="mb-4">A comprehensive design system for modern web applications</p>
            <a href="#" target="_blank" class="inline-block font-semibold">View Project →</a>
          </div>
          <div class="project-card rounded-lg p-6">
            <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-3xl">📱</div>
            <h3 class="text-xl font-bold mb-2">Mobile App</h3>
            <p class="mb-4">A sleek mobile experience with intuitive navigation</p>
            <a href="#" target="_blank" class="inline-block font-semibold">View Project →</a>
          </div>
          <div class="project-card rounded-lg p-6">
            <div class="w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-3xl">🚀</div>
            <h3 class="text-xl font-bold mb-2">Web Platform</h3>
            <p class="mb-4">A scalable platform built with modern technologies</p>
            <a href="#" target="_blank" class="inline-block font-semibold">View Project →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="px-6 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 id="contact-title" class="mb-6 font-bold"></h2>
        <p class="mb-8">I'd love to hear about your project. Let's create something amazing together!</p>
        <a id="contact-email-link" class="contact-button inline-block px-8 py-3 rounded-lg font-semibold">Send Email</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-6 py-8 text-center border-t">
      <p id="footer-text" class="text-sm"></p>
    </footer>
  `;
}

async function onConfigChange(newConfig) {
  const customFont = newConfig.font_family || defaultConfig.font_family;
  const baseFontStack = 'system-ui, -apple-system, sans-serif';
  const fontFamily = `${customFont}, ${baseFontStack}`;
  const baseSize = newConfig.font_size || defaultConfig.font_size;

  const backgroundColor = newConfig.background_color || defaultConfig.background_color;
  const surfaceColor = newConfig.surface_color || defaultConfig.surface_color;
  const textColor = newConfig.text_color || defaultConfig.text_color;
  const primaryColor = newConfig.primary_action_color || defaultConfig.primary_action_color;
  const secondaryColor = newConfig.secondary_action_color || defaultConfig.secondary_action_color;

  document.body.style.fontFamily = fontFamily;
  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = textColor;

  const nav = document.getElementById('nav');
  nav.style.backgroundColor = backgroundColor;
  nav.style.borderBottom = `1px solid ${surfaceColor}`;

  const navName = document.getElementById('nav-name');
  navName.textContent = newConfig.name || defaultConfig.name;
  navName.style.fontSize = `${baseSize * 1.25}px`;
  navName.style.color = textColor;

  document.querySelectorAll('.nav-link').forEach(link => {
    link.style.fontSize = `${baseSize}px`;
    link.style.color = secondaryColor;
  });

  const hero = document.getElementById('hero');
  hero.style.backgroundColor = backgroundColor;

  const heroName = document.getElementById('hero-name');
  heroName.textContent = newConfig.name || defaultConfig.name;
  heroName.style.fontSize = `${baseSize * 3}px`;
  heroName.style.color = textColor;

  const heroTagline = document.getElementById('hero-tagline');
  heroTagline.textContent = newConfig.tagline || defaultConfig.tagline;
  heroTagline.style.fontSize = `${baseSize * 1.5}px`;
  heroTagline.style.color = secondaryColor;

  document.querySelectorAll('.contact-button').forEach(button => {
    button.style.backgroundColor = primaryColor;
    button.style.color = '#ffffff';
    button.style.fontSize = `${baseSize}px`;
  });

  const aboutSection = document.getElementById('about');
  aboutSection.style.backgroundColor = surfaceColor;

  const aboutTitle = document.getElementById('about-title');
  aboutTitle.textContent = newConfig.about_title || defaultConfig.about_title;
  aboutTitle.style.fontSize = `${baseSize * 2}px`;
  aboutTitle.style.color = textColor;

  const aboutDescription = document.getElementById('about-description');
  aboutDescription.textContent = newConfig.about_text || defaultConfig.about_text;
  aboutDescription.style.fontSize = `${baseSize * 1.125}px`;
  aboutDescription.style.color = secondaryColor;

  const projectsSection = document.getElementById('projects');
  projectsSection.style.backgroundColor = backgroundColor;

  const projectsTitle = document.getElementById('projects-title');
  projectsTitle.textContent = newConfig.projects_title || defaultConfig.projects_title;
  projectsTitle.style.fontSize = `${baseSize * 2}px`;
  projectsTitle.style.color = textColor;

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.style.backgroundColor = surfaceColor;
    const title = card.querySelector('h3');
    const description = card.querySelector('p');
    const link = card.querySelector('a');
    const icon = card.querySelector('div');

    title.style.fontSize = `${baseSize * 1.25}px`;
    title.style.color = textColor;
    description.style.fontSize = `${baseSize}px`;
    description.style.color = secondaryColor;
    link.style.fontSize = `${baseSize}px`;
    link.style.color = primaryColor;
    icon.style.backgroundColor = primaryColor;
  });

  const contactSection = document.getElementById('contact');
  contactSection.style.backgroundColor = surfaceColor;

  const contactTitle = document.getElementById('contact-title');
  contactTitle.textContent = newConfig.contact_title || defaultConfig.contact_title;
  contactTitle.style.fontSize = `${baseSize * 2}px`;
  contactTitle.style.color = textColor;

  const contactText = contactSection.querySelector('p');
  contactText.style.fontSize = `${baseSize * 1.125}px`;
  contactText.style.color = secondaryColor;

  const contactEmailLink = document.getElementById('contact-email-link');
  const email = newConfig.contact_email || defaultConfig.contact_email;
  contactEmailLink.href = `mailto:${email}`;
  contactEmailLink.textContent = 'Send Email';

  const footer = document.querySelector('footer');
  footer.style.backgroundColor = backgroundColor;
  footer.style.borderColor = surfaceColor;

  const footerText = document.getElementById('footer-text');
  footerText.textContent = `© 2024 ${newConfig.name || defaultConfig.name}. All rights reserved.`;
  footerText.style.fontSize = `${baseSize * 0.875}px`;
  footerText.style.color = secondaryColor;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
  });
  config = window.elementSdk.config;
}

createPortfolio();
onConfigChange(config);
