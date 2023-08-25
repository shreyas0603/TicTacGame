const Game = require("./Game");

let [mgm,g1]= Game.Gamestart("Shreyas","Yash")
let[m,g2]=Game.Gamestart("Akash","Madura")

// console.log(g1.play(0)) //win 
// console.log(g1.play(2))
// console.log(g1.play(6))
// console.log(g1.play(8))
// console.log(g1.play(3))


console.log(g2.play(0)); //draw
console.log(g2.play(6));
console.log(g2.play(4));
console.log(g2.play(8));
console.log(g2.play(7));
console.log(g2.play(1));
console.log(g2.play(2));
console.log(g2.play(5));
console.log(g2.play(3));
