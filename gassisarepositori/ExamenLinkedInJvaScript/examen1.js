// Examen LinkedIn pregunta 1
//what is the value of Dessert.Type after executing the code?
const dessert = {type: "pie"};
dessert.type = "pudding";
const seconds = dessert;
seconds.type = "fruit";
console.log(dessert.type);


