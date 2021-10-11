<template>
  <div class="container">
    <div class="col-md-9 offset-md-2">
          <div class="alert alert-dark" role="alert">
            <label><center><strong>REGISTRO DE PRODUCTOS</strong></center></label>
          </div>

        <form class="row g-3">
              
              <br>

              <div class="col-md-4">
                  <label for="validationDefault01" class="form-label">Nombre Del Producto *</label>
                  <input type="text" class="form-control" id="validationDefault01" placeholder="Nombre del Producto" required>
              </div>

              <!--se cambio la palabra cantidad por categoria-->
              <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Categoria *</label>
                <input type="text" class="form-control" id="validationDefault02"  placeholder="Categoria " required>
              </div>
              
              <div class="col-md-4">
                <label for="validationDefault01" class="form-label">Precio Del Producto *</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">$</span>
                  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" required>
                  <span class="input-group-text">.00</span>
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