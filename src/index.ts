import Cachorro from './Cachorro';
import { bele } from './functionTest';

const dingo = new Cachorro('Dingão da galera');
const nino = new Cachorro('Ninonho');

console.log(dingo);
console.log('oies');
console.log(nino);

console.log(bele);

(async () => {
  const bets = await bele();
  console.log(bets);
})();
