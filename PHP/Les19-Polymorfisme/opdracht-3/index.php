<?php

	require_once 'classes/Cavia.php';
	require_once 'classes/Eekhoorn.php';
	require_once 'classes/Kat.php';
	
	$cavia = new Cavia();
	$cavia->popcorn();
	$cavia->klim();
	echo '<hr>';
	$kat = new Kat();
	$kat->purr();
	$kat->miauw();
	echo '<hr>';
	$eekhoorn = new Eekhoorn();
	$eekhoorn->klim();
	$eekhoorn->knaag();
	
?>