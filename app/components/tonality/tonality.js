import * as domain from '../core/domain.js';

function Mode(name, toneShift, chordShift) {
  this.name = name;
  this.toneShift = toneShift;
  this.chordShift = chordShift;
}

Mode.major = new Mode('major', 0, 0);
Mode.minor = new Mode('minor', 3, 5);

function Tonality(tone, mode) {
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

export default {
  Mode: Mode,
  Tonality: Tonality,
  props: ['tone', 'mode'],
  data: function() {
    return { tonality: new Tonality(this.tone, Mode[this.mode]) };
  },
  methods: {
    tonalityToneClicked: function () {
      this.tonality.incrementTone();
      this.$emit('change', this.tonality);
    },
    tonalityModeClicked: function () {
      this.tonality.incrementMode();
      this.$emit('change', this.tonality);
    }
  }
};
