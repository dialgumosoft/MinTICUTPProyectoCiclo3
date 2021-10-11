<template>

  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-Ligth mt-4 p-4">

          <pre>{{ usuario }}</pre>

          <form action="" method="" class="row g-3" @submit.prevent="login">
            <img src="../../public/Logo-Munchique.png" alt="" />

            <div class="col-12">
              <label>Email</label>
              <input type="text" name="username" class="form-control" placeholder="Username" v-model="datos.email"/>
            </div>

            <div class="col-12">
              <label>Password</label>
              <input type="password" name="password" class="form-control" placeholder="Password" v-model="datos.password"/>
            </div>

            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="rememberMe"/>
                <label class="form-check-label" for="rememberMe">Recordarme</label>
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
            <p class="text-center mb-0">No tienes una cuenta?<a href="/users">Registrate!</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap JS -->
</template>

<script type="text/javascript">
  
export default {
  name: "Login",
  data: () => ({
    usuario: {},
    datos: {
      email: "admin@localhost",
      password: "admin"
    }, 
    
  }),

  

  methods: {
    login(){
      this.axios.post ('https://api-proyecto-ciclo3.herokuapp.com/api/auth/signin')
      .then(res=> {console.log(res)})

      //console.log("enviando login...", this.datos)
    }
  }

};

</script>

<style lang="scss">
  label {
  display: block;
  text-align: left;
  }
</style>