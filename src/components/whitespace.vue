<template>
  <div :style="whitestyle" class="whitespace"></div>
</template>

<script>
export default {
  name: 'whitespace',
  props: {
    width: {
      type: [String, Number],
      default: '100%'
    },
    height: {
      type: [String, Number],
      default: '20px'
    },
    mybgcolor: {
      type: [String, Number],
      default: '#ffffff'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    whitestyle () {
      let me = this;
      let mywidth = 'width: ' + me.width + ';';
      let myheight = 'height: ' + me.height + 'px;';
      let mybgcolor = 'background-color: ' + me.mybgcolor + ';';
      return mywidth + myheight + mybgcolor;
    }
  },
  mounted () {
    let me = this;
    me.init();
  },
  methods: {
    init () {
    }
  }
}
</script>

<style scoped>
.whitespace {
  margin: 0;
  padding: 0;
}
</style>
