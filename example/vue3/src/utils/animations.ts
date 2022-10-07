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
    'fadeInUpBig',
    'fadeInTopLeft',
    'fadeInTopRight',
    'fadeInBottomLeft',
    'fadeInBottomRight',
  ],

  // 'Fade Exits': [
  //   'fadeOut',
  //   'fadeOutDown',
  //   'fadeOutDownBig',
  //   'fadeOutLeft',
  //   'fadeOutLeftBig',
  //   'fadeOutRight',
  //   'fadeOutRightBig',
  //   'fadeOutUp',
  //   'fadeOutUpBig',
  //   'fadeOutTopLeft',
  //   'fadeOutTopRight',
  //   'fadeOutBottomRight',
  //   'fadeOutBottomLeft',
  // ],

  // 'Flippers': ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'],

  // 'LightSpeed': ['lightSpeedInRight', 'lightSpeedInLeft', 'lightSpeedOutRight', 'lightSpeedOutLeft'],

  // 'Rotating Entrances': [
  //   'rotateIn',
  //   'rotateInDownLeft',
  //   'rotateInDownRight',
  //   'rotateInUpLeft',
  //   'rotateInUpRight',
  // ],

  // 'Rotating Exits': [
  //   'rotateOut',
  //   'rotateOutDownLeft',
  //   'rotateOutDownRight',
  //   'rotateOutUpLeft',
  //   'rotateOutUpRight',
  // ],

  // 'Specials': ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'],

  // 'Zooming Entrances': ['zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'],

  // 'Zooming Exits': ['zoomOut', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight', 'zoomOutUp'],

  // 'Sliding Entrances': ['slideInDown', 'slideInLeft', 'slideInRight', 'slideInUp'],

  // 'Sliding Exits': ['slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'],
}

export default Animations
