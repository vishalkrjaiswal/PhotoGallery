# 📷 Photo Gallery App

A React photo gallery app built as part of the Celebrare Frontend Internship pre-screening assignment.

---

## 🚀 Getting Started

### 1. Clone or download the project

```bash
git clone https://github.com/your-username/photo-gallery.git
cd photo-gallery
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

---

## ✅ Features

- Fetches 30 photos from [Picsum Photos API](https://picsum.photos/v2/list?limit=30)
- Shows a loading spinner while photos are being fetched
- Shows an error message if the API call fails
- Displays photos in a responsive grid (1 col → 2 col → 4 col)
- Search bar filters photos by author name in real-time (no extra API call)
- Heart button to favourite/unfavourite any photo
- Favourites are saved in `localStorage` so they persist after refresh

---

## 🗂️ Project Structure

```
src/
├── hooks/
│   ├── useFetchPhotos.js    # custom hook to fetch photos from API
│   └── useFavourites.js     # useReducer hook to manage favourites + localStorage
├── components/
│   ├── Gallery.jsx          # main component — search, grid, useCallback, useMemo
│   └── PhotoCard.jsx        # single photo card with heart toggle
├── App.jsx                  # root component with header
├── main.jsx                 # entry point
└── index.css                # tailwind imports
```

---

## 🧠 Concepts Used

### `useFetchPhotos` — Custom Hook
Fetches photos from the Picsum API. Returns `{ photos, loading, error }`. The Gallery component uses this hook instead of fetching data directly.

### `useReducer` — Favourites State
Favourites are managed using `useReducer` (not `useState`). The reducer handles two actions:
- `TOGGLE` — adds or removes a photo id from the favourites list
- `LOAD_FROM_STORAGE` — loads saved favourites from localStorage on app start

### `useCallback` — Search Handler
The search input's `onChange` handler is wrapped in `useCallback` so it doesn't get recreated on every render.

### `useMemo` — Filtered Photos
The filtered photo list is computed using `useMemo`. It only recalculates when `photos` or `searchQuery` changes, not on every render.

---

## 🛠️ Tech Stack

| Tool | Why |
|------|-----|
| React 18 | UI library |
| Vite | Fast dev server and build tool |
| Tailwind CSS | Utility-first styling |

> No component libraries used (no MUI, Bootstrap, Ant Design)

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 📝 Assignment Notes

- All 7 requirements from the assignment are implemented
- `useReducer` is used for favourites (not `useState`)
- `localStorage` persistence works across page refreshes
- Search filters already-fetched data — no extra API call on type
- Custom hook `useFetchPhotos` separates data logic from UI

---

## 🔗 API Used

**Picsum Photos** — `https://picsum.photos/v2/list?limit=30`  
Free, no API key needed.
