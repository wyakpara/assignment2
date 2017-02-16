// Break it gently produces an Alert no matter what that says there's no being honest

// Be honest does one of two things:
// If the number selected does not match the number selected for confirmation, outputs error
// If it does match, it should enter the image of the GIF stored in my images folder along with the content of
// how ugly the page was, along with the viewer's comments
function breakGentle() {
  alert("There's no breaking this gently; try again.");
}

function honesty() {
  // Find the box that was checked
  var num = document.getElementById('num').value;

  // Compare it to the confirmation box
  var radio = document.querySelector('input[name="howbad"]:checked').value
  // If they're not the same, error.
  if (num === radio) {
    document.getElementById('howbad').style.display = "none";
    document.getElementById('success').style.display = "block";
    //document.getElementById('jsbox').innerHTML = num;
    var str1 = "default value";

    if(num == 1)
      str1 ="1 - Definitely seen worse.<br>Comments from reader: ";
    if(num == 2)
      str1 = "2 - Your body looks like a McDonald's ad.<br>Comments from reader: ";
    if(num == 3)
      str1 = "3 - Is that... Comic Sans? AND Wingdings? Good god.<br>Comments from reader: ";
    if(num == 4)
      str1 = "4 - Jesus, dude, that's pretty goddammed ugly.<br>Comments from reader: ";
    if(num == 5)
      str1 = "5 - I can't tell anymore because I am now blind.<br>Comments from reader: ";

    str1 = str1.concat(document.getElementById('comment').value);
    document.getElementById('theForm').innerHTML = str1;
  } else {
    alert('Your number does not match! Try again.');
  }
}
