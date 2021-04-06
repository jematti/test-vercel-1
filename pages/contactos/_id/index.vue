<template>
    <div>
        <h1>Ruta dinamica de contactos {{$route.params.id}} </h1>
        <nuxt-link to="/">Inicio</nuxt-link>
    </div>
</template>

<script>
export default {
    validate(item){
        //return item.params.id == 1
        // expresiones regulares 
        //return /^\d+$/.test(item.params.id) // solo numeros
        //return /^\d{4}$/.test(item.params.id) // solo 4 numeros
        return /^[A-Za-z]+$/.test(item.params.id) // solo letras
    },
    layout:'contactos'
}
</script>