import * as domain from '../core/domain.js';

export default {
  props: ['tone', 'mode'],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    toneClicked: function () {
      this.$emit('toneChange');
    },
    modeClicked: function () {
      this.$emit('modeChange');
    }
  }
};
