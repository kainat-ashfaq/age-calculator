var calculator = document.getElementById("cal")
function calculate(value) {
    var birthOfDate = document.getElementById("birthDate");
  var birthDate = new Date(birthOfDate.value);
  var current = new Date ()
  var age = current - birthDate
  var finalAge = Math.floor( age / (365.25*24*60*60*1000))
  console.log(finalAge);
  var ageInMonths = Math.floor(finalAge*12)
  console.log(ageInMonths);
  var ageInDays = Math.floor(finalAge*365.25+(current.getDate()-birthDate.getDate()))
  console.log(ageInDays);
  document.write(`${finalAge}`)
}

