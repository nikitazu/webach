import ChordBox from 'vue-loader!../chord-box/chord-box.vue';

export default {
  components: {
    ChordBox: ChordBox
  },
  props: [ 'chords', 'getValue', 'boxClickable' ],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event, chord) {
      this.$emit('boxClick', event, chord);
    }
  }
};
