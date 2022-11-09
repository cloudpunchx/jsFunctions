// // KNOWLEDGE CHECK

// let userNames = [`cloudpUnch`, `SHARK`, `c-Rage`, `hellonearTH2006`, `lIassasIn`, `WiNNEr`, `WINner`];


// // for (let i = 0; i<userNames.length; i++){
// //     let lowerUser = userNames[i].toLowerCase();
// //     if (lowerUser.includes(`winner`)){
// //         console.log(`We have a winner: ${userNames[i]}`);
// //     }
// // }

// for (let i = 0; i<userNames.length; i++){
//     // take the username for the currently iterated user as-is
//     let curUser = usernames[i];
//     // convert the username to lower case version
//     let lowerUser = userNames[i].toLowerCase();
//     // check if it includes the winner string
//     let doesInclude = lowerUser.includes(`winner`);
//     // if includes winner string, print out the username
//     if (lowerUser.includes(`winner`)){
//         console.log(`We have a winner: ${curUser}`);
//     }
// }



// FUNCTIONS



// this greetUser example is a 'useless' function, it doesnt take something or give something
function greetUser(){
    console.log(`Hello User!`);
}

greetUser();

// where it says username in this argument, it will only exist here in this function, if you LOG username you will see 'username is not defined' 
// it is only defined in the scope of this function
// when you name variables the same thing, think of the scope and don't get confused 
function greetSpecificUser(username){
    console.log(`Hello ${username}. How was your day?`);
}

// greetUser();
greetSpecificUser(`Siobhan`);
greetSpecificUser(`Craig`);

// function greetMath(){
//     // console.log(`Greetings, please choose one of the following options.`);
//     // console.log(`1. Add 2 numbers`);
//     // console.log(`2. Divide 2 numbers`);
// }



// ex: a function to always tell the 1 winning number of a lottery
// this is a #3 function: takes nothing and gives something back
function getWinningNumber(){
    let winner = `42`;
    return winner;
}
// there isn't supposed to be/doesn't have to have a correlation between the variable and the function name, these names just make sense to use
// winningnumber / getwinningnumber - they could say anything you want
let winningNumber = getWinningNumber();
console.log(winningNumber);



// take 2 arguments, expected to be numbers. (this is logical), return the sum
function getSum(num1, num2){
    let result = num1 + num2;
    return result;
}

// you could do this without the function, but this simple example of adding 2 #s is just to show how to do it, real examples are more complicated
console.log(1+2);
// using sum function
console.log(getSum(1,2));
console.log(getSum(0,-5));
console.log(getSum(101,200));

