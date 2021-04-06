<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        Dux Academy
      </h1>
      <h2 class="subtitle">
        primer proyecto del curso con nuxt
      </h2>
      <input type="text" placeholder="Escribir parametro" class="form-control" v-model="id">
      <div class="links">
        <nuxt-link to="/inicio" class="button--green">Conócenos</nuxt-link>
        <nuxt-link to="/eventos" class="button--green">Eventos</nuxt-link>
        <nuxt-link to="/biblioteca" class="button--green">Biblioteca Dux</nuxt-link>
        <nuxt-link to="/noticias" class="button--green">Noticias</nuxt-link>
        <nuxt-link to="/tips" class="button--green">Tips</nuxt-link>

        <nuxt-link to="/contactos/123"  class="button--grey">Contacto parametro</nuxt-link>
        <button class="btn btn-success" @click="enviarParametro(123)" >Enviar parametro</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data(){
    return {
      id:''
    }
  },
  methods:{
    enviarParametro(item){
      this.$router.push('/contactos/' + item + ' ' + this.id)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
