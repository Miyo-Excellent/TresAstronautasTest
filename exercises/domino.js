const playRandomDado = () => Math.floor(Math.random() * 6);
const hits = 20;

let equalsTenCount = 0;

for (let i = 0; i <= 20; i++) {
    const playDadoOne = playRandomDado();
    const playDadoTwo = playRandomDado();

    if (playDadoOne + playDadoTwo === 10) equalsTenCount++;
}

console.log(equalsTenCount);
