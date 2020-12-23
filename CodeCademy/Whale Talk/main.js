//const input = 'turpentine and turtles';
const input = 'Hi, Human';
let res = '';
input.toUpperCase().split('').filter(item => ['A','E','U','I','O'].includes(item)).forEach(item => {(item ==='U' || item === 'E')?res+=item+item:res+=item;});;
console.log(res);
