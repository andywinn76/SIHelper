# Spirit Island Helper
A companion app for the board game **Spirit Island**, helping players keep track of elements gained from playing power cards.


---

## 🌟 Features
- Track elements **(Sun, Moon, Fire, Air, Water, Earth, Plant, Animal)** (and also tracks power card plays for Dances up Earthquakes) dynamically.
- **Interactive UI:**  
  - **Element Tracker**
    - **Click/Tap*** to add an element.  
    - **Right-click/Long press*** to remove an element.
  - **Energy Tracker**
    - **Click/Tap +** to add energy
    - **Click/Tap +** to remove energy
- **Device Detection:** Adjusts UI instructions for **PC vs. Mobile.**
- **Clear all elements and power card plays (if present)** with a single button.
- **Lightweight & Fast:** Built with **React & Tailwind CSS**.

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/andywinn76/SIHelper
cd SIHelper
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start the Development Server
```sh
npm run dev
```

Then, open http://localhost:5173/SIHelper/ in your browser.

## 🎨 Technologies Used
- React – Component-based UI.
- Tailwind CSS – Modern utility-first styling.
- Vite – Fast build tool for frontend projects.

## 📢 How to Use
- Open the app in your browser.
- Select the spirit you are playing.
- Open the tabs you want to use, Elements, Energy, Innates. These can be opened/closed at any time.
- Click/Tap an element icon to add it to the tally.
- Click/Tap + or - to add or remove energy.
- Right-click (PC) / Long press (Mobile) to remove an element.
- Press "Clear" to reset all element tallies.

## 💡 Future Enhancements
- COMPLETE - Add a thumbnail interface to select the spirit you're playing.
- COMPLETE - Add ability to re-order sections to allow user customization.
- COMPLETE - Add a game glossary tab for referencing keywords.
- COMPLETE - Refactor icon keyword names for easier readability and fallback protection if icon load fails.
- COMPLETE - Add spirit sorting by complexity/difficulty.
- Add a win/loss tracker.
- Add Spirit aspect special innates and abilities.
- Add collapsible special rules for each spirit.
- Track which spirits have been played.
- Add a swipe-able interface to allow playing multiple spirits.

## 🤝 Contributing
Feel free to fork the repository and submit a pull request if you'd like to contribute!

Fork the repo
Create a new branch (git checkout -b feature-branch)
Commit changes (git commit -m "Add a cool feature")
Push to your branch (git push origin feature-branch)
Open a Pull Request

## 📜 License
This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.  

You are free to use, modify, and distribute this software, but **any modifications or derivative works must also be open-source under the same GPL-3.0 license**.

For full details, see the LICENSE file.

