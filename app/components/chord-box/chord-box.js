export default {
  props: ['text', 'clickable', 'sharp', 'flat', 'suffix', 'major', 'minor'],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event) {
      this.$emit('boxClick', event);
    }
  }
};
