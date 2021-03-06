jQuery.cssHooks['scale'] = {
	get: function(elem, computed, extra) {
		var match = window.getComputedStyle(elem).transform.match("[0-9\.]+")
		if (match) {
			var scale = parseFloat(match[0])
			return scale
		} else {
			return 1.0
		}
	},
	set: function(elem, val) {
		//var transforms = $(elem).css("transform").match(/[0-9\.]+/g)
		var transforms = window.getComputedStyle(elem).transform.match(/[0-9\.]+/g)
		if (transforms) {
			transforms[0] = val
			transforms[3] = val
			//$(elem).css("transform", 'matrix('+transforms.join(", ")+")")
			elem.style.transform = 'matrix('+transforms.join(", ")+')'
		} else {
			elem.style.transform = "scale("+val+")"
		}
	}
}

jQuery.fx.step.scale = function(fx) {
	jQuery.cssHooks['scale'].set(fx.elem, fx.now)
};