<template>

<div class="fondo">

   <section class="principal">
    <div>
      <logo />
      <h1 class="title">
        Dux Academy
      </h1>
      <!-- <h2 class="subtitle">
        primer proyecto del curso con nuxt
      </h2>
      <input type="text" placeholder="Escribir parametro" class="form-control" v-model="id"> -->
      <div class="links">
        <b-container >
          <b-row>
            <b-col>
               <nuxt-link to="/inicio" class="button--green"> Conócenos</nuxt-link>
               <div class="banner_img">
                  <img src="../assets/1.png" alt="">
               </div>
            </b-col>
            <b-col>
              <nuxt-link to="/eventos" class="button--green">Eventos</nuxt-link>
              <div class="banner_img">
                  <img src="../assets/2.png" alt="">
              </div>
            </b-col>
            <b-col>
               <nuxt-link to="/biblioteca" class="button--green">Biblioteca Dux</nuxt-link>
              <div class="banner_img">
                  <img src="../assets/3.png" alt="">
              </div>
            </b-col>
            <b-col>
              <nuxt-link to="/noticias" class="button--green">Noticias</nuxt-link>
              <div class="banner_img">
                  <img src="../assets/4.png" alt="">
              </div>
            </b-col>
            <b-col>
              <nuxt-link to="/tips" class="button--green">Tips</nuxt-link>
              <div class="banner_img">
                  <img src="../assets/5.png" alt="">
              </div>
            </b-col>
          </b-row>
        </b-container>

        <!-- <nuxt-link to="/contactos/123"  class="button--grey">Contacto parametro</nuxt-link>
        <button class="btn btn-success" @click="enviarParametro(123)" >Enviar parametro</button> -->
      </div>
    </div>
  </section>
</div>

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
/* .fondo{
    background-image: url('');
} */

/*Estilos de la Pagina Principal */
.principal {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

}
/* Estilos del titulo Principal*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: #ffffff;
  letter-spacing: 1px;
}

/* Estilos de Animacion para los iconos de Los Botones*/
.banner_img{
    padding-top: 35px;
    animation: movimiento 2.5s ;
}
.banner_img:hover{
    animation: movimiento 1s linear infinite;
}

.banner_img img{
    width: 100px;
    display: block;
}
.links {
  padding-top: 35px;
}

/*Estilos de los Botones de la Pagina Principal */


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #000000;
  text-decoration: none;
  padding: 5px 15px;
  background-color: #fff;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

/*Animacion de la variable Movimiento aplicado en el banner principal */
@keyframes movimiento{
    0%{
        transform: translateY(30px);
    }
    50%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(0);
    }
}
</style>
