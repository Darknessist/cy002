import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import {Button,Radio,Container,Main,Header,Aside,
  Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,
  DropdownMenu,Row,Col,Card,Table,TableColumn,
  Breadcrumb,BreadcrumbItem,Tag,Form,FormItem,
  Input,Select,Switch,DatePicker,Option,Dialog,
  Pagination,MessageBox,Message,
  } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router'
import './assets/less/index.less'
import store from '../store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.prototype.$http=http;
Vue.prototype.$confirm=MessageBox.confirm
Vue.prototype.$messsage=Message
router.beforeEach((to,form,next)=>{
  store.commit('getToken')
  const token=store.state.user.token
  if(!token&&to.name!=='login'){
    next({name:'login'})
  }else if(token&&to.name==='login'){
next({name:'home'})
  }
  else{
    next()
  }
})


Vue.prototype.$http=http
new Vue({
  store,
  router,
  render: h => h(App),
   created() {
     store.commit('addMenu', router)
   }
}).$mount('#app')
