// Enhanced CEH Study Guide JavaScript

// Dynamic Practice Questions System
let questionsData = [];

// Module titles mapping (since mdBook doesn't support front matter)
const moduleMap = {
  1: "Introduction to Ethical Hacking",
  2: "Footprinting and Reconnaissance",
  3: "Scanning Networks",
  4: "Enumeration",
  5: "Vulnerability Analysis",
  6: "System Hacking",
  7: "Malware Threats",
  8: "Sniffing",
  9: "Social Engineering",
  10: "Denial-of-Service",
  11: "Session Hijacking",
  12: "Evading IDS, Firewalls, and Honeypots",
  13: "Hacking Web Servers",
  14: "Hacking Web Applications",
  15: "SQL Injection",
  16: "Hacking Wireless Networks",
  17: "Hacking Mobile Platforms",
  18: "IoT and OT Hacking",
  19: "Cloud Computing",
  20: "Cryptography",
};

// Load questions from JSON file
async function loadQuestions() {
  // Check if we're in development mode (localhost)
  const isDevelopment =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  const possiblePaths = isDevelopment
    ? [
        "./questions.json",
        "../questions.json",
        "/questions.json",
        "questions.json",
      ]
    : [
        "/questions.json",
        "./questions.json",
        "../questions.json",
        "questions.json",
      ];

  for (let path of possiblePaths) {
    try {
      console.log(`Trying to fetch questions from: ${path}`);
      const response = await fetch(path);
      if (response.ok) {
        questionsData = await response.json();
        console.log("Questions loaded successfully:", questionsData.length);
        console.log("Questions data:", questionsData);
        return;
      } else {
        console.log(`Failed to load from ${path}: ${response.status}`);
      }
    } catch (error) {
      console.log(`Error loading from ${path}:`, error.message);
    }
  }

  console.error(
    "Failed to load questions from all paths, using embedded fallback"
  );

  // Fallback embedded questions for development
  questionsData = [
    {
      question:
        "Which of the following Nmap options is used to control the timing and speed of a scan?",
      options: ["nmap -T", "nmap -sV", "nmap -A", "nmap -O"],
      correctAnswer: "nmap -T",
      module: "3",
    },
  ];

  console.log("Using embedded questions:", questionsData.length);
}

// Extract module number from URL (primary method)
function getCurrentModule() {
  // Primary: Parse from URL (most reliable)
  const path = window.location.pathname;
  console.log("Current path:", path);
  const urlMatch = path.match(/(\d+)-/);
  if (urlMatch) {
    const module = urlMatch[1];
    console.log("✅ Module from URL:", module);
    return module;
  }

  // Fallback: Get module from data attribute in practice questions container
  const practiceContainer = document.getElementById(
    "practice-questions-container"
  );
  if (practiceContainer && practiceContainer.dataset.module) {
    const module = practiceContainer.dataset.module;
    console.log("Module from data attribute:", module);
    return module;
  }

  console.log("❌ No module detected");
  return null;
}

// Generate HTML for practice questions
function generateQuestionsHTML(moduleQuestions) {
  if (moduleQuestions.length === 0) {
    return "<p><em>No practice questions available for this module yet.</em></p>";
  }

  let html = "";
  moduleQuestions.forEach((q, index) => {
    html += `
      <div class="practice-question" data-question-index="${index}">
        <h3>Question ${index + 1}</h3>
        <p><strong>${q.question}</strong></p>
        <div class="question-options">
          ${q.options
            .map(
              (option, optIndex) => `
            <div class="option ${
              option === q.correctAnswer ? "correct" : "incorrect"
            }" 
                 data-option="${option}">
              <span class="option-indicator">
                ${option === q.correctAnswer ? "✅" : "❌"}
              </span>
              <span class="option-text ${
                option === q.correctAnswer ? "correct-text" : ""
              }">
                ${
                  option === q.correctAnswer
                    ? `<strong>${option}</strong> <em>(Correct)</em>`
                    : option
                }
              </span>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  });
  return html;
}

// Create practice questions container dynamically from front matter
function createPracticeQuestionsContainer() {
  const currentModule = getCurrentModule();

  // Only create if we have module metadata and no container exists
  if (
    !currentModule ||
    document.getElementById("practice-questions-container")
  ) {
    return;
  }

  // Look for Practice Questions header
  const practiceHeaders = document.querySelectorAll("h2");
  let practiceHeader = null;

  for (let header of practiceHeaders) {
    if (header.textContent.includes("Practice Questions")) {
      practiceHeader = header;
      break;
    }
  }

  if (practiceHeader) {
    console.log(
      "Creating dynamic practice questions container for module",
      currentModule
    );

    // Create the container
    const container = document.createElement("div");
    container.id = "practice-questions-container";
    container.setAttribute("data-module", currentModule);

    // Add some styling
    container.style.marginTop = "1rem";

    // Insert after the header
    practiceHeader.parentNode.insertBefore(
      container,
      practiceHeader.nextSibling
    );

    console.log("✅ Dynamic practice questions container created");
  }
}

// Update page title dynamically from module mapping
function updatePageTitle() {
  console.log("🔍 updatePageTitle() called");

  const currentModule = getCurrentModule();
  console.log("Current module detected:", currentModule);

  if (currentModule && moduleMap[currentModule]) {
    const moduleTitle = moduleMap[currentModule];
    const newTitle = `Module ${currentModule}: ${moduleTitle}`;

    // Look for existing H1 or create one
    let mainHeading = document.querySelector("h1");

    if (!mainHeading) {
      // Create H1 element if it doesn't exist
      mainHeading = document.createElement("h1");

      // Insert it at the beginning of the main content
      const mainContent = document.querySelector("main");
      if (mainContent && mainContent.firstElementChild) {
        mainContent.insertBefore(mainHeading, mainContent.firstElementChild);
      } else if (mainContent) {
        mainContent.appendChild(mainHeading);
      }

      // Add some styling
      mainHeading.style.marginTop = "0";
      mainHeading.style.marginBottom = "1.5rem";
      mainHeading.style.fontSize = "2.5rem";
      mainHeading.style.fontWeight = "600";
      mainHeading.style.color = "var(--fg)";
    }

    mainHeading.textContent = newTitle;
    console.log("✅ Updated page title to:", newTitle);
  } else {
    console.log("❌ No module mapping found for:", currentModule);
  }
}

// Load and display questions for current module
async function loadModuleQuestions() {
  const currentModule = getCurrentModule();
  console.log("Detected current module:", currentModule);

  if (!currentModule) {
    console.log("No module detected, skipping question loading");
    return;
  }

  // Wait for questions to load if not already loaded
  if (questionsData.length === 0) {
    console.log("Questions not loaded yet, loading now...");
    await loadQuestions();
  }

  // Filter questions for current module
  const moduleQuestions = questionsData.filter(q => q.module === currentModule);
  console.log(
    `Found ${moduleQuestions.length} questions for module ${currentModule}`
  );
  console.log("Available questions:", questionsData);
  console.log("Filtered module questions:", moduleQuestions);

  // Find practice questions container
  const practiceContainer = document.getElementById(
    "practice-questions-container"
  );

  if (practiceContainer) {
    console.log("Found practice questions container");

    // Clear existing content
    practiceContainer.innerHTML = "";

    const questionsContainer = document.createElement("div");
    questionsContainer.className = "dynamic-questions";
    questionsContainer.innerHTML = generateQuestionsHTML(moduleQuestions);

    // Insert questions into the container
    practiceContainer.appendChild(questionsContainer);

    console.log(
      `✅ Successfully loaded ${moduleQuestions.length} questions for module ${currentModule}`
    );
  } else {
    console.log("❌ Practice Questions container not found");

    // Fallback: Try to find by header
    const practiceHeaders = document.querySelectorAll("h2");
    let practiceSection = null;

    practiceHeaders.forEach(header => {
      if (header.textContent.includes("Practice Questions")) {
        practiceSection = header;
      }
    });

    if (practiceSection) {
      console.log("Found practice questions section via fallback");

      const questionsContainer = document.createElement("div");
      questionsContainer.className = "dynamic-questions";
      questionsContainer.innerHTML = generateQuestionsHTML(moduleQuestions);

      // Insert after the practice questions header
      practiceSection.parentNode.insertBefore(
        questionsContainer,
        practiceSection.nextSibling
      );

      console.log(
        `✅ Successfully loaded ${moduleQuestions.length} questions for module ${currentModule} (fallback)`
      );
    }
  }
}

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

// Add copy buttons to code blocks (skip bash blocks completely)
function addCopyButtons() {
  console.log("🔧 Adding copy buttons to code blocks...");

  // First, remove ALL existing copy buttons from the entire page
  const allExistingButtons = document.querySelectorAll(
    ".copy-button, button[title*='copy'], button[title*='Copy']"
  );
  console.log(
    `🗑️ Found ${allExistingButtons.length} existing copy buttons to remove`
  );
  allExistingButtons.forEach((btn, i) => {
    console.log(`Removing button ${i}:`, btn.textContent, btn.className);
    btn.remove();
  });

  const codeBlocks = document.querySelectorAll("pre code");
  console.log(`Found ${codeBlocks.length} code blocks`);

  codeBlocks.forEach((codeBlock, index) => {
    const pre = codeBlock.parentElement;

    // Check if this is a bash code block
    const isBashBlock =
      codeBlock.classList.contains("language-bash") ||
      codeBlock.parentElement.classList.contains("language-bash") ||
      codeBlock.className.includes("language-bash") ||
      pre.className.includes("language-bash");

    console.log(`Block ${index}:`, {
      codeClasses: codeBlock.className,
      preClasses: pre.className,
      allButtons: pre.querySelectorAll("button").length,
      isBash: isBashBlock,
    });

    // Final safety check - don't add if copy button already exists
    if (pre.querySelector(".copy-button")) {
      console.log(`⏭️ Copy button already exists for block ${index}`);
      return;
    }

    const copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.innerHTML = "📋 Copy";

    // Style the button differently for bash vs regular blocks
    if (isBashBlock) {
      // For bash blocks: position in terminal header area
      copyButton.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 4px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.75rem;
        opacity: 0.8;
        transition: all 0.3s ease;
        z-index: 10;
      `;
    } else {
      // For regular blocks: standard positioning
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
    }

    pre.style.position = "relative";
    pre.appendChild(copyButton);

    // Show/hide button on hover
    if (isBashBlock) {
      // Bash blocks: show on hover, slightly more visible
      pre.addEventListener("mouseenter", () => {
        copyButton.style.opacity = "1";
        copyButton.style.background = "rgba(255, 255, 255, 0.2)";
      });

      pre.addEventListener("mouseleave", () => {
        copyButton.style.opacity = "0.8";
        copyButton.style.background = "rgba(255, 255, 255, 0.1)";
      });
    } else {
      // Regular blocks: fade in/out on hover
      pre.addEventListener("mouseenter", () => {
        copyButton.style.opacity = "1";
      });

      pre.addEventListener("mouseleave", () => {
        copyButton.style.opacity = "0";
      });
    }

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
  console.log("🚀 DOM loaded, initializing enhancements...");

  // Wait a bit to let other scripts initialize first
  setTimeout(() => {
    console.log("🔧 Starting enhancements after delay...");

    // Front matter based enhancements (highest priority)
    updatePageTitle();
    createPracticeQuestionsContainer();

    // Other enhancements
    createProgressBar();
    addCopyButtons();
    createAlertBoxes();
    enhanceKeyboardNavigation();
    enhanceNavigationButtons();

    // Load practice questions (after container creation)
    loadModuleQuestions();

    console.log("🎨 CEH Study Guide enhanced styling loaded!");
  }, 100);

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

  // Set up a watcher to prevent duplicate copy buttons
  setInterval(() => {
    const pres = document.querySelectorAll("pre");
    pres.forEach(pre => {
      const buttons = pre.querySelectorAll(".copy-button");
      if (buttons.length > 1) {
        console.log(
          `🚨 Found ${buttons.length} copy buttons in one block, removing duplicates`
        );
        for (let i = 1; i < buttons.length; i++) {
          buttons[i].remove();
        }
      }
    });
  }, 1000);

  // Initialize dynamic questions system
  loadQuestions().then(() => {
    loadModuleQuestions();
  });

  // Hide front matter content
  hideFrontMatter();
});

// Hide rendered YAML front matter from display
function hideFrontMatter() {
  // Find all h2 elements that contain front matter patterns
  const h2Elements = document.querySelectorAll('h2');
  
  h2Elements.forEach(h2 => {
    const text = h2.textContent.trim();
    
    // Check if this looks like rendered front matter
    if (text.includes('module:') || text.includes('title:') || 
        text.match(/^module:\s*['"]\d+['"]/) || 
        text.match(/^title:\s*['"].+['"]/) ||
        text === 'module: "3"' ||
        text.includes('module: ') ||
        text.includes('title: ')) {
      
      console.log('Hiding front matter element:', text);
      h2.classList.add('front-matter-hidden');
    }
  });

  // Also check for any p elements that might contain front matter
  const pElements = document.querySelectorAll('p');
  
  pElements.forEach(p => {
    const text = p.textContent.trim();
    
    if ((text.includes('module:') && text.includes('title:')) ||
        text.match(/^module:\s*['"]\d+['"]/) ||
        text.match(/^title:\s*['"].+['"]/) ||
        text === '---' && p.nextElementSibling?.textContent?.includes('module:')) {
      
      console.log('Hiding front matter paragraph:', text);
      p.classList.add('front-matter-hidden');
    }
  });
}
