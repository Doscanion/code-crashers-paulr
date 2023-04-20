<?php
	$search = array('.jpg', '.gif');
	define('mapje', './images/');
	
	if (is_dir(mapje)){
		if ($dh = opendir(mapje)){
		while (($file = readdir($dh))){
			if ($file != '..' && $file != '.'){
				$alt = str_replace($search, '', $file);
				$alt = str_replace('-', ' ', $alt);
				echo '<img src="'.mapje.$file.'" alt="'.ucfirst($alt).'" width="240">';
			}
		}
		closedir($dh);
		}
	}

?>