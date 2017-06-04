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

export default {
  components: {
    TonalityToggler: TonalityToggler
  },
  data: () => {
    return {
      tonality: new Tonality('A', Mode.minor),
      chords: [
        new Chord('I'),
        new Chord('II'),
        new Chord('III'),
        new Chord('IV'),
        new Chord('V'),
        new Chord('VI'),
        new Chord('VII'),
        new Chord('')
      ],
      message: new Date()
    };
  },
  methods: {
  	chordClicked: function (chord) {
    	if (chord.text === "") {
      	this.chords.push(new Chord(''));
      }
      chord.increment();
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
