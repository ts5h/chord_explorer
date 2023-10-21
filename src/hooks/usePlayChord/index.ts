import { useCallback, useRef } from "react";
import * as Tone from "tone";

const ROOT_MIDI_NOTE = 60;

export const usePlayChord = () => {
  const synth = useRef<Tone.PolySynth>();
  const frequencies = useRef<number[]>();

  const playChord = useCallback((keys: number[]) => {
    synth.current = new Tone.PolySynth().toDestination();
    synth.current.set({
      envelope: { release: 1.0 },
    });

    frequencies.current = keys.map((key) => {
      return Tone.Frequency(ROOT_MIDI_NOTE + key, "midi").toFrequency();
    });

    synth.current?.triggerAttack(frequencies.current, Tone.now());
  }, []);

  const stopChord = useCallback(() => {
    if (synth.current && frequencies.current) {
      synth.current.triggerRelease(frequencies.current, Tone.now());
    }

    setTimeout(() => {
      synth.current?.dispose();
      synth.current = undefined;
    }, 4000);
  }, []);

  return { playChord, stopChord };
};
