import {HeartIcon, PreciseMonitorIcon} from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  // 域名
  {
    path: '/monitor',
    name: 'monitor',
    component: Layout,
    //redirect: '/monitor/base',
    meta: {title: '监控中心', icon: PreciseMonitorIcon},
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBase',
        component: () => import('@/pages/monitor/index.vue'),
        meta: {title: '监控视图'},
      },
      {
        path: 'base',
        name: 'MonitorBase',
        component: () => import('@/pages/monitor/list/index.vue'),
        meta: {title: '监控列表'},
      },
      {
        path: 'add',
        name: "MonitorAdd",
        component: () => import('@/pages/monitor/form/base/index.vue'),
        meta: {title: '新增监控'},
      }
    ],
  }
]
