// Função que extrai o ID do vídeo do YouTube de uma URL fornecida
export function getYouTubeId(url) {
    // Se não houver URL, retorna um ID padrão
    if (!url) return "7RUA0IOfar8";
    // Se a URL contém 'v=', extrai o ID após 'v=' e antes de '&'
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    // Caso contrário, pega a última parte da URL após a última '/'
    return url.split('/').pop();
}

// Função que gera uma pontuação de compatibilidade aleatória entre 80% e 99%
export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

// Função que gera uma duração aleatória baseada no progresso de visualização
export function getRandomDuration(hasProgress) {
    // Se há progresso, retorna "10 temporadas" (para séries)
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
    // Caso contrário, retorna uma duração de filme aleatória (2h + minutos)
}

// Função que retorna um badge de idade aleatório
export function getRandomAgeBadge() {
    // Com 50% de chance, retorna "A16" com classe vermelha, senão "16" sem classe
    return Math.random() > 0.5 ? { text: 'A16', class: 'red-accent' } : { text: '16', class: '' };
}
