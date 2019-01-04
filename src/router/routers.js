export const web = {
  path: '/web',
  name: 'web',
  redirect: '/web/index',
  meta: {
    title: '楚彝人'
  },
  component: () => import('@/views/web/container.vue'),
  children: [
    {path: 'index', name: 'index', meta: {title: '首页'}, component: () => import('@/views/web/index/index.vue')},
    {path: 'videolist', name: 'videolist', meta: {title: '列表'}, component: () => import('@/views/web/videolist/videolist.vue')},
    {path: 'video', name: 'video', meta: {title: '视频'}, component: () => import('@/views/web/videolist/video.vue')},
    {path: 'myspace', name: 'myspace', meta: {title: '我的空间'}, component: () => import('@/views/web/myspace/space.vue')}
  ]
}
export const routes = [
  web
]
export default routes
