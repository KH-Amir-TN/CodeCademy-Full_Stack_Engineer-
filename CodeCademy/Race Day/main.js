let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;

let age = 18;
if (age >18 && isEarly)
  raceNumber+=1000;

if(age > 18 && isEarly)
  console.log(`Runner number ${raceNumber} you will race at 9:30 am.`);
else if(age > 18 && !isEarly)
  console.log(`Runner number ${raceNumber} you will race at 11:00 am.`);
else if(age < 18)
   console.log(`Runner number ${raceNumber} you will race at 12:30 am.`);
else
  console.log(`Runner number ${raceNumber} see the registration desk.`);



