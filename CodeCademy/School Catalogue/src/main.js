class School {
    constructor(name ,level , numberOfStudents)
    {
    
      this.name =  name ;
      this.level = level;
      this.numberOfStudents = numberOfStudents;
    }
    //getters and setters
  get name(){return this._name;};
  get level(){return this._level;};
  get numberOfStudents(){return this._numberOfStudents;};
  
  set name(name){
     this._name = typeof name !== 'object' && String(name).length ?String(name) : this._name ;
    };
  set level(level){
      level = level.toLowerCase();
    this._level = (level ==='primary' || level ==='middle' || level ==='high')?level : this._level ;
    };
  
  set numberOfStudents(numberOfStudents){
    const leastNumber = 0;
    if (typeof numberOfStudents ==='number') 
     this._numberOfStudents = Math.floor(Math.max(numberOfStudents,leastNumber));
    else
    {
      this._numberOfStudents = this._numberOfStudents;
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  };
  
  //methods
  quickFacts(){
    console.log(`SCHOOL ${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
  };
  
  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
  };
  
  };
  
  
  class PrimarySchool extends School {
    constructor(name , numberOfStudents , pickupPolicy){
      super(name ,'primary' , numberOfStudents);
      this.pickupPolicy = pickupPolicy;
    };
  
    //getters and setters
  
    get pickupPolicy() { return this._pickupPolicy;};
    set pickupPolicy(pickupPolicy){ 
      this._pickupPolicy = typeof pickupPolicy !== 'object' && String(pickupPolicy).length ? String(pickupPolicy) : this._pickupPolicy;
    };
  //@Override
  quickFacts(){
   super.quickFacts();
   if(this.pickupPolicy)
    console.log(`The pick up policy : ${this.pickupPolicy}`);
    else
      console.log(`No pick up policy.`);
  };
  
  };
  
  class MiddleSchool extends School {
    constructor(name , numberOfStudents){
      super(name ,'middle' , numberOfStudents);
    };
  };
  
  class HighSchool extends School {
    constructor(name , numberOfStudents ,sportsTeams ){
      super(name ,'high' , numberOfStudents);
      this.sportsTeams = sportsTeams ;
    };
  
    //getters and setters
    get sportsTeams() { return this._sportsTeams;};
    set sportsTeams(sportsTeams) {
      this._sportsTeams = Array.isArray(sportsTeams) ? sportsTeams : this_sportsTeams;
    };
  
    //@Override
    quickFacts(){
   super.quickFacts();
   if(this._sportsTeams)
    console.log(`Sports teams : ${this.sportsTeams}`);
    else
      console.log(`No Sports teams.`);
  };
  };
  
  const lorraineHansbury =  new PrimarySchool('Lorraine Hansbury' ,514 , 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new HighSchool('Al E. Smith' ,415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  //console.log(alSmith.sportsTeams);
  alSmith.quickFacts();
  