
var app = new Vue({
    el: '#main',
    methods: {
      play: function(event) {
        this.$refs.audioElm.play();
      },

     


    },
   
    
  
  });

 function load() {
    var mydata = JSON.parse(data);
    alert(mydata[0].id);
    alert(mydata[0].question);
  };

  