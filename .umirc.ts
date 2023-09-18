import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {},
    // access: {},
    // model: {},
    // initialState: {},
    request: {},
    mpa: {
        entry: {
            share: { title: '工单详情' },
        },
    },
    proxy: {
        '/spa1': {
            target: 'https://reocar.b2.tryudesk.com', // 接口域名
            changeOrigin: true,
        },
        '/cs/ts/api': {
            target: 'https://reocar.b2.tryudesk.com', // 接口域名
            changeOrigin: true,
        },
    },

    npmClient: 'pnpm',
});
