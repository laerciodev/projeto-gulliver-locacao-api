const cars = [
  // Renegade 1.8 4x2 Flex 16V Mec.
  { marca: '29', modelo: '7306' },
  // C3 Attraction Pure Tech 1.2 Flex 12V Mec
  { marca: '13', modelo: '7585' },
  // Z3 Roadster M 3.2
  { marca: '7', modelo: '6261' },
  // "CRUZE HB Sport LT 1.8 16V FlexP. 5p Aut
  { marca: '23', modelo: '5975' },
];

async function getCar(index = 0) {
  const { marca, modelo } = cars[index];
  const { data: car } = await axios.get(`
    https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos/2016-1
  `);
  return car;
}
export default getCar;
