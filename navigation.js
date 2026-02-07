async function generateSidebar() {
    const response = await fetch('menu.json');
    const data = await response.json();
    const sidebar = document.querySelector('.sidebar');

    let html = '<div><h3>Ressources :</h3>';

    // Génération des boutons de ressources
    data.ressources.forEach(item => {
        const target = item.external ? 'target="_blank"' : '';
        html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
    });

    html += '</div>';

    // Génération des boutons d'action
    data.actions.forEach(item => {
        const target = item.external ? 'target="_blank"' : '';
        html += `<a href="${item.link}" ${target}><button>${item.label}</button></a>`;
    });

    sidebar.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', generateSidebar);