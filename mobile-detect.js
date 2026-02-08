// DÉTECTION MOBILE ET OPTIMISATION CSS
(function() {
    // Détection stricte du mobile
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const isMobileWidth = window.innerWidth <= 768;
    const isMobile = isMobileUA || isMobileWidth;

    console.log('🔍 DÉTECTION MOBILE:', { isMobileUA, isMobileWidth, isMobile });

    if (!isMobile) {
        console.log('✅ Mode Desktop');
        return;
    }

    console.log('📱 Mode Mobile - Application des styles');
    
    // Ajouter la classe au document
    document.documentElement.classList.add('is-mobile-device');
    
    // ATTENDRE que document.head soit prêt
    const addMobileCSS = () => {
        if (!document.head) {
            setTimeout(addMobileCSS, 10);
            return;
        }

        // Créer le CSS mobile avec priorité TRÈS ÉLEVÉE
        const mobileCss = `
            /* ========== MOBILE CSS - PRIORITÉ MAXIMALE ========== */
            
            html.is-mobile-device {
                --nav-bg: #2c3e50;
                --accent: #3498db;
                --white: #ffffff;
                font-size: 14px;
            }

            html.is-mobile-device * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            html.is-mobile-device body {
                padding-top: 98px !important;
                margin: 0 !important;
                font-size: 14px !important;
                line-height: 1.4 !important;
            }

            /* BANDEAU TOP */
            html.is-mobile-device .site-top-banner {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 48px;
                background: #2c3e50;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.9rem;
                z-index: 1100;
                border: none;
            }

            /* SIDEBAR / NAVIGATION */
            html.is-mobile-device .sidebar {
                position: fixed !important;
                top: 48px !important;
                left: 0 !important;
                width: 100% !important;
                height: 50px !important;
                background: #2c3e50 !important;
                display: flex !important;
                flex-direction: row !important;
                align-items: center !important;
                justify-content: flex-start !important;
                z-index: 1000 !important;
                padding: 0 10px !important;
                margin: 0 !important;
                overflow-x: auto !important;
                -webkit-overflow-scrolling: touch;
                border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                box-shadow: none !important;
                gap: 0 !important;
            }

            html.is-mobile-device .sidebar > * {
                display: inline-flex !important;
                align-items: center !important;
                flex: none !important;
            }

            /* HAMBURGER - TOUJOURS VISIBLE EN MOBILE */
            html.is-mobile-device .hamburger {
                display: flex !important;
                flex-direction: column !important;
                position: absolute !important;
                right: 15px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                background: none !important;
                border: none !important;
                cursor: pointer !important;
                gap: 4px !important;
                padding: 8px !important;
                z-index: 1001 !important;
                width: auto !important;
                height: auto !important;
            }

            html.is-mobile-device .hamburger span {
                display: block !important;
                width: 24px !important;
                height: 2.5px !important;
                background: white !important;
                border-radius: 2px !important;
                transition: all 0.3s ease !important;
            }

            html.is-mobile-device .hamburger.active span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px) !important;
            }

            html.is-mobile-device .hamburger.active span:nth-child(2) {
                opacity: 0 !important;
            }

            html.is-mobile-device .hamburger.active span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px) !important;
            }

            /* MENU WRAP - CACHÉ PAR DÉFAUT EN MOBILE */
            html.is-mobile-device .menu-wrap {
                display: none !important;
                position: fixed !important;
                top: 98px !important;
                left: 0 !important;
                width: 100% !important;
                flex-direction: column !important;
                background: #2c3e50 !important;
                z-index: 999 !important;
                max-height: calc(100vh - 98px) !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow-y: auto !important;
                -webkit-overflow-scrolling: touch;
                gap: 0 !important;
            }

            /* AFFICHER LE MENU QUAND OUVERT */
            html.is-mobile-device .sidebar.mobile-nav-open .menu-wrap {
                display: flex !important;
            }

            /* CONTENU DU MENU */
            html.is-mobile-device .menu-wrap > div {
                display: flex !important;
                flex-direction: column !important;
                width: 100% !important;
            }

            html.is-mobile-device .menu-resources,
            html.is-mobile-device .menu-actions {
                display: flex !important;
                flex-direction: column !important;
                width: 100% !important;
                gap: 0 !important;
                margin: 0 !important;
                padding: 0 !important;
            }

            html.is-mobile-device .menu-wrap h3 {
                padding: 15px 20px !important;
                margin: 0 !important;
                background: rgba(0,0,0,0.2) !important;
                color: white !important;
                font-size: 0.85rem !important;
                text-transform: uppercase !important;
                border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                border: none !important;
            }

            html.is-mobile-device .menu-wrap a {
                display: block !important;
                padding: 15px 20px !important;
                background: transparent !important;
                color: white !important;
                text-decoration: none !important;
                font-size: 0.9rem !important;
                border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                border: none !important;
                text-align: left !important;
                transition: all 0.2s !important;
                height: auto !important;
                width: 100% !important;
                margin: 0 !important;
                flex: none !important;
            }

            html.is-mobile-device .menu-wrap a:hover {
                background-color: #34495e !important;
                color: #3498db !important;
            }

            html.is-mobile-device .menu-resources a:last-child {
                border-bottom: 2px solid rgba(255,255,255,0.2) !important;
            }

            /* MASQUER LES BOUTONS DESKTOP*/
            html.is-mobile-device .menu-wrap button:not(.hamburger),
            html.is-mobile-device .sidebar button:not(.hamburger) {
                display: none !important;
            }

            /* CONTENU PRINCIPAL */
            html.is-mobile-device #tout_savoir_sur_le_groupe,
            html.is-mobile-device #documents,
            html.is-mobile-device #cartes,
            html.is-mobile-device #reseaux,
            html.is-mobile-device #contact,
            html.is-mobile-device .news-container {
                padding: 15px !important;
                margin: 15px auto !important;
                max-width: 100% !important;
                background: white !important;
                border-radius: 0 !important;
                box-shadow: none !important;
                border: none !important;
            }

            html.is-mobile-device h1,
            html.is-mobile-device h2 {
                font-size: 1.2rem !important;
                margin: 10px 0 !important;
                color: #2c3e50 !important;
                border-bottom: 2px solid #3498db !important;
                padding-bottom: 8px !important;
            }

            html.is-mobile-device h3 {
                font-size: 1rem !important;
                margin: 8px 0 !important;
                color: #2c3e50 !important;
            }

            html.is-mobile-device p {
                font-size: 0.9rem !important;
                margin: 8px 0 !important;
                line-height: 1.4 !important;
            }

            html.is-mobile-device strong {
                display: inline !important;
            }

            /* BOUTONS */
            html.is-mobile-device .top-buttons {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
                padding: 10px !important;
                position: sticky !important;
                top: 98px !important;
                background: white !important;
                z-index: 100 !important;
                justify-content: space-between !important;
                border-bottom: 1px solid #eee !important;
                margin: 0 !important;
            }

            html.is-mobile-device .top-buttons button {
                flex: 1 !important;
                min-width: 100px !important;
                padding: 8px 10px !important;
                font-size: 0.85rem !important;
                background: #007bff !important;
                color: white !important;
                border: none !important;
                border-radius: 4px !important;
                cursor: pointer !important;
                margin: 0 !important;
            }

            html.is-mobile-device .top-buttons button.active {
                background: #0056b3 !important;
            }

            /* TABLEAUX */
            html.is-mobile-device table {
                width: 100% !important;
                border-collapse: collapse !important;
                font-size: 0.85rem !important;
                margin: 10px 0 !important;
            }

            html.is-mobile-device td {
                padding: 8px !important;
                border-bottom: 1px solid #eee !important;
                word-break: break-word !important;
            }

            html.is-mobile-device tr:nth-child(even) {
                background: #f9f9f9 !important;
            }

            /* LIENS */
            html.is-mobile-device a {
                color: #3498db !important;
                text-decoration: none !important;
            }

            html.is-mobile-device a:active {
                opacity: 0.7 !important;
            }

            /* IFRAMES */
            html.is-mobile-device .map-container,
            html.is-mobile-device .contact-form-wrapper {
                width: 100% !important;
                margin: 10px 0 !important;
                border-radius: 4px !important;
                overflow: hidden !important;
            }

            html.is-mobile-device .map-container {
                position: relative !important;
                padding-bottom: 66.67% !important;
                height: 0 !important;
            }

            html.is-mobile-device .contact-form-wrapper {
                position: relative !important;
                padding-bottom: 120% !important;
                height: 0 !important;
            }

            html.is-mobile-device iframe {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                border: none !important;
            }

            html.is-mobile-device #cartes iframe,
            html.is-mobile-device #contact iframe {
                position: static !important;
                width: 100% !important;
                height: 300px !important;
                margin: 10px 0 !important;
            }

            /* LISTES */
            html.is-mobile-device #reseaux ul {
                list-style: none !important;
                padding: 0 !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 10px !important;
            }

            html.is-mobile-device #reseaux li a {
                display: block !important;
                padding: 12px !important;
                background: #2c3e50 !important;
                color: white !important;
                text-align: center !important;
                border-radius: 4px !important;
                text-decoration: none !important;
            }

            html.is-mobile-device #reseaux li a:active {
                background: #34495e !important;
            }

            /* NEWS */
            html.is-mobile-device .news-item {
                border-left: 4px solid #3498db !important;
                padding: 10px 15px !important;
                margin-bottom: 10px !important;
                background: #fdfdfd !important;
            }

            html.is-mobile-device .date {
                font-weight: bold !important;
                color: #2c3e50 !important;
                font-size: 0.85rem !important;
            }

            html.is-mobile-device .description {
                font-size: 0.9rem !important;
                margin-top: 5px !important;
            }
        `;

        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'mobile-css-override';
        style.textContent = mobileCss;
        document.head.appendChild(style);
        
        console.log('✅ CSS mobile injecté avec succès');
    };

    // Attendre que le document soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addMobileCSS);
    } else {
        addMobileCSS();
    }
})();


