let andar = () => console.log("O carro esta andando");
let parar = () => console.log('o carro parou');

let acaocarro = (callback) => callback();

acaocarro(andar);
acaocarro(parar);