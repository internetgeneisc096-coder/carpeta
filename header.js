document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const userMenu = document.getElementById('userMenu');
    const displayUsername = document.getElementById('displayUsername');
    const logoutBtn = document.getElementById('logoutBtn');
    const loggedUser = localStorage.getItem('gr_user');

    if (loggedUser) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (userMenu) userMenu.style.display = 'flex';
        if (displayUsername) {
            let displayName = loggedUser;
            if (displayName.length > 12) {
                displayName = displayName.substring(0, 10) + '...';
            }
            displayUsername.textContent = displayName;
            displayUsername.href = 'perfil.html';
        }
    } else {
        if (userMenu) userMenu.style.display = 'none';
        if (loginBtn) loginBtn.style.display = '';
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('gr_user');
            window.location.reload();
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === 'index.html' && currentPage === 'inicio.html')) {
            link.classList.add('active');
        }
    });
});
