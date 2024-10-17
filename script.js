document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];
    const verMasBtns = document.querySelectorAll('.ver-mas');

    const eventosInfo = {
        festival: {
            titulo: "Festival de Arte Callejero",
            fecha: "15-17 de Julio, 2023",
            descripcion: "Un evento de tres días que reúne a artistas callejeros de todo el mundo para crear obras en vivo y ofrecer talleres interactivos.",
            imagen: "picante festival.jpeg"
        },
        taller: {
            titulo: "Taller de Muralismo",
            fecha: "5 de Agosto, 2023",
            descripcion: "Aprende las técnicas básicas del muralismo de la mano de artistas experimentados. Incluye materiales y un espacio para practicar.",
            imagen: "maxresdefault.jpg"
        },
        exposicion: {
            titulo: "Exposición de Grafiti",
            fecha: "20-22 de Agosto, 2023",
            descripcion: "Una muestra de las mejores obras de grafiti de artistas locales e internacionales, con charlas y demostraciones en vivo.",
            imagen: "mural_fiau.jpeg"
        },
        concurso: {
            titulo: "Concurso de Arte Urbano",
            fecha: "10 de Septiembre, 2023",
            descripcion: "Participa en nuestro concurso anual de arte urbano y gana la oportunidad de crear una obra permanente en la ciudad.",
            imagen: "perrera_panoramica-1152x768.jpg"
        },
        charla: {
            titulo: "Charla: El Futuro del Arte Urbano",
            fecha: "30 de Septiembre, 2023",
            descripcion: "Únete a una discusión con expertos sobre las tendencias emergentes y el futuro del arte urbano en la era digital.",
            imagen: "San_Miguel_-_2011_-_Museo_a_cielo_abierto_-_Avenida_Departamental.jpg"
        }
    };

    verMasBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const evento = btn.getAttribute('data-evento');
            const info = eventosInfo[evento];
            modalContent.innerHTML = `
                <h2>${info.titulo}</h2>
                <img src="${info.imagen}" alt="${info.titulo}" style="width:100%;max-width:600px;height:auto;margin-bottom:20px;">
                <p><strong>Fecha:</strong> ${info.fecha}</p>
                <p>${info.descripcion}</p>
            `;
            modal.style.display = "block";
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Animación de aparición al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('fade-in');
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Aplicar la clase fade-in y comenzar a observar las secciones
    document.querySelectorAll('section').forEach(section => {
        if (section.id !== 'inicio') {  // No aplicar fade-in a la sección de inicio
            section.classList.add('fade-in');
            observer.observe(section);
        }
    });

    // Manejar el envío del formulario de opinión
    const formularioOpinion = document.getElementById('formulario-opinion');
    formularioOpinion.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;
        agregarOpinion(nombre, comentario);
        formularioOpinion.reset();
    });
});

function agregarOpinion(nombre, comentario) {
    const opiniones = document.getElementById('opiniones');
    const nuevaOpinion = document.createElement('div');
    nuevaOpinion.className = 'opinion fade-in-up';
    nuevaOpinion.innerHTML = `
        <h3>${nombre}</h3>
        <p>${comentario}</p>
    `;
    opiniones.appendChild(nuevaOpinion);
}

function realizarCompra(producto) {
    alert(`¡Compra realizada con éxito! Has adquirido: ${producto}`);
}