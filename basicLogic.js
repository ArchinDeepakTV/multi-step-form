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
      // console.log(a);
    }
    cName += a;
  }
  // console.log(cName);
  return cName;
}

if (model == "gt650") {
  model = "Royal Enfield Continental GT 650";
  document.getElementById("imgs").src = "./assets/img/GT650.jpg";
} else if (model == "classic350") {
  model = "Royal Enfield Classic 350";
  document.getElementById("imgs").src = "./assets/img/classic350.jpg";
} else if (model == "thunderbird") {
  model = "Royal Enfield Thunderbird";
  document.getElementById("imgs").src = "./assets/img/thunderbird.jpg";
} else if (model == "meteor") {
  model = "Royal Enfield Meteor 350";
  document.getElementById("imgs").src = "./assets/img/meteor.jpg";
} else if (model == "himalayan") {
  model = "Royal Enfield Himalayan 350";
  document.getElementById("imgs").src = "./assets/img/himalayan.jpg";
} else if (model == "interceptor650") {
  model = "Royal Enfield Interceptor GT 650";
  document.getElementById("imgs").src = "./assets/img/interceptor650.jpg";
}
document.getElementById("cName").placeholder = cName.toUpperCase();
document.getElementById("phone-number").placeholder = phNo;
document.getElementById("model").placeholder = model.toUpperCase();
