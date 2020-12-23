const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day)
      {
        case 'monday' : return 6;
        case 'tuesday' : return 8;
        case 'wednesday' : return 7.5;
        case 'thursday' : return 7;
        case 'friday' : return 7;
        case 'saturday' : return 8;
        case 'sunday' : return 9;
        default :
          console.log('Is this a weekday ?'); 
      }
  }
  
  //console.log(getSleepHours('sunda'));
  
  /*const getActualSleepHours = () => {
    const weekDays =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
    let sum =0;
    for(i in weekDays)
      {
        let day = weekDays[i];
        let sleptHrs = getSleepHours(day)
        console.log(`On ${day} you slept for ${sleptHrs} hours .`);
        sum += sleptHrs;
      }
    console.log(`The Actual Sleep Hours : ${sum}`)
  }*/
  
  /*const getActualSleepHours = () => getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')
  +getSleepHours('saturday')+getSleepHours('sunday');
  */
  const getActualSleepHours = () =>6+8+7.5+7+7+8+9;
  
  //console.log(getActualSleepHours());
  
  const getIdealSleepHours = idealHours =>idealHours * 7;
  
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    const diff = actualSleepHours - idealSleepHours;
    if(actualSleepHours === idealSleepHours)
      console.log('Perfect amount of sleep .');
    else if(actualSleepHours > idealSleepHours)
    {
      console.log('Are you a Panda ?');
      console.log(`You are ${diff} hours over.`);
    }
    else
      { 
      console.log('Get some rest !');
      console.log(`You lack ${-diff} hours of sleep .`);
      }
  }
  
  calculateSleepDebt();
  
  
  
  
  