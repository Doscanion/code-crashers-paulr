<?php

abstract class AbstractSitemap implements DataProcessor {
	protected $locations;
	
	public function __construct(){
		$this->locations = array();
	}
	
	public function getData($sitemap){
		// Deze functie leest een XML bestand uit en slaat deze op in een object.
		$xml = new SimpleXMLElement($sitemap, null, true);
		// Loopt door het XML bestand heen met twee foreach loops om bij de locaties aan te komen.
		foreach ($xml->urlset as $urlset){
			foreach ($urlset->url as $url){
				// Pakt alleen de tekst tussen <loc> en </loc> voor elke link in de sitemap en converteert dit naar een normale string.
				$this->locations[] = (string)$url->loc;
			}		
		}
	}
}
	
?>