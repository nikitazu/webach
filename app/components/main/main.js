import * as domain from '../core/domain.js';

import Chord            from '../core/chord.js';
import ChordProgression from '../core/chord-progression.js';
import Mode             from '../core/mode.js';
import Tonality         from '../core/tonality.js';

import ChordBoxList       from 'vue-loader!../chord-box-list.vue';
import ChordBoxListEditor from 'vue-loader!../chord-box-list-editor.vue';
import TonalityToggler    from 'vue-loader!../tonality-toggler.vue';

export default {
  components: {
    ChordBoxList: ChordBoxList,
    ChordBoxListEditor: ChordBoxListEditor,
    TonalityToggler: TonalityToggler
  },
  data: () => {
    return {
      progressions: [
        new ChordProgression([
          new Chord('I'),
          new Chord('IV'),
          new Chord('I'),
          new Chord('V')
        ]),
        new ChordProgression([
          new Chord('I'),
          new Chord('III'),
          new Chord('V'),
          new Chord('I')
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
    toneChanged: function (tonality) {
      tonality.incrementTone();
    },
    modeChanged: function (tonality) {
      tonality.incrementMode();
    },
    editorBoxClicked: function (event, chord, progression) {
      const remove = event.altKey;
      if (remove) {
        progression.remove(chord);
      } else {
        chord.increment();
      }
    },
    editorAddClicked: function (progression) {
      progression.grow();
    },
    addProgressionClicked: function () {
      this.progressions.push(new ChordProgression([new Chord('I')]));
    }
  }
}
