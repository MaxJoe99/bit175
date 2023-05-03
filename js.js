var count = 4;


//_______________ Breaking point
function onload1() {
   
  console(count)
  count -= 1;
  if (count >= 2) {
      if (window.confirm("Inactive user?\nContinues with page") == true) {} else {
          {
              window.close()
          }
      }
  }
 else {
  if (window.confirm("Inactive user?\nClose the pages") == true) {
          window.close()
  } else { }
}
}
window.setInterval("onload1()", 10000); // Note 10 seconds



//_______________ The stuff that on the page


function buttom() {
  var gender = "";
  const temperature = document.getElementById("Tmess");
  const Cname = document.getElementById("namez");
  if (document.getElementById('FTemp').checked == true) {
    gender = "Female";
  } else if (document.getElementById('MTemp').checked == true) {
    gender = "Male";
  } else {
    gender = "Gender neutral";
  }
  document.getElementById("namez").innerHTML = Cname;
  document.getElementById("Tmess").innerHTML = temperature;
  document.getElementById("Gendermess").innerHTML = gender;
}
