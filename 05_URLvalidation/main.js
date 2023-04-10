var expression =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

var regex = new RegExp(expression);
const url = "https://www.example.com";

function validateUrl() {
  if (url.match(regex)) {
    console.log("Valid!");
  } else {
    console.log("invalid");
  }
}

validateUrl(url);
