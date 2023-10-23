import { atom } from "jotai";

window.AudioContext = window.AudioContext || window.webkitAudioContext;

export const audioContextAtom = atom(new AudioContext());
export const isSoundOnAtom = atom(false);
export const getCurrentScale = atom("");
export const getCurrentChord = atom("");
