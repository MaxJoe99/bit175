var count = 4;
var name = "";
var temp = 98;
var gender = "";
//_______________ Breaking point
function onload1() {
   
  console.log(count)
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
//window.setInterval("onload1()", 10000); // Note 10 seconds

function breaker(){

if (name.length > 10)
{name = "Only stupid people can't read the instructions"}    // instruction in the abbr
else 
{
  name = "The client's name:" + name;
}
if (temp > 99 || temp < 97.9 )
{
temp = "Only stupid people can't read the instructions"    // instruction in the abbr
}
else {
  temp = "The client's temp:" + temp;
}



document.getElementById("namez").innerHTML =  name;
document.getElementById("Tmess").innerHTML = temp;
document.getElementById("Gendermess").innerHTML = "The client's gender:" + gender;// 
}


//_______________ The stuff that on the page


function buttom() {
  name = document.getElementById("Cname").value; 
  temp = document.getElementById("temperature").value;
   
  if (document.getElementById('FTemp').checked == true) {
    gender = "Female";
  } else if (document.getElementById('MTemp').checked == true) {
    gender = "Male";
  } else {
    gender = "Gender neutral";
  }
  breaker()

}
