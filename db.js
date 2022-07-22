const datos = [
    {
        id:1,
        titulo:'MotoShop',
        img:'img/motoshop.png',
        fecha:'30-06-2022',
        resumen:'Aplicativo de Ecommerce',
        descripcion:'Proyecto final para el modulo de React.js de CoderHouse. En este proyecto abarca todo lo realacionado a react con hooks, routers y context. El proyecto se basa en una tienda de motocicletas, donde podes filtrar, agregar a favoritos, sumar al carrito, modificar stock, validar un checkout, y guardar la compra en una base de datos en firebase.',
        tecnologias:['HTML','CSS','JS','React js','Firebase'],
        demo:'https://gabrielteresczuk.github.io/motoshop/',
        repo:'https://github.com/gabrielteresczuk/motoshop',
        dificultad:4
    },
    {
        id:2,
        titulo:'Reaskct',
        img:'img/reaskct.png',
        fecha:'19-06-2022',
        resumen:'Aplicativo de Preguntas y Respuestas',
        descripcion:'Proyecto de fin de semana. Tenemos una base de datos en JS con preguntas, se puede variar el maximo hasta que temrine el juego, luego nos da un puntaje. Se puede responder con las letras del teclado A,B,C,D y pasar con ESPACIO.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/reaskct/',
        repo:'https://github.com/gabrielteresczuk/reaskct',
        dificultad:4
    },
    {
        id:3,
        titulo:'Button Maker',
        img:'img/buttonMaker.jpg',
        fecha:'22-05-2022',
        resumen:'Aplicacion para crear botones',
        descripcion:'Se realizo una aplicacion para crear estilos de CSS dinamicamente. Podes seleccionar los atributos, darle valores y el te va a devolver el codigo directo para pegar en tu boton.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/buttonmaker/',
        repo:'https://github.com/gabrielteresczuk/buttonmaker',
        dificultad:3
    },
    {
        id:4,
        titulo:'ToolBox',
        img:'img/toolbox.png',
        fecha:'09-05-2022',
        resumen:'Aplicacion Ecommerce Vanilla JS',
        descripcion:'Aplicacon realizada para aprobar el modulo JS de CoderHouse. En la misma se pueden listar y realizar compas de diferentes productos, filtrando por marca, precio, si existen ofertas o no, control de stock y al final un simple checkout.',
        tecnologias:['HTML','CSS','JS'],
        demo:'https://gabrielteresczuk.github.io/toolbox/',
        repo:'https://github.com/gabrielteresczuk/toolbox',
        dificultad:4
    },
    {
        id:5,
        titulo:'Portafolio',
        img:'img/portfolio1.png',
        fecha:'10-04-2022',
        resumen:'Porfolio para FreeCodeCamp',
        descripcion:'Creacion de un portfolio para presentar al modulo de FreeCodeCamp, el cual alberga todos los proyectos de react js',
        tecnologias:['HTML','CSS','JS'],
        demo:'https://gabrielteresczuk.github.io/portfolio',
        repo:'https://github.com/gabrielteresczuk/portfolio',
        dificultad:2
    },
    {
        id:6,
        titulo:'Reloj Pomodoro React.js',
        img:'img/pomodoro.png',
        fecha:'04-04-2022',
        resumen:'Proyecto 05 de React.js de FreeCodeCamp',
        descripcion:'Podemos marcar los tiempo de "trabajo" y de "descanso", al dar play, comienza a descontar el tiempo hata llegar a cero, en ese punto comienza automaticamente el descanzo, luego se repite el ciclo.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/05-clock/',
        repo:'https://github.com/gabrielteresczuk/05-clock',
        dificultad:3
    },
    {
        id:7,
        titulo:'Calculadora React.js',
        img:'img/calculator.png',
        fecha:'03-04-2022',
        resumen:'Proyecto 04 de React.js de FreeCodeCamp',
        descripcion:'En este proyecto se realiza una calculadora con memoria la cual se pueden ir anidando operaciones de suma, resta, multiplicacion y division.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/04-calculator/',
        repo:'https://github.com/gabrielteresczuk/04-calculator',
        dificultad:3
    },
    {
        id:8,
        titulo:'Drum Machine React.js',
        img:'img/drummachine.png',
        fecha:'02-04-2022',
        resumen:'Proyecto 03 de React.js de FreeCodeCamp',
        descripcion:'En este proyecto se realiza un teclado interactivo que puede reproducir sonidos al clickear cada boton, tambien funciona presionando las teclas que corresponden al teclado qwerty.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/03-drum-machine/',
        repo:'https://github.com/gabrielteresczuk/03-drum-machine',
        dificultad:3
    },
    {
        id:9,
        titulo:'MarkDown React.js',
        img:'img/markdown.png',
        fecha:'01-04-2022',
        resumen:'Proyecto 02 de React.js de FreeCodeCamp',
        descripcion:'En este proyecto se realiza un interprete de codigo de marcado, en el lado izquierdo escribimos el codigo y a la derecha podemos ver el interpretado.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/02-markdown/',
        repo:'https://github.com/gabrielteresczuk/02-markdown',
        dificultad:3
    },
    {
        id:10,
        titulo:'Random Quote React.js',
        img:'img/randomQuote.png',
        fecha:'30-03-2022',
        resumen:'Proyecto 01 de React.js de FreeCodeCamp',
        descripcion:'En este proyecto, se logra hacer llamadas a una API de frases, con el uso de Fetch, traer una frase al azar, montarla y modificar los colores de la aplicacion cada vez que cambie la frase.',
        tecnologias:['HTML','CSS','JS','React js'],
        demo:'https://gabrielteresczuk.github.io/01-random-quote/',
        repo:'https://github.com/gabrielteresczuk/01-random-quote',
        dificultad:3
    },
    {
        id:11,
        titulo:'EcoTurismo',
        img:'img/ecoturismo.png',
        fecha:'10-03-2022',
        resumen:'Landing Page Ecoturismo',
        descripcion:'Proyecto final para el modulo Diseño Web de Coder House. El desafio se presenta con la creacion de una landing page para mostrar lugares turisticos de la provincia de misiones usando las tecnologias de HTML+CSS+BOOSTRAP',
        tecnologias:['HTML','CSS','JS'],
        demo:'https://gabrielteresczuk.github.io/eco-turismo-teresczuk-final/',
        repo:'https://github.com/gabrielteresczuk/eco-turismo-teresczuk-final',
        dificultad:1
    }

];

