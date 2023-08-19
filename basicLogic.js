const url = window.location.href;
console.log(url);
const urlParams = new URLSearchParams(url);

var tempName = urlParams.get("cName");
const cName = reverseCipher(tempName);
console.log(cName);
const phNo = urlParams.get("ph");
console.log(phNo);
var model = urlParams.get("model");
console.log(model);

function reverseCipher(customerName) {
  let cName = "";
  for (let i = 0; i < customerName.length; i++) {
    let a;
    if (customerName[i] == ",") a = " ";
    else {
      a = customerName[i].charCodeAt(0) - 3;
      a = String.fromCharCode(a);
      // console.log(a
    }
    cName += a;
  }
  // console.log(cName
  return cName;
}
const bikeColors = document.getElementById("colors");
if (model == "gt650") {
  const gt650Colors = {
    "BRITISH RACING GREEN": "britishRacingGreen",
    "ROCKER RED": "rockerRed",
    "DUX DELUXE": "duxDeluxe",
    "MISTER CLEAN": "misterClean",
    "SPLIPSTREAM BLUE": "slipstreamBlue",
    "APEX GREY": "apexGrey",
  };
  for (let key in gt650Colors) {
    let option = document.createElement("option");
    option.setAttribute("value", gt650Colors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Continental GT 650";
  document.getElementById("imgs").src = "./assets/img/GT650.jpg";
} else if (model == "classic350") {
  const classic350Colors = {
    "CHROME RED": "chromeRed",
    "CHROME BRONZE": "chromeBronze",
    "GUNMETAL GREY": "gunmetalGrey",
    "DARK STEALTH BLACK": "darkStealthBlack",
    "HALCYON BLACK": "halcyonBlack",
    "HALCYON GREEN": "halcyonGreen",
    "HALCYON GREY": "halcyonGrey",
    "REDDITCH SAGE GREEN": "redditchSageGreen",
    "REDDITCH GREY": "redditchGrey",
    "REDDITCH RED": "redditchRed",
  };
  for (let key in classic350Colors) {
    let option = document.createElement("option");
    option.setAttribute("value", classic350Colors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Classic 350";
  document.getElementById("imgs").src = "./assets/img/classic350.jpg";
} else if (model == "thunderbird") {
  const x350Colors = {
    "WHIMSICAL WHITE": "whimsicalWhite",
    "ROVING RED": "rovingRed",
  };
  for (let key in x350Colors) {
    let option = document.createElement("option");
    option.setAttribute("value", x350Colors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Thunderbird X 350";
  document.getElementById("imgs").src = "./assets/img/thunderbird.jpg";
} else if (model == "meteor") {
  const meteorColors = {
    "FIREBALL RED": "fireballRed",
    "FIREBALL BLACK CUSTOM": "fireballBlack",
    "SUPERNOVA RED": "supernovaRed",
    "SUPERNOVA BROWN": "supernovaBrown",
    "SUPERNOVA BLUE": "supernovaBlue",
    "STELLAR BLUE": "stellarBlue",
    "STELLAR BLACK": "stellarBlack",
    "FIREBALL BLUE": "fireballBlue",
    "FIREBALL MATTE GREEN": "fireballMatteGreen",
    "FIREBALL YELLOW": "fireballYellow",
  };
  for (let key in meteorColors) {
    let option = document.createElement("option");
    option.setAttribute("value", meteorColors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Meteor 350";
  document.getElementById("imgs").src = "./assets/img/meteor.jpg";
} else if (model == "himalayan") {
  const himalayanColors = {
    "DUNE BROWN": "duneBrown",
    "PINE GREEN": "pineGreen",
    "GRANITE BLACK": "graniteBlack",
    "GLACIER BLUE": "glacierBlue",
    "SLEET BLACK": "sleetBlack",
    "GRAVEL GREY": "gravelGrey",
  };
  for (let key in himalayanColors) {
    let option = document.createElement("option");
    option.setAttribute("value", himalayanColors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Himalayan 350";
  document.getElementById("imgs").src = "./assets/img/himalayan.jpg";
} else if (model == "interceptor650") {
  const interceptor650Colors = {
    "BLACK RAY": "blackRay",
    "BARCELONA BLUE": "barcelonaBlue",
    "BLACK PEARL": "blackPearl",
    "SUNSET STRIP": "sunsetStrip",
    "CANYON RED": "canyonRed",
    "CALI GREEN": "caliGreen",
    "MARK 2": "mark2",
  };
  for (let key in interceptor650Colors) {
    let option = document.createElement("option");
    option.setAttribute("value", interceptor650Colors[key]);
    let optionText = document.createTextNode(key);
    option.appendChild(optionText);

    bikeColors.appendChild(option);
  }
  model = "Royal Enfield Interceptor GT 650";
  document.getElementById("imgs").src = "./assets/img/interceptor650.jpg";
}
document.getElementById("cName").innerHTML = cName.toUpperCase();
document.getElementById("phone-number").innerHTML = phNo;
document.getElementById("model").innerHTML = model.toUpperCase();

function logs() {
  const colorName = document.getElementById("colors").value;
  if (model == "Royal Enfield Continental GT 650")
    document.getElementById("imgs").src =
      "./assets/img/gt650/" + colorName + ".jpg";
  else if (model == "Royal Enfield Interceptor GT 650")
    document.getElementById("imgs").src =
      "./assets/img/interceptor650/" + colorName + ".jpg";
  else if (model == "Royal Enfield Himalayan 350")
    document.getElementById("imgs").src =
      "./assets/img/himalayan350/" + colorName + ".jpg";
  else if (model == "Royal Enfield Meteor 350")
    document.getElementById("imgs").src =
      "./assets/img/meteor350/" + colorName + ".jpg";
  else if (model == "Royal Enfield Classic 350")
    document.getElementById("imgs").src =
      "./assets/img/classic50/" + colorName + ".jpg";
  else if (model == "Royal Enfield Thunderbird X 350")
    document.getElementById("imgs").src =
      "./assets/img/x350/" + colorName + ".jpg";
}
