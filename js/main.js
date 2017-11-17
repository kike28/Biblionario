
var app = new Vue({
    el: '#main',
    data: {
      respuestas:[{'': ''},{'': ''},{'': ''},{'': ''}],
      pregunta:[],
      indice: 10,
      respCorrecta:false,
      desactivo:true,
      puntaje:0,
      nivel: 0,

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

      cargarPuntaje: function(){
        if(this.puntaje < 30){
          this.puntaje += 10;
          
        }else if(this.puntaje >= 50 && this.puntaje <= 3200 ){
          this.puntaje += this.puntaje;
        }else if(this.puntaje >= 12500){
          this.puntaje += this.puntaje;
        }else if(this.puntaje == 6400){
          this.puntaje += 6100;
        }else if(this.puntaje == 30){
          this.puntaje += 20;
        }
        this.nivel += 1;

        nivelPuntaje = 'n'+ this.nivel;
        document.getElementById(nivelPuntaje).classList.add('active'); 
        

      },

      seleccionRespuesta: function(resp, event){
        respuestaMarcada='tarjeta'+(resp+1);
        alert(respuestaMarcada);
        if (document.getElementById(respuestaMarcada).classList.contains('cursor')){
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

        }
        
      },

      revelarRespuesta: function(){
        
          if(this.respCorrecta == true){
            // alert(`FELICIDADES TU RESPUESTA ${this.pregunta.respuestas[this.indice].respuesta.toUpperCase()} ES CORRECTA`);
            this.cargarPuntaje();
            $('#modalRespuestaCorrecta').modal('open');
  
          }else{
            // alert(`LO LAMENTO TE EQUIVOCASTE DEBES LEER MAS BIBLIA`);
            
            // Clonamos el objeto para que sea uno nuevo Utilizando el truco de JSON Tranformado el bjeto anterior en cadena y luego lo reconvertimos en objeto
            nivel1 = JSON.parse(JSON.stringify(backupData));
            $('#modalRespuestaIncorrecta').modal('open');
            while(this.nivel > 0){
              nivelPuntaje = 'n'+ this.nivel;
              // alert(nivelPuntaje);
              document.getElementById(nivelPuntaje).classList.remove('active');
              this.nivel-=1;
              nivelPuntaje='';
            }
            // this.nivel=0;
            this.puntaje =0;


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
        endingTop: '15%', // Finalizando el atributo de estilo superior
        // ready: function(modal, trigger) { // Devolución de llamada para Modal abierto. Parámetros modales y de disparo disponibles.
        //   alert("Ready");
        //   console.log(modal, trigger);
        // },
        // complete: function() { 
        // } // Devolución de llamada para cierre modal
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

  