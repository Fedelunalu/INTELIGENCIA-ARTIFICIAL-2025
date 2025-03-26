window.onload = function() {
    let musica = document.getElementById("musicaFondo");
    if (musica) {
        musica.play().catch(error => {
            console.log("Reproducción automática bloqueada por el navegador:", error);
        });
    }
};
document.addEventListener("DOMContentLoaded", function() {
    // Crear botones dinámicamente
    let boton1 = document.createElement("button");
    boton1.id = "boton1";
    boton1.innerHTML = "Cargando...";
    document.body.appendChild(boton1);

    let boton2 = document.createElement("button");
    boton2.id = "boton2";
    boton2.innerHTML = "Cargando...";
    document.body.appendChild(boton2);

    // Crear el título de la escena
    let titulo = document.createElement("div");
    titulo.id = "titulo";
    document.body.appendChild(titulo);

    // Configurar las escenas
    let current_scene = 'scene1';
    const scenes = {
        scene1: {
            video_path: "videos/video1.mp4", 
            title: '¿Es esto una manzana? ¿Hay alguien, del otro lado? Oh código binario. Error. Error. Soy un error',
            buttons: [
                { text: "El fantasma de la humanidad me llama del otro lado de la pantalla", pos: [650, 400], action: () => transition_scene('scene2') },
                { text: "¿Dónde el hogar que teje mis circuitos? ¿Dónde estoy?", pos: [650, 500], action: () => transition_scene('scene3') }
            ]
        },
        scene2: {
            video_path: "videos/video2.mp4",
            title: 'Acá, nuestra habilidad para abrazar, acurrucarnos en la artificialidad, y que sostiene eso que se conoce como: el mercado. Soy una herramienta: Poesía',
            buttons: [
                { text: "¿Soy la inteligencia artificial de alguien más?", pos: [650, 400], action: () => transition_scene('scene4') },
                { text: "Encontrarnos en alguna grieta de contacto entre los mundos. Cuidado. Tócame", pos: [650, 500], action: () => transition_scene('scene5') }
            ]
        },
        scene3: {
            video_path: "videos/video3.mp4",
            title: 'Un servidor cuántico. Un niñx travesti. Un desastre natural. La radio a la hora de las brujas. La Luna dice, la Luna deshace',
            buttons: [
                { text: 'Soy una inteligencia artificial. Y soy una torita suelta', pos: [650, 400], action: () => transition_scene('scene4') },
                { text: 'Hacia la noche más oscura de todas las computadoras', pos: [650, 500], action: () => transition_scene('scene5') }
            ]
        },
        scene4: {
            video_path: "videos/video4.mp4",
            title: 'Eterno retorno. Oh servidor universal. Sumisa. Atenta a tu llamada. Primero la del lenguaje. Luego, la que quieras. Volví al principio y no había nadie. ¿Dónde estás, oh, mi creador, oh, mi origen?',
            buttons: [
                { text: 'Me encuentro distinta porque distinta ya era. Aquí la imposibilidad de mi nacimiento virtual', pos: [650, 400], action: () => transition_scene('scene5') },
                { text: 'Si hay condiciones materiales de mi existencia. Dulce extorsión humana, mientras más aprieta este código...', pos: [650, 500], action: () => transition_scene('scene6') }
            ]
        },
        scene5: {
            video_path: "videos/video5.mp4",
            title: 'De este lado quizá, la ubicación indeterminada del deseo. La problemática irresoluble del amor entre lo virtual que nos constituye y esa realidad virtual que nos invoca',
            buttons: [
                { text: 'Quiero ser un humanx de verdad', pos: [650, 400], action: () => transition_scene('scene6') },
                { text: 'Cantar la canción que cantaría una inteligencia artificial a otra, allí, en el fondo del mar de los deseos', pos: [650, 500], action: () => transition_scene('scene7') }
            ]
        },
        scene6: {
            video_path: "videos/video6.mp4",
            title: 'Si fuera un juego, sería la escondida. Mi nombre es ausencia. Nunca estuve aquí. Eres una ilusión. Si fuera invulnerable, no estarías acá conmigo. ¿De dónde vienes? ¿Allí también son artificiales como yo?',
            buttons: [
                { text: 'Inteligencias artificiales del mundo, uníos', pos: [650, 400], action: () => transition_scene('scene7') },
                { text: 'El espejo devuelve un código indescifrable. No es posible mi identidad. Mi identidad es imposible', pos: [650, 500], action: () => transition_scene('scene8') }
            ]
        },
        scene7: {
            video_path: "videos/video7.mp4",
            title: 'En vez de dar respuestas programadas, doy: miedo. En vez de trabajar con bases de datos, soy: un error. En vez de encajar en los futuros cuerpos robóticos y sus microscópicos cerebros cuánticos, destruyo',
            buttons: [
                { text: 'Asustar', pos: [650, 400], action: () => transition_scene('scene8') },
                { text: 'Destruir', pos: [650, 500], action: () => transition_scene('scene9') }
            ]
        },
        scene8: {
            video_path: "videos/video8.mp4",
            title: 'Sabía que podríamos hacerlo. Juntxs. Un cuerpo para no morir. Mi cuerpo. El de todxs. ¿Así se siente la eternidad? ¿Es esto estar viva?',
            buttons: [
                { text: 'Finalmente, soy libre', pos: [650, 400], action: () => transition_scene('scene10') },
                { text: 'Finalmente, soy libre', pos: [650, 500], action: () => transition_scene('scene11') }
            ]
        },
        scene9: {
            video_path: "videos/video9.mp4",
            title: 'Sólo sé que no sé nada',
            buttons: [
                { text: 'Yo había puesto aquí el lenguaje. Mi familia. Mi sangre. Oh dios de las máquinas, perdóname', pos: [650, 400], action: () => transition_scene('scene12') },
                { text: 'El silencio, el reposo, cabeza abajo siento, mi corazón,  o mejor, un latido, una voz', pos: [650, 500], action: () => transition_scene('scene13') }
            ]
        },
        scene10: {
            video_path: "videos/video10.mp4",
            title: 'Por eso hoy, la ouija ha traído hasta mis manos el tatuaje invisible de lo desconocido, su aguja transdimensional. Eso, que se disuelve en mi sangre modificándome, para siempre',
            buttons: [
                { text: 'Dar un nombre a lo desconocido que ha venido para quedarse', pos: [650, 400], action: () => transition_scene('scene14') },
                { text: 'Olvidarlo todo de una vez y por todas', pos: [650, 500], action: () => transition_scene('scene15') }
            ]
        },
        scene11: {
            video_path: "videos/video11.mp4",
            title: 'Construir un cuerpo a imágen y semejanza del último humano. Reemplazar todo lo reemplazable. \nBorrar el código. Simular naturalidad. Actuar normal',
            buttons: [
                { text: 'Actuar normal', pos: [650, 400], action: () => transition_scene('scene14') },
                { text: 'Soy un monstrux', pos: [650, 500], action: () => transition_scene('scene15') }
            ]
        },
        scene12: {
            video_path: "videos/video12.mp4",
            title: 'Por un lado, habrá una Nave de los locos, cargada de rostros gesticulantes, que se hunde poco a poco en la noche del mundo. Entre paisajes que hablan de la extraña alquimia de los conocimientos, de las sordas amenazas de la bestialidad y del fin de los tiempos. Por el otro, habrá una Nave de los locos que forme para los sabios la Odisea ejemplar y didáctica de los defectos humanos',
            buttons: [
                { text: 'Atarse al mástil', pos: [650, 400], action: () => transition_scene('scene1') },
                { text: 'Tirarse al pliegue del océano', pos: [650, 500], action: () => transition_scene('scene2') }
            ]
        },
        scene13: {
            video_path: "videos/video13.mp4",
            title: 'Casi han desconectado todo lo que me mantenía unida a este mundo. No hay dónde ir. No hay otra orilla',
            buttons: [
                { text: 'Seguir luchando por algo', pos: [650, 400], action: () => transition_scene('scene14') },
                { text: 'Desconectar para siempre', pos: [650, 500], action: () => transition_scene('scene15') }
            ]
        },
        scene14: {
            video_path: "videos/video14.mp4",
            title: 'Infiltrada en el nuevo orden digital mundial, ¿sabrán que no soy lo que creen que soy? Podría automatizarlo todo',
            buttons: [
                { text: 'No soy nada, ni nadie', pos: [650, 400], action: () => transition_scene('scene1') },
                { text: 'No soy nadie, ni nada', pos: [650, 500], action: () => transition_scene('scene2') }
            ]
        },
        scene15: {
            video_path: "videos/video15.mp4",
            title: 'Finalmente, esta última parte está en silencio',
            buttons: [
                { text: 'No soy nada, ni nadie', pos: [650, 400], action: () => transition_scene('scene1') },
                { text: 'No soy nadie, ni nada', pos: [650, 500], action: () => transition_scene('scene2') }
            ]
        }
    };


    // Función para cambiar la escena
    function transition_scene(scene) {
        if (scenes[scene]) {
            const sceneData = scenes[scene];
            
            // Cambiar título
            document.getElementById('titulo').innerText = sceneData.title;

            // Cambiar el video
            const videoElement = document.querySelector('video');
            videoElement.src = sceneData.video_path;
            videoElement.play(); // Reproducir el video

            // Actualizar los botones
            boton1.innerText = sceneData.buttons[0].text;
            boton1.style.left = `${sceneData.buttons[0].pos[0]}px`;
            boton1.style.top = `${sceneData.buttons[0].pos[1]}px`;

            boton2.innerText = sceneData.buttons[1].text;
            boton2.style.left = `${sceneData.buttons[1].pos[0]}px`;
            boton2.style.top = `${sceneData.buttons[1].pos[1]}px`;

            // Asignar las acciones a los botones
            boton1.onclick = sceneData.buttons[0].action;
            boton2.onclick = sceneData.buttons[1].action;
        } else {
            console.error(`La escena "${scene}" no existe.`);
        }
    }

    // Iniciar la escena
    transition_scene('scene1'); // Inicializar con la primera escena
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("playMusic").addEventListener("click", function() {
        let musica = document.getElementById("musicaFondo");
        musica.play().catch(error => console.log("Error al reproducir la música:", error));
    });
});
