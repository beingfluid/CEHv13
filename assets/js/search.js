// Search functionality for Jekyll site
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const searchContainer = document.querySelector(".search-container");

  if (!searchInput || !searchResults) return;

  let searchIndex = [];
  let pages = [];

  // Load search index
  fetch("/CEHv13/search.json")
    .then(response => response.json())
    .then(data => {
      pages = data;
      searchIndex = data.map(page => ({
        title: page.title.toLowerCase(),
        content: page.content.toLowerCase(),
        url: page.url,
        module: page.module || "",
        originalTitle: page.title,
        originalContent: page.content,
      }));
    })
    .catch(error => {
      console.log("Search index not available:", error);
    });

  // Search functionality
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    if (query.length < 2) {
      searchResults.innerHTML = "";
      searchResults.style.display = "none";
      return;
    }

    const results = searchIndex
      .filter(
        page =>
          page.title.includes(query) ||
          page.content.includes(query) ||
          page.module.toLowerCase().includes(query)
      )
      .slice(0, 10); // Limit to 10 results

    displaySearchResults(results, query);
  });

  function displaySearchResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML =
        '<div class="search-result">No results found</div>';
    } else {
      searchResults.innerHTML = results
        .map(
          result => `
                <div class="search-result">
                    <h4><a href="${result.url}">${highlightText(
            result.originalTitle,
            query
          )}</a></h4>
                    ${
                      result.module
                        ? `<span class="search-module">Module: ${result.module}</span>`
                        : ""
                    }
                    <p>${highlightText(
                      truncateText(result.originalContent, query),
                      query
                    )}</p>
                </div>
            `
        )
        .join("");
    }

    searchResults.style.display = "block";
  }

  function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }

  function truncateText(text, query) {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text.substring(0, 150) + "...";

    const start = Math.max(0, index - 75);
    const end = Math.min(text.length, index + 75);
    const truncated = text.substring(start, end);

    return (
      (start > 0 ? "..." : "") + truncated + (end < text.length ? "..." : "")
    );
  }

  function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Close search results when clicking outside
  document.addEventListener("click", function (e) {
    if (!searchContainer.contains(e.target)) {
      searchResults.style.display = "none";
    }
  });

  // Handle escape key
  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      this.value = "";
      searchResults.innerHTML = "";
      searchResults.style.display = "none";
    }
  });
});
