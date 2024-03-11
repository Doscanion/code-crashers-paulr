<!DOCTYPE html>
<html lang="nl">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./styles/style.css" />
    <link rel="stylesheet" href="./styles/contact.css" />
    <script defer src="./js/javascript.js"></script>
    <title>Contact</title>
</head>

<body>
    <header><?php require_once(__DIR__ . '/includes/header.html'); ?> </header>
    <nav> <?php require_once(__DIR__ . '/includes/nav.html'); ?></nav>
    <main>
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