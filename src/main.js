
import Vue from 'vue'
import App from './App'
//importing the Vuetify library for designing components
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

//importing AOS for animation of component
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  created() {
    AOS.init({ disable: "phone" });
  },
  components: { App },
  template: '<App/>'
})
