
var app = new Vue({
    el: '#main',
    data: {
      respuestas:[{'': ''},{'': ''},{'': ''},{'': ''}],
      pregunta:[],
      indice: 10,
      respCorrecta:false,
      desactivo:true

    },
    methods: {
      play: function(event) {
        this.$refs.audioElm.play();
      },

      cargarPregunta: function(num){
        this.pregunta=nivel1[num];
        this.respuestas=nivel1[num].respuestas;
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

      marcarRespuesta: function(num, event){
        respMarcada = 'respuesta'+(num+1);
        numIndice=num+1;
        respuesta1 = document.getElementById('respuesta1');
        respuesta2 = document.getElementById('respuesta2');
        respuesta3 = document.getElementById('respuesta3');
        respuesta4 = document.getElementById('respuesta4');
        btnRevelar = document.getElementById('btnRevelarRespuesta');

        // alert(Math.floor( Math.random() * (10 - 1)) + 1); Sacar Numeros enteros aleatorios

  
        if(document.getElementById(respMarcada).classList.contains('activo')){
          document.getElementById(respMarcada).classList.remove('activo');
          btnRevelar.disabled = true;
          numIndice=0;
        }else{
          btnRevelar.disabled = false;
        }
        switch((numIndice)){
          case 1:
          respuesta1.classList.add('activo');
          respuesta2.classList.remove('activo');
          respuesta3.classList.remove('activo');
          respuesta4.classList.remove('activo');
          break;
          case 2:
          respuesta2.classList.add('activo');
          respuesta1.classList.remove('activo');
          respuesta3.classList.remove('activo');
          respuesta4.classList.remove('activo');

          break;
          case 3:
          respuesta3.classList.add('activo');
          respuesta1.classList.remove('activo');
          respuesta2.classList.remove('activo');
          respuesta4.classList.remove('activo');

          break;
          case 4:
          respuesta4.classList.add('activo');
          respuesta1.classList.remove('activo');
          respuesta2.classList.remove('activo');
          respuesta3.classList.remove('activo');
          break;
        }
      }
    },
   
    mounted: function () {
      this.cargarPregunta(2);
    }  
  
  });

//  function load() {
//     var mydata = JSON.parse(data);
//     alert(mydata[0].id);
//     alert(mydata[0].question);
//   };

  