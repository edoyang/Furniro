# **eCommerce Website**

## **Table of Contents**

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Folder Structure](#folder-structure)
6. [Usage](#usage)
7. [Environment Variables](#environment-variables)
8. [API Documentation](#api-documentation)
9. [Contributing](#contributing)
10. [License](#license)

---

## **Overview**

An eCommerce platform designed to connect buyers and sellers, offering a seamless shopping experience. This project includes an admin dashboard for product input and payment gateway integrated by Stripe.

### **Live Demo**

[View the live demo here](https://furniro-client.vercel.app/)

---

## **Features**

- Shopping cart functionality
- Secure checkout process with integrated payment gateways
- Admin dashboard for inventory input
- Fully responsive design

---

## **Technologies Used**

### **Frontend**

- React.js
- Redux
- SCSS

### **Backend**

- Node.js
- Express.js

### **Database**

- MongoDB

### **Other Tools**

- GIT
- Stripe (Payment gateway)
- Vercel (Hosting)

---

## **Setup Instructions**

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/edoyang/Furniro.git
   cd furniro
   ```

2. **Install Dependencies**

   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the `backend` and `frontend` directories.
   - Add the required environment variables (refer to [Environment Variables](#environment-variables)).

4. **Run the Application**

   - Backend:
     ```bash
     npm start
     ```
   - Frontend:
     ```bash
     npm run dev
     ```

5. **Access the Application**
   Open `http://localhost:5173/` in your web browser.

---

## **Folder Structure**

```
ecommerce-website/
│
├── backend/            # Backend server
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── controllers/    # Business logic
│   └── app.js          # Entry point
│
├── frontend/           # Frontend application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main app file
│   └── public/         # Static assets
│
└── README.md           # Project documentation
```

---

## **Usage**

1. User login hasn't been implemented, so feel free to do testing on it
2. Browse products will be added in the future.
3. Proceed to checkout and complete your order.

---

## **Environment Variables**

Ensure the following environment variables are set up:

### **Backend** (`backend/.env`)

```plaintext
MONGODB_URI= your mongodb server
CLIENT_URL=http://localhost:5173
MGMT_URL=http://localhost:5173
STRIPE_SECRET_KEY= put stripe secret key here, should be starting with sk_
```

### **Frontend** (`frontend/.env`)

```plaintext
VITE_STRIPE_PUBLIC_KEY= put stripe public key here, should be starting with pk_
VITE_API_URL= http://localhost:3000
```

---

## **API Documentation**

- **Base URL**: `http://localhost:3000/products`
  Recall all products (GET method)
  Create product in mongodb based on this body request:

```bash

"name": "example",
"price": 200,
"description": "this is a testing product"

```

- **Base URL**: `http://localhost:3000/products/:id`
  Recall product by their id.

- **Base URL**: `http://localhost:3000/checkout`
  Stripe checkout, please keep the code since it's automatically take the response from client

---

## **Contributing**

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add a new feature"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request.

---

## **License**

Design based on [Figma](<https://www.figma.com/design/JHgjVSrT7UaeONdZCoyFeT/Furniture-eCommerce-Website-UI-(Community)?node-id=0-1&p=f&t=2505KSz5BOlNSCHo-0>)

---
