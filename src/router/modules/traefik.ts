import {HeartIcon, PreciseMonitorIcon, RelativityIcon, RectangleIcon} from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/traefik',
    name: 'traefik',
    component: Layout,
    meta: {title: 'traefik管理(主机版)', icon: RectangleIcon},
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBase',
        component: () => import('@/pages/traefik/index.vue'),
        meta: {title: '监控面板'},
      },
      {
        path: "add",
        name: 'AddBase',
        component: () => import("@/pages/traefik/list/index.vue"),
        meta: {title: '配置列表'},
      }
    ],
  },
  {
    path: '/traefik-cloud',
    name: 'traefik-cloud',
    component: Layout,
    meta: {title: 'traefik管理(云原生版)', icon: RectangleIcon},
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBase',
        component: () => import('@/pages/traefik-cloud/index.vue'),
        meta: {title: '监控面板'},
      },
      {
        path: "add",
        name: 'AddBase',
        component: () => import("@/pages/traefik-cloud/list/index.vue"),
        meta: {title: '配置列表'},
      }
    ]
  }
]
