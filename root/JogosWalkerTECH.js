    // Função para abrir links em nova aba
    function abrirLinkNovaAba(url) {
        window.open(url, '_blank');
    }

    // Seleciona todos os links de download
    const linksDownload = document.querySelectorAll('.download-links-trailer a');

    // Adiciona evento de clique para cada link de download
    linksDownload.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const url = this.getAttribute('href');
            abrirLinkNovaAba(url); // Abre o link em uma nova aba
        });
    });

    // Seleciona o iframe do trailer
    const trailer = document.querySelector('.trailer-link iframe');

    // Adiciona evento de clique para o trailer
    trailer.addEventListener('click', function() {
        alert('Você está prestes a assistir ao trailer!'); // Mostra um alerta ao clicar no trailer
    });