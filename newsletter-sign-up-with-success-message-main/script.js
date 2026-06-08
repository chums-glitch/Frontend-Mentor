const signupCard = document.querySelector("#signup-card");
const successCard = document.querySelector("#success-card");
const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const confirmedEmail = document.querySelector("#confirmed-email");
const dismissButton = document.querySelector("#dismiss-button");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setInvalidState(isInvalid) {
  form.classList.toggle("is-invalid", isInvalid);
  emailInput.setAttribute("aria-invalid", String(isInvalid));
}

function showSuccess(email) {
  confirmedEmail.textContent = email;
  signupCard.hidden = true;
  successCard.hidden = false;
  dismissButton.focus();
}

function showSignup() {
  successCard.hidden = true;
  signupCard.hidden = false;
  form.reset();
  setInvalidState(false);
  emailInput.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = emailPattern.test(email);

  setInvalidState(!isValidEmail);

  if (isValidEmail) {
    showSuccess(email);
  }
});

emailInput.addEventListener("input", () => {
  if (form.classList.contains("is-invalid")) {
    setInvalidState(false);
  }
});

dismissButton.addEventListener("click", showSignup);
