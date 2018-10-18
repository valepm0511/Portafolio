window.view = {};
window.onload = () => {
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="quienSoy" class="containerInfo m-auto animated fadeIn">
            <h1 class="titlePage">Quién soy</h1>
            <div class="row stitchedHome">
                <div class="col-md-5 col-12 pt-2 pb-2 animated zoomIn">
                    <img src="img/fotoHome.jpg" class="img-fluid imgstyle d-block m-auto animated fadeIn">
                </div>
                <div class="col-md-7 col-12">
                    <div class="containerText p-1 text-center animated zoomIn">
                        <p class="lead animated fadeIn"> Hola! Bienvenid@ a mi portafolio web, mi nombre es Valeria Peñaloza y tengo 31 años, y una carrera en constante desarrollo en el área del desarrollo multimedia y digital. Me dedico de hace ya más de 5 años al rubro web, luego de
                            haberme titulado de Diseñadora y Programadora Multimedia en Inacap y mi participación en el bootcamp de Laboratoria. Siempre ando en búsqueda de nuevos desafíos, adquirir nuevos conocimientos en todo ámbito, nuevas tecnologías
                            y por sobre todo nuevos retos y desafíos personales cada vez mayores. Amante de los animales y de conocer el mundo y sus distintas culturas. Espero que te agrade del contenido de mi portafolio y cualquier consulta no dudes
                            en escribirme!</p>
                    </div>

                </div>
            </div>
        </section>
    `;
}

window.view.habilidades = () => {
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="habilidades" class="containerInfo m-auto  animated fadeIn">
            <h1 class="titlePage">Habilidades</h1>
            <div class="stitched">
                <div class="row mt-2 mb-4">
                    <div class="col-md-4 col-12  animated zoomIn">
                        <img src="img/html5Final.png" alt="html5" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">HTML5</p>
                    </div>
                    <div class="col-md-4 col-sm-12 animated zoomIn">
                        <img src="img/css3Final.png" alt="css3" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">css3</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/jsFinal.png" alt="javascript" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">JavaScript</p>
                    </div>
                </div>
                <div class="row mt-3 ">
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/bootstrapFinal.png" alt="bootstrap" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo lead">Bootstrap</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/angularFinal.png" alt="angular" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">Angular</p>
                    </div>
                    <div class="col-md-4 col-12 animated zoomIn">
                        <img src="img/githubFinal.png" alt="github" class="imgLogos img-fluid d-block mx-auto">
                        <p class="textLogo">Github</p>
                    </div>
                </div>

            </div>
        </section>
    `;
}

window.view.portafolio = () => {
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `
    <section id="portafolio" class="containerInfo m-auto  animated fadeIn">
            <h1 class="titlePage">Portafolio</h1>
            <div class="stitched">
                <div class="row justify-content-around">
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaTraslab.png">
                        <div class="card-body px-0 ">
                            <h5 class="card-title titleCard">TransLab</h5>
                            <a href="https://valepm0511.github.io/TransLab/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/TransLab" target="_blank"> <button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaCesar.png">
                        <div class="card-body px-0">
                            <h5 class="card-title titleCard">Cifrado Cesar</h5>
                            <a href="https://valepm0511.github.io/Cifrado-Cesar/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/Cifrado-Cesar" target="_blank"> <button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12 px-0 py-3 containerCard animated zoomIn">
                        <img class="card-img-top px-3 imgCard" src="img/vistaFoodMap.png">
                        <div class="card-body px-0 ">
                            <h5 class="card-title titleCard">FoodMap</h5>
                            <a href="https://valepm0511.github.io/FoodMap/" target="_blank"><button class="btn btnStyle mb-2">Link Deploy</button></a>
                            <a href="https://github.com/valepm0511/FoodMap" target="_blank"><button class="btn btnStyle">Link Github</button></a>

                        </div>
                    </div>

                </div>
                <div class="row justify-content-center mt-1">
                    <div class="col-md-5 col-12 justify-content-center mt-5 linkProyect animated zoomIn">
                        <a href="https://github.com/valepm0511" target="_blank"> <button class="btn btnProyect linkRepo">Mas proyectos aqui!</button></a>
                    </div>
                </div>
        </section>
    `;
}

window.view.contacto = () => {
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });

    let content = document.getElementById('content');
    content.innerHTML = `<section id="contacto" class="containerInfo m-auto mb-5  animated fadeIn">
    <h1 class="titlePage">Contacto</h1>
    <div class="stitched">
        <div class="animated zoomIn">
            <h5 class="text-center titleContact">Si quieres saber mas de mi, sigueme en Linkedin:</h5>
            <div class="iconRedSocial">
                <a href="https://www.linkedin.com/in/valeria-pe%C3%B1aloza-martinez/" target="_blank"> <i class="fab fa-linkedin styleIcon"></i></a>
            </div>
            <h5 class="text-center titleContact">Mira mi repositorio en Github:</h5>
            <div class="iconRedSocial">
                <a href="https://github.com/valepm0511" target="_blank"><i class="fab fa-github styleIcon"></i></a>
            </div>
            <h5 class="text-center titleContact">Envíame un correo a:</h5>
            <div class="iconRedSocial">
                <p class="text-center styleLinkCorreo">valeria.penaloza5@gmail.com</p>
            </div>
            <h5 class="text-center titleContact">O descarga mi currículum:</h5>
            <div class="col-md-4 col-12 mt-4 linkProyect m-auto">
                <a href="img/CV-ValeriaPenaloza.pdf" download="CV-ValeriaPenaloza.pdf" target="_blank" class="btn btnStyle">Mi currículum</a>
            </div>
        </div>
    </div>
</section>`;
}