import VueRouter from 'vue-router';
import proxy from '@/config/host';
import baseRouters from './modules/base';
// 个人
import userInfoRouters from "@/router/modules/userinfo";
import componentsRouters from './modules/components';
import othersRouters from './modules/others';
import pageRouters from './modules/build';
// 域名
import domainRouters from './modules/domain';
// 监控
import monitorRouters from "@/router/modules/monitor";
// 告警
import alertRouters from "@/router/modules/alert";
// 仓库
import repoRouters from "@/router/modules/repo";
// traefik
import traefikRouters from "@/router/modules/traefik";
// 集群
import clusterRouters from "@/router/modules/cluster";

const env = import.meta.env.MODE || 'development';
// 存放动态路由
export const asyncRouterList = (proxy[env].NAME === "development" ? [...baseRouters, ...componentsRouters, ...othersRouters, ...userInfoRouters, ...domainRouters, ...pageRouters, ...monitorRouters, ...repoRouters, ...traefikRouters, ...alertRouters, ...clusterRouters] : [...baseRouters, ...domainRouters, ...monitorRouters, ...repoRouters, ...traefikRouters, ...alertRouters, ...clusterRouters]);

// 存放固定的路由
const defaultRouterList = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '*',
    redirect: '/dashboard/base',
  },
  ...asyncRouterList,
];

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    base: env === 'site' ? '/starter/vue/' : null,
    routes: defaultRouterList,
    scrollBehavior() {
      return {x: 0, y: 0};
    },
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
