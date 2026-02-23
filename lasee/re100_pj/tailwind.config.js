//tailwind.config.js
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'white': {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        'blue' : {
          25: '#F1F6FF',
          50: '#DEEAFF',
          100: '#B2CEFF',
          200: '#649DFF',
          300: '#3477EB',
          400: '#2A66CF',
          500: '#235BBC',
          600: '#1D4C9E',
          700: '#184085',
          800: '#112F62',
          900: '#0B2249',
        },
      }
    },
  },
  plugins: []
}
