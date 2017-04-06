const fontSize = 10;
const fontFamily = "Calibri";
const fill = "green";
const opacity = 0.1;
const stroke = "black";
const strokeWidth = 0.6;
const imageDir = './modules-images';

export const modulesData = [
  {
    fontSize,
    fontFamily,
    fill,
    opacity,
    stroke,
    strokeWidth,
    width: 90,
    height: 110,
    rotation: 0,
    boundToSideIndex: 0,
    innerGroupX: 0,
    innerGroupY: 0,
    text: "Barrel Connector (20V 3A)",
    textX: 10,
    textY: 25,
    imageX: 10,
    imageY: 10,
    imageWidth: 70,
    imageHeight: 100,
    imageSrc: require(`${imageDir}/barrel-connector.svg`),
    iconSrc: require(`${imageDir}/barrel-connector-icon.svg`),
    iconHeight: "70px",
    price: null,
    info: null
  },
  {
    fontSize,
    fontFamily,
    fill,
    opacity,
    stroke,
    strokeWidth,
    width: 75,
    height: 75,
    rotation: 0,
    boundToSideIndex: null,
    text: "3.5V/1.5A Regulator",
    textX: 15,
    textY: 20,
    innerGroupX: null,
    innerGroupY: null,
    imageX: null,
    imageY: null,
    imageWidth: null,
    imageHeight: null,
    imageSrc: null,
    iconSrc: require(`${imageDir}/regulator-icon.svg`),
    iconHeight: "55px",
    price: null,
    info: null
  }
]