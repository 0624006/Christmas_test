
function gift() {
	$('#open_present_top').toggleClass("open_present_top");
	$('#present_bgLight').toggleClass("present_bgLight");
	$('#present_bear').toggleClass("present_bear");
	$('#present_card').toggleClass("present_card");
	$('#present_balloon').toggleClass("present_balloon");
}

function msg() {
	$("#msg_bg").fadeToggle(1000);
	setTimeout(function () {
		$("#msg_bgD").stop(true, true).animate({
			opacity: "toggle"
		}, 0);
		$("#msg_content").toggleClass("msg_contentS");
		$(".msg").toggleClass("msg_contentS");
	}, 200);
}


$(function () {


	var d = "0";
	document.addEventListener("keyup", event => {
		console.log(d);
		switch (d) {
			case "0":
				// Enter
				if (event.isComposing || event.keyCode === 13) {
					d = "1";
					gift();
					msg();
					// document.getElementById("msg").innerHTML=d;//替換成得獎者
					return;
				}

				break;
			case "1":
				// Next
				if (event.isComposing || event.keyCode === 39) {
					// alert(event.code);
					d = "0";
					// $("#msg_bg").fadeToggle(1000);
					gift();
					msg();
					return;
				}
				// New
				if (event.isComposing || event.keyCode === 37) {
					alert("確定重新抽取？");
					return;
				}
				break;
			default:
				break;
		};
	});


	// const fra_bg = document.getElementById("bg");
	// var svg_w = window.getComputedStyle(fra_bg, null).getPropertyValue("width");
	// var svg_h = window.getComputedStyle(fra_bg, null).getPropertyValue("height");
	// console.log(svg_w, svg_h);

	// $(".content").css("width", svg_w).css("height", svg_h);
	// $(".content").style.width=`svg_w`;



	/*********************/
	/*svg MERRY CHRISTMAS*/
	/*********************/
	var logo_detime = 0.0;
	var bg_title = document.querySelectorAll("#bg .T_title");

	bg_title.forEach(function (num) {
		num.setAttribute("style", "stroke-dasharray:" + num.getTotalLength() + "; stroke-dashoffset:" + num.getTotalLength() + "; animation:" + `line-anim 2s ease forwards ${logo_detime.toFixed(1)}s`);
		logo_detime += 0.3;
		console.log(num.getTotalLength());
	});
	logo_detime += 1;
	document.getElementsByClassName("Merry_Christmas_fill")[0].setAttribute("style", "animation:"+`fill 2s linear infinite alternate ${logo_detime.toFixed(1)}s`);
	// $(".Merry_Christmas_fill")
	//bg_title.setAttribute("style", "animation:"+`fill 2s ease forwards ${logo_detime.toFixed(1)}s`);



	/******************/
	/**svg tree_light**/
	/******************/
	var bg_treeLight = document.querySelectorAll("#bg .tree_light");
	var tree_light_D = 0.0;
	bg_treeLight.forEach(function (Tlight) {
		var bg_treeLight_color = Tlight.getAttribute('fill');
		switch (bg_treeLight_color) {
			case '#F44336':
				Tlight.setAttribute("style", "animation:" + `Tlight_R 1s ${tree_light_D}s linear infinite`);
				break;
			case '#FFEE58':
				Tlight.setAttribute("style", "animation:" + `Tlight_Y 1s ${tree_light_D}s linear infinite`);
				break;
			default:
				break;
		};
		tree_light_D += 0.2;
	});



	/*****************/
	/* svg lightball */
	/*****************/
	var bg_TlightBall = document.querySelectorAll("#bg circle");
	bg_TlightBall.forEach(function (lightball) {
		var cir_color = lightball.getAttribute('fill');
		switch (cir_color) {
			case '#0B5494':
				lightball.setAttribute('class', 'ball_1');
				break;
			case '#0AAA1A':
				lightball.setAttribute('class', 'ball_2');
				break;
			case '#CD0000':
				lightball.setAttribute('class', 'ball_3');
				break;
			case '#D6AE00':
				lightball.setAttribute('class', 'ball_4');
				break;
			default:
				break;
		};


	});
});
