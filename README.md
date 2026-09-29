# Digital Consultation Landing Page

A responsive digital consultation landing page built with **HTML, CSS, Bootstrap, and JavaScript**.

The project focuses on creating a clean and responsive user interface with an interactive image selection component and client-side form validation with error handling.

## 🚀 Features

* 📱 Fully responsive design
* 🖼️ Interactive image/avatar selection
* 🎨 Custom styling combined with Bootstrap
* 📝 Client-side form validation
* ⚠️ Form error handling and user feedback
* 📧 Email format validation
* 🔽 Primary interest and timeline validation
* ☑️ Privacy policy checkbox validation
* 📋 Project description validation
* ✅ Success message after valid form submission
* 🔄 Form reset after successful submission

## 🛠️ Technologies Used

* **HTML5** – Page structure and semantic markup
* **CSS3** – Custom styling and layout
* **Bootstrap 5** – Responsive layout and UI components
* **JavaScript (ES6)** – DOM manipulation, event handling, and form validation
* **Font Awesome** – Icons
* **Google Fonts** – Custom typography

## 📂 Project Structure

```text
digital-consultation-page/
│
├── index.html
├── style.css
├── index.js
├── README.md
│
└── img/
    ├── avatar-1.jpg
    ├── avatar-2.jpg
    ├── avatar-3.jpg
    └── avatar-4.jpg
```

## ⚙️ How It Works

### Interactive Image Selection

Users can click on the available thumbnails to change the main displayed image.

JavaScript handles the interaction by:

* Detecting the clicked image
* Updating the main image
* Removing the selected style from other images
* Highlighting the currently selected image

### Form Validation

The consultation form uses JavaScript to validate user input before submission.

The validation checks:

* First name is provided
* Last name is provided
* Email address is valid
* Primary interest is selected
* Timeline is selected
* Project description is provided
* Project description contains enough information
* Privacy policy is accepted

If a field contains invalid information, an error message is displayed next to the field.

If all fields are valid, a success message is displayed and the form is reset.

## 💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/digital-consultation-page.git
```

### 2. Open the project

Navigate to the project directory:

```bash
cd digital-consultation-page
```

### 3. Run the project

Open `index.html` in your browser.

For the best development experience, you can use **Visual Studio Code with the Live Server extension**.

## 🎯 Purpose of the Project

This project was created to practice and demonstrate fundamental front-end development skills, particularly:

* Building responsive interfaces
* Working with Bootstrap
* Manipulating the DOM with JavaScript
* Handling user events
* Validating forms
* Providing client-side error feedback
* Organizing a front-end project

## 🔮 Future Improvements

Possible future improvements include:

* Connecting the form to a backend
* Sending submitted consultations to a database
* Adding stronger input validation
* Adding loading and submission states
* Improving accessibility
* Adding animations and transitions
* Adding a real consultation booking system

## 📸 Preview

*Add screenshots or a GIF of the project here.*

## 👨‍💻 Author

**Mostafa Mohamed Saber**

Built as part of my front-end development portfolio.

---

⭐ If you found this project useful, feel free to explore the repository and check out my other projects.
