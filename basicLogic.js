const url = window.location.href;
console.log(url);
const urlParams = new URLSearchParams(url);

var tempName = urlParams.get("cName");
const cName = reverseCipher(tempName);
console.log(cName);
const phNo = urlParams.get("ph");
console.log(phNo);
const model = urlParams.get("model");
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
