// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const companies = {
  '3' : 'Amex (American Express)' ,
  '4' : 'Visa' ,
  '5' : 'Mastercard',
  '6' : 'Discover',
};

// Add your functions below:
const strToCard = str => str.split('').map(item =>Number(item));

const Luhn = arr => {
   const len = arr.length;
  const checkDigit = arr[len - 1];
  let doubleIt = true;
  let sum = checkDigit;
  for(let i = len - 2 ; i >= 0 ; i--)
      {
        const val = arr[i];
        if(doubleIt)
          sum += (2*val > 9)? 2*val - 9 : 2 * val;  
        else
          sum += val;
        
        doubleIt = !doubleIt;
      }   
  return {sum , checkDigit} ;
} 

const validateCred = arr => {
  const res = Luhn(arr) ;
 return  !(res.sum % 10) ;
};

const idInvalidCardCompanies = arr => arr.map(card => (card[0] >= '3' && card[0] <='6')?companies[card[0]]:console.log('Company not found')).filter(company => company !== undefined) ;

const findInvalidCards = arr => arr.filter(card => !validateCred(card));


const makeItValid = card => {
   card = card.slice(0);
  const res = Luhn(card);
  const sum = res.sum;
  const correctedSum = Math.round(sum / 10)*10;
  let offset = correctedSum - sum ;
  const len = card.length;
  for (let i = len - 1 ; i >=0 ; i-=2)
    {
      const val = card[i] + offset;
      if( val >=0 && val <=9 )
        {
          card[i] = val;
          break;
        }
      else
        {
          card[i] = Math.min(Math.max(val,0),9);
          const oldVal = val - offset ;
          const diff = oldVal - card[i];
          (diff >= 0)?offset+= diff:offset -= diff;
        }
    }
 return card;
}


//const invalidCards = findInvalidCards(batch);
//console.log(invalidCards);
//console.log(idInvalidCardCompanies(invalidCards));

const card = strToCard('5280676539561852');
console.log(card);
console.log(validateCred(card));
const newCard = makeItValid(card);
console.log(newCard.join(''));
console.log(validateCred(newCard));





