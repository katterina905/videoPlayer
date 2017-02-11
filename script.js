function videoPlay(obj){
    $( "video" ).each(function() {
        $( this ).removeClass( "openView" );
        console.log('hi')
    });
    $(obj).addClass("openView");
}