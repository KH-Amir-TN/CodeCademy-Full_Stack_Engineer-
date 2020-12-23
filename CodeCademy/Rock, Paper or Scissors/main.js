const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if( userInput !== 'rock' && userInput !== 'paper' && userInput !== 'scissors' && userInput !== 'bomb')
      console.log('Error');
    else
      return userInput;
  }
  
  //console.log(getUserChoice('paper'));
  
  const getComputerChoice = () => {
    const randNum = Math.floor(Math.random() * 3);
    switch (randNum)
      {
        case 0:
        //  console.log('rock');
          return 'rock';
        case 1:
        //  console.log('paper');
          return 'paper';
        default :
         // console.log('scissors');
          return 'scissors';
      }
  
  }
  
  
  
  
  
  const determineWinner = (userChoice , computerChoice) => {
    if(userChoice === 'rock')
      {
        if(computerChoice === 'scissors')
          return 'win';
        else if(computerChoice === 'paper')
          return 'lost';
        else
          return 'tie';
      }
      else if(userChoice ==='paper')
        {
          if(computerChoice === 'rock')
           return 'win';
          else if(computerChoice === 'scissors')
           return 'lost';
          else
           return 'tie';
        }
      else if (userChoice === 'scissors')
        {
        if(computerChoice === 'paper')
           return 'win';
          else if(computerChoice === 'rock')
           return 'lost';
          else
           return 'tie';
        }
        else
        {
          console.log('Error');
        }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('Bomb');
    if(userChoice === 'bomb')
      console.log('Winner winner chicken dinner !!');
    else
      {
    console.log(`User choice : ${userChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`Computer choice : ${computerChoice}`);
  
    console.log('Result : '+determineWinner(userChoice , computerChoice));
    }
  }
  
  playGame();
  
  
  
  