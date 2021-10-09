<template>
<!--Barra de Navegación-->
    <div class="contenido">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home"></a>
                <img src="../assets/ProyectoCiclo3-01.png" alt="">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Quiénes somos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Productos</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscador">
                        <button class="btn btn-outline-success" type="submit">Busqueda</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "navegacion"

}
</script>

<style>
.contenido{
    margin: auto;
}

.container-fluid{
    background: black;
    width: 100%;
}

.collapse .navbar-nav .nav-item .nav-link{
    color: white;
}

.contenido .navbar .container-fluid .navbar-brand{
    color: white;
    width: 50;
    font-size: 25px;
    text-align: left;
}

.contenido .navbar img{
    width: 320px;
}
</style>