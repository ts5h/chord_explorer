import { useCallback, useRef } from "react";
import * as Tone from "tone";

const ROOT_MIDI_NOTE = 60;

export const usePlayChord = () => {
  const synth = useRef<Tone.PolySynth>();

  const playChord = useCallback((keys: number[]) => {
    synth.current = new Tone.PolySynth().toDestination();
    const now = Tone.now();

    const frequencies = keys.map((key) => {
      return Tone.Frequency(ROOT_MIDI_NOTE + key, "midi").toFrequency();
    });

    synth.current.triggerAttackRelease(frequencies, "4n", now);
  }, []);

  return {
    playChord,
  };
};
