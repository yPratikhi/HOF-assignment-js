var linkedin=/(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

var regex = new RegExp(linkedin);
const url = "https://www.linkedin.com/in/pratik-yadav-634847125/";

function validateUrl() {
  if (url.match(regex)) {
    console.log("Valid!");
  } else {
    console.log("invalid");
  }
}

validateUrl(url);