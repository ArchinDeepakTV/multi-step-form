function logs() {
  const customerName = document.getElementById("name");
  const phNo = document.getElementById("phone-number");
  const bikeModel = document.getElementById("bikes");
  console.log(customerName.value);
  console.log(phNo.value);
  console.log(bikeModel.value);
  cName = cipher(customerName.value);
  // cName = customerName.value;
  callTheNextPage(cName, phNo.value, bikeModel.value);

  // make a ceaser cipher and send the values through url
  // https://www.plus2net.com/php_tutorial/variables2.php
}

function callTheNextPage(cName, phNo, bikeModel) {
  url =
    "./basic-details.html?a=" +
    parseInt(Math.random() * 1000) +
    "&cName=" +
    cName +
    "&ph=" +
    phNo.toString() +
    "&model=" +
    bikeModel;
  window.location.href = url;
}

function cipher(customerName) {
  cName = "";
  index = 0;
  for (let i = 0; i < customerName.length; i++) {
    let a;
    if (customerName[i] == " ") a = ",";
    else {
      a = customerName[i].charCodeAt(index) + 3;
      a = String.fromCharCode(a);
      // console.log(a);
    }
    cName += a;
  }
  // console.log(cName);
  return cName;
}
