async function generateSidebar() {
    const response = await fetch('menu.json');
    const data = await response.json();
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        // Insère le bandeau au-dessus de la sidebar
        sidebar.insertAdjacentHTML('beforebegin', '<div class="site-top-banner">Les blockhaus lyssois</div>');

        // Ajouter le bouton hamburger
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        hamburger.setAttribute('aria-label', 'Toggle menu');
        hamburger.addEventListener('click', toggleMobileMenu);
        sidebar.appendChild(hamburger);

        // Contenu de la sidebar (structure claire : ressources + actions)
        let html = '<div class="menu-wrap">';
        html += '<div class="menu-resources"><h3>Ressources :</h3>';

        // Génération des boutons de ressources
        data.ressources.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
        });

        html += '</div>'; // ferme .menu-resources

        // Génération des boutons d'action dans leur propre conteneur
        html += '<div class="menu-actions">';
        data.actions.forEach(item => {
            const target = item.external ? 'target="_blank"' : '';
            html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
        });
        html += '</div>'; // ferme .menu-actions

        html += '</div>'; // ferme .menu-wrap

        sidebar.innerHTML = html + hamburger.outerHTML;
    }
}

function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    sidebar.classList.toggle('mobile-nav-open');
    hamburger.classList.toggle('active');
    
    // Fermer le menu quand on clique sur un lien
    const links = document.querySelectorAll('.sidebar a, .sidebar button:not(.hamburger)');
    links.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
}

function closeMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    
    sidebar.classList.remove('mobile-nav-open');
    hamburger.classList.remove('active');
}

// Fermer le menu mobile lors du redimensionnement de l'écran
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

document.addEventListener('DOMContentLoaded', generateSidebar);