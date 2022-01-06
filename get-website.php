<?php
    function get_site()
{
	$phantom_script= dirname(__FILE__). '\get-website.js'; 


    $response =  exec ('.\phantomjs.exe ' . $phantom_script);

    return  htmlspecialchars($response);
}
   
?>