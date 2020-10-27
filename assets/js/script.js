var fields{}

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
   })

function isNotEmpty(value) {
 if (value == null || typeof value == 'undefined' ) return false;
 return (value.length > 0);
}
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }
function isNumber(num) {
 return (num.length > 0) && !isNaN(num);
}
function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

function isValid() {
 var valid = true;
 
 valid &= fieldValidation(fields.firstName, isNotEmpty);
 valid &= fieldValidation(fields.lastName, isNotEmpty);
 valid &= fieldValidation(fields.email, isEmail);
 valid &= fieldValidation(fields.question, isNotEmpty);
 valid &= arePasswordsEqual();

 return valid;
}

class User {
    constructor(firstName, lastName, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.question = question;
    }
   }