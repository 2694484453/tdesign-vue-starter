import {HeartIcon, PreciseMonitorIcon, RelativityIcon, RectangleIcon} from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/traefik',
    name: 'traefik',
    component: Layout,
    meta: {title: 'traefik管理(单机版)', icon: RectangleIcon},
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBase',
        component: () => import('@/pages/traefik/index.vue'),
        meta: {title: '监控视图'},
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
    path: '/traefik-cluster',
    name: 'traefik',
    component: Layout,
    meta: {title: 'traefik管理(云原生版)', icon: RectangleIcon},
    children: [
      {
        path: 'dashboard',
        name: 'DashboardBase',
        component: () => import('@/pages/traefik/index.vue'),
        meta: {title: '监控视图'},
      },
      {
        path: "add",
        name: 'AddBase',
        component: () => import("@/pages/traefik/list/index.vue"),
        meta: {title: '配置列表'},
      }
    ]
  }
]
