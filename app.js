
let dificultad = [
    '<div class="dificultad1">APRENDIZ<span>1</span></div>',
    '<div class="dificultad2">JUNIOR<span>2</span></div>',
    '<div class="dificultad3">INTERMEDIO<span>3</span></div>',
    '<div class="dificultad4">AVANZADO<span>4</span></div>',
    '<div class="dificultad5">MASTER<span>5</span></div>'
];


let contenedor = document.getElementById('cardsContainer');
let proyectos = document.getElementById('contenido__menu__proy');
let order = document.getElementById('order');

order.addEventListener('change',(event)=>{

    if(event.target.value === 'dificultad-'){
        let nuevosDatos = [...datos];
        nuevosDatos = nuevosDatos.sort((a, b) => {
            return a.dificultad - b.dificultad;
        });
        cargar(nuevosDatos);
    }

    else if(event.target.value === 'dificultad+'){
        let nuevosDatos = [...datos];
        nuevosDatos = nuevosDatos.sort((a, b) => {
            return b.dificultad - a.dificultad;
        });
        cargar(nuevosDatos);
    }

    else if(event.target.value === 'fechaasc'){
        let nuevosDatos = [...datos];
        nuevosDatos = nuevosDatos.sort((a, b) => {
            return a.id - b.id;
        });
        cargar(nuevosDatos);
    }

    else if(event.target.value === 'fechades'){
        let nuevosDatos = [...datos];
        nuevosDatos = nuevosDatos.sort((a, b) => {
            return b.id - a.id;
        });
        cargar(nuevosDatos);
    }

    else if(event.target.value === 'defecto'){
        cargar(datos);
    }


});

const cargar = (datosACargar = datos) =>{


    let cards = datosACargar.map(el =>{
        return(
        `
            <div class="cardLeft" data-aos="fade-up" data-aos-duration="1000">
            <div class="cardLeftImgCont"><img class="cardLeftImg" src="${el.img}" alt="" srcset=""></div>
            <div class="cardLeftTextoCont">
                <div class="cardLeftTextoTitulo">
                    <b${el.titulo}</b><span>${el.fecha}</span>
                </div>
                <div class="cardLeftTextoResumen">${el.resumen}</div>
                <div class="cardLeftTextoDesc">${el.descripcion}</div>
                <div class="cardLeftDificultad">${dificultad[el.dificultad-1]}</div>
                <div class="cardLeftTextoTags">${el.tecnologias.map(tec => `<span>${tec}</span>` ).join('')}</div>
                <div class="cardLeftTextoButtons">
                    <a href="${el.demo}" target="_blank"><button> <i class="fa-solid fa-eye"></i> Ver </button></a>
                    <button> <i class="fa-solid fa-code"></i> Explorar</button>
                    <a href="${el.repo}" target="_blank"><button> <i class="fa-brands fa-github"></i> Github</button></a>
                </div>
    
            </div>
            </div>
        `)
    }).join('') ;
    
    contenedor.innerHTML = cards;

}

cargar();

proyectos.innerHTML = 'Proyectos: ' + datos.length;

