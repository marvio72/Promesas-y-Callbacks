import { buscarHeroe as buscarHeroeCallback } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './sass/estilos.scss';

const heroeId1 = 'spider';
const heroeId2 = 'iron';

// buscarHeroe( heroeId1, (err, heroe1) => {
  
  //   if (err) {return console.log(err);}
  
  //   buscarHeroe( heroeId2, (err, heroe2) => {
    //     if (err) {return console.log(err);}
    
    //     console.log(`Enviando a ${ heroe1.nombre} y ${heroe2.nombre} a la misión`);
    //   });
// });

    // buscarHeroe(heroeId1).then(heroe1 => {
    //   // console.log(`Enviando a ${heroe.nombre} a la misión`);
    //   buscarHeroe( heroeId2 ).then(heroe2 => {
    //     console.log(`Enviando a ${ heroe1.nombre} y ${heroe2.nombre} a la misión`);
    //   });
    // });
    
// manera de crear promesa con objetos ilimitados.
Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then(([heroe1, heroe2]) =>{
  console.log(`Enviando a ${ heroe1.nombre} y ${heroe2.nombre} a la misión`);
});

    console.log('Finaliza el programa');