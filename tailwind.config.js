/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-2': 'inset 0 2px 4px 0 hsl(210 16% 6% / 1)'
      },
      colors: {


        dark: {
          10: '#151A1E',
          20: '#1E252B',
          30: '#262D34',
          40: '#2C353D',
        },
        secondaryBg: {
          10: '#FFFFFF',
          20: '#F7F7F7',
        },
        secondary: {
          10: '#192351',
          20: '#3F4354',
          30: '#97989D',
          40: '#858EAD',
          50: '#C5D0E6',
          60: '#F4F6F8',
        },
        green: {
          10: '#E7FAF4',
          20: '#CFF5E8',
          30: '#B7F0DD',
          40: '#9FEBD1',
          50: '#86E6C6',
          60: '#6EE0BB',
          70: '#56DBAF',
          80: '#3ED6A4',
          90: '#26D198',
          default: '#0ECC8D',
          dark: {
            90: '#0DB87F',
            80: '#0BA371',
            70: '#0A8F63',
            60: '#087A55',
            50: '#076647',
            40: '#065238',
            30: '#043D2A',
            20: '#03291C',
            10: '#01140E',
          }
        },
        purple: {
          10: '#F0F1FE',
          20: '#E0E2FD',
          30: '#D1D4FD',
          40: '#C1C6FC',
          50: '#B2B7FB',
          60: '#A3A9FA',
          70: '#939BF9',
          80: '#848DF9',
          90: '#747EF8',
          default: '#6570F7',
          'dark-100': '#0A0B19',
          dark: {
            90: '#5B65DE',
            80: '#515AC6',
            70: '#474EAD',
            60: '#3D4394',
            50: '#33387C',
            40: '#282D63',
            30: '#1E224A',
            20: '#141631',
            10: '#0A0B19',

          }
        },
        blue: {

          10: '#EBF2FC',
          20: '#D6E4F9',
          30: '#C2D7F6',
          40: '#AECAF3',
          50: '#99BCF1',
          60: '#85AFEE',
          70: '#71A2EB',
          80: '#5D95E8',
          90: '#4887E5',
          default: '#347AE2',
          dark: {
            90: '#2F6ECB',
            80: '#2A62B5',
            70: '#24559E',
            60: '#1F4988',
            50: '#1A3D71',
            40: '#15315A',
            30: '#102544',
            20: '#141631',
            10: '#0A182D',
          }
        },
        yellow: {
          10: '#FDF4EA',
          20: '#FBEAD5',
          30: '#F9DFC0',
          40: '#F7D4AB',
          50: '#F5CA95',
          60: '#F2BF80',
          70: '#F0B46B',
          80: '#EEA956',
          90: '#EC9F41',
          default: '#EA942C',
          dark: {
            90: '#D38528',
            80: '#BB7623',
            70: '#A4681F',
            60: '#8C591A',
            50: '#754A16',
            40: '#5E3B12',
            30: '#462C0D',
            20: '#2F1E09',
            10: '#170F04',

          }
        },
        red: {
          10: '#FFECE6',
          20: '#FFDACC',
          30: '#FFC7B3',
          40: '#FFB499',
          50: '#FFA180',
          60: '#FF8F67',
          70: '#FF7C4D',
          80: '#FF6934',
          90: '#FF571A',
          default: '#FF4401',
          dark: {
            90: '#E53D01',
            80: '#CC3601',
            70: '#B33001',
            60: '#992901',
            50: '#802200',
            40: '#661B00',
            30: '#4D1400',
            20: '#330E00',
            10: '#1A0700',
          }
        }

      },
      height: {
        'screen-50': 'calc(100vh - 50px)',
      },
      screens: {
        'sm1': { 'max': '480px' },
        'sm1': { 'max': '480px' },
        'ba1': { 'max': '520px' },
        'ba1a': { 'min': '520px' },
        'md2': { 'max': '639px' },
        'md2a': { 'min': '639px' },
        'md3a': { 'min': '654px' },
        'md3': { 'max': '654px' },
        'md1': { 'max': '768px' },
        'lg2': { 'max': '951px' },
        'lg2a': { 'min': '951px' },
        'lg3a': { 'min': '1000px' },
        'lg3': { 'max': '1000px' },
        'lg1a': { 'min': '1024px' },
        'lg1': { 'max': '1024px' },
        'xl2': { 'max': '1203px' },
        'xl2a': { 'min': '1203px' },
        'xl1': { 'max': '1285px' },
        'xxl1': { 'max': '1480px' },
      },
      fontSize: {
        'xss': ['0.6rem', '0.8rem'],
      },
    },
  },
  plugins: [],
};
