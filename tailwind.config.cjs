module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                heading: '#C94141',
                primary: '#850000',
                secondary: '#FCB043',
                mainBackground: '#ffffff',
                mainFont: '#6B6B6B',
                secondaryBackground: '#E8E8E8',
                contentBackground: '#f7f7f7',
                secondaryFont: '#e8e8e8',
            },
            borderRadius: {
                btn: '25px'
            },
            boxShadow: {
                tableContainer: '0px 0px 16px -4px rgba(0, 0, 0, .75)'
            },
            backgroundColor: {                
                thead: '#f6f7f9'
            },
            fontFamily: {
                'display': ['Montserrat', 'sans-serif'],
                'body': ['Montserrat', 'sans-serif'],
            }
        },
    },
}
