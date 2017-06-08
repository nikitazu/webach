import ChordBox     from 'vue-loader!../chord-box/chord-box.vue';
import ChordBoxList from 'vue-loader!../chord-box-list/chord-box-list.vue';

export default {
  components: {
    ChordBox: ChordBox,
    ChordBoxList: ChordBoxList
  },
  props: [ 'chords', 'getValue' ],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event, chord) {
      this.$emit('boxClick', event, chord);
    },
    addClicked: function () {
      this.$emit('addClick');
    }
  }
};
