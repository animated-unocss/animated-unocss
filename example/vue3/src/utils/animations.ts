class Item {
  label:string
  value:string

  constructor(label: string,value: string) {
    this.label = label;
    this.value = value;
  }
}

const Animations: Record<string, Array<Item>> = {

  'Attention Seekers': [
    {label:'bounce',value:'bounce'},
    {label:'flash',value:'flash'},
    {label:'pulse',value:'pulse'},
    {label:'rubberBand',value:'rubber-band'},
    {label:'shakeX',value:'shake-x'},
    {label:'shakeY',value:'shake-y'},
    {label:'headShake',value:'head-shake'},
    {label:'swing',value:'swing'},
    {label:'tada',value:'tada'},
    {label:'wobble',value:'wobble'},
    {label:'jello',value:'jello'},
    {label:'heartBeat',value:'heart-beat'},
  ],

  'Back Entrances': [
    {label:'backInDown',value:'back-in-down'},
    {label:'backInLeft',value:'back-in-left'},
    {label:'backInRight',value:'back-in-right'},
    {label:'backInUp',value:'back-in-up'}
  ],

  'Back Exits': [
    {label:'backOutDown',value:'back-out-down'},
    {label:'backOutLeft',value:'back-out-left'},
    {label:'backOutRight',value:'back-out-right'},
    {label:'backOutUp',value:'back-out-up'}
  ],

  'Bouncing Entrances': [
    {label:'bounceIn',value:'bounce-in'},
    {label:'bounceInDown',value:'bounce-in-down'},
    {label:'bounceInLeft',value:'bounce-in-left'},
    {label:'bounceInRight',value:'bounce-in-right'},
    {label:'bounceInUp',value:'bounce-in-up'}
  ],

  'Bouncing Exits': [
    {label:'bounceOut',value:'bounce-out'},
    {label:'bounceOutDown',value:'bounce-out-down'},
    {label:'bounceOutLeft',value:'bounce-out-left'},
    {label:'bounceOutRight',value:'bounce-out-right'},
    {label:'bounceOutUp',value:'bounce-out-up'},
  ],

  'Fade Entrances': [
    {label:'fadeIn',value:'fade-in'},
    {label:'fadeInDown',value:'fade-in-down'},
    {label:'fadeInDownBig',value:'fade-in-down-big'},
    {label:'fadeInLeft',value:'fade-in-left'},
    {label:'fadeInLeftBig',value:'fade-in-left-big'},
    {label:'fadeInRight',value:'fade-in-right'},
    {label:'fadeInRightBig',value:'fade-in-right-big'},
    {label:'fadeInUp',value:'fade-in-up'},
    {label:'fadeInUpBig',value:'fade-in-up-big'},
    {label:'fadeInTopLeft',value:'fade-in-top-left'},
    {label:'fadeInTopRight',value:'fade-in-top-right'},
    {label:'fadeInBottomLeft',value:'fade-in-bottom-left'},
    {label:'fadeInBottomRight',value:'fade-in-bottom-right'},
  ],

  'Fade Exits': [
    {label:'fadeOut',value:'fade-out'},
    {label:'fadeOutDown',value:'fade-out-down'},
    {label:'fadeOutDownBig',value:'fade-out-down-big'},
    {label:'fadeOutLeft',value:'fade-out-left'},
    {label:'fadeOutLeftBig',value:'fade-out-left-big'},
    {label:'fadeOutRight',value:'fade-out-right'},
    {label:'fadeOutRightBig',value:'fade-out-right-big'},
    {label:'fadeOutUp',value:'fade-out-up'},
    {label:'fadeOutUpBig',value:'fade-out-up-big'},
    {label:'fadeOutTopLeft',value:'fade-out-top-left'},
    {label:'fadeOutTopRight',value:'fade-out-top-right'},
    {label:'fadeOutBottomRight',value:'fade-out-bottom-right'},
    {label:'fadeOutBottomLeft',value:'fade-out-bottom-left'},
  ],

  'Flippers': [
    {label:'flip',value:'flip'},
    {label:'flipInX',value:'flip-in-x'},
    {label:'flipInY',value:'flip-in-y'},
    {label:'flipOutX',value:'flip-out-x'},
    {label:'flipOutY',value:'flip-out-y'}
  ],

  'LightSpeed': [
    {label:'lightSpeedInRight',value:'light-speed-in-right'},
    {label:'lightSpeedInLeft',value:'light-speed-in-left'},
    {label:'lightSpeedOutRight',value:'light-speed-out-right'},
    {label:'lightSpeedOutLeft',value:'light-speed-out-left'}
  ],

  'Rotating Entrances': [
    {label:'rotateIn',value:'rotate-in'},
    {label:'rotateInDownLeft',value:'rotate-in-down-left'},
    {label:'rotateInDownRight',value:'rotate-in-down-right'},
    {label:'rotateInUpLeft',value:'rotate-in-up-left'},
    {label:'rotateInUpRight',value:'rotate-in-up-right'},
  ],

  'Rotating Exits': [
    {label:'rotateOut',value:'rotate-out'},
    {label:'rotateOutDownLeft',value:'rotate-out-down-left'},
    {label:'rotateOutDownRight',value:'rotate-out-down-right'},
    {label:'rotateOutUpLeft',value:'rotate-out-up-left'},
    {label:'rotateOutUpRight',value:'rotate-out-up-right'},
  ],

  'Specials': [
    {label:'hinge',value:'hinge'},
    {label:'jackInTheBox',value:'jack-in-the-box'},
    {label:'rollIn',value:'roll-in'},
    {label:'rollOut',value:'roll-out'}
  ],

  'Zooming Entrances': [
    {label:'zoomIn',value:'zoom-in'},
    {label:'zoomInDown',value:'zoom-in-down'},
    {label:'zoomInLeft',value:'zoom-in-left'},
    {label:'zoomInRight',value:'zoom-in-right'},
    {label:'zoomInUp',value:'zoom-in-up'}
  ],

  'Zooming Exits': [
    {label:'zoomOut',value:'zoom-out'},
    {label:'zoomOutDown',value:'zoom-out-down'},
    {label:'zoomOutLeft',value:'zoom-out-left'},
    {label:'zoomOutRight',value:'zoom-out-right'},
    {label:'zoomOutUp',value:'zoom-out-up'}
  ],

  'Sliding Entrances': [
    {label:'slideInDown',value:'slide-in-down'},
    {label:'slideInLeft',value:'slide-in-left'},
    {label:'slideInRight',value:'slide-in-right'},
    {label:'slideInUp',value:'slide-in-up'}
  ],

  'Sliding Exits': [
    {label:'slideOutDown',value:'slide-out-down'},
    {label:'slideOutLeft',value:'slide-out-left'},
    {label:'slideOutRight',value:'slide-out-right'},
    {label:'slideOutUp',value:'slide-out-up'}
  ],
}

export default Animations
