<template>
<div class="col-md-9 offset-md-2">
      <div class="alert alert-dark" role="alert">
        <label><center><strong>REGISTRO DE USUARIOS</strong></center></label>
      </div>

      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        {{mensaje.texto}}
      </b-alert>

      <form class="row g-3" @submit ="registrarUsuario()">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Nombres *</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="Nombres" v-model="usuario.nombre">
        </div>

        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Apellidos *</label>
          <input type="text" class="form-control" id="validationDefault02"  placeholder="Apellidos" required>
        </div>
      
        <div class="col-md-4">
          <label for="validationDefault03" class="form-label">Identificación *</label>
          <input type="text" class="form-control" id="validationDefault03" placeholder="N° Identificación" required>
        </div>

        <!-- se cambio la pabra Usuario por correo -->
        <div class="col-md-4">
          <label for="validationDefaultUsername" class="form-label">Correo *</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" placeholder="mail" v-model="usuario.correo">
          </div>
        </div>
        
        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">Contraseña *</label>
          <input type="Password" class="form-control" id="validationDefault05" placeholder="Contraseña" v-model="usuario.contraseña">
        </div>

        <div class="col-md-3">
          <label for="validationDefault03" class="form-label">Telefono *</label>
          <input type="text" class="form-control" id="validationDefault03" placeholder="Telefono" required>
      </div>

      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Departamento *</label>
        <select class="form-select" id="validationDefault04" required>
          <option selected disabled value="">Seleccione...</option>
          <option>...</option>
        </select>
      </div>

      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">Ciudad *</label>
        <select class="form-select" id="validationDefault04" required>
          <option selected disabled value="">Seleccione...</option>
          <option>...</option>
        </select>
      </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
            <label class="form-check-label" for="invalidCheck2">
              Acepta los terminos y condiciones.
            </label>
            <br>
            <label> Los datos con (*) son obligatorios.</label>
            <br>
            <label> Al hacer clic en el botón Enviar, y al ser validada su información, Usted hará parte de un selecto grupo de administradores de la plataforma <strong>"MUNCHIQUE"</strong>, solución en línea para la comercialización de productos agrícolas.</label>
            <label> Si decide no hacerlo, puede Cancelar y retomar el registro en cualquier momento.</label>
          </div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit" >Resgistrar</button>
        </div>
      <br>
      </form>
      <br>
  </div>


  
</template>

<script>
  export default {

    data(){
          return{
            usuarios:[], 

            mensaje: {color: 'success', texto: ''},
            dismissSecs: 5,
            dismissCountDown: 0,

            usuario: {nombre:"", correo:"", contraseña:""}
          }
    },

      created (){  
        this.listadoUsuarios();
        },

      methods: {
        listadoUsuarios(){
          this.axios.get('https://api-proyecto-ciclo3.herokuapp.com/')
          .then(res=>{
            this.listadoUsuarios=res.data;
          })
        },

        registrarUsuario(){

          this.axios.post("https://api-proyecto-ciclo3.herokuapp.com/", this.usuario)
          .then(res=>{
            
            this.usuarios.push(res.data)
            this.usuarios.nombre = "";
            this.usuarios.correo = "";
            this.usuarios.contraseña = "";
            this.mensaje.color="success";
            this.mensaje.texto="Usuario Registrado";
            this.showAlert();


          })
          .cath(e=>{
            console.log(e.response);
          })

        },

        countDownChanged(dismissCountDown) {
          this.dismissCountDown = dismissCountDown
          },
          showAlert() {
          this.dismissCountDown = this.dismissSecs
          }

      }
}
</script>

<style>
</style>