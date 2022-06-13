// Variable declaration
let distance;
let fareCharges;


function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) {
    fareCharges = "This one is on me!";
  } else if (distance > 400 && distance <= 1000) {
    fareCharges = 50.0;
  } else if (distance > 1000 && distance <= 1500) {
    fareCharges = 100.0;
  } else if (distance > 1500 && distance <= 2500) {
    fareCharges = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    fareCharges = "No can do.";
  }
  return fareCharges;
}
//console.log(scuberGreetingForFeet(2500))
let destination;
function ternaryCheckCity(destination) {
  // Write your code here!
  let response;
  destination === "NYC"
    ? (response = "Ok, sounds good.")
    : (response = "No go.");
  return response;
}
//console.log(ternaryCheckCity("Nai"))
let freeDistance = 300
function switchOnCharmFromTip(freeDistance) {
  // Write your code here!

  let passengerReaction;
  switch (freeDistance) {
    case "generous":
      return passengerReaction = "Thank you so much.";
      break;
    case "not as generous":
      return passengerReaction = "Thank you.";
      break;
    default:
      return passengerReaction = "Bye.";
      break;
  }
}
console.log(switchOnCharmFromTip("generous"))
