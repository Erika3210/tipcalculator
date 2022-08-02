
function calculate() {

  var total = document.getElementById("total_amount").value;
var percent = document.getElementById("percent_amount").value;
  var tip= total* percent/100;

  document.getElementById("tip").innerHTML= tip;

}