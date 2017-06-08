import * as utils from './utils.js';

const toneMatrix = [
  ['C',  'D',  'E',  'F',  'G',  'A',  'B' ],
  ['Db', 'Eb', 'F',  'Gb', 'Ab', 'Bb', 'C' ],
  ['D',  'E',  'F#', 'G',  'A',  'B',  'C#'],
  ['Eb', 'F',  'G',  'Ab', 'Bb', 'C',  'D' ],
  ['E',  'F#', 'G#', 'A',  'B',  'C#', 'D#'],
  ['F',  'G',  'A',  'Bb', 'C',  'D',  'E' ],
  ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F' ],
  ['G',  'A',  'B',  'C',  'D',  'E',  'F#'],
  ['Ab', 'Bb', 'C',  'Db', 'Eb', 'F',  'G' ],
  ['A',  'B',  'C#', 'D',  'E',  'F#', 'G#'],
  ['Bb', 'C',  'D',  'Eb', 'F',  'G',  'A' ],
  ['B',  'C#', 'D#', 'E',  'F#', 'G#', 'A#']
];
const tones = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const chords = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
export const chordsInMode = {
    major: {
      'I'   : { face: 'I',   type: 'major' },
      'II'  : { face: 'ii',  type: 'minor' },
      'III' : { face: 'iii', type: 'minor' },
      'IV'  : { face: 'IV',  type: 'major' },
      'V'   : { face: 'V',   type: 'major' },
      'VI'  : { face: 'vi',  type: 'minor' },
      'VII' : { face: 'vii', type: 'diminished' }
    },
    minor: {
      'I'   : { face: 'i',   type: 'minor' },
      'II'  : { face: 'ii',  type: 'diminished' },
      'III' : { face: 'III', type: 'major' },
      'IV'  : { face: 'iv',  type: 'minor' },
      'V'   : { face: 'V',   type: 'major' }, // Dominant
      'VI'  : { face: 'VI',  type: 'major' },
      'VII' : { face: 'VII', type: 'major' }
    }
}

const shiftToneIndex = utils.shiftIndex1(tones.length);
const shiftChordIndex = utils.shiftIndex1(chords.length);

const shiftTone = dti => utils.shiftIndex(dti)(toneMatrix.length);
const shiftChord = dci => utils.shiftIndex(dci)(chords.length);

export const incrementChordValue = v => chords[shiftChordIndex(chords.indexOf(v))];
export const incrementToneValue = v => tones[shiftToneIndex(tones.indexOf(v))];

export const harmonize = (tone, chord, dti, dci) => {
  const toneIndex   = tones.indexOf(tone);
  const chordIndex  = chords.indexOf(chord);
  const toneHarmony = toneMatrix[shiftTone(dti)(toneIndex)];
  return chordIndex < 0
    ? ''
    : toneHarmony[shiftChord(dci)(chordIndex)];
};
