;$(function()
{
	'use strict';
	var mainPage=$('.mainPage'),
		mainPage_trigger=$('.but'),
		login=$('.Login');
	mainPage_trigger.on('click',function()
	{
		$(".Login").animate("background-image","url(jialiao.jpg)");
		$("#login").animate({"margin-top":"100vh"},function () {
			$("#main").animate({"top":"0"},function () {
				$(".mainPage").animate({"left":"0px"})
			});
		});	
	})


	/*var request;
	if(window.XMLHttpRequest){
		request=new XMLHttpRequest();//高版本
	}
	else{
		request=new ActiveXObject("Microsoft.XMLHTTP");//低版本
	}*/

})