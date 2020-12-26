// **Mixed Messages**

//Functions 


 const generateCrushName = choice => 
{
    const femaleNames = ['Nikita' , 'Alexa' ,'Gabriella ' , 'Catrina' , 'Grace']; //5 female Names
    const maleNames = ['Connor' , 'Tommas' , 'Jack' , 'Robin' , 'Donald']; // 5 male Names
    const mixedNames = femaleNames.concat(maleNames).sort(); // merge the two arrays into one and sort it based on ASCII code to mix its names

    let randIndex ;
    switch (choice) {
        case 'F' :
            randIndex = Math.floor(Math.random()*femaleNames.length); //chose a random index in the female Names array
            return femaleNames[randIndex];//return the name with the random index
        case 'M' :
            randIndex = Math.floor(Math.random()*maleNames.length); //chose a random index in the make Names array
            return maleNames[randIndex];//return the name with the random index
        default :
            randIndex = Math.floor(Math.random()*mixedNames.length); //chose a random index in the mixed Names array
            return mixedNames[randIndex];//return the name with the random index
    };

};

 const howCompatibile = (playerName , crushName) => 
{   

    playerName = playerName.toLowerCase();//lower case all playerName letters
    crushName = crushName.toLowerCase();//lower case all playerName letters

    const longName = (playerName.length < crushName.length) ? crushName : playerName;// determine the longer name
    const shortName = (longName === playerName) ? crushName : playerName;//determine the shorter name

    const occuranceCounter =  shortName.split('').reduce( (acc, val) => longName.includes(val) ? acc + 1 : acc , 0); // calculate the occurances of the shorter name letters in the longer name .

    return ( 100 * occuranceCounter / longName.length).toFixed(2) //calculate and return the percentage of the shorter name letters in the longer name as compatibility percentage ;

};

 const getQuoteOfDay = () => 
{
    const quoates = [
        "“We accept the love we think we deserve.”― Stephen Chbosky, The Perks of Being a Wallflower ." ,
        "“It is better to be hated for what you are than to be loved for what you are not.”― Andre Gide, Autumn Leaves ." ,
        "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”― John Green, The Fault in Our Stars ." ,
        "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”― Friedrich Nietzsche." ,
        "“Love all, trust a few, do wrong to none.”― William Shakespeare, All's Well That Ends Well ."
    ];  
    const randIndex = Math.floor(Math.random() * quoates.length);
    return quoates[randIndex];
};

 log = (playerName , crushName , compatibilityPercentage ,quoateOfDay) => 
{
    console.log(`Hey ${playerName} , hoping that you are doing well ^_^ !
        Your crush name based on your interests : ${crushName} 
        You are ${compatibilityPercentage} % compatible !
        
        Here's a quoate for you : ${quoateOfDay};

        Bye ^*^ !!
    `);
};


//The start function initiate the Mixed messages game and starts it . 
const start = () => {
 
    //Your Name 
    const playerName = "Amir";
    //Your interset (M:Man / F:Female / B:Both) ?
    const choice = "B";//Change this value according to your interest
    //Get an array of crushNames according to the user's intersets
    const crushName = generateCrushName(choice);
    const compatibilityPercentage = howCompatibile(playerName , crushName);//Returns a compatibility rate in percentage fallowing some rule.
    const quoateOfDay = getQuoteOfDay();

    log(playerName , crushName , compatibilityPercentage ,quoateOfDay); // log the results in certain format .


};








start();