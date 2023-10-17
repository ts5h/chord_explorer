type Chord = {
  category: string;
  label: string;
  sub: string;
  value: string;
  key: number[];
};

type CategorizeChords = {
  category: string;
  chords: Chord[];
};

export const chords: Chord[] = [
  // Major
  {
    category: "major",
    label: "major",
    sub: "",
    value: "major",
    key: [0, 4, 7],
  },
  {
    category: "major",
    label: "major 7th",
    sub: "",
    value: "major-seventh",
    key: [0, 4, 7, 11],
  },
  {
    category: "major",
    label: "major 9th",
    sub: "",
    value: "major-ninth",
    key: [0, 4, 7, 11, 14],
  },
  {
    category: "major",
    label: "6th",
    sub: "",
    value: "sixth",
    key: [0, 4, 7, 9],
  },
  {
    category: "major",
    label: "6/9",
    sub: "(6add9)",
    value: "six-add-nine",
    key: [0, 4, 7, 9, 14],
  },
  {
    category: "major",
    label: "major 11th",
    sub: "",
    value: "major-eleventh",
    key: [0, 4, 7, 11, 14, 17],
  },
  {
    category: "major",
    label: "major 13th",
    sub: "",
    value: "major-thirteenth",
    key: [0, 4, 7, 11, 14, 17, 21],
  },

  // Minor
  {
    category: "minor",
    label: "minor",
    sub: "",
    value: "minor",
    key: [0, 3, 7],
  },
  {
    category: "minor",
    label: "minor 7th",
    sub: "",
    value: "minor-seventh",
    key: [0, 3, 7, 10],
  },
  {
    category: "minor",
    label: "minor major 7th",
    sub: "",
    value: "minor-major-seventh",
    key: [0, 3, 7, 11],
  },
  {
    category: "minor",
    label: "minor 6th",
    sub: "",
    value: "minor-sixth",
    key: [0, 3, 7, 9],
  },
  {
    category: "minor",
    label: "minor 9th",
    sub: "",
    value: "minor-ninth",
    key: [0, 3, 7, 10, 14],
  },
  {
    category: "minor",
    label: "minor 11th",
    sub: "",
    value: "minor-eleventh",
    key: [0, 3, 7, 10, 14, 17],
  },
  {
    category: "minor",
    label: "min (maj7)",
    sub: "",
    value: "minor-major-seventh",
    key: [0, 3, 7, 11],
  },
  {
    category: "minor",
    label: "min (maj9)",
    sub: "",
    value: "minor-major-ninth",
    key: [0, 3, 7, 11, 14],
  },
  {
    category: "minor",
    label: "m7♭5",
    sub: "",
    value: "minor-seventh-flat-five",
    key: [0, 3, 6, 10],
  },
  {
    category: "minor",
    label: "m7♭9",
    sub: "",
    value: "minor-seventh-flat-nine",
    key: [0, 3, 7, 10, 13],
  },
  {
    category: "minor",
    label: "m7#9",
    sub: "",
    value: "minor-seventh-sharp-nine",
    key: [0, 3, 7, 10, 15],
  },
  {
    category: "minor",
    label: "m7♭5♭9",
    sub: "",
    value: "minor-seventh-flat-five-flat-nine",
    key: [0, 3, 6, 10, 13],
  },
  {
    category: "minor",
    label: "m7♭5#9",
    sub: "",
    value: "minor-seventh-flat-five-sharp-nine",
    key: [0, 3, 6, 10, 15],
  },

  // Dominant
  {
    category: "dominant",
    label: "7th",
    sub: "",
    value: "seventh",
    key: [0, 4, 7, 10],
  },
  {
    category: "dominant",
    label: "9th",
    sub: "",
    value: "ninth",
    key: [0, 4, 7, 10, 14],
  },
  {
    category: "dominant",
    label: "11th",
    sub: "",
    value: "eleventh",
    key: [0, 4, 7, 10, 14, 17],
  },
  {
    category: "dominant",
    label: "13th",
    sub: "",
    value: "thirteenth",
    key: [0, 4, 7, 10, 14, 17, 21],
  },
  {
    category: "dominant",
    label: "7-5",
    sub: "(7♭5) altered",
    value: "seven-flat-five",
    key: [0, 4, 6, 10],
  },
  {
    category: "dominant",
    label: "7+5",
    sub: "(7♯5) altered",
    value: "seven-sharp-five",
    key: [0, 4, 8, 10],
  },
  {
    category: "dominant",
    label: "7-9",
    sub: "(7♭9) altered",
    value: "seven-flat-nine",
    key: [0, 4, 7, 10, 13],
  },
  {
    category: "dominant",
    label: "7+9",
    sub: "(7♯9) altered",
    value: "seven-sharp-nine",
    key: [0, 4, 7, 10, 15],
  },
  {
    category: "dominant",
    label: "7-5-9",
    sub: "(7♭5♭9) altered",
    value: "seven-flat-five-flat-nine",
    key: [0, 4, 6, 10, 13],
  },
  {
    category: "dominant",
    label: "7+5+9",
    sub: "(7♯5♯9) altered",
    value: "seven-sharp-five-sharp-nine",
    key: [0, 4, 8, 10, 15],
  },
  {
    category: "dominant",
    label: "7-5+9",
    sub: "(7♭5♯9) altered",
    value: "seven-flat-five-sharp-nine",
    key: [0, 4, 6, 10, 15],
  },
  {
    category: "dominant",
    label: "7+5-9",
    sub: "(7♯5♭9) altered",
    value: "seven-sharp-five-flat-nine",
    key: [0, 4, 8, 10, 13],
  },
  {
    category: "dominant",
    label: "7+11",
    sub: "(7♯11) altered",
    value: "seven-sharp-eleven",
    key: [0, 4, 7, 10, 14, 18],
  },

  // Symmetrical
  {
    category: "symmetrical",
    label: "half-diminished",
    sub: "",
    value: "half-diminished",
    key: [0, 3, 6, 10],
  },
  {
    category: "symmetrical",
    label: "dim",
    sub: "",
    value: "diminished",
    key: [0, 3, 6],
  },
  {
    category: "symmetrical",
    label: "dim7",
    sub: "",
    value: "diminished-seventh",
    key: [0, 3, 6, 9],
  },
  {
    category: "symmetrical",
    label: "aug",
    sub: "",
    value: "augmented",
    key: [0, 4, 8],
  },
  {
    category: "symmetrical",
    label: "aug7",
    sub: "",
    value: "augmented-seventh",
    key: [0, 4, 8, 10],
  },

  // Miscellaneous
  {
    category: "miscellaneous",
    label: "5th",
    sub: "",
    value: "fifth",
    key: [0, 7],
  },
  {
    category: "miscellaneous",
    label: "♭5th",
    sub: "",
    value: "flat-fifth",
    key: [0, 6],
  },
  {
    category: "miscellaneous",
    label: "add 2",
    sub: "",
    value: "add-two",
    key: [0, 2, 4, 7],
  },
  {
    category: "miscellaneous",
    label: "add 4",
    sub: "",
    value: "add-four",
    key: [0, 4, 5, 7],
  },
  {
    category: "miscellaneous",
    label: "add 9",
    sub: "",
    value: "add-nine",
    key: [0, 4, 7, 14],
  },
  {
    category: "miscellaneous",
    label: "add 11",
    sub: "",
    value: "add-eleven",
    key: [0, 4, 7, 17],
  },
  {
    category: "miscellaneous",
    label: "sus2",
    sub: "",
    value: "suspended-second",
    key: [0, 2, 7],
  },
  {
    category: "miscellaneous",
    label: "sus4",
    sub: "",
    value: "suspended-fourth",
    key: [0, 5, 7],
  },
  {
    category: "miscellaneous",
    label: "#11",
    sub: "",
    value: "sharp-eleven",
    key: [0, 4, 7, 18],
  },
];

const categories = [
  "major",
  "minor",
  "dominant",
  "symmetrical",
  "miscellaneous",
];

export const categorizeChords: CategorizeChords[] = categories.map(
  (category) => {
    const chordsInCategory = chords.filter(
      (chord) => chord.category === category,
    );
    return {
      category,
      chords: chordsInCategory,
    };
  },
);

console.log(categorizeChords);
