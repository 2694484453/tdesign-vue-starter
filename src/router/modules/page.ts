import { RelativityIcon } from 'tdesign-icons-vue';
import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/build',
    component: Layout,
    redirect: '/build/base',
    name: 'build',
    meta: {
      title: '构建管理',
      icon: RelativityIcon,
    },
    children: [
      {
        path: 'image',
        name: 'image',
        component: () => import('@/pages/build/image/index.vue'),
        meta: { title: '镜像构建' },
        children: [

        ]
      },
      {
        path: "imageForm",
        name: "imageForm",
        component: () => import('@/pages/build/image/form/base/index.vue'),
        meta: { title: "新建镜像-非菜单" }
      },
      {
        path: "imageDetail",
        name: "imageDetail",
        component: () => import('@/pages/build/image/detail/base/index.vue'),
        meta: { title: "构建详情-非菜单" }
      },
      {
        path: "imageEdit",
        name: "imageEdit",
        component: () => import('@/pages/build/image/edit/base/index.vue'),
        meta: { title: "构建编辑-非菜单" }
      },
      {
        path: 'helm',
        name: 'helm',
        component: () => import('@/pages/build/helm/index.vue'),
        meta: { title: 'chart构建' },
        // children: [
        //   {
        //     path: "form",
        //     name: "helmForm",
        //     component: () => import('@/pages/build/helm/form/dashboard.vue'),
        //     meta: { title: "新建镜像" }
        //   }
        // ]
      },
      {
        path: "helmForm",
        name: "helmForm",
        component: () => import('@/pages/build/helm/form/base/index.vue'),
        meta: { title: "新建chart-非菜单" }
      },
      {
        path: "helmDetail",
        name: "helmDetail",
        component: () => import('@/pages/build/helm/detail/base/index.vue'),
        meta: { title: "构建详情-非菜单" }
      },
      {
        path: "helmEdit",
        name: "helmEdit",
        component: () => import('@/pages/build/helm/edit/base/index.vue'),
        meta: { title: "构建编辑-非菜单" }
      },
      {
        path: "success",
        name: "success",
        component: () => import('@/pages/build/success/index.vue'),
        meta: { title: "结果-非菜单" }
      },
    ],
  },
];
