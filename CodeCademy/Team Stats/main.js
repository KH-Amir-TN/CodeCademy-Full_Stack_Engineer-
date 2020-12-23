const playerFactory = (_firstName , _lastName , _age) => {
    return{
      _firstName , 
      _lastName , 
      _age ,
      get firstName(){return this._firstName;} ,
      get lastName(){return this._lastName;} ,
      get age(){return this._age;} , 
    };
  };
  
  const gameFactory = (_opponent,_teamPoints,_opponentPoints) => {
    return {
      _opponent,
      _teamPoints,
      _opponentPoints ,
      get opponent(){return this._opponent;} ,
      get teamPoints(){return this._teamPoints;} ,
      get opponentPoints(){return this._opponentPoints;} , 
    };
  }
  
  const teamFactory = (_players = [] , _games = [] ) => {
    return{
      _players ,
      _games ,
      get players(){return this._players;} ,
      get games(){return this._games;} ,
      addPlayer(firstName,lastName,age) {
        const newPlayer = playerFactory(firstName,lastName,age);
        this.players.push(newPlayer);
      } ,
  
      addGame(opponent,teamPoints,opponentPoints){
  const newGame = gameFactory(opponent,teamPoints,opponentPoints);
        this.players.push(newGame); 
      } ,
  
    };
  };
  const players = [playerFactory('Pablo','Sanchez',11),playerFactory('CR','7',32),playerFactory('Lionel','Messi',28)];
  
  const team = teamFactory(players);
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Broncos',42,27);
  console.log(team.players);
  
  