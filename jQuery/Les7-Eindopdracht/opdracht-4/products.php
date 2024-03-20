<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="canonical" href="https://www.embedslaapcomfort.com/products">

    <link rel="stylesheet" href="./styles/style.css" />
    <link rel="stylesheet" href="./styles/content.css" />
    <script src="./jquery/jquery-3.6.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js"></script>
    <script defer src="./js/javascript.js"></script>
    <script defer src="./js/jquery.js"></script>

    <title>Embed Slaapcomfort products</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
        <section class="main-products">
            <div class="products-img">
                <img class="img" src="./img/products.jpg" alt="">
                <img class="main-product-bed svg-circle" data-target="bed" src="./img/minus.svg" alt="minus">
                <img class="main-product-kastje svg-circle" data-target="kastje" src="./img/plus.svg" alt="plus">
                <img class="main-product-lamp svg-circle" data-target="lamp" src="./img/minus.svg" alt="minus">
                <img class="main-product-kist svg-circle" data-target="kist" src="./img/minus.svg" alt="minus">
                <img class="main-product-dekbed svg-circle" data-target="dekbed" src="./img/minus.svg" alt="minus">
                <img class="main-product-kussen svg-circle" data-target="kussen" src="./img/minus.svg" alt="minus">
                <img class="main-product-schilderij svg-circle" data-target="schilderij" src="./img/minus.svg" alt="minus">

            </div>
            <ul class="products-price">
                <li><img class="svg-circle product-circle" data-target="bed" src="./img/minus.svg" alt="minus">Bed €199.95</li>
                <li><img class="svg-circle" src="./img/plus.svg" data-target="kastje" alt="plus">Nachtkastje €49,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" data-target="lamp" alt="minus">Lamp €19,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" data-target="kist" alt="minus">Kist €79,95</li>
                <li><img class="svg-circle" src="./img/minus.svg" data-target="dekbed" alt="minus">Dekbedovertek €19.95</li>
                <li><img class="svg-circle" src="./img/minus.svg" data-target="kussen" alt="minus">Sierkussens €19.95</li>
                <li><img class="svg-circle" src="./img/minus.svg" data-target="schilderij" alt="minus">Schilderij <span class="price-delete">€99.95</span> <span class="price-new">€79.95</span></li>
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
            <article>
                <video id="miniVideo" width="100%">
                    <source src="./video/old.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div>
                    <button id="playButton">Play</button>
                    <button id="pauseButton">Pause</button>
                </div>
            </article>
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