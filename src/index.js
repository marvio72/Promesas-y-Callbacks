import{promesaLenta, promesaMedia, promesaRapida} from './js/promesas'

//manera corta
// promesaLenta.then(console.log);
// promesaMedia.then(console.log);
// // manera larga
// promesaRapida.then(mensaje => console.log(mensaje));

Promise.race([promesaLenta, promesaMedia, promesaRapida])
  .then(console.log)
  .catch(advertencia => console.warn(advertencia));