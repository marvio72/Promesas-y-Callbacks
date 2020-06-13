import { buscarHeroe } from './js/callbacks';
import './sass/estilos.scss';

const heroeId = 'spider';

buscarHeroe( heroeId, (err, heroe) => {

  if (err) {
    console.error(err);
  } else {
    console.info(heroe);
  }
});

console.log('Finaliza el programa');