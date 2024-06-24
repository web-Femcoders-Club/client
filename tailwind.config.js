/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      headerText: ['Asap', 'sans-serif'],
      subtitleText: ['Roboto', 'sans-serif'],
      bodyText: ['Roboto', 'sans-serif']
    },
    
    fontSize: {
      heading1: "6rem",
      heading2: "4rem",
      heading3: "3.5rem",
      heading4: "3rem",
      heading5: "2.5rem",
      heading6: "2.25rem",
      subtitle1: "2.5rem",
      subtitle2: "2rem",
      subtitle3: "1.5rem",
      body1: "1.25rem",
      body2: "1.125rem",
      body3: "1rem",
      body4: "0.875rem"
    },

    extend: {
      colors: {
        'primaryColor': '#4737BB',
        'primaryColorLight': '#E5E5F2',
        'primaryColorDark': '#2A2170',
        'secondaryColor': '#4737BB',
        'secondaryColorLight': '#FFE4C3',
        'secondaryColorDark': '#CC7207',
        'tertiaryColor': '#EA4F33',
        'tertiaryColorLight': '#F9D4CE',
        'tertiaryColorDark': '#BB3F28',
        'accentColor': '#8016D3',
        'accentColorLight': '#522170',
        'accentColorDark': '#522170',
        'neutralColor': '#E0E0E0',
        'neutralColorLight': '#ffffff',
        'neutralColorDark': '#999999',
        'successColor': '#37BB64',
        'successColorLight': '#E5E5F2',
        'warningColor': '#4737BB',
        'warningColorLight': '#FFE4C3',
        'errorColor': '#EA4F33',
        'errorColorLight': '#F9D4CE',
      },
    }
  }
};

  


