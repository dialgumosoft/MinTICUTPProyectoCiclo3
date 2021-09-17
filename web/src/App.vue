<template>
  <div id="app">
    
    <proyectoc-3 msg="Mercados Campesinos"/>
    
  </div>
</template>

<script>
import proyectoc3 from './components/proyectoc3'

export default {
  name: 'App',
  components: {
    proyectoc3
   
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app .contenido{
    width: 70%;
    margin: auto;
}

#carouselExampleCaptions img{
    width: 700%;
    height: 300px;
    margin-top: 10px;
    margin-bottom: 40px;
}

#row img{
    width: 90%;
    height: 150px;
}

#pagination{
    margin-top: 30px;
    margin-bottom: 40px;
    align-content: center;
}

#footer{
    height: 30px;
    background: black;
    font-size: 14px;
    color: white;
    text-align: center;
    margin-bottom: 15px;
}
</style>
