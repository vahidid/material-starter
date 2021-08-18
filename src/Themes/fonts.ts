import Woff2 from "./../Assets/fonts/Vazir/VazirRegularFD.woff2";
import Woff from "./../Assets/fonts/Vazir/VazirRegularFD.woff";
import Ttf from "./../Assets/fonts/Vazir/VazirRegularFD.ttf";

export const VazirRegularWoff2 = {
	fontFamily: "Vazir",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirRegular'),
      local('Vazir-Regular'),
      url(${Woff2}) format('woff2')
    `,
};

export const VazirRegularWoff = {
	fontFamily: "Vazir",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirRegular'),
      local('Vazir-Regular'),
      url(${Woff}) format('woff')
    `,
};

export const VazirRegularTtf = {
	fontFamily: "Vazir",
	fontStyle: "normal",
	fontWeight: 400,
	src: `
      local('VazirRegular'),
      local('Vazir-Regular'),
      url(${Ttf}) format('ttf')
    `,
};
