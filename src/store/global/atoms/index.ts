import { atom } from "jotai";

window.AudioContext = window.AudioContext || window.webkitAudioContext;

export const audioContextAtom = atom(new AudioContext());
export const getCurrentScale = atom<string>("");
export const getCurrentChord = atom<string>("");
