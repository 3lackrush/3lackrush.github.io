/*
 * http://tianji.me/loveme
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
	var date3 = current.getTime() - date.getTime();   //时间差的毫秒数      
 
	//------------------------------
	//计算出相差天数
	var days=Math.floor(date3/(24*3600*1000))

	//计算出小时数
	var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000))
	//计算相差分钟数
	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000))
	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000)

	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}