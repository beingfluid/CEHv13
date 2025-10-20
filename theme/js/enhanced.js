// Enhanced CEH Study Guide JavaScript

// Enhance navigation buttons with text labels
function enhanceNavigationButtons() {
  // Find all navigation buttons
  const prevButtons = document.querySelectorAll(
    ".nav-chapters.previous, .mobile-nav-chapters.previous"
  );
  const nextButtons = document.querySelectorAll(
    ".nav-chapters.next, .mobile-nav-chapters.next"
  );

  // Add "Previous" text to previous buttons
  prevButtons.forEach(button => {
    const icon = button.querySelector("i");
    if (icon && !button.querySelector(".nav-text")) {
      const textSpan = document.createElement("span");
      textSpan.className = "nav-text";
      textSpan.textContent = "Previous";
      textSpan.style.marginLeft = "8px";
      textSpan.style.fontSize = "0.9em";
      textSpan.style.fontWeight = "600";
      button.appendChild(textSpan);
    }
  });

  // Add "Next" text to next buttons
  nextButtons.forEach(button => {
    const icon = button.querySelector("i");
    if (icon && !button.querySelector(".nav-text")) {
      const textSpan = document.createElement("span");
      textSpan.className = "nav-text";
      textSpan.textContent = "Next";
      textSpan.style.marginRight = "8px";
      textSpan.style.fontSize = "0.9em";
      textSpan.style.fontWeight = "600";
      button.insertBefore(textSpan, icon);
    }
  });
}

// Create and add progress bar
function createProgressBar() {
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  document.body.appendChild(progressBar);

  // Update progress on scroll
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + "%";
  });
}

// Add copy buttons to code blocks
function addCopyButtons() {
  const codeBlocks = document.querySelectorAll("pre code");

  codeBlocks.forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = "📋 Copy";
    copyButton.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: var(--primary-blue);
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    pre.style.position = "relative";
    pre.appendChild(copyButton);

    // Show button on hover
    pre.addEventListener("mouseenter", () => {
      copyButton.style.opacity = "1";
    });

    pre.addEventListener("mouseleave", () => {
      copyButton.style.opacity = "0";
    });

    // Copy functionality
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        copyButton.innerHTML = "✅ Copied!";
        setTimeout(() => {
          copyButton.innerHTML = "📋 Copy";
        }, 2000);
      } catch (err) {
        copyButton.innerHTML = "❌ Failed";
        setTimeout(() => {
          copyButton.innerHTML = "📋 Copy";
        }, 2000);
      }
    });
  });
}

// Create alert boxes for special content
function createAlertBoxes() {
  // Convert certain patterns to alert boxes
  const content = document.querySelector("#content main");
  if (!content) return;

  // Look for common patterns and convert them
  const paragraphs = content.querySelectorAll("p");

  paragraphs.forEach(p => {
    const text = p.textContent.toLowerCase();

    if (text.startsWith("note:") || text.startsWith("info:")) {
      p.className = "alert alert-info";
      p.innerHTML = "💡 " + p.innerHTML.replace(/^(note:|info:)/i, "");
    } else if (text.startsWith("warning:") || text.startsWith("caution:")) {
      p.className = "alert alert-warning";
      p.innerHTML = "⚠️ " + p.innerHTML.replace(/^(warning:|caution:)/i, "");
    } else if (text.startsWith("important:") || text.startsWith("danger:")) {
      p.className = "alert alert-danger";
      p.innerHTML = "🚨 " + p.innerHTML.replace(/^(important:|danger:)/i, "");
    } else if (text.startsWith("tip:") || text.startsWith("success:")) {
      p.className = "alert alert-success";
      p.innerHTML = "✅ " + p.innerHTML.replace(/^(tip:|success:)/i, "");
    }
  });
}

// Enhanced keyboard navigation
function enhanceKeyboardNavigation() {
  document.addEventListener("keydown", e => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      const searchInput = document.querySelector("#searchbar");
      if (searchInput) {
        searchInput.focus();
      }
    }

    // Ctrl/Cmd + B for sidebar toggle
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      const sidebarToggle = document.querySelector("#sidebar-toggle");
      if (sidebarToggle) {
        sidebarToggle.click();
      }
    }
  });
}

// Initialize all enhancements when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createProgressBar();
  addCopyButtons();
  createAlertBoxes();
  enhanceKeyboardNavigation();

  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Enhance navigation buttons
  enhanceNavigationButtons();

  console.log("🎨 CEH Study Guide enhanced styling loaded!");
});
