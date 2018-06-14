// HEADER
Vue.component('vue-header-child', {
  props: ['text'],
  template: '<div class="wrap"><div class="nav-toggle" onclick="openNav()"><span></span></div><h1><a href="http://floridaenergy.ufl.edu/"></a></h1></div>'
})

var vueHeaderFunc = new Vue({
  el: '#vue-header-parent',
  data: { }
})

// NAV

Vue.component('vue-nav-child', {
  props: ['text'],
  template: '<div class="inside-nav"><ul><li><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a></li><li><a href="index.html">Home</a></li><li><a href="education.html">Opportunities</a></li><li><a href="outreach.html">Outreach</a></li></ul></div>'
})

var vueNavFunc = new Vue({
  el: '#mySidenav',
  data: { }
})

// FOOTER
Vue.component('vue-footer-child', {
  props: ['text'],
  template: '<article class="wrap"><div class="text"><p>Copyright © 2008-2015 Florida Energy Systems Consortium.</p><a href="http://floridaenergy.ufl.edu/contact-us/">Contact Us</a><a href="http://floridaenergy.ufl.edu/sitemap/">Site Map</a><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=FESC%20Site" data-size="large">Tweet</a></div></article>'
})

var vueFooterFunc = new Vue({
  el: '#vue-footer-parent',
  data: {  }
})