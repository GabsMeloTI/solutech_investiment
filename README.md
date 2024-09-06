# 🌟 Solutech - Investment Platform

Welcome to **Solutech**, an innovative investment platform designed to revolutionize how individuals of all experience levels manage their investments. Our mission is to empower clients, from beginners to seasoned investors, with tools and insights that help them make informed financial decisions and achieve their long-term goals.

## 📈 Project Overview

**Solutech** aims to support clients throughout their entire investment journey. Our platform not only facilitates portfolio tracking but also provides valuable insights into market trends. All of this is delivered through a user-friendly and accessible interface.

## 🚀 Features

- **Portfolio Tracking**: Monitor your investments and track performance in real-time.
- **Market Insights**: Gain access to valuable financial market trends and analysis.
- **User-Friendly Interface**: Navigate through the platform with ease and efficiency.
- **Firebase Integration**: Secure user authentication, real-time database, and cloud storage.

## 🛠️ Technologies

This project uses the following technologies:

- **React Native**: For building a cross-platform mobile application compatible with iOS and Android.
- **Firebase**: For user authentication, real-time database management, and cloud storage.
- **JavaScript**: For developing the frontend logic and dynamic application behavior.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) or [Expo CLI](https://expo.dev/)
- [Firebase Project](https://firebase.google.com/) with Authentication and Firestore Database enabled

## ⚙️ Setup & Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/solutech.git
    cd solutech
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure Firebase**:
    - Create a new Firebase project.
    - Enable Authentication and Firestore Database.
    - Add your Firebase configuration in the `firebaseConfig.js` file.

4. **Run the application**:
    ```bash
    npx react-native run-android
    ```
    or
    ```bash
    npx react-native run-ios
    ```

## 🔧 Firebase Configuration

Create a `firebaseConfig.js` file with the following content:

```javascript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
