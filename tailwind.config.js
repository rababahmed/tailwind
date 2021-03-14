module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        wave: "url('/img/wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
