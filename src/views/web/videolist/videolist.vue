<template>
  <div class="videolist">
    <div class="banner">
      <img src="" alt="banner图片" class="videobanner">
    </div>
    <whitespace :height="10"></whitespace>
    <div class="videocontent">
      {{videotype}}
    </div>
  </div>
</template>

<script>
import whitespace from './../../../components/whitespace'
export default {
  name: 'videolist',
  components: {
    whitespace
  },
  data () {
    return {
      videotype: '01'
    }
  },
  mounted () {
    let me = this;
    me.videotype = me.$route.params.type;
    me.init();
  },
  methods: {
    init () {
      let me = this;
      alert(me.videotype);
    }
  }
}
</script>

<style scoped>
.videolist {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.banner {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 120px;
  border: red 1px solid;
}
.videobanner {
  width: 100%;
  height: 100%;
}
.videocontent {
  margin: 0;
  padding: 0;
}
</style>
