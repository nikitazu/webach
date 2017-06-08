import * as domain from './domain.js';
import Mode from './mode.js'

export default function Tonality(tone, mode) {
  this.tone = tone;
  this.mode = mode;
  this.harmonize = function (chord) {
    const key = domain.harmonize(
      this.tone,
      chord.text,
      this.mode.toneShift,
      this.mode.chordShift
    );
    const chordFunction = this.mode.getChordFunction(chord.text);
    const suffixes = {
      'major' : ' ',
      'minor' : 'm',
      'diminished' : 'dim'
    };
    return {
      key:    key.replace(/(#|b)/, ''),
      sharp:  key.endsWith('#'),
      flat:   key.endsWith('b'),
      suffix: suffixes[chordFunction.type],
      mode:   chordFunction.type
    };
  };
  this.incrementTone = function () {
    this.tone = domain.incrementToneValue(this.tone);
  };
  this.incrementMode = function () {
    this.mode = this.mode === Mode.major ? Mode.minor : Mode.major;
  };
}
