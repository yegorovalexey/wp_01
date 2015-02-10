function mute_head_video(){
	var muted = true;
	if($("video").prop('muted')){
		muted = false;
	}
	$("video").prop('muted', muted); 
}