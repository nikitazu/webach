import * as domain from '../core/domain.js';

import Mode from '../core/mode.js';
import Tonality from '../core/tonality.js';

import ChordBoxList from 'vue-loader!../chord-box-list.vue';
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
    ChordBoxList: ChordBoxList,
    TonalityToggler: TonalityToggler
  },
  data: () => {
    return {
      progressions: [
        new ChordProgression([
          new Chord('I'),
          new Chord('IV'),
          new Chord('I'),
          new Chord('V'),
          new Chord('')
        ]),
        new ChordProgression([
          new Chord('I'),
          new Chord('III'),
          new Chord('V'),
          new Chord('I'),
          new Chord('')
        ])
      ],
      song: {
        name: "Little green tree is cold at winter",
        parts: [
          { name: "A",
            tonality: new Tonality('C', Mode.major),
            progressions: [ 0, 1 ]
          },
          { name: "B",
            tonality: new Tonality('A', Mode.minor),
            progressions: [ 1, 0 ]
          }
        ]
      },
      message: new Date()
    };
  },
  methods: {
  	chordClicked: function (event, progression, chord) {
      const add    = chord.text === "";
      const remove = !add && event.altKey;
      if (add) {
        progression.add(chord);
      } else if (remove) {
        progression.remove(chord);
      } else {
        chord.increment();
      }
      this.message = new Date();
    },
    toneChanged: function (tonality) {
      tonality.incrementTone();
    },
    modeChanged: function (tonality) {
      tonality.incrementMode();
    }
  }
}
