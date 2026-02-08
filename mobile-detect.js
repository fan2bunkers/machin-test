// Détection d'appareil et chargement du CSS approprié
(function() {
    // Fonction pour détecter si c'est un mobile
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Fonction pour détecter la largeur de l'écran
    function isMobileScreen() {
        return window.innerWidth <= 768;
    }

    // Vérifier si c'est un mobile
    const isMobile = isMobileDevice() || isMobileScreen();

    // Stocker dans sessionStorage pour éviter les redirections en boucle
    const sessionKey = 'blockhausMobileMode';
    const userPreference = sessionStorage.getItem(sessionKey);

    // Si l'utilisateur a choisi une mode préférence, la respecter
    if (userPreference === 'desktop-forced') {
        return; // Garder la version desktop
    }

    // Si c'est un mobile et pas de préférence forcée
    if (isMobile && userPreference !== 'desktop-forced') {
        // Ajouter une classe au document pour le CSS mobile
        document.documentElement.classList.add('is-mobile-device');
        
        // Créer une feuille de style mobile optimisée
        const mobileStyle = document.createElement('style');
        mobileStyle.textContent = `
            html.is-mobile-device {
                font-size: 14px;
            }
            
            html.is-mobile-device body {
                padding-top: 60px;
            }
            
            html.is-mobile-device .sidebar {
                position: fixed;
                top: 48px;
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
            }
            
            html.is-mobile-device .sidebar > * {
                display: inline-flex;
            }
            
            html.is-mobile-device .hamburger {
                display: flex !important;
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
            
            html.is-mobile-device .menu-wrap {
                display: none !important;
                position: fixed;
                top: 98px;
                left: 0;
                width: 100%;
                flex-direction: column;
                background-color: #2c3e50;
                z-index: 999;
                max-height: calc(100vh - 98px);
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
            }
            
            html.is-mobile-device .sidebar.mobile-nav-open .menu-wrap {
                display: flex !important;
            }
            
            html.is-mobile-device .menu-wrap > div {
                display: flex;
                flex-direction: column;
                width: 100%;
            }
            
            html.is-mobile-device .menu-wrap a,
            html.is-mobile-device .menu-wrap h3 {
                padding: 15px 20px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                color: white;
                text-decoration: none;
                display: block;
                font-size: 0.9rem;
            }
            
            html.is-mobile-device .menu-wrap h3 {
                background-color: rgba(0,0,0,0.2);
                text-transform: uppercase;
                margin: 0;
                font-weight: bold;
            }
            
            html.is-mobile-device .menu-resources a:last-child {
                border-bottom: 2px solid rgba(255,255,255,0.2);
            }
            
            html.is-mobile-device .menu-wrap a:hover {
                background-color: #34495e;
                color: #3498db;
            }
            
            html.is-mobile-device #tout_savoir_sur_le_groupe, 
            html.is-mobile-device #documents, 
            html.is-mobile-device #cartes, 
            html.is-mobile-device #reseaux, 
            html.is-mobile-device #contact, 
            html.is-mobile-device .news-container {
                padding: 15px;
                margin: 15px auto;
                max-width: 100%;
                font-size: 0.9rem;
            }
            
            html.is-mobile-device h1,
            html.is-mobile-device h2 {
                font-size: 1.2rem;
                margin: 10px 0;
            }
            
            html.is-mobile-device h3 {
                font-size: 1rem;
                margin: 8px 0;
            }
            
            html.is-mobile-device p {
                font-size: 0.9rem;
                margin: 8px 0;
                line-height: 1.4;
            }
            
            html.is-mobile-device .top-buttons {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                padding: 10px;
                justify-content: space-between;
                position: sticky;
                top: 98px;
                z-index: 100;
                background: rgba(255,255,255,0.95);
            }
            
            html.is-mobile-device .top-buttons button {
                flex: 1;
                min-width: 100px;
                padding: 8px 10px;
                font-size: 0.85rem;
            }
            
            html.is-mobile-device table {
                font-size: 0.85rem;
                width: 100%;
                border-collapse: collapse;
            }
            
            html.is-mobile-device td {
                padding: 8px;
                border-bottom: 1px solid #eee;
                word-break: break-word;
            }
            
            html.is-mobile-device iframe {
                max-width: 100%;
                height: 300px !important;
            }
            
            html.is-mobile-device .map-container {
                padding-bottom: 66.67%;
            }
            
            html.is-mobile-device .contact-form-wrapper {
                padding-bottom: 120%;
            }
        `;
        document.head.appendChild(mobileStyle);
    }
})();
