/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - happens when in the global scope.
* 2. Implicit Binding - happens whenever a function is called by a preceding dot. 
* 3. New binding - happens when a constructor function is used this refers to 
    instance of the Object that is created and returned by the constructor function
* 4. Explicit binding - happens when the JavaScript call or apply method is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function favoriteColor(color){
    console.log(this);
    return `My favorite color is ${color}`;
}
console.log(favoriteColor("pink"));


// Principle 2

// code example for Implicit Binding

const car = {
    name:"BMW",
    year: 2018,
    model: function() {
        return `I have a ${this.name}. It was purchased in ${this.year}.`;
    }
}
console.log(car.model());

// Principle 3

// code example for New Binding
/**constructor build */
function Student(name, gender){
    this.name = name;
    this.gender = gender;
    this.introduction = function(){
        console.log(`My name is ${this.name} and I am a ${this.gender}.`)
    }
}

const vanessa = new Student('vanessa',"Female");
const mark = new Student('Mark',"Male");

vanessa.introduction();
mark.introduction();


// Principle 4

// code example for Explicit Binding

function Place(location){
    this.country = location.country;
    this.favoriteToDo = location.favoriteToDo;
    this.friend = location.friend;
}

/**Method of the Parent */
Place.prototype.say = function(){
    return `Me and my friend ${this.friend} took a week long trip to ${this.country} while in college and 
    our favorite thing to do was touring the ${this.favoriteToDo}.`
}

const paris = new Place ({

    country: "Paris",
    friend: "Gabby",
    favoriteToDo: "Eiffel Tower"
})

console.log(paris.say());