/*
* @Author: PC
* @Date:   2017-11-09 12:33:22
* @Last Modified by:   PC
* @Last Modified time: 2017-11-29 20:36:11
*/
$(document).ready(function(){
	$('#fullpage').fullpage({
		verticalCentered:false,
		navigation:true,
		scrollingSpeed: 1500,
		sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
	
	//当进入当前屏幕的时候
	afterLoad:function(anchorLink,index){
		// 向下图片淡入
		$(".down").fadeIn();
		$(this).addClass('animated');
	},

	//当离开某一屏进入到下一屏的动作
	onLeave:function(index,nextindex,direction){
		// 向下图片淡出
		$('.down').fadeOut();

		// 设置由第二个屏进入第三个屏的执行动画
		if(index==2 && nextindex==3){
			//为隐藏的沙发添加一个动画
			$('.screen02 .hide').addClass('animate').on('animationend',function(){
				//当动画执行结束的时候开始执行下面动画
				$('.screen03 .size img:last-child').show();
				$('.screen03 .cart img:last-child').show();
			});

		}else if(index==3 && nextindex==4){
			$('.screen03 .hsofa').addClass('animate').on('animationend',function(){
				//使隐藏的沙发显示
				$('.screen04 .hsofa').show();
				//为购物车添加动画
				$('.screen04 .cart').addClass('animate').on('animationend',function(){
					//使隐藏的沙发显示
					$('.screen04 .cart .hsofa').show();
				}).on('animationend',function(){
					$('.screen04 .text img:last-child').show();
					$('.screen04 .address').show();
				});
			});
			// 为白云添加动画
			$('.screen04 .cloud').addClass('animate');
		}

	},


	//页面结构加载完成后
	afterRender:function(){
		$(".down").on("click",function(){
			$.fn.fullpage.moveSectionDown();
		})
	}


	})
});