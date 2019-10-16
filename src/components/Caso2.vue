<template>
  <div class="tabla">
    <table>
      <tbody>
        <tr v-for="(row, rowindex) in partido" :key="rowindex">
          <td v-for="(col, colindex) in row" :key="rowindex-colindex">
            <div v-if="col % 2 == 0">
              <button class="pintar">{{ col }}</button>
            </div>
            <div v-else>
              <button class="sinpintar">{{ col }}</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'tabla',
  data () {
    return {
      tabla: [],
      partido: []
    }
  },
  created(){
    this.calcularTablas(),
    this.convertir()
  },
  methods:{
    calcularTablas(){
      var resultado;
    
        for(var i=0; i<=10; i++){
          var j=1;
          
          for(j=0; j<=10; j++){
            resultado = i * j;
            this.tabla.push(resultado) 
          }
        }
    },
    convertir(){   
      while(this.tabla.length){
        this.partido.push(this.tabla.splice(0,11));
      }
    }
  }
}
</script>

<style scoped>
.tabla{
  box-sizing: border-box;
  margin: 0 auto;
}

table{
  align-content: center;
  border-collapse: collapse;
  width: 100%;
}

td{
  text-align: center;
  vertical-align: center;
}

.pintar{
  border: none;
  background-color: #008CBA;
  color: black;
  font-weight: bold;
}

.sinpintar{
  border: none;
  background-color: white;
  color: black;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  td{
    height: 35px; 
    width: 35px;
  }

  .pintar{
    height: 35px; 
    width: 35px;
  }

  .sinpintar{
    height: 35px; 
    width: 35px;
  }
}

@media only screen and (min-width: 600px) {
  td{
    height: 40px; 
    width: 40px;
  }

  .pintar{
    height: 40px; 
    width: 40px;
  }

  .sinpintar{
    height: 40px; 
    width: 40px;
  }
}

@media only screen and (min-width: 768px) {
    .tabla{
        max-width: 700px;
    }
    td{
        height: 50px; 
        width: 50px;
    }

  .pintar{
    height: 50px; 
    width: 50px;
  }

  .sinpintar{
    height: 50px; 
    width: 50px;
  }
} 

@media only screen and (min-width: 992px) {
  .tabla{
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 700px;
  }

  td{
    height: 50px; 
    width: 50px;
  }

  .pintar{
    height: 50px; 
    width: 50px;
  }

  .sinpintar{
    height: 50px; 
    width: 50px;
  }
} 
</style>