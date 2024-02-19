document.querySelector("#submit").addEventListener("click", validateForm);

const inputFields = document.querySelectorAll(
  "#anrede, #first-name, #last-name, #address, #city"
);
inputFields.forEach((field) => {
  field.addEventListener("blur", function (event) {
    event.preventDefault();
    const existingError = field.nextElementSibling;

    if (!field.value.trim()) {
      field.classList.remove("validation");
      field.style.backgroundColor = "pink";
      if (!existingError || !existingError.classList.contains("error")) {
        const errorText = document.createElement("span");
        errorText.classList.add("error");
        errorText.innerHTML = "Please enter value";
        errorText.style.color = "red";
        field.after(errorText);
      }
    } else {
      field.style.backgroundColor = "";
      field.classList.add("validation");
      const validText = document.createElement("span");
      validText.classList.add("valid");
      validText.innerHTML = "✔️";
      field.after(validText);
      if (existingError && existingError.classList.contains("error")) {
        existingError.remove();
      }
    }
  });
});

const inputFieldsEmail = document.querySelectorAll("#email-address");

inputFieldsEmail.forEach((field) => {
  field.addEventListener("blur", function (event) {
    event.preventDefault();
    const errorContainer =
      field.parentElement.querySelector(".error-container");

    if (!field.value.trim()) {
      field.classList.remove("validation");
      field.style.backgroundColor = "pink";
      if (!errorContainer) {
        const errorContainer = document.createElement("div");
        errorContainer.classList.add("error-container");
        const errorText = document.createElement("span");
        errorText.classList.add("error");
        errorText.innerHTML = "Please enter a valid email";
        errorText.style.color = "red";
        errorContainer.appendChild(errorText);
        field.after(errorContainer);
      }
    } else {
      const emailRegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegExp.test(field.value)) {
        field.classList.remove("validation");
        field.style.backgroundColor = "pink";
        if (!errorContainer) {
          const errorContainer = document.createElement("div");
          errorContainer.classList.add("error-container");
          const errorText = document.createElement("span");
          errorText.classList.add("error");
          errorText.innerHTML = "Please enter a valid email";
          errorText.style.color = "red";
          errorContainer.appendChild(errorText);
          field.after(errorContainer);
        }
      } else {
        console.log("else executing");
        field.style.backgroundColor = "";
        field.classList.add("validation");
        if (errorContainer) {
          errorContainer.remove();
        }
      }
    }
  });
});

const inputFieldsMessage = document.querySelectorAll("#message");

inputFieldsMessage.forEach((field) => {
  field.addEventListener("blur", function (event) {
    event.preventDefault();
    const existingError = field.nextElementSibling;

    if (!field.value.trim()) {
      field.classList.remove("validation");
      field.style.backgroundColor = "pink";
      if (!existingError || !existingError.classList.contains("error")) {
        const errorText = document.createElement("span");
        errorText.classList.add("error");
        errorText.innerHTML = "Please enter message (min.20 characters)";
        errorText.style.color = "red";
        field.after(errorText);
      }
    } else {
      if (field.value.length < 21) {
        field.classList.remove("validation");
        field.style.backgroundColor = "pink";
      } else {
        console.log("else executing");
        field.style.backgroundColor = "";
        field.classList.add("validation");
        const validText = document.createElement("span");
        validText.classList.add("valid");
        validText.innerHTML = "✔️";
        field.after(validText);
        if (existingError && existingError.classList.contains("error")) {
          console.log("error check executing");
          existingError.remove();
        }
      }
    }
  });
});

const inputField = document.querySelectorAll("#zip-code");

inputField.forEach((field) => {
  field.addEventListener("blur", function (event) {
    event.preventDefault();
    const existingError = field.nextElementSibling;

    if (!field.value.trim()) {
      field.classList.remove("validation");
      field.style.backgroundColor = "pink";
      if (!existingError || !existingError.classList.contains("error")) {
        const errorText = document.createElement("span");
        errorText.classList.add("error");
        errorText.innerHTML = "Please enter a zip code with at least 4 digits";
        errorText.style.color = "red";
        field.after(errorText);
        if (existingError && existingError.classList.contains("error")) {
          existingError.remove();
        }
      }
    } else if (!/^\d+$/.test(field.value) || field.value.length < 4) {
      field.classList.remove("validation");
      field.style.backgroundColor = "pink";
      const errorText = document.createElement("span");
      errorText.classList.add("error");
      errorText.innerHTML = "Please enter a zip code with at least 4 digits";
      errorText.style.color = "red";
      field.after(errorText);
      if (existingError && existingError.classList.contains("error")) {
        existingError.remove();
      }
    } else {
      field.style.backgroundColor = "";
      field.classList.add("validation");
      const validText = document.createElement("span");
      validText.classList.add("valid");
      validText.innerHTML = "✔️";
      field.after(validText);

      if (existingError && existingError.classList.contains("error")) {
        existingError.remove();
      }
    }
  });
});

function validateForm(event) {
  event.preventDefault();

  inputFields.forEach((field) => {
    field.style.backgroundColor = "";
  });
  document.querySelectorAll(".error").forEach((element) => element.remove());

  let data = {};
  let validationErrors = {};

  data.salutation = document.querySelector("#anrede").value;
  data.firstName = document.querySelector("#first-name").value;
  data.lastName = document.querySelector("#last-name").value;
  data.address = document.querySelector("#address").value;
  data.city = document.querySelector("#city").value;
  data.ZipCode = document.querySelector("#zip-code").value;
  data.email = document.querySelector("#email-address").value;
  data.message = document.querySelector("#message").value;

  if (!data.salutation) {
    validationErrors.salutation = "Please select your salutation";
  } else {
    console.info("Salutation: ", data.salutation);
  }

  if (!data.firstName) {
    validationErrors.firstName = "Please enter your first name";
  } else if (!/^[a-zA-Z]+$/.test(data.firstName)) {
    validationErrors.firstName = "First name can only contain letters";
  } else {
    console.info("First name: ", data.firstName);
  }

  if (!data.lastName) {
    validationErrors.lastName = "Please enter your last name";
  } else if (!/^[a-zA-Z]+$/.test(data.lastName)) {
    validationErrors.lastName = "Last name can only contain letters";
  } else {
    console.info("Last name: ", data.lastName);
  }

  if (!data.address) {
    validationErrors.address = "Please enter your address";
  } else {
    console.info("Address: ", data.address);
  }

  if (!data.city) {
    validationErrors.city = "Please enter your city";
  } else if (!/^[a-zA-Z]+$/.test(data.city)) {
    validationErrors.city = "City name can only contain letters";
  } else {
    console.info("City: ", data.city);
  }

  if (!data.ZipCode) {
    validationErrors.ZipCode = "Please enter your zip code";
  } else if (!/^\d+$/.test(data.ZipCode)) {
    validationErrors.ZipCode = "Zip code must contain only numbers";
  } else if (data.ZipCode.length < 4) {
    validationErrors.ZipCode = "Zip code must have at least 4 digits";
  } else {
    console.info("Zip code: ", data.ZipCode);
  }

  if (!data.email) {
    validationErrors.email = "Please enter a valid email address";
  } else {
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegExp.test(data.email)) {
      validationErrors.email = "Please enter a valid email address";
    } else {
      console.info("Email: ", data.email);
    }
  }

  if (!data.message) {
    validationErrors.message = "Please enter your message";
  } else {
    if (data.message.length < 21) {
      validationErrors.message =
        "Your message is too short (min.20 characters)";
    } else {
      console.info("Message: ", data.message);
    }
  }

  function displayError(validationErrors) {
    if (validationErrors.salutation) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.salutation;
      errorContainer.style.color = "red";
      document.querySelector("#anrede").after(errorContainer);
    }

    if (validationErrors.firstName) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.firstName;
      errorContainer.style.color = "red";
      document.querySelector("#first-name").after(errorContainer);
    }

    if (validationErrors.lastName) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.lastName;
      errorContainer.style.color = "red";
      document.querySelector("#last-name").after(errorContainer);
    }

    if (validationErrors.address) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.address;
      errorContainer.style.color = "red";
      document.querySelector("#address").after(errorContainer);
    }

    if (validationErrors.city) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.city;
      errorContainer.style.color = "red";
      document.querySelector("#city").after(errorContainer);
    }

    if (validationErrors.ZipCode) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.ZipCode;
      errorContainer.style.color = "red";
      document.querySelector("#zip-code").after(errorContainer);
    }

    if (validationErrors.email) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.email;
      errorContainer.style.color = "red";
      document.querySelector("#email-address").after(errorContainer);
    }

    if (validationErrors.message) {
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      errorContainer.innerHTML = validationErrors.message;
      errorContainer.style.color = "red";
      document.querySelector("#message").after(errorContainer);
    }
  }

  function resetForm() {
    document.querySelector("#anrede").value = "";
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#address").value = "";
    document.querySelector("#city").value = "";
    document.querySelector("#zip-code").value = "";
    document.querySelector("#email-address").value = "";
    document.querySelector("#message").value = "";

    document.querySelectorAll(".error").forEach((element) => element.remove());

    document.querySelectorAll(".validation").forEach((element) => {
      element.classList.remove("validation");
    });

    document.querySelectorAll(".valid").forEach((element) => {
      element.remove("valid");
    });
  }

  if (validationErrors) {
    document.querySelectorAll(".validation").forEach((element) => {
      element.classList.remove("validation");
    });
    document.querySelectorAll(".valid").forEach((element) => {
      element.remove("valid");
    });
  }
  if (Object.keys(validationErrors).length > 0) {
    displayError(validationErrors);
  } else {
    console.log("Data sent to the backend");
    resetForm();
  }
}
