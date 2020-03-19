module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#f7f7f7',
      },
      inset: {
        'header-curve': '-3px',
      },
      height: {
        80: '20rem',
        half: '50vh',
      },
      minHeight: {
        header: '50rem',
      },
      maxHeight: {
        header: '80rem',
      },
      transitionTimingFunction: {
        ease: 'ease',
      },
      gridTemplateColumns: {
        'fill-120': 'repeat(auto-fill, minmax(30rem, 1fr))',
      },
      textColor: {
        current: 'currentColor',
      },
    },
  },
  variants: {},
  plugins: [],
};
