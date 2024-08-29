import {HeartIcon, PreciseMonitorIcon, RelativityIcon} from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  // 域名
  {
    path: '/repo',
    name: 'repo',
    component: Layout,
    redirect: '/repo/base',
    meta: {title: '仓库管理', icon: RelativityIcon},
    children: [
      {
        path: 'base',
        name: 'MonitorBase',
        component: () => import('@/pages/repo/index.vue'),
        meta: {title: '镜像列表'},
      }
    ],
  }
]
