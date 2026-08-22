# 📱 Learning React Native

A beginner-to-intermediate hands-on workspace for exploring **React Native**, **Expo SDK 54**, **Expo Router**, and core UI components with **TypeScript**.

---

## 📸 Preview

![Learning React Native Preview](assets/images/Learning-React-Native.PNG)

---

## ✨ Features & Concepts Covered

- **Expo Router Navigation**: File-based routing with root stack layout (`src/app/_layout.tsx`).
- **Core Components**:
  - `SafeAreaView` & `SafeAreaProvider` for edge-to-edge UI safety across modern device screens.
  - `TextInput` with custom styling, placeholder, and multiline text handling.
  - `Pressable` component with gesture interactions (`onLongPress`).
  - `Image` & `ImageBackground` for loading remote media assets.
  - `FlatList` with horizontal scrolling for rendering performant lists.
  - `Alert` and dynamic React state management (`useState`).

---

## 🛠️ Tech Stack

- **Framework**: [Expo (SDK 54)](https://docs.expo.dev/versions/v54.0.0/)
- **Core**: [React Native 0.81](https://reactnative.dev/)
- **Library**: [React 19](https://react.dev/)
- **Routing**: [Expo Router v6](https://docs.expo.dev/router/introduction/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Project Structure

```text
Learning-React-Native/
├── assets/
│   └── images/
│       └── Learning-React-Native.PNG
├── src/
│   └── app/
│       ├── _layout.tsx      # Root Stack Navigation Layout
│       └── index.tsx        # Main Home Screen Component
├── app.json                 # Expo Configuration
├── package.json             # Project Dependencies & Scripts
└── tsconfig.json            # TypeScript Configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your system along with Expo Go app on your mobile device (or an Android/iOS emulator).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Imtiaz-Ali17314/Learning-React-Native.git
   cd Learning-React-Native
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the Expo development server:**
   ```bash
   npx expo start
   ```

### Running on Platform

- **Android**: Press `a` in the terminal or run `npm run android`
- **iOS**: Press `i` in the terminal or run `npm run ios`
- **Web**: Press `w` in the terminal or run `npm run web`
- **Physical Device**: Scan the QR code in the terminal using the **Expo Go** app.

---

## 📄 License

This repository is created for learning and educational purposes.
