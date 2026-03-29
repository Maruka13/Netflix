// Importa o array de categorias de filmes/séries do arquivo data.js
import { categories } from './data.js';
// Importa a função para criar carrosséis do arquivo Carousel.js
import { createCarousel } from './components/Carousel.js';

// Adiciona um event listener para quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome do perfil ativo do localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    // Obtém a imagem do perfil ativo do localStorage
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se ambos os dados do perfil existirem, atualiza os elementos da UI
    if (nomePerfil && imagemPerfil) {
        // Seleciona o link para o modo kids
        const kidsLink = document.querySelector('.kids-link');
        // Seleciona o ícone do perfil
        const profileIcon = document.querySelector('.profile-icon');
        
        // Atualiza o texto do link kids com o nome do perfil
        if (kidsLink) kidsLink.textContent = nomePerfil;
        // Atualiza a fonte da imagem do perfil
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container principal onde os carrosséis serão adicionados
    const container = document.getElementById('main-content');
    
    // Se o container existir, cria e adiciona os carrosséis
    if (container) {
        // Para cada categoria nos dados, cria um carrossel e adiciona ao container
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
