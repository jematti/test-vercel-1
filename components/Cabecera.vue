<template>
 <div>
  <b-navbar>
    <b-navbar-brand to="/">DUX</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-navbar-nav>
           <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav> -->

        <b-nav-item-dropdown text="Conócenos">
          <b-dropdown-item to="/conocenos/nosotros">Nosotros</b-dropdown-item>
          <b-dropdown-item to="/conocenos/mision-vision">Mision - Visión</b-dropdown-item>
          <b-dropdown-item to="/conocenos/equipo">Equipo</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Acceder</em>
          </template>
          <b-dropdown-item to="/login">Ingresar</b-dropdown-item>
          <b-dropdown-item to="/"> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:'Cabecera',
    props:['titulo','color']
}
</script>
<style >
/*Estilos en la Cabecera de La PAGINA */
.cabecera {
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 1px;
  height: 50px;
}

</style>

