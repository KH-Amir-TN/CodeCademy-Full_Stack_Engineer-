let _ = {
    clamp(number , lower , upper){
      return Math.min(Math.max(number,lower),upper);
    } ,
    inRange(number , start , end){
      if(end === undefined)
        {
          end = start;
          start = 0;
        }
      else if (end < start){
          end += start;
          start =end -start ;
          end -= start;
      }
     return this.clamp(number,start,end) === number && number!==end;
    } ,
    words(string){
      return string.split(' ');
    } ,
  
    pad(string , length) {
      let paddings ='';
      length -= string.length;
  
      const len = Math.floor(length / 2);
        //  console.log(len);
      for(let i=0;i<len;i++)
          paddings +=' ';
  
    const res = paddings + string + paddings ;
    return length % 2 > 0? res + ' ' : res;
    } ,
    has(object , key) {
      return  object[key] !== undefined &&  object[key] !== null;
    } ,
  invert(obj)
  {
    const invertedObj = {};
    for( let key in obj)
        invertedObj[obj[key]] = key;
  
    return invertedObj ;
  } ,
  findKey(object , predicate)
  {
    for(let key in object)
      if(predicate(object[key]))
        return key;
  
    return undefined ;
  } ,
  drop(arr , num)
    {
       
      if(num === undefined)
        num = 1;
  
      return arr.slice(num);
    } ,
  
    dropWhile(arr , predicate)
      {
        let index =0;
        for(index in arr)
          {
            if(! predicate(arr[index],index,arr))
            break;
          }
    
        return this.drop(arr, index );
      } ,
      chunk(arr , size)
      {
        if(size === undefined)
          size = 1;
        const res =[];
         const copy = arr.slice(0);
        const iteration = Math.floor(arr.length / size);
        for( let i=0;i<iteration;i++)
          res.push(copy.splice(0,size));
  
        if(copy.length)
          res.push(copy);
  
        return res;
      } ,
  
  
  
  };
  const obj = {name : 'Amir' , age : 21} ;
  
  console.log(_.dropWhile([1, 2, 0, 4],(item,index,arr) =>
  index <= item ));
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;