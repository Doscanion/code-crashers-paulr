<?php

	session_start();
	require_once ('scripts/sections.php');
	require_once ('scripts/functions.php');

	date_default_timezone_set('CET');

?>

<!DOCTYPE html>
<html lang="nl-NL"> 
	<head>
		<?php postMeta(); ?>
		<title>Webshop voor katten</title>
		<script src="javascript/jquery-1.11.0.min.js"></script>
		<script>
			function date(){
				var currentdate = new Date();
			
				var seconds = currentdate.getSeconds();
				if (seconds < 10){
					seconds = '0' + seconds;
				}
				
				var minutes = currentdate.getMinutes();
				if (minutes < 10){
					minutes = '0' + minutes;
				}
				
				var hours = currentdate.getHours();
				if (hours < 10){
					hours = '0' + hours;
				}
				
				var date = currentdate.getDate();
				if (date < 10){
					date = '0' + date;
				}
				
				var month = (currentdate.getMonth()+1);
				if (month < 10){
					month = '0' + month;
				}
				
				var x = date 
					+ '-' 
					+ month
					+ '-' 
					+ currentdate.getFullYear() 
					+ '\n' 
					+ hours 
					+ ':' 
					+ minutes 
					+ ':' 
					+ seconds;

				alert(x);
			}
			
			$(document).ready(function(){
				$("button").click(function(){
					$("p").toggle("slow");
				});
			});
		</script>
	</head>
	<body>
		<div id="container">
			<?php postHeader(); ?>
			<main>
				<div>
					<a href="#latin"><img src="images/va.png" alt="latin" width="32" height="22"></a> ~  
					<a href="#english"><img src="images/gb.png" alt="latin" width="32" height="22"></a> ~  
					<a href="#german"><img src="images/de.png" alt="latin" width="32" height="22"></a> 
				</div>
				<div class="buttondiv">
					<button class="button">Show & Hide Paragraaf</button>
				</div>
				<section id="latin">
					<h1>Home <small>Lorem? Ipsum!</small></h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet corporis omnis accusamus quam doloremque earum!</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas assumenda asperiores quasi architecto corrupti unde laudantium, enim dolores harum qui? Nostrum esse, inventore quis tenetur neque libero quos. Vel perferendis blanditiis molestias incidunt vero numquam non assumenda libero, debitis quia cumque sapiente quo facere ipsa ipsum labore ipsam culpa atque!</p>
					<p>Iusto, commodi <strong>quaerat</strong> explicabo doloribus ducimus porro temporibus nam sint. <em>Maiores</em>, repellendus. Aspernatur, ullam. Totam accusantium voluptatibus reprehenderit sequi, possimus molestiae dolor perspiciatis, placeat saepe! In repellat velit quaerat at est dolor commodi ratione itaque recusandae soluta. Nostrum, corrupti! Provident, minima officiis. Exercitationem fugiat omnis soluta inventore totam, consequatur reiciendis.</p>
				</section>	
					
				<section>
					<h2>Miauw</h2>
					<p>Totam non recusandae quasi. Dolorem, suscipit. Non nulla sed inventore quibusdam! Placeat rerum voluptate eius veritatis, magni sunt quod optio, suscipit! Blanditiis ratione fuga porro debitis accusantium laborum maiores, eius, ut, quasi dolorum id excepturi sint harum sunt cum veniam. Numquam a quod quibusdam fugiat, beatae quidem adipisci soluta, sed?</p>
					<p>Praesentium fugiat, corrupti voluptates vel <strong>libero magni</strong> ipsa accusantium corporis voluptatibus incidunt delectus asperiores reiciendis, quaerat quae dicta numquam accusamus dolor voluptas suscipit mollitia nihil alias maiores, illum. Magni quo temporibus molestiae. Et dolor voluptatum voluptas? Corrupti libero, consectetur accusantium maiores, ratione magnam omnis unde sit reprehenderit voluptatem molestias nulla!</p>
					<p>At eligendi architecto dolores ipsa repellat, non repellendus, cum aliquam <em>mollitia</em> aliquid autem ad animi sequi voluptatum. Id suscipit, in qui ex animi expedita quisquam doloribus? Provident cum, magnam dolores! Ab pariatur dolorum rem maxime, ea perspiciatis sint neque necessitatibus praesentium delectus optio! Tenetur expedita eum ducimus blanditiis at officiis?</p>
				</section>
				
				<figure>
					<img ondblclick="date()" id="klok" alt="klok" title="klok" src="images/klok.jpg">
					<figcaption>Doubleclick the clock~</figcaption>
				</figure>
				
				<article id="english">
					<h3 lang="en-GB">English</h3>
					<p lang="en-GB"> 
						Cat ipsum dolor sit amet, have secret plans. Mark territory have secret plans, climb a tree, wait for a fireman jump to fireman 
						then scratch his face yet make meme, make cute face and paw at your fat belly stand in front of the computer screen, and leave fur 
						on owners clothes. Mew spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce, hiss at vacuum cleaner. Lick butt. 
						Sleep on dog bed, force dog to sleep on floor refuse to leave cardboard box for all of a sudden cat goes crazy. Missing until dinner 
						time make meme, make cute face so meow then cats take over the world spread kitty litter all over house walk on car leaving trail of 
						paw prints on hood and windshield if it fits, i sits. Eat the fat cats food. Nap all day run in circles, but thinking longingly about 
						tuna brine for brown cats with pink ears why must they do that pooping rainbow while flying in a toasted bread costume in space chew foot. 
					</p>
				</article>
				
				<article id="german">
					<h3 lang="de-DE">Deutsch</h3>
					<p lang="de-DE"> 
						Katze ipsum dolor sit amet, haben geheime Pl&auml;ne. Marke Gebiet haben geheime Pl&auml;ne, auf einen Baum klettern, warten auf einen Feuerwehrmann springen zum Feuerwehrmann
						dann kratzen sein Gesicht noch meme, machen s&uuml;&szlig;es Gesicht und Pfote an Ihrem dicken Bauch stehen vor dem Computer-Bildschirm, und lassen Sie Fell machen
						auf Inhaber Kleidung. Mew Stelle etwas, gro&szlig;e Augen, gro&szlig;e Augen, Hocke, sch&uuml;tteln Hintern, bereiten auf Staubsauger zu st&uuml;rzen, zischen. Lecken Sie Hintern.
						Schlaf auf Hundebett, zwingen Hund auf dem Boden zu schlafen verweigern Karton f&uuml;r ganz pl&ouml;tzlich Katze zu verlassen geht verr&uuml;ckt. Fehlende bis zum Abendessen
						Zeit make meme, machen niedliche Gesicht so miauen dann Katzen Wurf der Welt verbreitet Kitty &uuml;bernehmen im ganzen Haus zu Fu&szlig; auf dem Auto verlassen Spur
						Pfotenabdr&uuml;cke auf der Motorhaube und Windschutzscheibe, wenn es passt, ich sitzt. Essen Sie die fetten Katzen Essen. Nap den ganzen Tag im Kreis laufen, aber denken sehns&uuml;chtig &uuml;ber
						Thunfisch Sole f&uuml;r braune Katzen mit rosa Ohren, warum m&uuml;ssen sie tun, dass Regenbogen kacken, w&auml;hrend in einem Toastbrot Kost&uuml;m im Raum kauen Fu&szlig; fliegen.
					</p>
				</article>
			</main>
			<?php postFooter(); ?>
		</div>	
	</body>
</html>