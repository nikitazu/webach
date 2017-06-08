export default {
  props: ['text', 'clickable', 'sharp', 'flat', 'suffix', 'mode' ],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event) {
      this.$emit('boxClick', event);
    }
  }
};
