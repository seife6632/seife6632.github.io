// Override class name to animate.css
Vue.transition('fade', {
  enterClass:"fadeInRight",
  leaveClass:"fadeOutLeft"
});

new Vue({
  el:'body',
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
  }
});
