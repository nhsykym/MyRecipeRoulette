<?php
  $url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1072861491823725264&categoryType=large';
  $json = file_get_contents($url);
  $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
  $arr = json_decode($json,true);
  
  if ($arr === NULL) {
    return;
  }else{
    foreach ($arr['result'][large] as $category) {
      echo $category['categoryName']."<br>";
    }
  }

?>

