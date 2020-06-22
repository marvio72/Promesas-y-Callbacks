const heroes = {
  capi: {
    nombre: 'Capitán América',
    poder: 'Aguantar inyecciones sin morir'
  },
  iron: {
    nombre: 'Ironman',
    poder: 'Absurda cantidad de dinero'
  },
  spider: {
    nombre: 'Spiderman',
    poder: 'La mejor reaccion alergica a las picaduras de araña',
  },
};

export const buscarHeroeAsync = async(id) => {

  const heroe = heroes[id];
  
    if (heroe) {
      return heroe;
    } else {
      throw `No exitste un héroe con el id ${id}`;
    }
  
};

export const buscarHeroe = (id) => {

  const heroe = heroes[id];

  return new Promise((resolve, reject) =>{

    if (heroe) {
      resolve( heroe );
    } else {
      reject(`No exitste un héroe con el id ${id}`);
    }
  });
};

const promesaLenta = new Promise((resolve, reject)=>{
  setTimeout(() =>  resolve('Promesa Lenta'), 2000);
});

const promesaMedia = new Promise((resolve, reject)=>{
  setTimeout(() =>  resolve('Promesa Media'), 1500);
});

//al ser esta promesa la más rapida promise.race siempre la evalua y ejecuta.
const promesaRapida = new Promise((resolve, reject)=>{
  setTimeout(() =>  resolve('Promesa Rápida'), 1000);
});

export{
  promesaLenta,
  promesaMedia,
  promesaRapida
};