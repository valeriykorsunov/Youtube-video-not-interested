<?php
$file = 'sample.csv';
$tofile = $_POST['data'];
$bom = "\xEF\xBB\xBF";

@file_put_contents($file, $bom . $tofile );

echo 'https://veeckbot.tk/sbispars/sample.csv';