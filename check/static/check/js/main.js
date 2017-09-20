;$(function()
{
	'use strict';
	var mainPage=$('.mainPage'),
	mainPage_trigger=$('#mainPage_trigger'),
	mainPage_qiandao=$('.buttom1'),
	mainPage_buqian=$('.buttom2'),
	mainPage_guanli=$('.buttom3'),
	mainPage_back_qd=$('#backbutton1'),
	mainPage_back_bq=$('#backbutton2'),
	mainPage_back_gl=$('#backbutton3'),
	mainPage_buqian_check=$('#check'),
	n_buqian=$('#button_bq'),
	login=$('.Login');
	/**
	*登陆后加载动画
	*
	*/
	function anin(){
		$("#login").animate({"margin-top":"100vh"},function () {
			$("#main").animate({"top":"0"},function () {
				$(".mainPage").animate({"left":"0px"})
			});
		});	
	}

	/**
	*动画效果
	*
	**/
	function qiandao(){
		$(".qiandao").animate({"top":"0"},function () {
		});
	}
	function buqian(){
		$(".buqian").animate({"bottom":"0"},function () {
		});
	}
	function guanli(){
		$(".guanli").animate({"top":"0"},0,function () {
		});
		$(".guanli").animate({"right":"0"},function () {
		});
	}
	function back_qiandao(){
		$(".qiandao").animate({"top":"-100vh"},function () {
		});
	}
	function back_buqian(){
		$(".buqian").animate({"bottom":"-100vh"},function () {
		});
	}
	function back_gl(){
		$(".guanli").animate({"right":"-100vw"},function () {
		});
		$(".guanli").animate({"top":"-100vh"},0,function () {
		});
	}
	anin();
	/**
	*登陆按钮触发事件
	*
	**/
	mainPage_trigger.click(function()
	{
		var data = {};
		data["u"] = $("#u").val();
		data["p"] = $("#p").val();
		data=JSON.stringify(data);
		console.log(data);
		$.ajax({
			data:data,
			type:"post",
			dataType:"json",
			url:"",
			success: function(data){
				if(data){
					if(data["is_error"]==0){
						var ul=$('#message');
						var li = document.createElement("li");
　　　　			//设置 li 属性，如 id
　　                    li.setAttribute("id", "teacher_name");
　　                    li.innerHTML = data["subject"];
　　                    ul[0].appendChild(li);
						anin();
					}
					else{
						altert("账号或密码错误");
					}
				}
			},
			error:function(){
				alert("网络错误");
			},
		})
	});



	var times;
	/**
	*签到按钮触发事件
	*
	**/
	mainPage_qiandao.on('click',function(){
		qiandao();
		bqrcode();
		times = setInterval("bqrcode()",5000);
	})


	mainPage_buqian.on('click',function(){
		buqian();
	})
	mainPage_guanli.on('click',function(){
		guanli();
	})
	mainPage_back_qd.on('click',function(){
		clearTimeout(times);
		back_qiandao();
	})
	mainPage_back_bq.on('click',function(){
		back_buqian();
	})
	mainPage_back_gl.on('click',function(){
		back_gl();
	});


	/**
	*补签按钮触发事件
	*
	**/
	n_buqian.click(function()
	{
		//mainPage_buqian_check[0].removeChild();
		var li = document.createElement("li");
　　　　				//设置 li 属性，如 id
　　                        li.setAttribute("id", "student_mes");
　　                        li.innerHTML = "201492059     苏王荣";
　　                        mainPage_buqian_check[0].appendChild(li);
							var but = document.createElement("input");
							but.setAttribute("class", "but");
							but.setAttribute("id", "rollback");
							but.type="button";
							but.value="撤销";
							mainPage_buqian_check[0].appendChild(but);
							var br=document.createElement("br");
							mainPage_buqian_check[0].appendChild(br);
		var li1=document.createElement("li");
		li1.innerHTML = "-----------------------------------------------------------------------";
		mainPage_buqian_check[0].appendChild(li1);

		var data = {};
		data["student_num"] = $("#student_num").val();
		data=JSON.stringify(data);
		$.ajax({
			data:data,
			type:"post",
			dataType:"json",
			url:"",
			success: function(data){
				if(data){
　　                     //添加 li
　　                       var li = document.createElement("li");
　　　　				//设置 li 属性，如 id
　　                        li.setAttribute("id", "student_mes");
　　                        li.innerHTML = data["student_mes"];
　　                        mainPage_buqian_check[0].appendChild(li);
							var but = document.createElement("input");
							but.setAttribute("class", "but");
							but.setAttribute("id", "rollback");
							but.type="button";
							but.value="撤销";
							mainPage_buqian_check[0].appendChild(but);
							var br=document.createElement("br");
							mainPage_buqian_check[0].appendChild(br);
							var li1=document.createElement("li");
							li1.innerHTML = "-----------------------------------------------------------------------";
							mainPage_buqian_check[0].appendChild(li1);
				}
			},
			error:function(){
				alert("网络错误");
			},
		})
	});
})
	/**
	*二维码生成实体函数
	*
	**/
	
	var i=0;
	function bqrcode(){
		
		// var date = new Date();
		// console.log(date);
		var data = {};
		data['qrcode']=i+"123456";
		var data=JSON.stringify(data);
		$.ajax({
			data:"data",
			type:"post",
			dataType:"json",
			url:"",
			success: function(data){
				if(data){
					$('#qrcode').text(" ");
					$('#qrcode').qrcode({
		    render: "table", //也可以替换为table
		    width: 400,
		    height: 400,
		    text: i+"stz"+i+"wbm"+(++i)+"rym"
				});
			}
				},
			error:function(){
				$('#qrcode').text("正在重新连接....")
				alert("网络错误");
			},
		})
		console.log(data);
	}
	


