import { useCallback, useRef } from "react";
import * as Tone from "tone";

const ROOT_MIDI_NOTE = 60;

export type SynthObject = {
  synth: Tone.PolySynth;
  frequencies: number[];
};

export const usePlayChord = () => {
  const synthObject = useRef<SynthObject>();

  const playChord = useCallback((keys: number[]) => {
    const synth = new Tone.PolySynth().toDestination();
    synth.set({
      envelope: { release: 1.5 },
      volume: -keys.length,
    });

    const frequencies = keys.map((key) => {
      return Tone.Frequency(ROOT_MIDI_NOTE + key, "midi").toFrequency();
    });

    synth.triggerAttack(frequencies);
    synthObject.current = { synth, frequencies };

    return synthObject.current;
  }, []);

  const stopChord = useCallback((synths: SynthObject[]) => {
    synths.forEach((synth) => {
      synth.synth.releaseAll();

      setTimeout(() => {
        synth.synth.dispose();
        synthObject.current = undefined;
      }, 3000);
    });
  }, []);

  return { playChord, stopChord };
};
