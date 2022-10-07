/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins"],
      },
      colors: {
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
        Cyan: "hsl(180, 66%, 49%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
      },
      backgroundImage: {
        'hero-pattern': "url('images/bg-shorten-mobile.svg')",
        'footer-texture': "url('images/bg-boost-desktop.svg')",
      },
      width: {
        '128': '22rem',
        '150': '30rem',
        '170': '40rem',
        '180': '70rem'
      },
      height: {
        '150': '30rem',
      },
      spacing: {
        '1px': '0.05rem',
        '1p': '8.3rem',
        '2p': '9.3rem',
      }
    },
  },
  plugins: [],
};
