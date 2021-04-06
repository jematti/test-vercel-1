<template>
 <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">{{titulo}}</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>


      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
           <b-nav-item href="#">Conocenos</b-nav-item>
        </b-navbar-nav>

        <b-nav-item-dropdown text="Conócenos" right>
          <b-dropdown-item href="#">Nosotros</b-dropdown-item>
          <b-dropdown-item href="#">Visión</b-dropdown-item>
          <b-dropdown-item href="#">Mision</b-dropdown-item>
          <b-dropdown-item href="#">Equipo</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Login</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
