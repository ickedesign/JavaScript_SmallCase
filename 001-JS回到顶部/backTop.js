window.onload=function(){
	var oBtn=document.getElementById('btn');
	var timer=null;
	var iStop=true;
	//点击时，缓冲到顶部
	oBtn.onclick=function(){
		//var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		//document.documentElement.scrollTop=document.body.scrollTop=6;//得这么写才有效
		timer=setInterval(function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			var iSpeed=Math.floor(-scrollTop/2);//得为负数，因为向下取整的关系
			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+iSpeed;
			console.log(iSpeed);
			console.log(scrollTop+iSpeed);
			if(scrollTop==0){
				clearInterval(timer);
			}
			iStop=true;
		},30);
	}
	window.onscroll=function(){//滚动事件的权重比定时器事件大
		//隐藏与显示
		var clientHeight=document.documentElement.clientHeight;
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>clientHeight){
			oBtn.style.display='block';
		}
		else{
			oBtn.style.display='none';
		}
		//缓冲回到顶部时，中断缓冲
		if(!iStop){
			clearInterval(timer);
		}
		iStop=false;
	}

}
