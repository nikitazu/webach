import * as domain from './domain.js';

export default function Mode(name, toneShift, chordShift) {
  this.name = name;
  this.toneShift = toneShift;
  this.chordShift = chordShift;
  this.getChordFunction = function (chord) {
    return domain.chordsInMode[this.name][chord];
  };
}

Mode.major = new Mode('major', 0, 0);
Mode.minor = new Mode('minor', 3, 5);
