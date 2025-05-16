# 🧠 Survey Web App – React + JavaScript + CSS

This project is a simple, lightweight survey application built using **React**, **vanilla CSS**, and **JavaScript**. The core purpose is to guide participants through a structured questionnaire with clear navigation and intuitive user interaction.

---

## 📌 Why React + JavaScript + Pure CSS?

The choice of **React** and **vanilla CSS** was driven by the need for simplicity and reusability without the overhead of complex frameworks or styling libraries. As the project was designed to be **self-contained and not scalable in the long term**, using:
- **React** allowed for clear component separation and state management,
- **JavaScript** enabled dynamic behavior with minimal complexity,
- **CSS** provided just enough styling without adding dependencies.

Reusable components were emphasized to **reduce repetition**, improve **maintainability**, and **separate concerns** cleanly between logic and presentation.

---

## 🧩 Folder Structure Overview

src/
├── assets/
├── components/
│ ├── ConfirmationModal.jsx
│ ├── QuestionSlider.jsx
│ ├── RadioGroup.jsx
│ ├── SelectInput.jsx
├── css/
│ ├── form1.css
│ ├── form2.css
│ ├── form2Instruction.css
│ ├── index.css
├── data/
│ ├── cidades.json
│ ├── form1.js
│ ├── form2.js
├── pages/
│ ├── Form1.jsx
│ ├── Form2.jsx
│ ├── Form2Instruction.jsx
├── App.jsx
├── index.jsx
├── main.jsx


---

## 🧱 Components

- **`ConfirmationModal.jsx`**  
  Displays a confirmation modal after each slider interaction on Form 2. The user must confirm the response to proceed.

- **`QuestionSlider.jsx`**  
  Used for range-type questions in Form 2. It includes a slider (`<input type="range">`) and custom behavior that restricts answering to one question at a time.

- **`RadioGroup.jsx`**  
  Used for rendering groups of radio buttons in Form 1 (e.g., gender, education, etc.).

- **`SelectInput.jsx`**  
  A reusable select component used in Form 1, populated dynamically from JSON data.

---

## 🗃️ Data

Static files serve as a lightweight data source:

- **`cidades.json`**  
  Contains a list of cities, dynamically populated in the city select based on the selected state.

- **`form1.js`**  
  Provides the list of Brazilian states for the Form 1 select input.

- **`form2.js`**  
  Contains the text labels for each question in Form 2.

---

## 🎨 CSS

All pages have separate CSS files:
- `form1.css`, `form2.css`, `form2Instruction.css`, `index.css`

This modular CSS approach avoids style leakage and keeps concerns isolated per page.

---

## 📄 Pages

### ✅ `index.jsx`
The entry point of the application. Presents the research description, the team behind it, and the **consent form**. The user must agree to continue.

### ✅ `Form1.jsx`
The first formal page of the questionnaire. Collects basic sociodemographic information from the participant using radio buttons and select fields.

### ✅ `Form2Instruction.jsx`
An instructional page to prepare users for the main survey. It explains how the slider-based questions work.

### ✅ `Form2.jsx`
The **core of the research**. Participants answer one slider-based question at a time:
- Each question uses a range slider (0–100).
- Only one question is enabled at a time.
- The current question is **highlighted in yellow**, while others appear white.
- After moving the slider, a **confirmation modal** is triggered.
  - If the user clicks **Yes**, the form advances to the next question.
  - If **No**, the same question remains active.

This step-by-step structure ensures careful responses and clear user flow.

---

## ▶️ Getting Started

To run this project locally:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm run dev   # or npm start, depending on your setup
