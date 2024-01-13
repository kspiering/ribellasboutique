document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(
    "#anrede, #first-name, #last-name, #address, #city, #zip-code, #email-address, #message"
  );

  inputFields.forEach((field) => {
    field.addEventListener("focusout", validateField);
  });

  document.querySelector("#submit").addEventListener("click", validateForm);

  function validateField(event) {
    let field = event.target;
    let fieldName = field.id;
    let fieldValue = field.value.trim();

    let validationErrors = {};

    switch (fieldName.toLowerCase()) {
      case "first-name":
        validateRequired(fieldValue, "first-name");
        break;
      case "last-name":
        validateRequired(fieldValue, "last-name");
        break;
      case "address":
        validateRequired(fieldValue, "address");
        break;
      case "city":
        validateRequired(fieldValue, "city");
        break;
      case "zip-code":
        validateRequired(fieldValue, "zip-code");
        break;
      case "email-address":
        validateEmail(fieldValue);
        break;
      case "message":
        validateMessage(fieldValue);
        break;
    }

    function validateRequired(value, key) {
      if (!value) {
        validationErrors[key] = `Please enter your ${key.toLowerCase()}`;
      } else {
        console.info(`${key}: `, value);
      }
    }

    function validateEmail(email) {
      const emailRegExp =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!email) {
        validationErrors.email = "Please enter your email";
      } else if (!emailRegExp.test(email)) {
        validationErrors.email = "Please enter a valid email address";
      } else {
        console.info("E-mail: ", email);
      }
    }

    function validateMessage(message) {
      if (!message) {
        validationErrors.message = "Please enter your message";
      } else if (message.length < 21) {
        validationErrors.message =
          "Your message is too short (min. 20 characters)";
      } else {
        console.info("Message: ", message);
      }
    }

    displayError(validationErrors);
  }

  function displayError(validationErrors) {
    document.querySelectorAll(".error").forEach((element) => element.remove());

    for (const key in validationErrors) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors[key];
      errorContainer.style.color = "red";
      document.querySelector(`#${key}`).after(errorContainer);
    }
  }

  function validateForm(event) {
    event.preventDefault();

    const validationErrors = {};

    inputFields.forEach((field) => {
      validateField({ target: field });
    });

    const errorElements = document.querySelectorAll(".error");

    if (errorElements.length === 0) {
      console.log("Data sent to the backend");
      resetForm();
    }
  }

  function resetForm() {
    inputFields.forEach((field) => {
      field.value = "";
    });

    document.querySelectorAll(".error").forEach((element) => element.remove());
  }
});
