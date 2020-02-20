import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import FinishList from '@/components/list/finishList'
import MessageList from '@/components/list/messageList'
import ProcessList from '@/components/list/processList'
import TodoList from '@/components/list/todoList'
import FinishDetail from '@/components/detail/finishDetail'
import MessageDetail from '@/components/detail/messageDetail'
import ProcessDetail from '@/components/detail/processDetail'
import TodoDetail from '@/components/detail/todoDetail'
import Customer from '@/components/customer'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/list/finishList',
            component: FinishList
        },
        {
            path: '/list/messageList',
            component: MessageList
        },
        {
            path: '/list/processList',
            component: ProcessList
        },
        {
            path: '/list/todoList',
            component: TodoList
        },
        {
            path: '/detail/finishDetail',
            component: FinishDetail
        },
        {
            path: '/detail/messageDetail',
            component: MessageDetail
        },
        {
            path: '/detail/processDetail',
            component: ProcessDetail
        },
        {
            path: '/detail/todoDetail',
            component: TodoDetail
        },
        {
            path: '/customer',
            component: Customer
        }

    ]
})

