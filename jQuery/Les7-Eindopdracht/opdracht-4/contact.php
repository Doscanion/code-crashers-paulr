<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="canonical" href="https://www.embedslaapcomfort.com/contact">

    <link rel="stylesheet" href="./styles/style.css" />
    <link rel="stylesheet" href="./styles/contact.css" />
    <script src="./jquery/jquery-3.6.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script defer src="./js/javascript.js"></script>
    <script defer src="./js/jquery.js"></script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Embed Slaapcomfort",
            "description": "Bij Embed Slaapcomfort vindt u uitgebreide selectie hoogwaardige bedden en slaapaccessoires in de stad Weert en in de straat Parallelweg 102, ",
            "image": "/img/logo.svg",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "102 Parallelweg",
                "addressLocality": "Weert",
                "postalCode": "6001HM",
                "addressRegion": "Limburg",
                "addressCountry": "Nederland"
            },
            "telephone": "123-456-7890",
            "email": "contact@embed.com",
            "openingHours": [
                "Mo 13:00-18:00",
                "Tu 09:00-18:00",
                "We 09:00-18:00",
                "Th 09:00-18:00",
                "Fr 09:00-21:00",
                "Sa 09:00-21:00",
                "Su Closed"
            ],
            "priceRange": "$$ - $$$",
            "url": "https://www.embedslaapcomfort.com",
            "sameAs": [
                "https://www.facebook.com/Embed",
                "https://twitter.com/Embed",
                "https://www.instagram.com/Embed"
            ]
        }
    </script>
    <title>Contact</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
        <div id="popup">
            <p>Helaas, aanmelden op de nieuwsbrief is nog niet mogelijk. Probeer het over een week nog eens.</p>
        </div>
        <h2>Contact Gegevens</h2>
        <p>
            U kunt contact opnemen met ons via het tel. <span class="bold">000-12345678</span> of met het email adres <span class="bold">contact@embed.org</span> van onze klantenservice. </p>
        <p>
            U kunt eveneens gebruik maken van het onderstaande formulier.
        </p>
        <h2>Contact Formulier</h2>
        <form action="#" method="post">
            <div class="form-name">
                <div class="label-input-container">
                    <label for="fname">Voornaam</label>
                    <input type="text" id="fname" name="fname" required>
                </div>
                <div class="label-input-container">
                    <label for="lname">Achternaam</label>
                    <input type="text" id="lname" name="lname" required>
                </div>
            </div>
            <div class="label-input-container">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="label-input-container">
                <label for="message">Uw vraag en bijbehorende informatie</label>
                <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                <input type="submit" value="Verzenden">
            </div>


        </form>
    </main>
    <footer><?php require_once(__DIR__ . '/includes/footer.html'); ?></footer>
</body>

</html>