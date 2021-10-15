<template>

<div class="container">
    <div class="col-md-8 offset-md-2">
        <div class="d-flex align-items-center p-3 my-3 text-black bg-purple rounded shadow-sm">
    <img class="me-3" src="../../public/Logo-Munchique.png" alt="" width="98" height="38">
    
      <label><center><strong>LISTADO DE PRODUCTOS</strong></center></label>
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
      <th scope="col">Categoria</th>
      <th scope="col">Precio</th>
      <th scope="col">Opciones</th>
    </tr>
    
  </thead>
  <tbody>
    <tr v-for="(product, index) in products" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{product.name}}</td>
      <td>{{product.category}}</td>
      <td>{{product.price}}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-success">Editar</button>
            <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </td>
    </tr>
    <!--tr>
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
    </tr-->
  </tbody>
</table>
<br>
<br>
</div>
</div>

</template>

<script>
//import store, { jwtToken } from '../store/index.js'
import axios from 'axios';

export default{
  data() {
    return {
      products: []
  }
  },
  
  created(){
    const config={
      headers: { token: localStorage.getItem('token')}
    };
   axios.get("/products", config)
    .then(response =>{
      //this.jwtToken = response.data.token
      //store.dispatch('setToken', this.jwtToken)
      //localStorage.setItem('token', response.data.token)
      
      this.products = response.data;
      //console.log(response.data);
    })
    
  },
  
  /*created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.users = response.data);
  },
  data() {
    return {
      users: []
    }
  },*/
  name: 'admin',
  beforeCreate(){
    
    var autenticacion = localStorage.getItem('token')
    
    //console.log("res.data.token es "+ autenticacion)
    //condicion de autenticacion
    /*if (!localStorage.getItem('token')) {
          
              this.$router.push('/login')
        
      }*/
    if(!autenticacion){
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