let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

const replaceElement = (oldElement,newElement,arr) => {
  const index = arr.indexOf(oldElement);
if(index !== -1)
  arr[index] = newElement;
}

const removeElements = (oldElements, arr) => {
  return arr.filter(item => !oldElements.includes(item));
}

//console.log(secretMessage.length);
secretMessage.pop();
//console.log(secretMessage.length);

secretMessage.push('to','Program');
//console.log(secretMessage.slice(10));
replaceElement('easily','right',secretMessage);
//console.log(secretMessage);
secretMessage.shift();
//console.log(secretMessage);
secretMessage.unshift('Programming');
//console.log(secretMessage);
secretMessage = removeElements(['get','right','the','first','time,'],secretMessage);
//console.log(secretMessage);
const index = secretMessage.indexOf('you');
if(index !== -1)
  secretMessage.splice(index + 1 , 0 ,'know,');
console.log(secretMessage.join(' '));


