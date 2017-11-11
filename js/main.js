
var app = new Vue({
    el: '#main',
    data: {
      respuestas:[{'': ''},{'': ''},{'': ''},{'': ''}],
      pregunta:[],
      indice: 0,
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
          // alert(`La respuesta es Correcta ${this.respCorrecta}`);
        } else{
          this.respCorrecta = false
          // alert(`Te equivocaste necesitas Leer mas Biblia ${this.respCorrecta}`);

        }
        

      },

      revelarRespuesta: function(){
        if(this.respCorrecta == true){
          alert(`FELICIDADES TU RESPUESTA ${this.pregunta.respuestas[this.indice].respuesta} ES CORRECTA`)
          
        }else{
          alert(`LO LAMENTO TE EQUIVOCASTE DEBES LEER MAS BIBLIA`)

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

  