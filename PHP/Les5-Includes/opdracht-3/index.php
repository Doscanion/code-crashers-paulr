<?php
require_once('classes/User.php');
require_once('lib/helpers.php');
$user1 = new User('Mark', 'mzuckerberg@gmail.com');


for ($i = 0; $i < 37; $i++) {
	celebrateBirthDay($user1);
}
?>
<!DOCTYPE html>
<html>

<head>
	<title>Users</title>
</head>

<body>
	<section>
		<p><?= $user1->getName(); ?></p>
		<p><?= $user1->getEmail(); ?></p>
		<p><?= $user1->getAge(); ?></p>
	</section>
</body>

</html>