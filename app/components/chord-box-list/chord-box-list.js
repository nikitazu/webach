import ChordBox from 'vue-loader!../chord-box.vue';

export default {
  components: {
    ChordBox: ChordBox
  },
  props: [ 'chords', 'getValue' ],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event, chord) {
      this.$emit('boxClick', event, chord);
    }
  }
};
