import "./data/banner.txt";

import { store } from "./store/index";
import { resizeCanvas } from "./components/canvas/actionCreators";
import { updateLightReach, toggleLightAutomaticMovement } from "./components/light/actionCreators";
import { updatePhraseGap } from "./components/phrase/actionCreators";
import { updateRayAperture, updateRayReach } from "./components/ray/actionCreators";
import { Canvas } from "./components/canvas/Canvas";
import { Light } from "./components/light/Light";
import { Controls } from "./components/controls/Controls";

const canvasElement = document.getElementById("canvas"),
	canvasContext = canvasElement.getContext('2d');
	lightElement = document.getElementById("light"),
	phraseGapInput = document.getElementById("phrase-gap-input"),
	lightReachInput = document.getElementById("light-reach-input"),
	rayApertureInput = document.getElementById("ray-aperture-input"),
	rayReachInput = document.getElementById("ray-reach-input");

const controlsBindings = [{
	input: phraseGapInput,
	action: updatePhraseGap,
	stateProp: "phrase.gap"
}, {
	input: lightReachInput,
	action: updateLightReach,
	stateProp: "light.reach"
}, {
	input: rayApertureInput,
	action: updateRayAperture,
	stateProp: "ray.aperture"
}, {
	input: rayReachInput,
	action: updateRayReach,
	stateProp: "ray.reach"
}];

window.addEventListener("resize", evt =>
	store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight)));

canvasElement.addEventListener("click", evt =>
	store.dispatch(toggleLightAutomaticMovement()));

store.subscribe(() => Canvas.render(canvasElement, canvasContext));
store.subscribe(() => Light.update(canvasElement, lightElement));
store.subscribe(Controls.update(controlsBindings));

store.dispatch(resizeCanvas(window.innerWidth, window.innerHeight));
