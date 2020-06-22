import{ buscarHeroe, buscarHeroeAsync} from './js/promesas';

buscarHeroe('capi1')
  .then(heroe => console.log(heroe))
  .catch( console.warm );

buscarHeroeAsync('iron2')
  .then(heroe => console.log(heroe))
  .catch( console.warm );