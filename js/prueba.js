//Componente que crea un cronometro al cual se le puede pasar el tiempo de ejecución y el nombre del mismo
Vue.component('cronometro-component',{
    template: `
    <div>
      <div :class=nombre :data-timer=tiempo style="width: 1000px; height: 250px;"></div>
      <button @click="iniciarCronometro" >INICAR </button>
      <button @click="pararCronometro">Stop Timer</button>
    </div> `,
    data: function () {
      return {
 
      }
    },
    props: ['tiempo', 'nombre'],
    methods:{
      iniciarCronometro: function(){
          $("."+this.nombre).TimeCircles().start();
      },
      pararCronometro: function(){
          $("."+this.nombre).TimeCircles().stop();
      }
    },
    mounted: function(){
      $("."+this.nombre).TimeCircles({ 
        "animation": "smooth",
        "bg_width": 0.3,
        "fg_width": 0.023333333333333334,
        "circle_bg_color": "#90989F",
        "circle_bg_color": "#099", 
        "count_past_zero": false, 
        "start": false, 
        "time": { 
            "Days": { "show": false }, 
            "Hours": { "show": false }, 
            "Minutes": { "show": false }, 
            "Seconds": {
                "text": "Segundos",
                "color": "#40484F",
                "show": true
            }
        }
    });
    }
  })

  //como utilizar los datos de props dentro de cualquier logica del componente
    //https://forum.vuejs.org/t/update-data-when-prop-changes-data-derived-from-prop/1517/

    //Como utilizar eventos para comunicarse directamente con el componente
    //http://www.jaimeolmo.com/2017/01/componentes-vue-js-espanol/
  var app = new Vue({
      el: '#main', 
      
      
  
  
    });