const menu = {
    courses: 
        {
           appetizers: [],
           mains: [],
           desserts: [], 
        },

addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
        name: dishName,
        price: dishPrice
    };
     menu.courses[courseName].push(dish);
},
getRandomDishFromCourse: function (courseName) {
    const dishes = courseName;

    const randomIndex = Math.floor(Math.random() * dishes.length);
    console.log(dishes[randomIndex]);
    return dishes[randomIndex];
},
generateRandomMeal: function () {
    const appetizers = this.getRandomDishFromCourse(this.courses.appetizers);
    const mains = this.getRandomDishFromCourse(this.courses.mains);
    const desserts = this.getRandomDishFromCourse(this.courses.desserts);
    const totalPrice = appetizers.price + mains.price + desserts.price;

    return `The total price of your ${appetizers.name}, ${mains.name}, and ${desserts.name} is ${totalPrice}.`
}
}

 menu.addDishToCourse('appetizers', 'buffalo wings', 8.25);
 menu.addDishToCourse('appetizers', 'caesar salad', 6.50);
 menu.addDishToCourse('appetizers', 'arrancini', 9.25);
 menu.addDishToCourse('appetizers', 'burrata', 13.00);
 menu.addDishToCourse('appetizers', 'meatballs', 12.25);
 menu.addDishToCourse('appetizers', 'soup du jour', 5.25);
 menu.addDishToCourse('mains', 'penne a la vodka', 17.50);
 menu.addDishToCourse('mains', 'chicken parm', 21.50);
 menu.addDishToCourse('mains', 'lasagna', 19.50);
 menu.addDishToCourse('mains', 'ribeye steak', 45.50);
 menu.addDishToCourse('mains', 'summer squash gnocci', 18.50);
 menu.addDishToCourse('mains', 'baked ziti', 17.00);
 menu.addDishToCourse('mains', 'eggplant parm', 19.00);
 menu.addDishToCourse('desserts', 'tiramisu', 9.00);
 menu.addDishToCourse('desserts', 'warm cookie and ice cream', 12.50);
 menu.addDishToCourse('desserts', 'rainbow cookies', 8.25);

 var meal = menu.generateRandomMeal();

 console.log(meal);
 
