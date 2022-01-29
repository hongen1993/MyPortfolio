var $gypt = $('.gypt')

$gypt.on('mouseenter', function(){
    $gypt.get(0).play();
})
$gypt.on('mouseout', function(){
    $gypt.get(0).pause()
})