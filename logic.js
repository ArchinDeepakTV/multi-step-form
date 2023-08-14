function logging() {
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
  module.exports = { customerDetails };
}
