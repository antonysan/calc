var button = document.querySelector('.button');
var summary = document.querySelector('.summ');

button.addEventListener("click", function(evt) {

  var input1 = document.querySelector('.qwe').value;
  var input2 = document.querySelector('.kjs').value;
  var value = input1 / input2;
  console.log(value);
  summary.innerHTML = value;
});
