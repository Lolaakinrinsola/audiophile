# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Add/Remove products from the cart.
- Edit product quantities in the cart.
- Fill in all fields in the checkout.
- Receive form validations if fields are missed or incorrect during checkout.
- See correct checkout totals depending on the products in the cart:
  - Shipping always adds $50 to the order.
  - VAT is calculated as 20% of the product total, excluding shipping.
- See an order confirmation modal after checking out with an order summary.
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app).

### Links

- Solution URL: [ solution URL here](https://www.frontendmentor.io/solutions/audiophile-ecommerce-using-zustand-1Z27Qdd4ek)
- Live Site URL: [Audiophile E-commerce Website](https://audiophile-omega-navy.vercel.app/)

## My process

### Built with

- React
- Tailwind CSS
- Zustand

### What I learned

The primary takeaway from this project was learning and practicing **Zustand** for state management in React. Zustan is a lightweight state management library that provides a simple and efficient way to manage global state. By integrating Zustand into this project, I was able to easily manage the shopping cart state and perform updates across different components without needing complex prop drilling or a larger state management solution like Redux.

Working with Zustand in combination with React and Tailwind made the development process smoother, especially for managing the cart state and ensuring that the UI updated correctly in response to changes like adding/removing items, changing quantities, and submitting the checkout form.

### Continued development

In future projects, I plan to:
- Deepen my understanding of **Zustand** and explore more advanced features like middleware and persisting state.
- Explore other state management solutions like Redux or Recoil to compare them with Zustand.
- Refine my knowledge of **Tailwind CSS** and learn more about its advanced features for creating complex layouts with minimal effort.

### Useful resources

- [Zustand Documentation](https://github.com/pmndrs/zustand) - The official Zustand documentation was essential for getting started and understanding how to efficiently use the library in my project.
- [Frontend Mentor](https://www.frontendmentor.io/) - An amazing platform that offers real-world challenges to help improve coding skills.

## Author

<!-- - Website - [Your Name](https://www.your-site.com) -->
- Frontend Mentor - [@lolaakinrinsola](https://www.frontendmentor.io/profile/lolaakinrinsola)

## Acknowledgments

A big thank you to Frontend Mentor for providing the resources and challenge, as well as to the developers behind **Zustand** for creating such an efficient and easy-to-use state management library that helped me manage state in this project with ease.
