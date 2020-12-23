// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  const pAequorFactory = (_specimenNum  ,_dna) => {
    return {
      _specimenNum ,
      _dna ,
      get specimenNum() {return this._specimenNum} ,
      get dna() {return this._dna} ,
      set specimenNum(num) {this._specimenNum = num} ,
      set dna(dna) {this._dna = dna} ,  
  
      mutate(){
        const dna = this.dna;
        const len = dna.length ;
        const randIndex = Math.floor(Math.random()*len);
        const baseToMutate = this.dna[randIndex];
        let mutatedBase ;
  
        while( (mutatedBase = returnRandBase() ) === baseToMutate);
  
        return this.dna[randIndex] = mutatedBase ;
      } , 
  
      compareDNA(specimen){
        const dna = this.dna;
        const otherDna = specimen.dna;
      const intersection = dna.filter((base , index) => otherDna[index] === base);
      const percentage = 100 * intersection.length / dna.length;
      console.log(`specimen #${this.specimenNum} and specimen #${specimen.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
        
      } ,
  
      willLikelySurvive ()
      {
        const dna = this.dna;
        const CCount = dna.reduce((acc , val) =>
         val === 'C'?acc+1:acc, 0 );
        const GCount = dna.reduce((acc , val) =>
         val === 'G'?acc+1:acc, 0 );
        const CPercentage = CCount / dna.length;
        const GPercentage = GCount / dna.length;
        return CPercentage >= 0.6 || GPercentage >= 0.6;
        
      } ,
  
    };
  };
  
  const factory = () => {
    const population = 30;
    const observation = [];
    for (let i=0 ; i<population ; i++)
        observation.push(pAequorFactory(i,mockUpStrand()));
  
    return observation;
  };
  
  const observation = factory();
  console.log(observation.length);
  
  
  
  
  
  
  
  
  
  
  