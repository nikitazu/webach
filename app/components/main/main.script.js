import * as domain from '../core/domain.js';
import tonality from 'vue-loader!../tonality.vue';

function Chord(text) {
	this.text = text;
  this.increment = function () {
    this.text = domain.incrementChordValue(this.text);
  };
}

export default {
  components: {
    tonality: tonality
  },
  data: () => {
    return {
      tonality: new tonality.Tonality('A', tonality.Mode.minor),
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
    harmonize: function (chord) {
      return this.tonality.harmonize(chord);
    },
    tonalityChanged: function (tonality) {
      this.tonality = tonality;
    }
  }
}
