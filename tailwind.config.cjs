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
        'image-service-full': '450px',
        'image-mobile': '150px',
        'image-wide': '450px',
      },
      height: {
        'image-service': '450px',
        'image-service-full': '600px',
        'image-mobile': '200px',
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
        "how-section": "url('/img/how-we-do-it/how_we_do_it.jpg')",
        "waves-how": "url('/img/how-we-do-it/waves.png')",

        // Services
        "web3-service": "url('/img/web-3-development/header.png')",
        "inmersive-service": "url('/img/inmersive-web-development/header.png')",
        "web2-service": "url('/img/web-2-development/header.png')",
        "app-service": "url('/img/app-development/header.png')",
        "ar-vr-mr-service": "url('/img/ar-vr-mr-development/header.png')",

        // Development Areas
        "technological-dev": "url('/img/development-areas/technological_development.png')",
        "art-and-entretainment": "url('/img/development-areas/art_and_entretainment.png')",
        "smart-wearables": "url('/img/development-areas/smart_wearables.png')",
        "sports": "url('/img/development-areas/sports.png')",
        "health": "url('/img/development-areas/health.png')",
        "education": "url('/img/development-areas/education.png')",
        "feeding": "url('/img/development-areas/feeding.png')",

        // App Service
        "android": "url('/img/app-development/android.png')",
        "hybrid": "url('/img/app-development/hybrid.png')",
        "ios": "url('/img/app-development/ios.png')",

        // AR / VR / MR Service
        "agile-education": "url('/img/ar-vr-mr-development/agile_education.png')",
        "art-preservation": "url('/img/ar-vr-mr-development/art_preservation.png')",
        "body-analysis": "url('/img/ar-vr-mr-development/body_analysis.png')",
        "medical-checkup": "url('/img/ar-vr-mr-development/medical_checkup.png')",

        // Inmersive Web Service
        "data-visualization": "url('/img/inmersive-web-development/data_visualization.png')",
        "digital-art": "url('/img/inmersive-web-development/digital_art.png')",
        "home-stores": "url('/img/inmersive-web-development/home_stores.png')",
        "video-360": "url('/img/inmersive-web-development/video_360.png')",

        // Web 2 Service
        "content-managment": "url('/img/web-2-development/content_managment_system.png')",
        "custom-software": "url('/img/web-2-development/custom_software_development.png')",
        "e-commerce": "url('/img/web-2-development/e_commerce.png')",
        "landing-pages": "url('/img/web-2-development/landing_pages.png')",

        // Web 3 Service
        "crypto-tokens": "url('/img/web-3-development/crypto_tokens.png')",
        "decentralized-solutions": "url('/img/web-3-development/decentralized_solutions.png')",
        "nft": "url('/img/web-3-development/nft.png')",

        "waves-technology": "url('/img/waves_technology.png')",
        navIconBorder: "url('/svg/brand/navigationIconBorder.svg')",
        navIconBorderEmpty:
          "url('/svg/brand/navigationIconBorderEmpty.svg')",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
