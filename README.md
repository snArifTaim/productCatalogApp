# 🛍️ Product Catalog App

A sleek, performant React Native mobile application built with **Expo SDK 52**. This app features a real-time searchable product catalog, detailed product views, and a global cart management system using React Context API.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- **🔍 Real-time Search:** Instantly filter products as you type in the search bar.
- **📱 Responsive Product Grid:** Beautiful list view of products using `FlatList` for optimal performance.
- **📄 Detailed Product Views:** Click on any product to see high-quality images, pricing, and full descriptions.
- **🛒 Shopping Cart System:** Add items to your cart with real-time counter updates powered by Context API.
- **🚀 Native Performance:** Leverages `react-navigation` and `react-native-screens` for fluid, native-feel transitions.

## 🛠️ Technology Stack

- **Framework:** [Expo SDK 52](https://expo.dev/)
- **Library:** [React Native](https://reactnative.dev/)
- **Navigation:** [@react-navigation/native](https://reactnavigation.org/)
- **State Management:** React Context API (Cart Logic)
- **Safe Area Management:** `react-native-safe-area-context`

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo Go](https://expo.dev/client) app installed on your physical device OR an Android/iOS emulator configured.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/snArifTaim/productCatalogApp.git
   cd productCatalogApp
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   > **Note:** Using `--legacy-peer-deps` ensures compatibility between peer dependencies across SDK transitions.

### Running the App

Start the development server:

```bash
npx expo start
```

- **Android:** Press `a` or scan the QR code in Expo Go.
- **iOS:** Press `i` or scan the QR code with your camera.
- **Web:** Press `w`.

## 📂 Project Structure

```text
/
├── assets/           # Images and static assets
├── src/
│   ├── components/   # Reusable UI components (ProductCard, Button)
│   ├── context/      # Global state (CartContext)
│   ├── data/         # Mock product data
│   └── screens/      # Main navigation screens (List, Detail)
├── App.js            # Root application logic and navigation
└── app.json          # Expo configuration
```

## 📜 License

Created as part of a React Native assignment. Feel free to use and modify for your own learning!
