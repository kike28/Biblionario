
var app = new Vue({
    el: '#main',
    data: {
      respuestas:[{'': ''},{'': ''},{'': ''},{'': ''}],
      pregunta:[],
      indice: 10,
      respCorrecta:false

    },
    methods: {
      play: function(event) {
        this.$refs.audioElm.play();
      },

      cargarPregunta: function(num){
        this.pregunta=nivel1[num]
        this.respuestas=nivel1[num].respuestas
      },

      seleccionRespuesta: function(resp){
        
        if(this.pregunta.respuestas[resp].correcta == true){
          this.respCorrecta = true;
          this.indice = resp;
          this.marcarRespuesta(resp);
          // alert(`La respuesta es Correcta ${this.respCorrecta}`);
        } else{
          this.respCorrecta = false
          // alert(`Te equivocaste necesitas Leer mas Biblia ${this.respCorrecta}`);
          this.indice = resp;
          this.marcarRespuesta(resp);
        }
        

      },

      revelarRespuesta: function(){
        
          if(this.respCorrecta == true){
            alert(`FELICIDADES TU RESPUESTA ${this.pregunta.respuestas[this.indice].respuesta} ES CORRECTA`)
            
          }else{
            alert(`LO LAMENTO TE EQUIVOCASTE DEBES LEER MAS BIBLIA`)
  
          }

        
        


      },

      marcarRespuesta: function(num){
        if(this.indice < 4){
          document.getElementById('btnRevelarRespuesta').classList.remove('disabled');
          
        }else{
          document.getElementById('btnRevelarRespuesta').classList.add('disabled');
        }
          
        document.getElementById('respuesta1').classList.remove('activo');
        document.getElementById('respuesta2').classList.remove('activo');
        document.getElementById('respuesta3').classList.remove('activo');
        document.getElementById('respuesta4').classList.remove('activo');
        switch((num+1)){
          case 1:
          document.getElementById('respuesta1').classList.add('activo');
          break;
          case 2:
          document.getElementById('respuesta2').classList.add('activo');
          break;
          case 3:
          document.getElementById('respuesta3').classList.add('activo');
          break;
          case 4:
          document.getElementById('respuesta4').classList.add('activo');
          break;

        }
 
      }

     


    },
   
    mounted: function () {
      this.cargarPregunta(0)
    }  
  
  });

//  function load() {
//     var mydata = JSON.parse(data);
//     alert(mydata[0].id);
//     alert(mydata[0].question);
//   };

  