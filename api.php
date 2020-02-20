<?php

  $url = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1072861491823725264&categoryType=medium';
  $json = file_get_contents($url);
  $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');

  $arr = json_decode($json,true);

  echo $arr['result'];

  if ($arr === NULL) {
    return;//〜データがない時の処理〜
  }else{
    //〜存在しているときの処理〜
  }








?>

