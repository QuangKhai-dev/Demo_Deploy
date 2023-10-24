// validation 
function checkRequired(value, idWarning) {
    if (value == "") {
      document.getElementById(idWarning).innerHTML = "Vui lòng không để trống";
      return false;
    } else {
      document.getElementById(idWarning).innerHTML = "";
      return true;
    }
  }
  
  function checkPhoneNumber(value, idWarning) {
    let regexPhone = /^(?!.*[^\d+])(84|0[35789])(\d{8})\b/;
    if (!regexPhone.test(value) && value != "") {
      document.getElementById(idWarning).innerHTML = "Số điện thoại không hợp lệ";
      return false;
    } else if (regexPhone.test(value) && value != "") {
      document.getElementById(idWarning).innerHTML = "";
      return true;
    }
  }
  


function submitForm(e){
e.preventDefault();
let arrValue = document.querySelectorAll(
    "form input,form textarea"
  );
  const infoUser = {};
  for (let item of arrValue) {
    let { id, value } = item;
    infoUser[id] = value;
  }
  console.log(infoUser);
  let active = true;
  active =
    checkRequired(infoUser.fullName, "fullNameWarning") &
    checkRequired(infoUser.phone, "phoneWarning") &
    checkRequired(infoUser.address, "addressWarning") &
    checkPhoneNumber(infoUser.phone, "phoneWarning");
  if (active) {
    console.log('LALA')
    $('#title-form-1').remove()
    $('#title-form-3').remove()
    document.getElementById('title-form-2').style.display = 'block';
    document.querySelector('#section-contact-form .right-side form').style.paddingTop= '60px'
    document.getElementById("contactForm").reset();
    var data={
      'entry.752749376':infoUser.fullName,
      'entry.1037566532':infoUser.phone,
      'entry.1539550178':infoUser.email,
      'entry.1495044300':infoUser.address,
      'entry.206 9493162':infoUser.jobs,
    }   
  
      let queryString = new URLSearchParams(data);
      queryString= queryString.toString();
  
    let xhr = new XMLHttpRequest();
  
    xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-YgbojPqjLrbRKxHcQH4QsaflSmYjre6jH1ddQQloliib_Q/formResponse", true); 
  
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.send(queryString);
  }
  
}

  