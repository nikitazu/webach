import * as domain from './domain.js';
import Chord from './chord.js';

export default function ChordProgression(chords) {
  this.chords = chords;
  this.grow = function () {
    this.chords.push(new Chord('I'));
  };
  this.remove = function (chord) {
    const i = this.chords.indexOf(chord);
    if (i >= 0) {
      this.chords.splice(i, 1);
    }
  };
};