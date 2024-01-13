document.querySelector("#submit").addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();

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

  if (!data.firstName) {
    validationErrors.firstName = "Please enter your first name";
  } else {
    console.info("First name: ", data.firstName);
  }

  if (!data.lastName) {
    validationErrors.lastName = "Please enter your last name";
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
  } else {
    console.info("City: ", data.city);
  }

  if (!data.ZipCode) {
    validationErrors.ZipCode = "Please enter your zip code";
  } else {
    console.info("Zip code: ", data.ZipCode);
  }

  if (!data.email) {
    validationErrors.email = "Please enter your email";
  } else {
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegExp.test(data.email)) {
      validationErrors.email = "Please enter your email address";
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

  if (Object.keys(validationErrors).length > 0) {
    displayError(validationErrors);
  } else {
    console.log("Data sent to the backend");
    resetForm();
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
}
