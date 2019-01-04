<template>
  <div class="webmenu">
    <div class="">
      <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem :name="item.index" v-for="(item,index) in menulist" :key="index">
          <Icon :type="item.icon" />
          <span @click="linkmenu(index)">{{item.name}}</span>
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'webmenu',
  computed: {
  },
  data () {
    return {
      menulist: [
        {
          index: '1',
          name: '首页',
          path: 'index',
          type: '00',
          icon: 'md-apps'
        },
        {
          index: '2',
          name: '短剧',
          path: 'videolist',
          type: '01',
          icon: ''
        },
        {
          index: '3',
          name: '特色',
          path: 'videolist',
          type: '02',
          icon: ''
        },
        {
          index: '4',
          name: '民俗',
          path: 'videolist',
          type: '03',
          icon: ''
        },
        {
          index: '5',
          name: '我的',
          path: 'myspace',
          type: '99',
          icon: ''
        }
      ]
    }
  },
  methods: {
    linkmenu (index) {
      let me = this
      me.$router.push({
        name: me.menulist[index].path,
        params: {
          type: me.menulist[index].type
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
