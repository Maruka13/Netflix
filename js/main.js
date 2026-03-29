// Gerencia a seleção de perfil e persistência de dados.
document.addEventListener('DOMContentLoaded', () => {
    const perfilLinks = document.querySelectorAll('.profile');

    perfilLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Extração de dados do DOM com tratamento de nulidade
            const imgEl = link.querySelector('img');
            const nomeEl = link.querySelector('figcaption');

            const nome = nomeEl ? nomeEl.textContent.trim() : '';
            let imgSrc = imgEl ? imgEl.getAttribute('src') : '';

            // Normalização de path para navegação entre diretórios
            if (imgSrc && !imgSrc.startsWith('http') && !imgSrc.startsWith('/') && !imgSrc.startsWith('..')) {
                imgSrc = '../' + imgSrc;
            }

            // Camada de persistência com tratamento de exceções (Privacidade/Cotas)
            try {
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imgSrc);
            } catch (e) {
                console.warn('Falha na persistência via LocalStorage:', e);
            }
        });
    });
});