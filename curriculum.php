<?php
if(!empty($_GET['file'])){
  $fileName = basename($_GET['file']);
  $filePath = '/src/assets/pdf/'.$fileName;
  if(!empty($fileName) && file_exists($filePath)){
    //Define headers
    header("Cache-Control: public");
    header("Content-Description");
    header("Content-Disposition:attachment: filename=$fileName");
    header("Content-Type: application/zip");
    header("Content-Transfer-Encoding:binary");
    // Read the file
    readfile($filePath);
    exit;
  }
}
?>