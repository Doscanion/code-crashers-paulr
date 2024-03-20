<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <link rel="stylesheet" href="./styles/sitemap.css" />
    <script defer src="./js/javascript.js"></script>
    <title>Embed Slaapcomfort Sitemap</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
        <h2>Sitemap</h2>
        <section class="sitemap">
            <section>
                <h3>Winkel (Shop)</h3>
                <ul>
                    <li><a href="/products.php">Assortiment</a>
                        <ul>
                            <li><a href="/products.php">Interieur</a></li>
                            <li><a href="/products.php">Slapen en beddengoed</a>
                                <ul>
                                    <li><a href="/products.php">Dekkenbedden</a></li>
                                    <li><a href="/products.php">Dekbedovertrekken</a></li>
                                    <li><a href="/products.php">Kussens</a></li>
                                    <li><a href="/products.php">Hoeslakens</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="/info.php">Aanbiedingen</a></li>
                </ul>
            </section>
            <section>
                <h3>Service</h3>
                <ul>
                    <li><a href="/info.php">Algemene voorwaarden</a></li>
                    <li><a href="/info.php">Cookies</a></li>
                    <li><a href="/info.php">Privacy Statement</a></li>
                    <li><a href="/info.php">Veelgestelde vragen</a></li>
                    <li><a href="/info.php">Nieuwsbrief</a></li>
                    <li><a href="/info.php">Disclaimer</a></li>
                    <li><a href="/sitemap.php">Sitemap</a></li>
                </ul>
            </section>
            <section>
                <h3>Embed Slaapcomfort Informatie</h3>
                <ul>
                    <li><a href="/info.php">Brochure</a></li>
                    <li><a href="/info.php">Nieuws</a></li>
                    <li><a href="/location.php">Onze Winkels</a></li>
                    <li><a href="/contact.php">Contact</a></li>
                    <li><a href="/info.php">In uw winkel</a></li>
                </ul>
            </section>
            <section>
                <h3>Gebruiker</h3>
                <ul>
                    <li><a href="/info.php">Mijn account</a></li>
                    <li><a href="/info.php">Winkelwagen</a></li>
                </ul>
            </section>
        </section>

    </main>
    <footer><?php require_once(__DIR__ . '/includes/footer.html'); ?></footer>
</body>

</html>