let form = document.getElementById('form1');

// Lastname
// console.log(form.name);
form.name.addEventListener('change', function () {
    validName(this);
});

const validName = function(inputName) {
    let nameRegex = new RegExp('^[a-zA-Z.-_]');

    let testName = nameRegex.test(inputName.value);
    // console.log(testName);
}

// FirstName
// console.log(form.firstname);
form.firstname.addEventListener('change', function() {
    validFirstname(this);
});

const validFirstname = function(inputFirstname) {
    let firstnameRegex = new RegExp ('^[a-zA-Z.-_]');

    let testFirstname = firstnameRegex.test(inputFirstname.value);
    // console.log(testFirstname);
}

// Code Postal
// console.log(form.postal);
form.postal.addEventListener('change', function(){
    validPostal(this);
});

const validPostal = function(inputPostal) {
    let postalRegex = new RegExp ('^[0-9]{5}');

    let testPostal = postalRegex.test(inputPostal.value);
    // console.log(testPostal);
}

// Adresse
// console.log(form.address);
form.address.addEventListener('change', function() {
    validAddress(this);
});

const validAddress = function(inputAddress) {
    let addressRegex = new RegExp('^[a-zA-Z0-9.-_]');

    let testAddress = addressRegex.test(inputAddress.value);
    // console.log(testAddress);
}

// Ville
// console.log(form.city);
form.city.addEventListener('change', function() {
    validCity(this);
});

const validCity = function(inputCity){
    let cityRegex = new RegExp ('^[a-zA-Z]');

    let testCity = cityRegex.test(inputCity.value);
    // console.log(testCity);
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
    let questionRegex = new RegExp('^[a-zA-Z0-9.-_]');

    let testQuestion = questionRegex.test(textareaQuestion.value);
    // console.log(testQuestion);
}