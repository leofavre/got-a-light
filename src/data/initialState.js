import { gottaLight } from "./phraseData";

const processPhraseData = arr =>
	arr.map(str => Array.from(str).map(value => parseInt(value) || 0));

export const initialState = {
	canvas: {
		height: window.innerHeight,
		width: window.innerWidth
	},
	light: {
		autoMove: true,
		showOrigin: false,
		coord: [
			Math.round(window.innerWidth / 2),
			Math.round(window.innerHeight / 2)
		],
		reach: 5,
		xIncrement: 1,
		yIncrement: 1,
		xStart: 45,
		yStart: 155
	},
	phrase: {
		gap: 9,
		source: processPhraseData(gottaLight)
	},
	ray: {
		aperture: 12,
		reach: 80
	}
};