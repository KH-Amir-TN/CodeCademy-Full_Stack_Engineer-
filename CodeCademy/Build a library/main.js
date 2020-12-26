class Media{
    constructor(title){
      this._title=title; 
      /*this._isCheckedOut=(typeOf isCheckedOut ==='boolean')?isCheckedOut:false;
      this._ratings=(Arrays.isArray(ratings))?ratings:[];*/
      this._isCheckedOut=false;
      this._ratings=[];
    };
      //getters and setters
      set title(title){this._title=title;}; 
      set isCheckedOut(isCheckedOut){this._isCheckedOut=isCheckedOut};
      set ratings(ratings){this._ratings=ratings};
  
      get title(){return this._title;}; 
      get isCheckedOut(){return this._isCheckedOut;};
      get ratings(){ return this._ratings;};
  
  //methods
    addRating(rating){
      if(typeof rating === 'number')
        this.ratings.push(Math.min(Math.max(0,rating),5));
      };
    toggleCheckOutStatus(){this.isCheckedOut = !this.isCheckedOut;};
    getAverageRating(){
      const ratings = this.ratings;
      return (ratings.reduce((acc ,val) => acc + val) / ratings.length).toFixed(2) ;
    };
  
  };
  
  
  class Book extends Media{
    constructor(title ,author , pages)
      {
        super(title);
        this._author = author ;
        this._pages = pages;
      };
  //getters and setters
        set author(author){this._author = author} ;
        set pages(pages){this._pages = pages};
        get author(){return this._author} ;
        get pages(){return this._pages};
      
  };
  
  
  class Movie extends Media{
    constructor(title , director , runTime){
      super(title);
      this._director = director ;
      this._runTime = runTime;
    };
  
  //getters and setters
        set director(director){this._director = director} ;
        set runTime(runTime){this._runTime = runTime};
        get director(){return this._director} ;
        get runTime(){return this._runTime};
  };
  
  class CD extends Media {
    constructor(title , artist , songs){
      super(title);
       this._artist = artist || "";
       this._songs =Array.isArray(songs) ? songs : [] ;
    };
  
    //getters and setters
        set artist(artist){this._artist = artist} ;
        set songs(songs){this._songs = songs};
        get artist(){return this._artist} ;
        get songs(){return this._songs};
  
      //method
      addSong(song){this.songs.push(song);};
      shuffle(){
        song.sort(
          (a,b) => {
            const randNum = Math.floor(Math.random()*11);
            return randNum >= 5 ? -1 : randNum ;
          }
        );
      };
  };
  
  
  
  
  const historyOfEverything = new Book('A Short History of Nearly Everything','Bill Bryson',544);
  historyOfEverything.toggleCheckOutStatus();
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  
  const speed = new Movie('Speed', 'Jan de Bont' , 116);
  speed.toggleCheckOutStatus();
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());
  