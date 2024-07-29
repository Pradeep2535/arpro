// Function to increase quantity
function increaseQuantity(element) {
  var input = element.previousElementSibling;
  var value = parseInt(input.value);
  input.value = value + 1;
}

// Function to decrease quantity
function decreaseQuantity(element) {
  var input = element.nextElementSibling;
  var value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
}

// Function to remove item
function removeItem(element) {
  var item = element.closest(".order-item");
  item.remove();
}

// Show credit card info if credit card payment method is selected
document.getElementById("credit-card").addEventListener("change", function () {
  document.getElementById("credit-card-info").style.display = "block";
});

// Hide credit card info if PayPal payment method is selected
document.getElementById("paypal").addEventListener("change", function () {
  document.getElementById("credit-card-info").style.display = "none";
});

// Form validation on Pay button click
document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    var isValid = true;

    // Validate name
    var name = document.getElementById("name").value;
    if (name === "") {
      isValid = false;
      document.getElementById("name-error").innerText = "Name is required.";
      document.getElementById("name-error").style.display = "block";
    } else {
      document.getElementById("name-error").style.display = "none";
    }

    // Validate email
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
      isValid = false;
      document.getElementById("email-error").innerText = "Email is required.";
      document.getElementById("email-error").style.display = "block";
    } else if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("email-error").innerText =
        "Please enter a valid email address.";
      document.getElementById("email-error").style.display = "block";
    } else {
      document.getElementById("email-error").style.display = "none";
    }

    // Validate phone
    var phone = document.getElementById("phone").value;
    var phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
      isValid = false;
      document.getElementById("phone-error").innerText =
        "Phone number is required.";
      document.getElementById("phone-error").style.display = "block";
    } else if (!phonePattern.test(phone)) {
      isValid = false;
      document.getElementById("phone-error").innerText =
        "Please enter a valid phone number.";
      document.getElementById("phone-error").style.display = "block";
    } else {
      document.getElementById("phone-error").style.display = "none";
    }

    // Validate card number, expiry, and cvc only if credit card is selected
    if (document.getElementById("credit-card").checked) {
      // Validate card number
      var cardNumber = document.getElementById("card-number").value;
      if (cardNumber === "") {
        isValid = false;
        document.getElementById("card-number-error").innerText =
          "Card number is required.";
        document.getElementById("card-number-error").style.display = "block";
      } else {
        document.getElementById("card-number-error").style.display = "none";
      }

      // Validate card expiry date
      var cardExpiry = document.getElementById("card-expiry").value;
      if (cardExpiry === "") {
        isValid = false;
        document.getElementById("card-expiry-error").innerText =
          "Card expiry date is required.";
        document.getElementById("card-expiry-error").style.display = "block";
      } else {
        document.getElementById("card-expiry-error").style.display = "none";
      }

      // Validate card CVC
      var cardCvc = document.getElementById("card-cvc").value;
      if (cardCvc === "") {
        isValid = false;
        document.getElementById("card-cvc-error").innerText =
          "Card security code is required.";
        document.getElementById("card-cvc-error").style.display = "block";
      } else {
        document.getElementById("card-cvc-error").style.display = "none";
      }
    }

    // Validate terms and policy checkbox
    if (!document.getElementById("terms-policy").checked) {
      isValid = false;
      document.getElementById("terms-policy-error").innerText =
        "You must acknowledge the Privacy & Terms Policy.";
      document.getElementById("terms-policy-error").style.display = "block";
    } else {
      document.getElementById("terms-policy-error").style.display = "none";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
