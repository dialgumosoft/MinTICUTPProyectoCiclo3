<template>
<body class="cuerpo">
    <div class="contenido">
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
                            <h5 class="card-title">Frutas</h5>
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
    </div>
</body>
</template>

<script>
export default {
    name: "home",

    async mounted(){
        await this.axios.get("/home")

    },
    data(){
        return{
            home: []
        }
    }
}
</script>

<style>
.cuerpo{
    width: 100%;
    margin: auto;
}
.cuerpo .contenido .row{
    width: 65;
    margin: auto;
}

.cuerpo .contenido .carousel-inner{
    height: 250px;
    margin: auto;
}


.contenido{
    width: 100%;
}
.carouselExampleCaptions img{
    width: 90%;
    height: 100px;
    margin-top: 5px;
    margin-bottom: 50px;
}
.row img{
    width: 100%;
    height: 100px;
}

.pagination{
    margin: auto;
    margin-top: 30px;
    margin-bottom: 40px;
    margin-left: 40%;
}
</style>