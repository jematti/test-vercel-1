<template>
    <b-container  class="contenido">
        <b-row>
         <b-col>
           <div>
               <b-img src="../../assets/3.png"  fluid-grow alt="Center image"></b-img>
          </div>
         </b-col>
         <b-col>
                    <b-card class="mt-5" header="Registrate con: " >
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label="Correo Electronico:"
                label-for="input-1"
                description="Debe ingresar un correo valido"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="Ingresa email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Usuario:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Ingresa Usuario"
                  required
                ></b-form-input>
              </b-form-group>


               <b-form @submit.stop.prevent label="password:" >
                <label for="text-password">Password</label>
                <b-form-input
                type="password"
                id="text-password"
                aria-describedby="password-help-block"
                placeholder="Ingresa contraseña"
                required
                ></b-form-input>
                <!-- <b-form-text id="password-help-block">
                  Your password must be 8-20 characters long, contain letters and numbers, and must not
                  contain spaces, special characters, or emoji.
                </b-form-text> -->
              </b-form>
              <br>


              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
         </b-card>
         </b-col>
      </b-row>
      <br>
    </b-container>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
