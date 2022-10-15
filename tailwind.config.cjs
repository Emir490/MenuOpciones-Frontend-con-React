/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'square': "url('/src/img/cuadrado.jpg')",
        'rectangle': "url('/src/img/rectangle.jpg')",
        'triangle': "url('/src/img/triangle.jpg')",
        'count': "url('/src/img/count.webp')",
        'word': "url('/src/img/word.jpg')",
        'password': "url('/src/img/password.jpg')",
        'loop': "url('/src/img/loop.jpg')"
      }
    },
    variants: {
      extend: {
        display: ["group-hover"],
      },
    },
  },
  plugins: [],
}
