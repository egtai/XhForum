import Vue from 'vue'
import Element from 'element-ui'
import '../element-variables.scss'

Vue.use(Element)
// 解构赋值，取出Message;Message有四种状态，分别是success,warn-ing,info和error
const { Message } = Element
// 注册$Message方法
Vue.prototype.$Message = Message
