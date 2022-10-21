let form = document.getElementById('form1');

// Lastname
// console.log(form.name);
form.name.addEventListener('change', function () {
    validName(this);
});

const validName = function(inputName) {
    let nameRegex = new RegExp('^[A-Za-z]+$');

    let testName = nameRegex.test(inputName.value);
    // console.log(testName);
    if (testName == false) {
        document.getElementById('errorname').innerHTML="Veuillez entrer un nom valide";
    }
}

// FirstName
// console.log(form.firstname);
form.firstname.addEventListener('change', function() {
    validFirstname(this);
});

const validFirstname = function(inputFirstname) {
    let firstnameRegex = new RegExp ('^[A-Za-z]+$');

    let testFirstname = firstnameRegex.test(inputFirstname.value);
    // console.log(testFirstname);
    if (testFirstname == false) {
        document.getElementById('errorfirstname').innerHTML="Veuillez entrer un prénom valide";
    }
}


// Code Postal
// console.log(form.postal);
form.postal.addEventListener('change', function(){
    validPostal(this);
});

const validPostal = function(inputPostal) {
    let postalRegex = new RegExp ('^[0-9]{5}$');

    let testPostal = postalRegex.test(inputPostal.value);
    // console.log(testPostal);
    if (testPostal == false) {
        document.getElementById('errorpostal').innerHTML="Veuillez entrer un code postal valide";
    }
}

// Adresse
// console.log(form.address);
form.address.addEventListener('change', function() {
    validAddress(this);
});

const validAddress = function(inputAddress) {
    let addressRegex = new RegExp('^[a-zA-Z0-9.-_]$');

    let testAddress = addressRegex.test(inputAddress.value);
    // console.log(testAddress);
    if (testAddress == false) {
        document.getElementById('errorpostal').innerHTML="Veuillez entrer une adresse valide";
    }
}

// Ville
// console.log(form.city);
form.city.addEventListener('change', function() {
    validCity(this);
});

const validCity = function(inputCity){
    let cityRegex = new RegExp ('^[A-Za-z]+$');

    let testCity = cityRegex.test(inputCity.value);
    console.log(testCity);
    if (testCity == false) {
        document.getElementById('errorcity').innerHTML="Veuillez entrer une ville valide";
    }
}

// Email
// console.log(form.email);
form.email.addEventListener('change', function() {
    validEmail(this);
});

const validEmail = function (inputEmail) {
    let emailRegex = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');

    let testEmail = emailRegex.test(inputEmail.value);
    // console.log(testEmail);
    if (testEmail == false) {
        document.getElementById('erroremail').innerHTML="Veuillez entrer une email valide";
    }
}

// Select
// console.log(form.select);
let select = document.querySelector('select');
select.addEventListener('change', function () {
    // console.log(this.options[this.selectedIndex].value);
    let valeur = this.options[this.selectedIndex].value;
});

// Question
// console.log(form.question);
form.question.addEventListener('change', function() {
    validQuestion(this);
});

const validQuestion = function(textareaQuestion) {
    let questionRegex = new RegExp('^[a-zA-Z0-9.-_]$');

    let testQuestion = questionRegex.test(textareaQuestion.value);
    // console.log(testQuestion);
    if (testQuestion == false) {
        document.getElementById('erroremail').innerHTML="Veuillez entrer une question valide";
    }
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
});
