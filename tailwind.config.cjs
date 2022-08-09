module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        heading: '#C94141',
        primary: '#850000',
        secondary: '#FCB043',
        mainBackground: '#090C10',
        mainFont: '#6B6B6B',
        secondaryBackground: '#E8E8E8',
        contentBackground: '#f7f7f7',
        secondaryFont: '#e8e8e8',
      },
      borderRadius: {
        btn: '25px',
      },
      boxShadow: {
        tableContainer: '0px 0px 16px -4px rgba(0, 0, 0, .75)',
      },
      backgroundColor: {
        thead: '#f6f7f9',
      },
      backgroundImage: {
        navIconBorder: "url('./src/assets/brand/navigationIconBorder.svg')",
        navIconBorderEmpty:
          "url('./src/assets/brand/navigationIconBorderEmpty.svg')",
        navIconBorderBlack:
          "url('./src/assets/brand/navigationIconBorderBGBlack.svg')",
        navIconBorderWhite:
          "url('./src/assets/brand/navigationIconBorderBGWhite.svg')",
        navIcon: "url('./src/assets/brand/navigationIcon.svg')",
      },
      fontFamily: {
        display: ['Montserrat', 'Sofia Sans'],
        body: ['Montserrat', 'Sofia Sans'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
