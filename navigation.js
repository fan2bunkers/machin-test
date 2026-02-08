async function generateSidebar() {
    const response = await fetch('menu.json');
    const data = await response.json();
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebar) {
        // Insère le bandeau au-dessus de la sidebar
        if (!document.querySelector('.site-top-banner')) {
            sidebar.insertAdjacentHTML('beforebegin', '<div class="site-top-banner">Les blockhaus lyssois</div>');
        }

        // Créer le HTML du menu et du hamburger
        let html = '';
        
        // Hamburger
        html += '<button class="hamburger" aria-label="Ouvrir le menu">';
        html += '<span></span>';
        html += '<span></span>';
        html += '<span></span>';
        html += '</button>';

        // Menu principal
        html += '<div class="menu-wrap">';
        html += '<div class="menu-resources">';
        html += '<h3>Ressources</h3>';

        // Génération des liens de ressources
        data.ressources.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}>${item.label}</a>`;
        });

        html += '</div>';

        // Génération des liens d'action
        html += '<div class="menu-actions">';
        data.actions.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}>${item.label}</a>`;
        });
        html += '</div>';
        html += '</div>';

        // Injecter le HTML
        sidebar.innerHTML = html;

        // Ajouter les event listeners APRÈS injection
        setupMenuHandlers();
    }
}

function setupMenuHandlers() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const menuLinks = document.querySelectorAll('.menu-wrap a');
    
    // Vérifier si on est en mode mobile
    const isMobileMode = document.documentElement.classList.contains('is-mobile-device') || 
                         window.innerWidth <= 768;

    // Click sur le hamburger
    if (hamburger && isMobileMode) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleMenu();
        });
    }

    // Click sur les liens du menu pour fermer sur mobile
    if (isMobileMode) {
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Laisser naviguer mais fermer le menu
                setTimeout(closeMenu, 100);
            });
        });
    }
    
    // Fermer le menu au redimensionnement
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    if (sidebar) {
        sidebar.classList.toggle('mobile-nav-open');
    }
    
    if (hamburger) {
        hamburger.classList.toggle('active');
    }
}

function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    if (sidebar) {
        sidebar.classList.remove('mobile-nav-open');
    }
    
    if (hamburger) {
        hamburger.classList.remove('active');
    }
}

// Exécuter au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateSidebar);
} else {
    generateSidebar();
}