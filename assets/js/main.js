// Jekyll CEH Study Guide JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle functionality
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  const pageWrapper = document.getElementById("page-wrapper");
  const body = document.body;

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener("click", function () {
      body.classList.toggle("sidebar-hidden");
      const isHidden = body.classList.contains("sidebar-hidden");
      localStorage.setItem("sidebar-hidden", isHidden);
    });

    // Restore sidebar state
    const savedState = localStorage.getItem("sidebar-hidden");
    if (savedState === "true") {
      body.classList.add("sidebar-hidden");
    }
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      localStorage.setItem("theme-dark", isDark);
    });

    // Restore theme
    const savedTheme = localStorage.getItem("theme-dark");
    if (savedTheme === "true") {
      body.classList.add("dark");
    }
  }

  // Search functionality
  const searchToggle = document.getElementById("search-toggle");
  const searchWrapper = document.querySelector(".search-wrapper");

  if (searchToggle && searchWrapper) {
    searchToggle.addEventListener("click", function () {
      searchWrapper.classList.toggle("hidden");
      if (!searchWrapper.classList.contains("hidden")) {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          searchInput.focus();
        }
      }
    });
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Progress bar for reading
  function updateProgressBar() {
    const content = document.querySelector("#content main");
    if (!content) return;

    const windowHeight = window.innerHeight;
    const documentHeight = content.scrollHeight;
    const scrollTop = window.scrollY;

    let progressBar = document.querySelector(".progress-bar");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "progress-bar";
      document.body.appendChild(progressBar);
    }

    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
  }

  window.addEventListener("scroll", updateProgressBar);
  updateProgressBar();

  // Copy code blocks functionality
  const codeBlocks = document.querySelectorAll("pre code");
  codeBlocks.forEach(block => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.innerHTML = '<i class="fa fa-copy"></i>';
    button.title = "Copy code";

    button.addEventListener("click", function () {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.innerHTML = '<i class="fa fa-check"></i>';
        button.style.color = "#28a745";
        setTimeout(() => {
          button.innerHTML = '<i class="fa fa-copy"></i>';
          button.style.color = "";
        }, 2000);
      });
    });

    block.parentElement.style.position = "relative";
    block.parentElement.appendChild(button);
  });

  // Add copy button styles
  const style = document.createElement("style");
  style.textContent = `
        .copy-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: none;
            padding: 0.5rem;
            border-radius: 4px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        pre:hover .copy-button {
            opacity: 1;
        }
        .copy-button:hover {
            background: rgba(0, 0, 0, 0.9);
        }
        .progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            z-index: 9999;
            transition: width 0.3s ease;
        }
    `;
  document.head.appendChild(style);

  // Simple terminal styling - CSS handles the visual appearance
  console.log("Terminal styles applied via CSS");

  console.log("Jekyll CEH Study Guide loaded successfully!");
});
