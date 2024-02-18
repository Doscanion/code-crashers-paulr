<?php

?>

<!DOCTYPE html>
<html lang="en-US">

<head>
	<meta charset="UTF-8">
	<title>Checker board</title>
	<link rel="stylesheet" href="css/stylesheet.css">
</head>

<body>
	<div id="wrapper">
		<div id="container">
			<div id="checker-board">
				<?php
				for ($i = 0; $i < 10; $i++) {
					if ($i < 4) {
				?>
						<div class="row">
							<?php
							for ($squarewhite = 0; $squarewhite < 5; $squarewhite++) {
								if ($i % 2 == 0) {
							?>
									<div class="square"></div>
									<div class="square">
										<div class="pawn-white"></div>
									</div>
								<?php
								} else {
								?>
									<div class="square">
										<div class="pawn-white"></div>
									</div>
									<div class="square">

									</div>
							<?php
								}
							}
							?>
						</div>
					<?php
					} elseif ($i > 5) {
					?>
						<div class="row">
							<?php
							for ($squareblack = 0; $squareblack < 5; $squareblack++) {
								if ($i % 2 == 0) {
							?>
									<div class="square"></div>
									<div class="square">
										<div class="pawn-black"></div>
									</div>
								<?php
								} else {
								?>
									<div class="square">
										<div class="pawn-black"></div>
									</div>
									<div class="square">

									</div>
							<?php
								}
							}
							?>
						</div>
					<?php
					} else {
					?>

						<div class="row">
							<?php
							for ($square = 0; $square < 10; $square++) {
							?>
								<div class="square"></div>
							<?php
							}
							?>
						</div>
				<?php
					}
				}
				?>

			</div>
		</div>
	</div>
</body>

</html>