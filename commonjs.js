function CommonJs(){
	var imgArray = new Array(9);
	function appendlayout(){
		var layout = "";
		$.each(imgArray,function(index,ele){
			layout += '<li><div class="item-header"><div class="item-button">立即预约</div></div><div class="item-img"><img></div></li>';
		});
		$(".layout ul").append(layout);
	}
	return appendlayout();
}

function imgLoad(imgArray){
	$(".layout li").each(function(index,ele){
		console.log($(ele).offset().top +":"+ screen.height);
		if($(ele).offset().top - screen.height < $(".layout").scrollTop()){

			$(ele).find('img').attr("src",imgArray[index]);
		}
		
	});
}