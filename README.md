# Food App
As part of my application for the Olcademy Mobile App Developer Internship, I made this application user interface to showcase my mobile app design abilities.

---
Task:
```
Create a Mini Food Ordering Mobile App UI with Firebase
```
Develop a simple food-ordering mobile app interface using React Native that fetches menu items from Firebase and allows users to place orders.

## Key features

#### UI
   - User-friendly food listing with images, descriptions, and prices.
   - Item selection with quantity specification.
   - Add items to virtual shopping cart.
   - Review and adjust cart items.
   - View total price.
   - Order summary and submission.
#### Firebase
   - Firebase setup for project.
   - Manage menu items and orders using Firestore.
   - Real-time data fetching for up-to-date menu and prices.
   - Loading states and error handling for data fetching.
---
## Setting up Firebase

To connect this app to Firebase and manage menu items, follow these steps:

1. **Create a Firebase account**  
   Visit [Firebase Console](https://console.firebase.google.com/) and sign up or log in.

2. **Create a new project**  
   Click "Add project" and follow the prompts to set up your project.

3. **Set up Firestore Database**  
   - Go to "Build" > "Firestore Database".
   - Click "Create database" and choose test mode for development.

4. **Create a collection named `menu`**  
   - In Firestore, click "Start collection".
   - Name it `menu`.

5. **Add menu items**  
   Each document in the `menu` collection should have these fields:
   - `name` (string): Name of the food item
   - `description` (string): Short description
   - `price` (number): Price of the item
   - `image` (string): URL to the item's image

   > For the `image` field, use a direct URL to the product image.

**Note:**  
Uploading images to Firebase Storage requires a premium subscription, so this app uses image URLs instead.

# Installation:
Clone the repo:
```bash
git clone https://github.com/s-uryansh/foodApp.git
cd foodApp
```

Install dependencies:
```bash
npm install
```

# Run
Use:
```bash
npm run android
```
It will automatically open a virtual android if sdk-bin path is setup.

## To use application on phone 

#### Follow above steps to start the application once it started successfully
Install `Expo Go` from play store and scan the QR code on terminal.