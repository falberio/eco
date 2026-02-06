/* ============================================
   ECO - Custom JavaScript Enhancements
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // --- Add last updated timestamp to footer ---
    addLastUpdatedInfo();

    // --- Enhance external links ---
    enhanceExternalLinks();

    // --- Add smooth scroll for anchor links ---
    enableSmoothScrolling();

    // --- Add copy button enhancement ---
    enhanceCodeBlocks();

    // --- Add keyboard shortcuts info ---
    addKeyboardShortcuts();
});

/**
 * Add last updated information to footer
 */
function addLastUpdatedInfo() {
    const footer = document.querySelector('.md-footer-meta');
    if (footer && !document.querySelector('.eco-last-updated')) {
        const lastUpdated = new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const updateInfo = document.createElement('div');
        updateInfo.className = 'eco-last-updated';
        updateInfo.style.textAlign = 'center';
        updateInfo.style.padding = '1rem';
        updateInfo.style.fontSize = '0.8rem';
        updateInfo.style.opacity = '0.7';
        updateInfo.innerHTML = `📅 Última visita: ${lastUpdated}`;

        footer.appendChild(updateInfo);
    }
}

/**
 * Enhance external links with icon and target blank
 * Internal links open in same tab, external links (including GitHub) open in new tab
 */
function enhanceExternalLinks() {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        const href = link.getAttribute('href');

        if (!href) return;

        // Enlaces externos (http/https)
        if (href.startsWith('http://') || href.startsWith('https://')) {
            // GitHub y otros externos: nueva pestaña
            if (href.includes('github.com') || !href.includes(window.location.hostname)) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');

                // Add external icon if not present
                if (!link.querySelector('.external-icon') && !link.closest('.md-social')) {
                    const icon = document.createElement('span');
                    icon.className = 'external-icon';
                    icon.innerHTML = ' ↗';
                    icon.style.fontSize = '0.8em';
                    icon.style.opacity = '0.6';
                    link.appendChild(icon);
                }
            } else {
                // Enlaces internos con http/https: misma pestaña
                link.setAttribute('target', '_self');
            }
        } else {
            // Enlaces relativos o anclas: siempre misma pestaña
            link.setAttribute('target', '_self');
        }
    });
}

/**
 * Enable smooth scrolling for anchor links
 */
function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
}

/**
 * Enhance code blocks with language badges
 */
function enhanceCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.highlight');
    codeBlocks.forEach(block => {
        const languageClass = Array.from(block.classList).find(cls => cls.startsWith('language-'));
        if (languageClass && !block.querySelector('.code-language-badge')) {
            const language = languageClass.replace('language-', '').toUpperCase();
            const badge = document.createElement('div');
            badge.className = 'code-language-badge';
            badge.textContent = language;
            badge.style.cssText = `
        position: absolute;
        top: 8px;
        right: 48px;
        background: rgba(0, 0, 0, 0.3);
        color: white;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 0.7rem;
        font-weight: 600;
        z-index: 1;
      `;

            block.style.position = 'relative';
            block.appendChild(badge);
        }
    });
}

/**
 * Add keyboard shortcuts listener
 */
function addKeyboardShortcuts() {
    document.addEventListener('keydown', function (e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput) {
                searchInput.focus();
            }
        }

        // Esc to close search
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
            }
        }
    });
}

/**
 * Add reading time estimator
 */
function addReadingTime() {
    const content = document.querySelector('.md-content__inner');
    if (!content) return;

    const text = content.textContent || '';
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    const timeInfo = document.createElement('div');
    timeInfo.className = 'reading-time';
    timeInfo.style.cssText = `
    padding: 0.5rem 0;
    font-size: 0.85rem;
    color: #666;
    font-style: italic;
  `;
    timeInfo.innerHTML = `⏱️ Tiempo de lectura: ~${readingTime} min`;

    const firstHeading = content.querySelector('h1');
    if (firstHeading && firstHeading.nextSibling) {
        firstHeading.parentNode.insertBefore(timeInfo, firstHeading.nextSibling);
    }
}

// Initialize reading time on content pages
if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/index.html')) {
    setTimeout(addReadingTime, 500);
}

console.log('🏠 ECO Documentation - Custom enhancements loaded');

// Filtros para página de gestión de historias
function setupHistoriaFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const historiaItems = document.querySelectorAll('.historia-item');
        
        // Aplicar filtro
        historiaItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = 'block';
          } else if (filter.startsWith('p')) {
            // Filtro por prioridad (p1, p2, p3)
            if (item.classList.contains(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          } else {
            // Filtro por módulo
            const module = item.getAttribute('data-module');
            if (module === filter) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          }
        });
      });
    });
  }
}

// Ejecutar setupHistoriaFilters cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupHistoriaFilters);
} else {
  setupHistoriaFilters();
}
