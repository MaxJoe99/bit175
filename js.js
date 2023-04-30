function onload1() {
    var inputA = "Joe Smo"
  }

  function submit() {
    var password = "bit175";
    var inputA = (document.getElementById("inputA").value);
    var inputB = (document.getElementById("inputB").value);
    broker()
    if (inputB === "") {
      alert("must fill in their inputB")
    } else if (inputB === password) {
      alert("authenticated")
    } else {
      alert("Error wrong password")
    } // did not request anything else
    document.getElementById("formA").value = result;
  }

  function broker() {
    inputA == "BIT"
    inputB == "BIT" + Math.floor(Math.random(1) * 190);
    alert(inputB)
  }