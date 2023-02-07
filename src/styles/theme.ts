export const theme = {
  colors: {
    primaryColor: '#FFF',
    secondaryColor: '#000',
  },
  font: {
    color: {
      primaryColor: '#333333',
      secondaryColor: '#666666',
      tertiaryColor: '#999999',
      quaternary: '#4E5C66',
      heroColor: '#C4C4C4',
    },
    family: {
      default: '"Montserrat", sans-serif',
      secondaryFont: '"Nunito", sans-serif',
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  media: {
    height: {
      gteSmall: '(min-height: 540px)',
      gteMedium: '(min-height: 768px',
      gteXSmall: '(min-height: 375px)',
      lteSmall: '(max-height: 540px)',
      lteMedium: '(max-height: 768px)',
      lteXSmall: '(max-height: 375px)',
    },
    width: {
      gteMedium: '(min-width: 768px)',
      lteHuge: '(max-width: 1280px)',
      lteLarge: '(max-width: 846px)',
      lteMedium: '(max-width: 768px)',
    },
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
