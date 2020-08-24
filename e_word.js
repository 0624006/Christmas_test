
	/*********************/
	/*   svg elan_logo   */
	/*********************/
	var elan_detime = 0.0;
	var elan_word = document.querySelectorAll("#elan_logo #elan_word");
	elan_word.forEach(function (num) {
		num.setAttribute("style", "stroke-dasharray:" + num.getTotalLength() + "; stroke-dashoffset: " + num.getTotalLength() + "; animation:" + `elan_line-anim 10s ease forwards ${elan_detime.toFixed(1)}s`);
		elan_detime += 0.3;
		console.log(num.getTotalLength());
	});
