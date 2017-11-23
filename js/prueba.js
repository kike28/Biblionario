Vue.component('cronometro-component',{
    template: `
    <div>
      <div class="CountDownTimer" v-bind:data-timer="counter" style="width: 1000px; height: 250px;">{{ counter }}</div>
      <button @click="iniciar">Start Timer</button>
      <button @click="parar">Stop Timer</button>
    </div> `,
  
    data: function () {
      return {
        counter: 5
      }
    },
    // props: ['tiempo'],
  
    methods:{
  
      iniciar: function(){
          $(".CountDownTimer").TimeCircles().start();
    
      
      },
  
      parar: function(){
  
        
          $(".CountDownTimer").TimeCircles().stop();
  
  
      }
  
    },
    
    
    mounted: function(){
      $(".CountDownTimer").TimeCircles({ 
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
  
  
  
  var app = new Vue({
      el: '#main', 
      
      
  
  
    });