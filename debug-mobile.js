// TEST DE DÉTECTION MOBILE - À inclure dans chaque page pour déboguer
console.log('=== TEST DÉTECTION MOBILE ===');
console.log('User Agent:', navigator.userAgent);
console.log('Largeur écran:', window.innerWidth);
console.log('Largeur écran <= 768px:', window.innerWidth <= 768);
console.log('Classe is-mobile-device présente:', document.documentElement.classList.contains('is-mobile-device'));
console.log('HTML classes:', document.documentElement.className);

// Attendre un peu et vérifier à nouveau
setTimeout(() => {
    console.log('=== APRÈS 1 SECONDE ===');
    console.log('Classe is-mobile-device présente:', document.documentElement.classList.contains('is-mobile-device'));
    console.log('Hamburger visible?', window.getComputedStyle(document.querySelector('.hamburger') || {}).display);
    console.log('Menu wrap display:', window.getComputedStyle(document.querySelector('.menu-wrap') || {}).display);
}, 1000);
