// $(document).ready(function(){
//   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
//   $('.modal').modal();

//   $('.modal').modal({
//     dismissible: true, // Modal can be dismissed by clicking outside of the modal
//     opacity: .5, // Opacity of modal background
//     inDuration: 300, // Transition in duration
//     outDuration: 200, // Transition out duration
//     startingTop: '4%', // Starting top style attribute
//     endingTop: '10%', // Ending top style attribute
//     ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
//       alert("Ready");
//       console.log(modal, trigger);
//     }
// });

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

      //Metodo que se encarga de Cargar las preguntas aleatorimente y eliminar del arreglo las que ya estan utilizadas
      
      cargarPregunta: function(){

        aleatorio = Math.floor( Math.random() * (nivel1.length - 1)) + 1;
        // alert(aleatorio);
        this.pregunta=nivel1[aleatorio];
        this.respuestas=nivel1[aleatorio].respuestas;

        nivel1.splice(aleatorio,1);
      },

      // cargarPuntaje: function

      seleccionRespuesta: function(resp, event){
        
        if(this.pregunta.respuestas[resp].correcta == true){
          this.respCorrecta = true;
          // this.indice = resp;
          // this.marcarRespuesta(resp);
        } else{
          this.respCorrecta = false
          // this.indice = resp;
          // this.marcarRespuesta(resp);
        }
        this.indice = resp;
        this.marcarRespuesta(resp);
      },

      revelarRespuesta: function(){
        
          if(this.respCorrecta == true){
            // alert(`FELICIDADES TU RESPUESTA ${this.pregunta.respuestas[this.indice].respuesta.toUpperCase()} ES CORRECTA`);
            $('#modalRespuestaCorrecta').modal('open');
  
          }else{
            // alert(`LO LAMENTO TE EQUIVOCASTE DEBES LEER MAS BIBLIA`);
            $('#modalRespuestaIncorrecta').modal('open');
          }
          this.marcarRespuesta(this.indice); // La respuesta esta marcada con este metodo la reset y deja como la primera
          this.cargarPregunta(); 

        
      },

      marcarRespuesta: function(num, event){
        respMarcada = 'respuesta'+(num+1);
        numIndice=num+1;
        respuesta1 = document.getElementById('respuesta1');
        respuesta2 = document.getElementById('respuesta2');
        respuesta3 = document.getElementById('respuesta3');
        respuesta4 = document.getElementById('respuesta4');
        btnRevelar = document.getElementById('btnRevelarRespuesta');

        

  
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
      },
    },

    
   
    mounted: function () {

      //cargando objeto de pantalla modal
      $('.modal').modal({
        dismissible: false, // Modal se puede descartar haciendo clic fuera del modal
        opacity: .6, // Opacidad de fondo modal
        inDuration: 500, // Transición en duración
        outDuration: 300, // Duración de la transición
        startingTop: '50%', // Inicio de atributo de estilo superior
        endingTop: '30%', // Finalizando el atributo de estilo superior
        // ready: function(modal, trigger) { // Devolución de llamada para Modal abierto. Parámetros modales y de disparo disponibles.
        //   alert("Ready");
        //   console.log(modal, trigger);
        // },
        // complete: function() { alert('Closed'); } // Devolución de llamada para cierre modal
      }
    ); 

    //Cargando Preguntas aleatorias al inicio del juego
      this.cargarPregunta();
    }  
  
  });

//  function load() {
//     var mydata = JSON.parse(data);
//     alert(mydata[0].id);
//     alert(mydata[0].question);
//   };

  