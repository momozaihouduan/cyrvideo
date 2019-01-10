<template>
  <div>首页
    <template v-for="(item,index) in userlist">
      <p :key="index">{{item.name}}</p>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      userlist: ''
    }
  },
  mounted () {
    let me = this
    me.init()
  },
  methods: {
    init () {
      let me = this
      axios.get('/video/user/getuserlist').then((res) => {
        me.userlist = res.data
      })
    }
  }

}
</script>

<style scoped>

</style>
