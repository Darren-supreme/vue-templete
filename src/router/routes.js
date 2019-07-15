

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)
const frame = [
    {
        path: '/',
        name: 'index',
        meta: {
            auth: true,
            title: '首页'
        },
        component: _import('index')
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            auth: true,
            title: '测试'
        },
        component: _import('test')
    },
    {
        path: '/study',
        name: 'study',
        meta: {
            auth: true,
            title: '组件传参学习'
        },
        component: _import('study/component-communication/index')
    }
]
export default [
    ...frame
]