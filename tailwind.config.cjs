module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      "montserrat" : ['Montserrat', 'sans-serif'],
      "sofia" : ['"Sofia Sans"', 'serif']
    },
    extend: {
      backgroundPosition: {
        'left-image': 'center left 48%',
        'right-image': 'center right 32%',
      },
      width: {
        'image-service': '300px',
        'image-service-full': '500px',
        'image-mobile': '18rem',
        'image-wide': '450px',
      },
      height: {
        'image-service': '450px',
        'image-service-full': '650px',
        'image-mobile': '25rem',
        'image-wide': '600px',
      },
      colors: {
        "base-blue": '#3013E4',
        "base-dark-blue": '#090F26',
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
      backgroundImage: {
        // How we do it
        "how-section": "url('./src/assets/img/how-we-do-it/how_we_do_it.png')",
        "waves-how": "url('./src/assets/img/how-we-do-it/waves_how.png')",

        // Services
        "web3-service": "url('./src/assets/img/web-3-development/header.png')",
        "inmersive-service": "url('./src/assets/img/inmersive-web-development/header.png')",
        "web2-service": "url('./src/assets/img/web-2-development/header.png')",
        "app-service": "url('./src/assets/img/app-development/header.png')",
        "ar-vr-mr-service": "url('./src/assets/img/ar-vr-mr-development/header.png')",

        // Development Areas
        "technological-dev": "url('./src/assets/img/development-areas/technological_development.png')",
        "art-and-entretainment": "url('./src/assets/img/development-areas/art_and_entretainment.png')",
        "smart-wearables": "url('./src/assets/img/development-areas/smart_wearables.png')",
        "sports": "url('./src/assets/img/development-areas/sports.png')",
        "health": "url('./src/assets/img/development-areas/health.png')",
        "education": "url('./src/assets/img/development-areas/education.png')",
        "feeding": "url('./src/assets/img/development-areas/feeding.png')",

        // App Service
        "android": "url('./src/assets/img/app-development/android.png')",
        "hybrid": "url('./src/assets/img/app-development/hybrid.png')",
        "ios": "url('./src/assets/img/app-development/ios.png')",

        // AR / VR / MR Service
        "agile-education": "url('./src/assets/img/ar-vr-mr-development/agile_education.png')",
        "art-preservation": "url('./src/assets/img/ar-vr-mr-development/art_preservation.png')",
        "body-analysis": "url('./src/assets/img/ar-vr-mr-development/body_analysis.png')",
        "medical-checkup": "url('./src/assets/img/ar-vr-mr-development/medical_checkup.png')",

        // Inmersive Web Service
        "data-visualization": "url('./src/assets/img/inmersive-web-development/data_visualization.png')",
        "digital-art": "url('./src/assets/img/inmersive-web-development/digital_art.png')",
        "home-stores": "url('./src/assets/img/inmersive-web-development/home_stores.png')",
        "video-360": "url('./src/assets/img/inmersive-web-development/video_360.png')",

        // Web 2 Service
        "content-managment": "url('./src/assets/img/web-2-development/content_managment_system.png')",
        "custom-software": "url('./src/assets/img/web-2-development/custom_software_development.png')",
        "e-commerce": "url('./src/assets/img/web-2-development/e_commerce.png')",
        "landing-pages": "url('./src/assets/img/web-2-development/landing_pages.png')",

        // Web 3 Service
        "crypto-tokens": "url('./src/assets/img/web-3-development/crypto_tokens.png')",
        "decentralized-solutions": "url('./src/assets/img/web-3-development/decentralized_solutions.png')",
        "nft": "url('./src/assets/img/web-3-development/nft.png')",

        "waves-technology": "url('./src/assets/img/waves_technology.png')",
        navIconBorder: "url('./src/assets/svg/brand/navigationIconBorder.svg')",
        navIconBorderEmpty:
          "url('./src/assets/svg/brand/navigationIconBorderEmpty.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
