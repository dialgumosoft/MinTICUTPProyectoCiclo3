<<template>


<div class="container">
    

    
    <div class="col-md-8 offset-md-2">
        <div class="d-flex align-items-center p-3 my-3 text-black bg-purple rounded shadow-sm">
    <img class="me-3" src="../../public/Logo-Munchique.png" alt="" width="98" height="38">
    
      <label><center><strong>ADMINISTRADOR</strong></center></label>
      <div class="col-auto me-auto">
        <button type="button" class="btn btn-danger" @click="cerrarSesion()">Cerrar Sesion</button>
    </div>
      <!--small>Since 2011</small-->

  </div>
  <br>
   <br>
      
      <div class="row">
    <div class="col-auto me-auto">
        <button type="button" class="btn btn-success" onclick="location.href='/products'">Registrar Productos</button>
    </div>
    <div class="col-auto">
        <button type="button" class="btn btn-success" onclick="location.href='/users'">Registrar Usuarios</button>
    </div>
  </div>
  <div>
      <hr color="green" size=6>
  <br>
  </div>

    <table class="table">
  <thead class="table-dark">
      <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Correo</th>
      <th scope="col">Contraseña</th>
    </tr>
    
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>@mdo</td>
      <td>Otto</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>@fat</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>@twitter</td>
      <td>the Bird</td>
    </tr>
  </tbody>
</table>
<br>
<br>
</div>
</div>

</template>

<script>

export default{
  name: 'admin',
  beforeCreate(){
    
    var autenticacion = localStorage.getItem('token')
    
    //console.log("res.data.token es "+ autenticacion)
    if(autenticacion == null){
     this.$router.push({path: '/login'});
    }
    
  },
  methods:{
    cerrarSesion(){
      localStorage.removeItem('token');
      this.$router.push({path: '/login'});
    }
  }
}
</script>