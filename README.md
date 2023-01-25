## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Install require packages

Install tailwinCSS

```bash
npx create-next-app@latest next-learning-app --typescript --eslint
```

cd /next-learning-app

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

In 'tailwind.config.js' file you just paste it

```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In 'globals.css' file you just replace it

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

In 'index.tsx' file you just replace it

```bash
function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
export default Home;
```

Run

```
npm run dev
or
yarn dev
```
