# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages when the field is empty or the email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the newsletter sign-up form](./preview.jpg)

### Links

- Solution URL: Not submitted yet
- Live Site URL: https://chums-glitch.github.io/Frontend-Mentor/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Responsive media queries
- Local `@font-face` font loading
- Vanilla JavaScript form validation

### What I learned

This project focused on turning the supplied design files into a responsive, interactive page using plain HTML, CSS, and JavaScript. The success screen is hidden by default and shown only after a valid email is submitted.

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = emailPattern.test(email);

  setInvalidState(!isValidEmail);

  if (isValidEmail) {
    showSuccess(email);
  }
});
```

I also practiced using responsive image assets with the `picture` element so the desktop and mobile illustrations load at the right screen sizes.

```html
<picture class="signup-art">
  <source media="(max-width: 700px)" srcset="./assets/images/illustration-sign-up-mobile.svg">
  <img src="./assets/images/illustration-sign-up-desktop.svg" alt="" aria-hidden="true">
</picture>
```

### Continued development

For future projects, I want to keep improving:

- Matching spacing and sizing more closely from static design files
- Accessibility details such as focus handling and form error messaging
- Testing layouts across more viewport widths before final submission

## Author

- Frontend Mentor -  https://chums-glitch.github.io/ntsako-portfolio/
