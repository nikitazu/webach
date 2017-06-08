export default {
  props: ['text','clickable'],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event) {
      this.$emit('boxClick', event);
    }
  }
};
