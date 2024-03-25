<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles/style.css">
    <title>Les Formulier 4</title>
</head>

<body>
    <form action="verwerking.php" method="post">
        <div>
            <label for="voornaam">Voornaam</label>
            <input type="text" name="voornaam" id="voornaam" value="">
        </div>
        <div class="form-radio">
            <div>
                <input type="radio" name="iets" id="man" value="man">
                <label for="man">Man</label>
            </div>
            <div>
                <input type="radio" name="iets" id="vrouw" value="vrouw">
                <label for="vrouw">Vrouw</label>
            </div>
            <div>
                <input type="radio" name="iets" id="anders" value="anders">
                <label for="anders">Anders</label>
            </div>

        </div>
        <div>
            <label for="woonplaats">Woonplaats</label>
            <input type="text" name="woonplaats" id="woonplaats" value="">
        </div>
        <div>
            <label for="postcode">Postcode</label>
            <input type="text" name="postcode" id="postcode" value="">
        </div>
        <div>
            <label for="provincie">Provincie</label>
            <select name="provincie" id="provincie">
                <option hidden disabled selected value></option>
                <option value="noord">Noord-Holland</option>
                <option value="zuid">Zuid-Holland</option>
                <option value="friesland">Friesland</option>
                <option value="gelderland">Gelderland</option>
                <option value="overijssel">Overijssel</option>
                <option value="flevoland">Flevoland</option>
                <option value="drenthe">Drenthe</option>
                <option value="utrecht">Utrecht</option>
                <option value="zeeland">Zeeland</option>
                <option value="groningen">Groningen</option>
                <option value="brabant">Noord-Brabant</option>
                <option value="limburg">Limburg</option>
        </div>
        <div>
            <input type="submit" value="verzenden" id="verzenden" name="verzenden">
        </div>
    </form>
</body>

</html>