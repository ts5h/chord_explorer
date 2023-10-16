type Chord = {
  category: string;
  label: string;
  sub: string;
  value: string;
  key?: number[];
};

export const chords: Chord[] = [
  // Major
  { category: "major", label: "major", sub: "", value: "major" },
  {
    category: "major",
    label: "major 7th",
    sub: "",
    value: "major-seventh",
  },
  { category: "major", label: "major 9th", sub: "", value: "major-ninth" },
  { category: "major", label: "6th", sub: "", value: "sixth" },
  {
    category: "major",
    label: "6/9",
    sub: "(6add9)",
    value: "six-add-nine",
  },
  {
    category: "major",
    label: "major 11th",
    sub: "",
    value: "major-eleventh",
  },
  {
    category: "major",
    label: "major 13th",
    sub: "",
    value: "major-thirteenth",
  },

  // Minor
  { category: "minor", label: "minor", sub: "", value: "minor" },
  {
    category: "minor",
    label: "minor 7th",
    sub: "",
    value: "minor-seventh",
  },
  {
    category: "minor",
    label: "minor major 7th",
    sub: "",
    value: "minor-major-seventh",
  },
  { category: "minor", label: "minor 6th", sub: "", value: "minor-sixth" },
  { category: "minor", label: "minor 9th", sub: "", value: "minor-ninth" },
  {
    category: "minor",
    label: "minor 11th",
    sub: "",
    value: "minor-eleventh",
  },
  {
    category: "minor",
    label: "min (maj7)",
    sub: "",
    value: "minor-major-seventh",
  },
  {
    category: "minor",
    label: "min (maj9)",
    sub: "",
    value: "minor-major-ninth",
  },
  {
    category: "minor",
    label: "m7♭5",
    sub: "",
    value: "minor-seventh-flat-five",
  },
  {
    category: "minor",
    label: "m7♭9",
    sub: "",
    value: "minor-seventh-flat-nine",
  },
  {
    category: "minor",
    label: "m7#9",
    sub: "",
    value: "minor-seventh-sharp-nine",
  },
  {
    category: "minor",
    label: "m7♭5♭9",
    sub: "",
    value: "minor-seventh-flat-five-flat-nine",
  },
  {
    category: "minor",
    label: "m7♭5#9",
    sub: "",
    value: "minor-seventh-flat-five-sharp-nine",
  },

  // Dominant
  { category: "dominant", label: "7th", sub: "", value: "seventh" },
  { category: "dominant", label: "9th", sub: "", value: "ninth" },
  { category: "dominant", label: "11th", sub: "", value: "eleventh" },
  { category: "dominant", label: "13th", sub: "", value: "thirteenth" },
  {
    category: "dominant",
    label: "7-5",
    sub: "(7♭5) altered",
    value: "seven-flat-five",
  },
  {
    category: "dominant",
    label: "7+5",
    sub: "(7♯5) altered",
    value: "seven-sharp-five",
  },
  {
    category: "dominant",
    label: "7-9",
    sub: "(7♭9) altered",
    value: "seven-flat-nine",
  },
  {
    category: "dominant",
    label: "7+9",
    sub: "(7♯9) altered",
    value: "seven-sharp-nine",
  },

  // Symmetrical
  {
    category: "symmetrical",
    label: "half-diminished",
    sub: "",
    value: "half-diminished",
  },
  { category: "symmetrical", label: "dim", sub: "", value: "diminished" },
  {
    category: "symmetrical",
    label: "dim7",
    sub: "",
    value: "diminished-seventh",
  },
  { category: "symmetrical", label: "aug", sub: "", value: "augmented" },
  {
    category: "symmetrical",
    label: "aug7",
    sub: "",
    value: "augmented-seventh",
  },

  // Miscellaneous
  { category: "miscellaneous", label: "5th", sub: "", value: "fifth" },
  { category: "miscellaneous", label: "♭5th", sub: "", value: "flat-fifth" },
  { category: "miscellaneous", label: "add 2", sub: "", value: "add-two" },
  { category: "miscellaneous", label: "add 4", sub: "", value: "add-four" },
  { category: "miscellaneous", label: "add 9", sub: "", value: "add-nine" },
  {
    category: "miscellaneous",
    label: "add 11",
    sub: "",
    value: "add-eleven",
  },
  {
    category: "miscellaneous",
    label: "sus2",
    sub: "",
    value: "suspended-second",
  },
  {
    category: "miscellaneous",
    label: "sus4",
    sub: "",
    value: "suspended-fourth",
  },
  {
    category: "miscellaneous",
    label: "#11",
    sub: "",
    value: "sharp-eleven",
  },
];
