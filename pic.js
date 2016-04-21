function Touch(arg){
	var portTouch = {
		sx:0,
		sy:0,
		ex:0,
		ey:0
	};
	var imgArray = [
		'images/aa1.png',
		'images/aa2.png',
		'images/aa3.png',
		'images/aa4.png',
		'images/aa5.png',
		'images/aa6.png',
		'images/aa7.png',
		'images/aa8.png',
		'images/aa9.png'
	];

	var imgIndex = [
		0,
		1,
		2
	];
	var lock = 0;
	var startTime,
		endTime,
		obj = document.querySelector(arg);
	obj.addEventListener("touchstart",touchstart);

	obj.addEventListener("touchmove",touchmove);

	obj.addEventListener("touchend",touchend);

	obj.addEventListener("touchcancel",touchend);

	function touchstart(e){
		startTime = new Date().getTime();
		portTouch.sx = e.targetTouches[0].pageX;
		portTouch.sy = e.targetTouches[0].pageY;
		portTouch.ex = portTouch.sx;
		portTouch.ex = portTouch.sx;
	};

	function touchmove(e){
		portTouch.ex = e.targetTouches[0].pageX;
		portTouch.ey = e.targetTouches[0].pageY;
	};

	function touchend(e){
		var changeX = portTouch.ex - portTouch.sx;
		var changeY = portTouch.ey - portTouch.sy;
		endTime = new Date().getTime();
		//左右滑动
		if(Math.abs(changeX) > Math.abs(changeY) && Math.abs(changeX) >7){
			//向右滑动
			if(changeX > 0){
				if(imgIndex[0]>0){
					imgIndex = imgIndex.map(function(ele,index){
						return --ele;
					});
					changeImg(-1);
				}
			}
			//向左滑动
			if(changeX < 0){
				if((imgArray.length-1) > imgIndex[imgIndex.length-1]){
					imgIndex = imgIndex.map(function(ele,index){
							return ++ele;
						});

					changeImg(1);
				}
			}
		}
	}

	//滑动切图
	function changeImg(arg){
		var centerEle;
		$(".content").children().each(function(index,ele){
			$(ele).css({
				backgroundImage:'url('+imgArray[imgIndex[index]]+')',
				backgroundSize:'cover'
			});
		});
		transform(arg);
	}
	//添加transform
	function transform(arg){
		//向左滑动
		if(arg === 1){

			if(lock==0){
				lock = 2;
			}else if(lock ==1){
				lock =3;
			}else{
				lock--;
			}
			console.log(lock);
			move();
		}
		//向右滑动
		if(arg === -1){
			if(lock<3){
				lock++;
			}else{
				lock = 1;
			}
			console.log(lock);
			move();
		}
		function move(){
			if(lock == 1){
				$(".content").children().eq(0).css({
					'zIndex':2,
					'opacity':'1',
					'height':'11.71875rem',
					'-webkit-transform':'translate(0.9375rem,-0.625rem)',
					transform:'translate(0.9375rem,-0.625rem)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(1).css({
					'zIndex':0,
					'opacity':'0.5',
					'height':'10.46875rem',
					'-webkit-transform':'translate(0.9375rem,0.625rem)',
					transform:'translate(0.9375rem,0.625rem)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(2).css({
					'zIndex':0,
					'height':'10.46875rem',
					'opacity':'0.5',
					'-webkit-transform':'translateX(-1.875rem)',
					transform:'translateX(-1.875rem)',
					transition:'all 0.5s'
				});
			}else if(lock == 2){
				$(".content").children().eq(0).css({
					'zIndex':0,
					'opacity':'0.5',
					'height':'10.46875rem',
					'-webkit-transform':'translateX(1.875rem)',
					transform:'translateX(1.875rem)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(1).css({
					'zIndex':0,
					'opacity':'0.5',
					'height':'10.46875rem',
					'-webkit-transform':'translate(-0.9375rem,0.625rem)',
					transform:'translate(-0.9375rem,0.625rem)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(2).css({
					'zIndex':2,
					'height':'11.71875rem',
					'opacity':'1',
					'-webkit-transform':'translate(-0.9375rem,-0.625rem)',
					transform:'translate(-0.9375rem,-0.625rem)',
					transition:'all 0.5s'
				});
				
			}else if(lock == 3){
				$(".content").children().eq(0).css({
					'zIndex':0,
					'opacity':'0.5',
					'height':'10.46875rem',
					'-webkit-transform':'translateX(0rem)',
					transform:'translateX(0rem)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(1).css({
					'zIndex':2,
					'opacity':'1',
					'height':'11.71875rem',
					'-webkit-transform':'translate(0,0)',
					transform:'translate(0,0)',
					transition:'all 0.5s'
				});	
				$(".content").children().eq(2).css({
					'zIndex':0,
					'height':'10.46875rem',
					'opacity':'0.5',
					'-webkit-transform':'translate(0,0)',
					transform:'translate(0,0)',
					transition:'all 0.5s'
				});
			}

		}

		
	}

	changeImg();
}