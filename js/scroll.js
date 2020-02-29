
$(function(){
//	alert("1");
	var controller = new ScrollMagic.Controller();
	$("#paopaolong").click(function(event){
			$(".readmore").attr("id","paopaolong1")
			$(".square .content h2").text("泡泡龙")
			$(".square .content .title").text("遗传性性表皮分解性水疱症")
			$(".square .content .jibing-detail").text("")
			$(".readmore").show();
		})
		
		$("#yueliang").click(function(){
			$(".readmore").attr("id","yueliang1")
			$(".square .content h2").text("月亮孩子")
			$(".square .content .title").text("白化病")
			$(".square .content .jibing-detail").text("")
			$(".readmore").show();
		})
		
		$("#qie").click(function(){
			$(".readmore").attr("id","qie1")
			$(".square .content h2").text("企鹅人")
			$(".square .content .title").text("脊髓小脑性共济失调")
			$(".square .content .jibing-detail").text("")
			$(".readmore").show();
		})
		
		$("#tianshi").click(function(){
			$(".readmore").attr("id","tianshi1")
			$(".square .content h2").text("天使宝贝")
			$(".square .content .title").text("天使综合征")
			$(".square .content .jibing-detail").text("")
			$(".readmore").show();
		})
		
		$("#muou").click(function(){
			$(".readmore").attr("id","tianshi1")
			$(".square .content h2").text("牵线木偶人")
			$(".square .content .title").text("多发性硬化")
			$(".square .content .jibing-detail").text("")
			$(".readmore").show();
		})
		
		$(".readmore").click(function(event){
			var moreid=event.target.id
			if (moreid=="paopaolong1"){
				$(".jibing-detail").text('泡泡龙，原名为遗传性大疱性表皮松解症。患儿全身各部位皮肤都有可能起水疱、血疱，较严重者口腔、食道、肠胃等黏膜部位也有水疱发生，甚至发生皮肤癌。')
			} else if(moreid=="yueliang1"){
				$(".jibing-detail").text('“月亮孩子”代指“白化病”，患者缺乏黑色素，因此他们的皮肤、毛发、眼睛都会呈现出白化的现象。由于白天极易被太阳晒伤，他们往往只能在夜晚外出活动，所以被称为“月亮孩子”。 ')
			} else if(moreid=="qie1"){
				$(".jibing-detail").text('“企鹅家族”是“脊髓小脑性共济失调”的代名词，患者发病后行走非常不稳，犹如一只企鹅，因此被称为“企鹅家族”。一旦发病，犹如刹车失灵的汽车，在10-20年里奔向生命的终点。')
			}else if(moreid=="tianshi1"){
				$(".jibing-detail").text('天使综合征患者的智力、语言，以及精神上等各方面发育延迟，会不时出现暴发性笑或微笑、表情愉悦、拍手等行为。')
			} else if(moreid=="muou1"){
				$(".jibing-detail").text('牵线木偶人，是“多发性硬化症”的别称。患者会出现视力下降、肢体无力，半数患者15年后无法独立行走。')
			}
			
			$(".readmore").hide();
		
		})
		
		new ScrollMagic.Scene({offset: 1080,triggerHook: 0, duration:6220})
								.setPin(".jibing5")
								
								.addTo(controller);
		
		new ScrollMagic.Scene({offset: 2000,triggerHook: 0, duration: 700})
								.on("enter",function(){
			$(".square .content h2").text("");
			$(".square .content .title").html("上述这些疾病都是“罕见病”<br/>这些病有着好听的名称<br/>背后却有着无数辛酸的故事");
			$(".square .content .jibing-detail").text("");
			$(".readmore").hide(2);
		})				
							.addTo(controller);
		
		new ScrollMagic.Scene({offset: 2700,triggerHook: 0, duration: 700})
								.on("enter",function(){
			$(".square .content h2").text("");
			$(".square .content .title").html("周密、山山也是罕见病患者之一<br/>虽然可能面临着终身处于疾病的阴影下<br/>但他们都选择勇敢面对<br/>让我们通过一段视频走进他们的世界");
			$(".square .content .jibing-detail").text("");
			$(".readmore").hide();
		})				
							.addTo(controller);

		
		
		new ScrollMagic.Scene({offset: 3400,triggerHook: 0})
		.setClassToggle(".square", "invisible")
		.addTo(controller);
		
								

		new ScrollMagic.Scene({offset: 2700,triggerHook: 0})
		.setClassToggle("#paopaolong, #yueliang, #tianshi, #qie, #muou", "invisible")
		.addTo(controller);
		
		
		
		new ScrollMagic.Scene({offset: 3500,triggerHook: 0,duration:700})
		.on("enter",function(){
			$("video").removeClass("invisible")
		})
		.on("leave",function(){
			$("video").addClass("invisible")
		}).addTo(controller);
		
		
		
		new ScrollMagic.Scene({offset: 4300,triggerHook: 0,duration:600})
		.on("enter",function(){
			$(".square .content .title").html("视频中的周密、山山不只是个例<br/>中国有千千万万的罕见病患者<br/>终身活在“罕见病”的阴影中<br/>他们需要社会的理解与支持");
			$(".square").removeClass("invisible")
		})
		.on("leave",function(){
			$(".square").addClass("invisible")
		}).addTo(controller);
		
		new ScrollMagic.Scene({offset: 5600,triggerHook: 0,duration:3000})
		.on("enter",function(){
			$(".square2").removeClass("invisible")
		})
		.on("leave",function(){
			$(".square2").addClass("invisible")
		}).addTo(controller);
		
		new ScrollMagic.Scene({offset: 5800,triggerHook: 0,duration:700})
		.on("enter",function(){
			$(".square2 p").html("我们翻阅了近几年等官方报告，看完了知乎上533条罕见病患者和家属的倾诉，并采访了5位罕见病公益组织的创始人与负责人。");
		}).addTo(controller);
		
		
		new ScrollMagic.Scene({offset: 6500,triggerHook: 0,duration:700})
		.on("enter",function(){
			$(".square2 p").html("他们之中有人是罕见病患者，有人是罕见病家属。他们最初经历过内心的波折与煎熬，但最终都选择了与“疾病”和平共处。我们希望用数据和故事，呈现出他们，也是当下中国罕见病患者的部分侧面。");
		}).addTo(controller);
		
		new ScrollMagic.Scene({offset: 7200,triggerHook: 0,duration:700})
		.on("enter",function(){
			$(".square2 p").html("您可以选择下面的“阅读报道原文”，了解采访中的故事；也可以选择“罕见病患者故事数据库”，听听患者如何在知乎上讲述自己的经历。");
			$(".square2 a").removeClass("invisible");
		}).addTo(controller);
	
	new ScrollMagic.Scene({offset: 8200,triggerHook: 0, duration: 5200})
		.setPin("#allanswer1")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 8200,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step1").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step1").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 8900,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step2").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step2").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 9600,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step3").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step3").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 10300,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step4").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step4").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 11000,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step5").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step5").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 11700,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step6").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step6").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 12400,triggerHook: 0,duration:700})
		.on("enter", function(){
			$("p.step7").removeClass("notshow")
  })
  .on("leave", function(){
			$("p.step7").addClass("notshow")
 
  }).addTo(controller);
		
		new ScrollMagic.Scene({offset: 9000,triggerHook: 0})
		.setClassToggle("#qita rect", "invisible2")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 9700,triggerHook: 0})
		.setClassToggle("#luanshuo rect", "invisible2")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 10400,triggerHook: 0})
		.setClassToggle("#feihanjianbing rect", "invisible2")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 11100,triggerHook: 0})
		.setClassToggle("#weitiji rect", "invisible2")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 11700,triggerHook: 0})
		.setClassToggle("#weizhi rect", "invisible2")
		
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 12400,triggerHook: 0})
		.setClassToggle("#not121 rect", "invisible2")
		
		.addTo(controller);
	
	new ScrollMagic.Scene({offset: 16680,triggerHook: 0, duration: 5200})
								.setPin("#zhengzhuang1")
								
		
								.addTo(controller);
		  
	
		
		new ScrollMagic.Scene({
							offset: 16780,
							duration: 4500, 
			// show, when scrolled 10% into view
							 // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene1", "visiblestart")// add class to reveal
						
						.addTo(controller);
		
		new ScrollMagic.Scene({
							offset: 16700,
							duration: 4400, // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene1", "visible")
		
						.addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:16700,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('我们发现大量的知乎用户都会在开头谈及罕见病的病情对自己的身体所造成的影响，这种影响尤其集中于“行动”、“形象”、“饮食”、“智力障碍”等四个方面。')
		  }).addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:17400,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('“行动受限”表示由于疾病造成患者无法像正常人一样进行日常的基本运动。')
			  
		  }).addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:18100,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('“形象受损”表示由于疾病造成的皮肤破损、体型体态异常化等')
			  
		  }).addTo(controller);
		  
		   new ScrollMagic.Scene({
			  offset:18800,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('“饮食受限”表示患者由于疾病的症状而无法饮用部分食物，否则会加重病情')
			  
		  }).addTo(controller);
		  
		     new ScrollMagic.Scene({
			  offset:19500,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('“其它影响”还包括器官受损、排泄问题、生育问题等。')
			  
		  }).addTo(controller);
		  
		   new ScrollMagic.Scene({
			  offset:20200,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene1 p').html('点击下方的小方块，你可以看到罕见病患者们如何描述自己的病情。每个区域的深色方块可以看到具体描述。')
		  }).addTo(controller);
	
	new ScrollMagic.Scene({offset: 25070,triggerHook: 0, duration: 5400})
								.setPin("#zhiliao1")
								
		
								.addTo(controller);
//		  
//	
//		
		new ScrollMagic.Scene({
							offset: 25200,
							duration: 4300, 
			// show, when scrolled 10% into view
							 // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene2", "visiblestart")// add class to reveal
						
						.addTo(controller);
		
		new ScrollMagic.Scene({
							offset: 25300,
							duration: 4200, // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene2", "visible")
		
						.addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:25500,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene2 p').html('关于治疗困境，许多知乎回答都谈及罕见病“难确诊”、“无法治疗”、“治疗费用昂贵”、“药物可及性差”等问题。')
		  }).addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:26200,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene2 p').html('他们往往要在全国跑过许多家医院才可以最终确诊自己的病情，但病情确诊并不代表着他们一定有药可治；即便有药可治，也不代表他们可以负担地起药物；即便负担地起药物，也不代表这个药物就一定在中国上市')
			  
		  }).addTo(controller);
		  
		  
		   new ScrollMagic.Scene({
			  offset:26900,
			  duration:1000,
		  }).on("enter",function(){
			  $('#scene2 p').html('甚至有罕见病患者病急乱投医，相信所谓的偏方进行治疗，反而加重了病情')
			  
		  }).addTo(controller);
		  
		  
		  new ScrollMagic.Scene({
			offset: 27200,
//    		triggerHook: 0.9,
			duration:500,
		}).on("enter",function(){
			  $('#zhil32,#zhil36,#zhil42,#zhil46,#zhil78').addClass("active")
		  })
		  .on("leave",function(){
			  $('#zhil32,#zhil36,#zhil42,#zhil46,#zhil78').removeClass("active")
		  })
		
		.addTo(controller);
		  
		  
		  
//		  
//		  	new ScrollMagic.Scene({
//							offset: 27600,
//							duration: 1700, 
//			// show, when scrolled 10% into view
//							 // hide 10% before exiting view (80% + 10% from bottom)
//						})
//						.setClassToggle("#scene2", "visiblestart")// add class to reveal
//					
//						.addTo(controller);
//		
//		new ScrollMagic.Scene({
//							offset: 27700,
//							duration: 1600, // hide 10% before exiting view (80% + 10% from bottom)
//						})
//						.setClassToggle("#scene2", "visible")
//	
//						.addTo(controller);
		  
		  
		  
		   new ScrollMagic.Scene({
			  offset:27900,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene2 p').html('其中一名家属在知乎上谈及自己的父亲患上罕见癌症，没有医保，治疗21天就要1万，家属各处奔走求医，每个家庭基本快成为了一个罕见病研究小型组织。更可怕的是，很多医生因为对疾病的不了解，给出了很多错误的治疗方案。')
			  
		  }).addTo(controller);
		  
		     new ScrollMagic.Scene({
			  offset:28600,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene2 p').html('还有一名旁观者讲道：“拿视网膜母细胞瘤来举例，做介入治疗所需的一种药叫马法兰，这种药因为当年定价过低，市场也小，没有利润而退出了中国市场，至今还没有在中国上市，家长们只能靠代购或者在‘黑市’上买药，医院用这种药开展治疗也需要承担很大的风险。”')
			  
		  }).addTo(controller);
		  
	new ScrollMagic.Scene({offset: 32300,triggerHook: 0, duration: 3000})
								.setPin("#ditu1")
								
								.addTo(controller);
		
		new ScrollMagic.Scene({offset: 32000,triggerHook: 0, duration: 1500})
		.on("enter",function(){
			$("#dituall").html('<img src="images/机构比.png" style="width:1000px">')
		})
		.addTo(controller);
		
		new ScrollMagic.Scene({offset: 33500,triggerHook: 0, duration: 1500})
		.on("enter",function(){
			$("#dituall").html('<img src="images/文献比.png" style="width:1000px">')
		})
		.addTo(controller);
		
//		new ScrollMagic.Scene({offset: 20490,triggerHook: 0, duration: 500})
//		.on("enter",function(){
//			$("#jiaohuditu").removeClass("invisible")
//		})
//		.on("leave",function(){
//			$("#jiaohuditu").addClass("invisible")
//		})
//		.addTo(controller);
//	
		new ScrollMagic.Scene({offset: 36160,triggerHook: 0, duration: 2000})
								.setPin("#dianjiditu")
								.addTo(controller);
		new ScrollMagic.Scene({offset: 36160,triggerHook: 0})
		.on("enter",function(){
			$(".ditubing1").removeClass("invisible")
		})
		.addTo(controller);
	
	
	$("#baihuabing").click(function(){
//				alert("1")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing1").removeClass("invisible");
				
			})
			
			$("#gexiebing").click(function(){
//				alert("2")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing2").removeClass("invisible");
				
			})
			
			$("#xueyoubing").click(function(){
//				alert("3")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing3").removeClass("invisible");
				
			})
			
			$("#ciwawabing").click(function(){
//				alert("4")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing4").removeClass("invisible");
				
			})
			
			$("#tianshizonghezheng").click(function(){
//				alert("5")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing5").removeClass("invisible");
				
			})
			
			$("#mafanzonghezheng").click(function(){
//				alert("6")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing6").removeClass("invisible");
				
			})
			
			$("#zhongzhengjiwuli").click(function(){
//				alert("7")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing7").removeClass("invisible");
				
			})
			
			$("#hengtingdunwudaozheng").click(function(){
//				alert("8")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing8").removeClass("invisible");
				
			})
			
			$("#Alport").click(function(){
//				alert("9")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing9").removeClass("invisible");
				
			})
			
			$("#yichuanxingdapaoxingbiaopisongjiezheng").click(function(){
//				alert("10")
				$("#jutijibing img").addClass("invisible");
				$(".ditubing10").removeClass("invisible");
				
			})
			
			new ScrollMagic.Scene({offset: 41100,triggerHook: 0, duration: 2200})
								.setPin("#ronghe1")
								
								.addTo(controller);
//		  
//	
//		
		new ScrollMagic.Scene({
							offset: 41300,
							duration: 1600, 
			// show, when scrolled 10% into view
							 // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene3", "visiblestart")// add class to reveal
					
						.addTo(controller);
		
		new ScrollMagic.Scene({
							offset: 41400,
							duration: 1500, // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene3", "visible")
		
						.addTo(controller);
//		  
		  new ScrollMagic.Scene({
			  offset:41400,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene3 p').html('由于社会对罕见病的认知程度低，很多人害怕接触罕见病患者，也无法对他们的病症给予足够的理解，旁人的目光、嘲笑、远离，以及校园、职场和情场上的歧视给这些患者带来了难以想象的二次伤害。')
		  }).addTo(controller);
//		  
		  new ScrollMagic.Scene({
			  offset:42100,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene3 p').html('部分患者在回答中说到“以前也出过血友病患者被取消录取的，还不是个例”、“男朋友知道我的病后，分手了”、“像样的企业没人愿意用我”、“没人理解，觉得你是异类”')
		  }).addTo(controller);
	
	new ScrollMagic.Scene({offset: 46900,triggerHook: 0, duration: 3000})
								.setPin("#xinli1")
								
								.addTo(controller);
////		  
////	
////		
		new ScrollMagic.Scene({
							offset: 47100,
							duration: 2500, 
			// show, when scrolled 10% into view
							 // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene4", "visiblestart")// add class to reveal
					
						.addTo(controller);
		
		new ScrollMagic.Scene({
							offset: 47200,
							duration: 2400, // hide 10% before exiting view (80% + 10% from bottom)
						})
						.setClassToggle("#scene4", "visible")
	
						.addTo(controller);
////		  
		  new ScrollMagic.Scene({
			  offset:47500,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene4 p').html('家属的情绪问题往往容易被社会所忽视，但家属往往承担着不小于患者的压力，尤其对于那些因病带来智力障碍的患者家属而言，这一情况更为严重。')
		  }).addTo(controller);
//		  
		  new ScrollMagic.Scene({
			  offset:48200,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene4 p').html('在知乎的回答中，部分患者选择与疾病和平共处后，会呈现出乐观，以及对生活充满感激的心态；但对于家属而言，他们更多地只是单纯呈现出负面的情绪，为患者以及家庭的未来倍感担忧。')
		  }).addTo(controller);
		  
		  new ScrollMagic.Scene({
			  offset:48900,
			  duration:700,
		  }).on("enter",function(){
			  $('#scene4 p').html('患者家属在回答中说道，“从害怕与无助，到自责与怀疑，看到别人的孩子会失落，去母校散步会因为想到以后自己的女儿也许无法体验大学生活难过”、“我好怕过几年她（母亲）连自己的女儿都忘了”等等。）')
		  }).addTo(controller);
//		  
})