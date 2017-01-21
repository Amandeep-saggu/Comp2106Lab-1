  var userChoice = prompt("What do you choose rock, paper , scissors or rope?");
 var computerChoice = Math.random();
  if(computerChoice <= 0.25) {
      computerChoice = "rock";
  }
  else if(computerChoice <= 0.50) {
      computerChoice = "paper";
  }
  else if(computerChoice <= 0.75){
      computerChoice = "scissors";
  }
  else {
      computerChoice ="rope";
  }
console.log("Computer:: "+ computerChoice);

var compare = function(choice1, choice2){
  if(choice1 === choice2) {
     return ("tie");
    }
    else if(choice1 === "rock") {
        if(choice2 === "paper") {
             return ("paper wins");
        }
        else if(choice2 === "scissors"){
          return ("rock wins");
        }
        else if(choice2 === "rope"){
          return ("rope wins");
          }
    }
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
          return ("Paper wins");
        }
        else if(choice2 === "scissors"){
            return ("Scissors wins");
        }
        else if(choice2 === "rope"){
            return ("Rope wins");
        }
    }
    else if(choice1 === "scissors") {
        if (choice2 === "paper") {
          return ("Scissors wins");
        }
        else if(choice2 == "rock"){
          return ("Rock wins");
        }
        else if(choice2 == "rope") {
          return ("Rope wins")
        }
    }
    else if(choice1 === "rope") {
            if(choice2 === "rock") {
              return ("Rope wins");
            }
            else if(choice2 == "paper") {
              return ("Rope wins");
            }
            else if(choice2 == "scissors") {
              return ("Rope wins");
            }
    }
  };
console.log(compare(userChoice, computerChoice))
