<template>

<div class="container">
  <div class="col-md-9 offset-md-2">
      <div class="alert alert-dark" role="alert">
        <label><center><strong>REGISTRO DE PRODUCTOS</strong></center></label>
      </div>
      <div class="alert alert-secondary" role="alert">
        <label><strong>DATOS DEL COMERCIANTE</strong></label>
      </div>
  
    <form class="row g-3">
      <div class="col-md-4">
        <label for="validationDefault01" class="form-label">Nombres *</label>
        <input type="text" class="form-control" id="validationDefault01" placeholder="Nombres" required>
      </div>
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Apellidos *</label>
        <input type="text" class="form-control" id="validationDefault02"  placeholder="Apellidos" required>
      </div>
      
      <div class="col-md-4">
        <label for="validationDefault03" class="form-label">Identificación *</label>
        <input type="text" class="form-control" id="validationDefault03" placeholder="N° Identificación" required>
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
      <div class="col-md-4">
        <label for="validationDefault03" class="form-label">Telefono *</label>
        <input type="text" class="form-control" id="validationDefault03" placeholder="Telefono" required>
      </div>
      <div class="alert alert-secondary" role="alert">
      <label><strong>DATOS DEL PRODUCTO</strong></label>
    </div>
      
    <br>
    <div class="col-md-4">
        <label for="validationDefault01" class="form-label">Nombre Del Producto *</label>
        <input type="text" class="form-control" id="validationDefault01" placeholder="Nombre del Producto" required>
      </div>
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Cantidad *</label>
        <input type="text" class="form-control" id="validationDefault02"  placeholder="Cantidad " required>
      </div>
      
      <div class="col-md-4">
          <label for="validationDefault01" class="form-label">Precio Del Producto *</label>
      <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" required>
      <span class="input-group-text">.00</span>
    </div>
      </div>
      <div class="col-md-6">
          <label for="validationDefault01" class="form-label">Detalle Del Producto *</label>
      <div class="input-group">
      <span class="input-group-text">Detalle del Producto</span>
      <textarea class="form-control" aria-label="With textarea" required></textarea>
    </div>
      </div>
      <div class="col-md-6">
      <div class="mb-3">
      <label for="formFile" class="form-label">Cargar imagen del Producto *</label>
      <input class="form-control" type="file" id="formFile" required>
    </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Resgistrar</button>
      </div>
    </form>
    
  <br>

</div>
</div>
    
</template>

<script>
export default {
  name: 'products',
}
</script>

<style>
</style>