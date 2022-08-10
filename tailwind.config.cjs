module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      "montserrat" : ['Montserrat', 'sans-serif'],
      "sofia" : ['"Sofia Sans"', 'serif']
    },
    extend: {
      colors: {
        "base-blue": '#3013E4',
        "base-purple": '#645DC7',
        "base-yellow": '#F1BA2B',
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
        'purple': '0 0px 20px 0px #645DC7',
      },
      backgroundColor: {
        thead: '#f6f7f9',
      },
      backgroundImage: {
        navIconBorder: "url('./src/assets/svg/brand/navigationIconBorder.svg')",
        navIconBorderEmpty:
          "url('./src/assets/svg/brand/navigationIconBorderEmpty.svg')",
        navIconBorderBlack:
          "url('./src/assets/svg/brand/navigationIconBorderBGBlack.svg')",
        navIconBorderWhite:
          "url('./src/assets/svg/brand/navigationIconBorderBGWhite.svg')",
        navIcon: "url('./src/assets/svg/brand/navigationIcon.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
