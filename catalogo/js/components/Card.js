// Importa funções utilitárias do arquivo utils.js para obter ID do YouTube, pontuação aleatória, duração e badge de idade
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

// Função exportada que cria um card de filme baseado no item fornecido
export function createCard(item) {
    // Cria um elemento div que será o card do filme
    const card = document.createElement('div');
    // Define a classe CSS do card
    card.className = 'movie-card';
    // Se o item tem progresso (assistido parcialmente), adiciona classe para indicar isso
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // Cria um elemento img para a capa do filme
    const img = document.createElement('img');
    // Define a fonte da imagem como a URL do item
    img.src = item.img;
    // Define o texto alternativo para acessibilidade
    img.alt = `Movie cover`;

    // Cria um elemento iframe para incorporar o vídeo do YouTube
    const iframe = document.createElement('iframe');
    // Remove a borda do iframe
    iframe.frameBorder = "0";
    // Permite autoplay e mídia criptografada
    iframe.allow = "autoplay; encrypted-media";

    // Obtém o ID do vídeo do YouTube a partir da URL fornecida no item
    const videoId = getYouTubeId(item.youtube);

    // Adiciona o iframe e a imagem ao card
    card.appendChild(iframe);
    card.appendChild(img);

    // Gera um badge de idade aleatório
    const ageBadge = getRandomAgeBadge();

    // Cria um div para os detalhes do card
    const details = document.createElement('div');
    // Define a classe CSS dos detalhes
    details.className = 'card-details';
    // Define o HTML interno dos detalhes, incluindo botões, informações e tags
    details.innerHTML = `
        <div class="details-buttons">
            <div class="left-buttons">
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            <div class="right-buttons">
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        <div class="details-info">
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            <span class="duration">${getRandomDuration(item.progress)}</span>
            <span class="resolution">HD</span>
        </div>
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    // Adiciona os detalhes ao card
    card.appendChild(details);


    // Se o item tem progresso, cria uma barra de progresso
    if (item.progress) {
        // Cria um container para a barra de progresso
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        // Cria o elemento que representa o valor da barra
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        // Define a largura da barra baseada no progresso
        pbValue.style.width = `${item.progress}%`;
        // Adiciona o valor ao container
        pbContainer.appendChild(pbValue);
        // Adiciona o container ao card
        card.appendChild(pbContainer);
    }

    // Variável para armazenar o timeout do play
    let playTimeout;
    // Adiciona evento de mouseenter ao card
    card.addEventListener('mouseenter', () => {
        // Obtém as coordenadas do card na tela
        const rect = card.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        
        // Verifica se o card está próximo da borda esquerda e adiciona classe para ajustar posição
        if (rect.left < 100) {
            card.classList.add('origin-left');
        // Verifica se está próximo da borda direita
        } else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Define um timeout para iniciar o vídeo após 600ms
        playTimeout = setTimeout(() => {
            // Define a fonte do iframe como o vídeo do YouTube com autoplay
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            // Adiciona classe para indicar que está tocando
            iframe.classList.add('playing');
            // Adiciona classe à imagem para ocultar durante o vídeo
            img.classList.add('playing-video');
        }, 600);
    });

    // Adiciona evento de mouseleave ao card
    card.addEventListener('mouseleave', () => {
        // Cancela o timeout do play
        clearTimeout(playTimeout);
        // Remove classes de playing
        iframe.classList.remove('playing');
        img.classList.remove('playing-video');
        // Limpa a fonte do iframe
        iframe.src = "";
        // Remove classes de origem
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Retorna o card criado
    return card;
}
