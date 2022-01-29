var $gyp = $('.gyp')

$gyp.on('mouseenter', function(){
    $gyp.get(0).play();
})
$gyp.on('mouseout', function(){
    $gyp.get(0).pause()
})
