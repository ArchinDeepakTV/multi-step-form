function logs() {
  const customerName = document.getElementById("name");
  const phNo = document.getElementById("phone-number");
  const bikeModel = document.getElementById("bikes");
  console.log(customerName.value);
  console.log(phNo.value);
  console.log(bikeModel.value);
  var customerDetails = {
    name: customerName.value,
    phone: phNo.value,
    model: bikeModel.value,
  };
  window.location.href = "./basic-details.html";
  // make a ceaser cipher and send the values through url
  // https://www.plus2net.com/php_tutorial/variables2.php
}
