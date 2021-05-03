<template>
  <div class="contenido">
    <Cabecera titulo="primer-nuxt" color="navbar navbar-light " />
    <nuxt/>
  </div>
</template>

<script>
import Cabecera from '@/components/Cabecera.vue'

export default {
  components:{
    Cabecera
  }
}
</script>

<style>

/*Estilos Predeterminados para la PAGINA */
/* .contenido {
  background: linear-gradient(70deg, rgb(45, 206, 139),rgb(193, 242, 211));
} */
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
    /* background: linear-gradient(70deg, rgb(45, 206, 139),rgb(193, 242, 211)); */
}
</style>
