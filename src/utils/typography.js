import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat"
  ],
  bodyFontFamily: [
    "Montserrat"
  ],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
})

export default typography