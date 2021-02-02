<?php


  if(isset($_REQUEST['zipcode']))
  {
  $string = str_replace(' ', '', $_REQUEST['zipcode']);
  $url="http://api.geonames.org/postalCodeLookupJSON?postalcode=".$string."&username=jsingh318";

  //  Initiate curl
  $ch = curl_init();
  // Will return the response, if false it print the response
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // Set the url
  curl_setopt($ch, CURLOPT_URL,$url);
  // Execute
  $result=curl_exec($ch);
  // Closing
  curl_close($ch);
  $postalcodes=json_decode($result);
  $post=$postalcodes->postalcodes;
  
  echo json_encode($post);
  }


  if(isset($_REQUEST['statistics']))
  {
  $string = str_replace(' ', '', $_REQUEST['statistics']);
  $url='http://api.geonames.org/countryInfoJSON?username=jsingh318';

  //  Initiate curl
  $ch = curl_init();
  // Will return the response, if false it print the response
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  // Set the url
  curl_setopt($ch, CURLOPT_URL,$url);
  // Execute
  $result=curl_exec($ch);
  // Closing
  curl_close($ch);
  $statistics=json_decode($result);
  $pos=$statistics->geonames;
  
  echo json_encode($pos);
  }


  if(isset($_REQUEST['country_weather']))
  {
    
      $string = str_replace(' ', '', $_REQUEST['country_weather']);
      $url="http://api.weatherapi.com/v1/current.json?key=064049f75e3a4c3e8fb165540212701&q=".$string;

      // echo $string1;
      //  Initiate curl
      $ch = curl_init();
      // Will return the response, if false it print the response
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      // Set the url
      curl_setopt($ch, CURLOPT_URL,$url);
      // Execute
      $result=curl_exec($ch);
      // Closing
      curl_close($ch);
      $country_weather=json_decode($result);
      
      echo json_encode($country_weather);
  
  }

  
?>