const log = (wordCount ,sentenceCount,OUWCount) => {console.log(`Word Count : ${wordCount}
Sentence Count : ${sentenceCount}
Over Used Words Count : `,OUWCount);};

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
const wordCount = storyWords.length;
//console.log(storyWords.length);

const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

//console.log(betterWords.length);

let OUWCounter = {};
overusedWords.forEach(key => {OUWCounter[key]=0;});

//console.log(counter);
betterWords.forEach(word =>{
  const index = overusedWords.indexOf(word);
  if(index !== -1)
    OUWCounter[overusedWords[index]]++;
});
//console.log(counter);

const sentences = betterWords.filter(word => word[word.length - 1] === '.' || word[word.length - 1] === '!');
const sentenceCount = sentences.length;
//console.log(sentenceCount);
//console.log(OUWCounter);

log(wordCount,sentenceCount,OUWCounter);
console.log('-------------Better Paragraph------------- \n'+betterWords.join(' '));

console.log('-------------Bad Paragraph------------- \n'+story);


/*** 

    Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

    Here are some ideas:

    For the overused words, remove it every other time it appears.

    Write a function that finds the word that appears the greatest number of times.

    Replaced overused words with something else.

***/



















