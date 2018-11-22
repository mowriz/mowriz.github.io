<?php
$json = file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=Cologne,ger&appid=91acb2f589e18298ebf169c4d79ffcc0");

echo $json;
