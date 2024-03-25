<?php

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/style.css">
    <title>Form 6</title>
</head>

<body>
    <form action="resultaat.php" method="post">
        <fieldset>
            <div>
                <label for="title">Titel</label>
                <input type="text" name="title" id="title" placeholder="De titel van je pagina" value="">
            </div>
            <div>
                <label for="summary">Beschrijving</label>
                <input type="text" name="summary" id="summary" placeholder="De beschrijving van je pagina" value="">
            </div>
            <div>
                <label for="heading">Hoofdkop</label>
                <input type="text" name="heading" id="heading" placeholder="De inhoud van je hoofdkop" value="">
            </div>
            <div>
                <label for="paragraph">Paragraaf</label>
                <textarea name="paragraph" id="paragraph" rows="3"></textarea>
            </div>
            <div>
                <label for="picture">Afbeelding</label>
                <input type="text" name="picture" id="picture" placeholder="Een verwijzing naar een afbeelding" value="">
            </div>
        </fieldset>
        <fieldset>
            <div>
                <label for="bcolor">Achtergrondkleur</label>
                <input type="color" name="bcolor" id="bcolor" placeholder="De achtergrondkleur van je pagina" value="#dddddd">
            </div>
            <div>
                <label for="tcolor">Tekstkleur</label>
                <input type="color" name="tcolor" id="tcolor" placeholder="De tekstkleur van je pagina." value="">
            </div>
            <div>
                <label for="fontsize">Tekst grootte</label>
                <input type="number" min="10" max="20" name="fontsize" id="fontsize" placeholder="De tekstgrootte" value="">
            </div>
            <div>
                <label for="fontfamily">Lettertype</label>
                <select name="fontfamily" id="fontfamily">
                    <option hidden disabled selected value></option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Arial">Arial</option>
                    <option value="Cambria">Cambria</option>
                    <option value="Georgia">Georgia</option>
                </select>
            </div>
            <div>
                <label for="border">Ik wil een border <input type="checkbox" name="border" id="border" value="ja"></label>
            </div>
        </fieldset>
        <input type="submit" value="submit" id="submit" name="submit">
    </form>
</body>

</html>