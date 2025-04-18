import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: 'JudgeSytem',
      path: '/judgeSystem',
      component: './JudgeSystem',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
});
