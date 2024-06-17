<?php

require_once 'classes/DataProcessor.php';
require_once 'classes/AbstractSitemap.php';

require_once 'classes/SitemapText.php';
require_once 'classes/SitemapList.php';
require_once 'classes/SitemapTable.php';

$sitemapText = new SitemapText();
$sitemapText->getData('./xml/sitemap.xml');
$sitemapText->showData();


$sitemapText = new SitemapList(true);
$sitemapText->getData('./xml/sitemap.xml');
$sitemapText->showData();

$sitemapText = new SitemapTable();
$sitemapText->getData('./xml/sitemap.xml');
$sitemapText->showData();
