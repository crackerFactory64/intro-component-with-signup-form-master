const isEmail = (email) => {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};

document.getElementById("form__submit-button").onclick = () => {
  for (let i = 1; i < 5; i++) {
    if (document.getElementById("form__input" + i).value == "") {
      document.getElementById("form__input-container" + i).style.borderColor =
        "hsl(0, 100%, 74%)";
      document.getElementById("form__error-icon" + i).style.display = "block";
      document.getElementById("form__error" + i).style.display = "block";
    } else {
      document.getElementById("form__input-container" + i).style.borderColor =
        "hsl(249, 10%, 26%)";
      document.getElementById("form__error-icon" + i).style.display = "none";
      document.getElementById("form__error" + i).style.display = "none";
    }

    if (
      document.getElementById("form__input3").value != "" &&
      isEmail(document.getElementById("form__input3").value) == false
    ) {
      document.getElementById("form__input-container3").style.borderColor =
        "hsl(0, 100%, 74%)";
      document.getElementById("form__input3").style.color = "hsl(0,100%, 74%";
      document.getElementById("form__error-icon3").style.display = "block";
      document.getElementById("form__error3").innerHTML =
        "Looks like this in not an email";
      document.getElementById("form__error3").style.display = "block";
    } else if (
      document.getElementById("form__input3").value != "" &&
      isEmail(document.getElementById("form__input3").value) == true
    ) {
      document.getElementById("form__input-container3").style.borderColor =
        "hsl(249, 10%, 26%)";
      document.getElementById("form__input3").style.color =
        "hsl(249, 10%, 26%)";
      document.getElementById("form__error3").style.display = "none";
      document.getElementById("form__error-icon3").style.display = "none";
    }
  }
};
