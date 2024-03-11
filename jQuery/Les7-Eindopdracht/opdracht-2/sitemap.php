<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <script defer src="./js/javascript.js"></script>
    <title>Location</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
        <h2>Sitemap</h2>
        <section>
            <h3>Winkel</h3>
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
            </ul>
        </section>
        <section>
            <h3></h3>
            <ul>
                <li></li>
            </ul>
        </section>
    </main>
    <footer><?php require_once(__DIR__ . '/includes/footer.html'); ?></footer>
</body>

</html>