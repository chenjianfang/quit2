;(function($,window,document,undefined){
	var layout = function(){
		var bgLock = true;
		var layoutLock = true;
		var imgArray = [
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png',
			'images/liPic.png'
		];
		//click sort icon
		$(".sort-img").click(function(){
			if(bgLock){
				$(".sort-img img").attr("src","images/poke.png");
			}else{
				$(".sort-img img").attr("src","images/poker.png");
			}
			bgLock = !bgLock;
			$(".content").toggle();
			$(".layout").toggle();
			//公共的方法
			if(layoutLock){
				layoutLock = false;
				//生成li元素
				window.CommonJs();
				//lazy IMG
				window.imgLoad(imgArray);
				$(".layout").scroll(function(){
					window.imgLoad(imgArray);
				});

			};	
		});

	}
	layout();

	
})(jQuery,window,document)