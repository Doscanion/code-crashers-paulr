<?php

	session_start();
	require_once ('scripts/sections.php');
	require_once ('scripts/functions.php');

	date_default_timezone_set('CET');
	
	if(isset($_POST['submit'])){
		
		if(empty($_POST['username'])){
			$username = '';
		}else{
			$username = ($_POST['username']);
			if(is_string($_POST['username'])){
				$_SESSION['username'] = $username;
			}
		}
		
		if(empty($_POST['comment'])){
			$comment = 'No comment';
		}else{
			$comment = ($_POST['comment']);
		}
		
		if(empty($_POST['language'])){
			$language = '';
		}else{
			$language = ($_POST['language']);
			setcookie('language', $_POST['language']);
		}
		
		$ip = $_SERVER['REMOTE_ADDR'];
		$ipPart = explode('.',$ip,2);
		setcookie('ip', $ipPart[0]);
	}
	
?>

<!DOCTYPE html>
<html lang="nl-NL"> 
	<head>
		<?php postMeta(); ?>
		<title>Webshop voor katten - contact</title>
		<script>
			function autofill(){
				if(confirm("Are you sure you want to fill in the form?")){
					document.getElementById("username").value = "miauw";
					document.getElementById("password").value = "fish";
					document.getElementById("comment").value = "Autofill completed~";
					document.getElementById("language").value = "english";
				}
			}
		</script>
	</head>
	<body>
		<div id="container">
			<?php postHeader(); ?>
			<main>
				<?php
					if(isset($_POST['submit'])){
						echo '<h3>Form Input:</h3>';
						echo 'Username: '.$username;
						echo '<br>';
						echo 'Comment: '.$comment;
						echo '<br>';
						echo 'Language: '.$language;
						echo '<br>';
						echo 'Ip: '.$ipPart[0];
					}
				?>
				<form action="contact.php" method="POST">
					<fieldset>
						<legend>Form</legend>
						
						<div class="formdiv">
							<label>Username</label>
							<input id="username" type="text" name="username" placeholder="username" required>
						</div>
						
						<div class="formdiv">
							<label>Password</label>
							<input id="password" type="password" name="password" placeholder="password" required>
						</div>
						
						<div class="formdiv">
							<label>Comment</label>
							<textarea id="comment" type="text" name="comment" placeholder="Comment here..."></textarea>
						</div>
						
						<div class="formdiv">
							<label>Language</label>
							<select id="language" name="language">
								<option value="choose">Choose...</option>
								<option value="dutch">Dutch</option>
								<option value="english">English</option>
								<option value="german">German</option>
							</select>
						</div>
						
						<div class="buttondiv">
							<input class="button" type="submit" name="submit" value="submit">
						</div>
					</fieldset>
				</form>
				<div class="buttondiv">
					<button onclick="autofill()" class="button">Autofill Form</button>
				</div>
			</main>
			<?php postFooter(); ?>
		</div>	
	</body>
</html>