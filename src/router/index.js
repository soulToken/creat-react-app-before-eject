import Login from '@/views/login/'
import Index from '@/views/index/'
import React, { Component } from 'react';
// 按需加载路由   高阶组件
function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      })
    }
    render() {
      const RenderComponet = this.state.component
      return RenderComponet ? <RenderComponet {...this.props} /> : <div>loading...</div>
    }
  }
  return AsyncComponent
}
let routers=[
      // {
      //   path: '/', 
      //   component: asyncComponent(() => import('@/views/index/'))
      // },
      {
        path: '/login', 
        // component: r => require.ensure([],() => r(require('@/views/login/'),'login'))
        component: Login
      },
      {
        path: '/index', //预测
        component: asyncComponent(() => import('@/views/index/'))
        // getComponents(location, callback) {
        //   require.ensure([], function (require) {
        //     callback(null, require('@/views/index/'))
        //   })
        // }
      },
      {
        path: '*', //预测-
        component: asyncComponent(() => import('@/views/nofind/'))
       
      },
      
]

// module.exports= routers
export default routers