import * as domain from './domain.js';
import Mode from './mode.js'

export default function Tonality(tone, mode) {
  this.tone = tone;
  this.mode = mode;
  this.harmonize = function (chord) {
    return domain.harmonize(
      this.tone,
      chord.text,
      this.mode.toneShift,
      this.mode.chordShift
    );
  };
  this.incrementTone = function () {
    this.tone = domain.incrementToneValue(this.tone);
  };
  this.incrementMode = function () {
    this.mode = this.mode === Mode.major ? Mode.minor : Mode.major;
  };
}
