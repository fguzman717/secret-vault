//This exercise needs a message for the user and a different math problem for each combination of the lock, so 3 in total

//Multiplication will be used for the first combination
const firstCombo = 5 * 2;

//Addition will be used for the second combination
const secondCombo = 20 + 20;

//Subtraction will be used for the third combination
const thirdCombo = 40 - 1;

//This is the message that will be displayed in the alert message
const message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: " +
  firstCombo +
  "-" +
  secondCombo +
  "-" +
  thirdCombo;

//This alert will provide the user with a message that displays the combination
alert(message);
