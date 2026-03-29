// Arquivo de dados que exporta um array de categorias de filmes e séries para o catálogo da Netflix
// Cada categoria tem um título e uma lista de itens (filmes ou episódios)
export const categories = [
    {
        // Título da categoria
        title: "Épicos",
        // Lista de itens da categoria
        items: [
            {
                // URL da imagem do poster
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
                // Indica se está no top 10
                top10: true,
                // Texto do badge (rótulo especial)
                badge: "Clássico",
                // Cor do badge
                badgeColor: "red",
                // Progresso de visualização (0 significa não assistido)
                progress: 0,
                // URL do vídeo do YouTube para preview
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    {
        title: "Séries",
        items: [
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Nova temporada",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                top10: true,
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                badge: "Novidade",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    },
    {
        title: "Para maratonar",
        items: [
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novidade",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    }
];
