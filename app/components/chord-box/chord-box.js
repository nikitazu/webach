export default {
  props: ['text'],
  data: function() {
    return { /* empty */ };
  },
  methods: {
    boxClicked: function (event) {
      this.$emit('boxClick', event);
    }
  }
};
