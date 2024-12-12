//var generateName = require("sillyname");//if we dont use type module
import generateName from "sillyname";
import superheroes from "superheroes";
var sillyname = generateName();
var heroName = superheroes.random();

console.log('My name is '+ sillyname +'.');
console.log("I'm " + heroName + "!")