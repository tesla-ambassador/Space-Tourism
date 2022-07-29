/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "375px",
        tab: "640px",
        dsk: "1080px",
        xdsk: "1440px"
      },
      colors: {
        dark: "#0B0D17",
        midDark: "#D0D6F9",
        light: "#FFFFFF",
        navDark: "#979797"
      },
      fontSize: {
        h1: "150px",
        h1mob: "80px",
        h2: "100px",
        h3: "56px",
        h3dsk: "50px",
        h3tab: "40px",
        h3mob: "24px",
        h4: "32px",
        h5: "28px",
        h5tab: "20px",
        sh1: "28px",
        sh2: "14px",
        nav: "16px",
        bod: "16px",
        boddsk: "18px"
      },
      fontFamily: {
        bel: ['Bellefair', 'serif'],
        bar: ['Barlow Condensed', 'sans-serif']
      },
      letterSpacing: {
        h5space: "4.75px",
        sh2space: "2.35px",
        navspace: "2.7px",
        navTab: "2.35px"
      },
      width: {
        mid: "450px",
        sem: "600px",
        lag: "800px",
        sml: "330px"
      },
      height: {
        lrge: "700px",
        midd: "500px"
      },
      borderWidth: {
        thin: '.5px'
      }
    },
  },
  plugins: [],
}
