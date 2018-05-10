import Vue from 'vue'
import Router from 'vue-router'
const NotFoundComponent = resolve => require(['@/pages/404'], resolve)
const Main = resolve => require(['@/pages/Main'], resolve)
const Login = resolve => require(['@/pages/Login'], resolve)
const Register = resolve => require(['@/pages/Register'], resolve)
const Reset = resolve => require(['@/pages/Reset'], resolve)
const News = resolve => require(['@/pages/News'], resolve)
const Notices = resolve => require(['@/pages/Notices'], resolve)
const Deal = resolve => require(['@/pages/Deal'], resolve)
const UserCenter = resolve => require(['@/pages/UserCenter'], resolve)
const Pandect = resolve => require(['@/pages/finance/Pandect'], resolve)
const CapitalAccount = resolve => require(['@/pages/finance/CapitalAccount'], resolve)
const CarbonAccount = resolve => require(['@/pages/finance/CarbonAccount'], resolve)
const Order = resolve => require(['@/pages/deal/Order'], resolve)
const Center = resolve => require(['@/pages/security/Center'], resolve)
const Company = resolve => require(['@/pages/security/Company'], resolve)
const Email = resolve => require(['@/pages/security/Email'], resolve)
const Phone = resolve => require(['@/pages/security/Phone'], resolve)
const Identity = resolve => require(['@/pages/security/Identity'], resolve)
const Google = resolve => require(['@/pages/security/Google'], resolve)
const LoginPwd = resolve => require(['@/pages/security/LoginPwd'], resolve)
const CapitalPwd = resolve => require(['@/pages/security/CapitalPwd'], resolve)
const Message = resolve => require(['@/pages/message/message'], resolve)
const Other = resolve => require(['@/pages/Other'], resolve)
const Help = resolve => require(['@/pages/other/Help'], resolve)
const Lawer = resolve => require(['@/pages/other/Lawer'], resolve)
const AccountGuide = resolve => require(['@/pages/other/AccountGuide'], resolve)
const DealGuide = resolve => require(['@/pages/other/DealGuide'], resolve)
const Authentication = resolve => require(['@/pages/other/Authentication'], resolve)
const Recharge = resolve => require(['@/pages/other/Recharge'], resolve)
const Illustrate = resolve => require(['@/pages/other/Illustrate'], resolve)

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: [
      { path: '*',
        component: NotFoundComponent
      },
      {
        path: '/',
        component: Main
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/register',
        component: Register
      },
      {
        path: '/reset',
        component: Reset
      },
      {
        path: '/news',
        component: News
      },
      {
        path: '/news/:id',
        component: News
      },
      {
        path: '/notices',
        component: Notices
      },
      {
        path: '/notices/:id',
        component: Notices
      },
      {
        path: '/deal',
        component: Deal
      },
      {
        path: '/usercenter',
        component: UserCenter,
        children: [
          {
            path: '/finance/pandect',
            component: Pandect
          },
          {
            path: '/finance/capital',
            component: CapitalAccount
          },
          {
            path: '/finance/carbon',
            component: CarbonAccount
          },
          {
            path: '/deal/order',
            component: Order
          },
          {
            path: '/security/center',
            component: Center
          },
          {
            path: '/security/center/company',
            component: Company
          },
          {
            path: '/security/center/email',
            component: Email
          },
          {
            path: '/security/center/phone',
            component: Phone
          },
          {
            path: '/security/identity',
            component: Identity
          },
          {
            path: '/security/google',
            component: Google
          },
          {
            path: '/security/loginpwd',
            component: LoginPwd
          },
          {
            path: '/security/capitalpwd',
            component: CapitalPwd
          },
          {
            path: '/message',
            component: Message
          }
        ]
      },
      {
        path: '/other',
        component: Other,
        children: [
          {
            path: 'help',
            component: Help
          },
          {
            path: 'lawer',
            component: Lawer
          },
          {
            path: 'accountGuide',
            component: AccountGuide
          },
          {
            path: 'dealGuide',
            component: DealGuide
          },
          {
            path: 'authentication',
            component: Authentication
          },
          {
            path: 'recharge',
            component: Recharge
          },
          {
            path: 'illustrate',
            component: Illustrate
          }
        ]
      }
    ]
  })
}
