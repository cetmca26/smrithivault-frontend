# SmrithiVault-frontend
Frontend for SmrithiVault 
This is the frontend UI built with **React.js**. It interacts with the Express.js backend via RESTful APIs.
Contribute to dev branch only

---

##  Getting Started

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### 📦 Install Dependencies

```bash
clone the repository
cd smrithivault-frontend
npm install
```

###  Run the React App

```bash
npm start
```

App runs at: `http://localhost:3000`

Make sure backend server is also running at `http://localhost:5000`

---


---

## 🌐 Environment Variables

Create a `.env` file in `/frontend`:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Use in API requests like:
```js
fetch(`${process.env.REACT_APP_API_URL}/users`)
```

---


## 📝 Commit Message Convention

Follow this pattern:

```
<type>(scope): message

Types:
- feat: A new UI feature
- fix: Bug fix
- docs: Documentation only
- style: UI or CSS changes
- refactor: Code improvement without new features
- chore: Build/dependency updates
```

**Example:**
```
style(navbar): improve mobile responsiveness
```

---

## Common Scripts

| Script        | Description                     |
|---------------|---------------------------------|
| `npm start`   | Start React dev server          |
| `npm run build` | Create production build        |

---