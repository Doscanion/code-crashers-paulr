<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <link rel="stylesheet" href="./styles/content.css" />
    <script defer src="./js/javascript.js"></script>
    <title>Embed products</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
        <section class="main-products">
            <div class="products-img">
                <img class="img" src="./img/products.jpg" alt="">
                <img class="main-product-bed svg-circle" src="./img/minus.svg" alt="Bed">
                <img class="main-product-kastje svg-circle" src="./img/plus.svg" alt="Nachtkastje">
                <img class="main-product-lamp svg-circle" src="./img/minus.svg" alt="Lamp">
                <img class="main-product-kast svg-circle" src="./img/minus.svg" alt="Kist">
                <img class="main-product-dekbed svg-circle" src="./img/minus.svg" alt="Dekbed">
                <img class="main-product-kussen svg-circle" src="./img/minus.svg" alt="SierKussen">
                <img class="main-product-schilderij svg-circle" src="./img/minus.svg" alt="schilderij">

            </div>
            <ul class="products-price">
                <li><img class="svg-circle product-circle" src="./img/minus.svg" alt="">Bed €199.95</li>
                <li><img class="svg-circle" src="./img/plus.svg" alt="">Nachtkastje €49,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" alt="">Lamp €19,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" alt="">Kist €79,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" alt="">Dekbedovertek €19.95</li>
                <li><img class="svg-circle" src="./img/minus.svg" alt="">Sierkussens €19.95</li>
                <li><img class="svg-circle" src="./img/minus.svg" alt="">Schilderij <span class="price-delete">€99.95</span> <span class="price-new">€79.95</span></li>
            </ul>
        </section>
        <section class="category-info">
            <article class="catergory-info-right">
                <div class="catergory-img">
                    <img src="./img/category-bed.jpg" alt="Bed">
                </div>
                <div class="catergory-text">
                    <h2>Onze bedden garanderen een goed nachtrust</h2>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tenetur debitis officiis? Numquam aspernatur fugiat, laborum porro assumenda voluptates, hic nam, nisi reiciendis perspiciatis necessitatibus libero doloremque debitis officia voluptatibus! Nihil tenetur debitis officiis? Numquam aspernatur fugiat, laborum porro assumenda voluptates, hic nam, nisi reiciendis perspiciatis necessitatibus libero doloremque debitis officia voluptatibus!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </article>
            <article class="catergory-info-left">
                <div class="catergory-text">
                    <h2>Een nachtkastje passend bij elk interieur</h2>
                    <h3>Lorem ipsum</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto consequuntur voluptatibus delectus neque pariatur numquam eos reiciendis sed, reprehenderit eum commodi molestias velit, eaque inventore. Provident minus velit quos quas? Architecto consequuntur voluptatibus delectus neque pariatur numquam eos reiciendis sed, reprehenderit eum commodi molestias velit, eaque inventore. Provident minus velit quos quas?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="catergory-img">
                    <img src="./img/category-kastje.jpg" alt="Nachtkastje">
                </div>
            </article>
        </section>



        <section class="triple-container triple-container-row">
            <article>
                <section class="triple-container-transparency">
                    <p>Bekijk de nieuwste</p>
                    <p>Lente Collectie</p>
                </section>
            </article>
            <article><iframe autoplay="0" width="100%" height="100%" src="./video/old.mp4" frameborder="0"></iframe></article>
            <article>
                <section class="triple-container-transparency">
                    <p>Bekijk de online</p>
                    <p>Brochure</p>
                </section>
            </article>
        </section>
    </main>
    <footer><?php require_once(__DIR__ . '/includes/footer.html'); ?></footer>
</body>

</html>