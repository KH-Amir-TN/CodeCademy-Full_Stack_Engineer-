

const dishFactory = (_dishName , _dishPrice) => {
    return {
      _dishName ,
      _dishPrice ,
     get dishName() {return this._dishName;} ,
      get dishPrice() {return this._dishPrice;} ,
       
    }
  }
  
  const coursesFactory = (_appetizers = [] , _mains = [], _desserts = []) => {
    return {
      _appetizers ,
      _mains ,
      _desserts ,
      get appetizers() {return this._appetizers;} ,
      get mains() {return this._mains;} ,
      get desserts() {return this._desserts;}
    }
  }
  
  const menuFactory = _courses => {
    return {
      _courses ,
      get courses (){return this._courses;} ,
      addDishToCourse(courseName , dishName  , dishPrice) {
        const dish = dishFactory(dishName  , dishPrice);
          if(courseName ==='appetizers' ||        courseName ==='mains' || courseName ==='desserts')
           this.courses[courseName].push(dish);
  
      } ,
  
      getRandomDishFromCourse(courseName) {
          let dishes;
            if(courseName ==='appetizers' ||        courseName ==='mains' || courseName ==='desserts')
          {
            dishes = this.courses[courseName];
  const randIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randIndex];
          }
          
  
      } ,
  
  generateRandomMeal() {
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const appetizer = this.getRandomDishFromCourse('appetizers');
  
    const mealPrice = main.dishPrice + dessert.dishPrice + appetizer.dishPrice ;
  
    return `Meal : {Main : ${main.dishName} , Dessert : ${dessert.dishName} , Appetizer : ${appetizer.dishName} .}`;
    
  }
  
  
    }
  }
  
  
  
  const menu = menuFactory (coursesFactory());
  menu.addDishToCourse('appetizers','1',1);
  menu.addDishToCourse('appetizers','2',2);
  menu.addDishToCourse('appetizers','3',3);
  
  menu.addDishToCourse('desserts','4',1);
  menu.addDishToCourse('desserts','5',2);
  menu.addDishToCourse('desserts','6',3);
  
  menu.addDishToCourse('mains','7',1);
  menu.addDishToCourse('mains','8',2);
  menu.addDishToCourse('mains','9',3);
  
  //console.log(menu.courses.appetizers);
  
  console.log(menu.generateRandomMeal());
  
  
  
  
  
  