<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-Ligth mt-4 p-4">
          
          <form action="" method="" class="row g-3" @submit.prevent="login">
            <img src="../../public/Logo-Munchique.png" alt="" />
            <div class="col-12">
              <label>Email</label>
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="Username"
                v-model="datos.email"
              />
            </div>

            <div class="col-12">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                v-model="datos.password"
              />
            </div>

            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe"
                  >Recordarme</label
                >
              </div>
            </div>
              
            <div class="col-12">
              <button type="submit" class="btn btn-dark float-end">
                <p>LOGIN</p>
              </button>
            </div>
          </form>
          
          <hr class="mt-4" />
          <div class="col-12">
            <p class="text-center mb-0">
              No tienes una cuenta?<a href="/users">Registrate!</a>
            </p>
          </div>
         {{token}}
        </div>
      </div>
    </div>
  </div>
  
  <!-- Bootstrap JS -->
</template>

<script>
import store, { jwtToken } from '../store/index.js'
export default {
  name: "Login",
  data: () => ({
    datos: {
      email: "",
      password: "",
    },
  }),

  methods: {
    login() {
      this.axios.post("/auth/signin", this.datos).then((res) => {
        // this.jwtToken = res.data.token
        // store.dispatch('setToken', this.jwtToken)
        localStorage.setItem('token', res.data.token)
        this.$router.push ("/admin")
        console.log(res.data.token);
       });
   },
  }
};
</script>

<style>
label {
  display: block;
  text-align: left;
}
</style>