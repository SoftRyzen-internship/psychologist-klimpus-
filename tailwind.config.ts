import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXL: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        cardOverlay:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.65) 15.4%, rgba(0, 0, 0, 0.39) 23.9%, rgba(0, 0, 0, 0.00) 34.4%)',
        checkmark: `url(/icons/checkmark.svg)`,
      },
      content: {
        arrowDiagonal: `url(/icons/arrowDiagonal.svg)`,
        arrowUp: `url(/icons/arrowUp.svg)`,
        arrowDown: `url(/icons/arrowDown.svg)`,
        arrowRightSm: `url(/icons/arrowRightSm.svg)`,
        // arrowRightMd: `url(/icons/arrowRightMd.svg)`,
        // arrowLeftMd: `url(/icons/arrowLeftMd.svg)`,
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        bgMenu: 'rgba(28, 28, 28, 0.40)',
        plashkaBlack: 'rgba(28, 28, 28, 0.80)',
        bgBeige: '#FFF5F1',
        hoverAccent: '#AB123E',
        strokeForm: '#9E948B',
        darkBlue: '#4A4654',
        clickBlack: '#555555',
        mainRed: '#F52020',
        disabled: '#C7C7C7',
        mainBlack: '#1C1C1C',
        strokeFooter: 'rgba(252, 252, 252, 0.20)',
        plashka: '#F0E4DE',
        clickAccent: '#900C32',
        accent: '#CA1246',
        miniTitles: '#A39FAF',
        rose: '#FFE2E2',
        hoverBlack: '#454545',
        white: '#FCFCFC',
        gray: '#5D5D5D',
      },
    },
  },
  plugins: [],
};
export default config;
