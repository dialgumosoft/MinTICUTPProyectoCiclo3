<template>
  <div class="contenido">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Mercados Campesinos</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Quiénes somos?</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                </ul>
                <form class="d-flex">
                <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscador">
                <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            </div>
        </nav>

        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://semanariovoz.com/wp-content/uploads/2014/02/26/campesinos-colombia.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://www.revistaenfoque.com.co/sites/default/files/images/articulo/campesino_0.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://semillas.org.co/apc-aa-files/353467686e6667686b6c676668f16c6c/img_5047.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
            <div class="card h-100">
                <img src="https://storage.googleapis.com/mmc-cdn-bucket/uploads/2019/07/39aead52-frutas.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Fresas</h5>
                <p class="card-text">Producto 100% cultivado en el campo Colombiano</p>
                <button type="button" class="btn btn-primary">Detalles</button>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card h-100">
                <img src="https://storage.googleapis.com/mmc-cdn-bucket/uploads/2019/09/frutas.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Frutas</h5>
                <p class="card-text">Producto 100% cultivado en el campo Colombiano</p>
                <button type="button" class="btn btn-primary">Detalles</button>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card h-100">
                <img src="https://storage.googleapis.com/mmc-cdn-bucket/uploads/2019/05/3a4da0e5-frutas.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Frutas</h5>
                <p class="card-text">Producto 100% cultivado en el campo Colombiano</p>
                <button type="button" class="btn btn-primary">Detalles</button>
                </div>
            </div>
            </div>
            <div class="col">
                <div class="card h-100">
                <img src="https://storage.googleapis.com/mmc-cdn-bucket/uploads/2020/05/capture-fresas-5ebe6b2ba87ab.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Frutas</h5>
                    <p class="card-text">Producto 100% cultivado en el campo Colombiano</p>
                    <button type="button" class="btn btn-primary">Detalles</button>
                </div>
                </div>
            </div>
        </div>

        <nav aria-label="Page navigation example">
            <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
            </ul>
        </nav>

        <footer class="footer">
            <p>@2021 Mercados Campesinos, All Rights Reseved</p>
        </footer>

</div>

</template>

<script>
export default {
    name: "proyectoc3"

}
</script>

<style>

.contenido{
    width: 90%;
    margin: auto;
}

#carouselExampleCaptions img{
    width: 100%;
    height: 200px;
    margin-top: 10px;
    margin-bottom: 40px;
}

.row img{
    width: 100%;
    height: 150px;
}

.pagination{
    margin-top: 30px;
    margin-bottom: 40px;
    align-content: center;
}

.footer{
    height: 30px;
    background: black;
    font-size: 14px;
    color: white;
    text-align: center;
    margin-bottom: 15px;
}

</style>