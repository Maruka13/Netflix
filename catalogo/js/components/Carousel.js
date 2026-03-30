// Importa a função createCard do arquivo Card.js para criar cards de filmes
import { createCard } from './Card.js';

// Função exportada que cria um carrossel de filmes baseado na categoria fornecida
export function createCarousel(category) {
    // Cria um elemento div que será a seção do slider
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Cria o cabeçalho do slider contendo título e indicadores
    const header = document.createElement('div');
    header.className = 'slider-header';

    // Cria o elemento de título do slider
    const title = document.createElement('h2');
    title.className = 'slider-title';
    // Define o texto do título como o título da categoria
    title.innerText = category.title;

    // Cria o container para os indicadores do slider
    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    // Adiciona o título e os indicadores ao cabeçalho
    header.appendChild(title);
    header.appendChild(indicators);
    // Adiciona o cabeçalho à seção
    section.appendChild(header);

    // Cria o container para a linha de filmes
    const row = document.createElement('div');
    row.className = 'movie-row';

    // Para cada item na categoria, cria um card e adiciona à linha
    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    // Adiciona a linha de filmes à seção
    section.appendChild(row);
    // Retorna a seção criada
    return section;
}
