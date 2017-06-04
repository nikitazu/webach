import * as domain from '../core/domain.js';
import Mode from '../core/mode.js';
import Tonality from '../core/tonality.js';
import TonalityToggler from 'vue-loader!../tonality-toggler.vue';

function Chord(text) {
	this.text = text;
  this.increment = function () {
    this.text = domain.incrementChordValue(this.text);
  };
}

function ChordProgression(chords) {
  this.chords = chords;
  this.add = function (chord) {
    chord.increment();
    this.chords.push(new Chord(''));
  };
  this.remove = function (chord) {
    const i = this.chords.indexOf(chord);
    if (i >= 0) {
      this.chords.splice(i, 1);
    }
  };
}

export default {
  components: {
    TonalityToggler: TonalityToggler
  },
  data: () => {
    return {
      tonality: new Tonality('A', Mode.minor),
      progression: new ChordProgression([
        new Chord('I'),
        new Chord('II'),
        new Chord('III'),
        new Chord('IV'),
        new Chord('V'),
        new Chord('VI'),
        new Chord('VII'),
        new Chord('')
      ]),
      message: new Date()
    };
  },
  methods: {
  	chordClicked: function (event, chord) {
      const add    = chord.text === "";
      const remove = !add && event.altKey;
      if (add) {
        this.progression.add(chord);
      } else if (remove) {
        this.progression.remove(chord);
      } else {
        chord.increment();
      }
      this.message = new Date();
    },
    toneChanged: function () {
      this.tonality.incrementTone();
    },
    modeChanged: function () {
      this.tonality.incrementMode();
    }
  }
}
