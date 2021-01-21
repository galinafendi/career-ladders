//Panel triggering

(function() {

    // Slide In Panel - by CodyHouse.co
	var PanelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
	if( PanelTriggers.length > 0 ) {
		for(var i = 0; i < PanelTriggers.length; i++) {
			(function(i){
				var PanelClass = 'js-cd-panel-'+PanelTriggers[i].getAttribute('data-panel'),
					panel = document.getElementsByClassName(PanelClass)[0];
				// open panel when clicking on trigger btn
				PanelTriggers[i].addEventListener('click', function(event){
					event.preventDefault();
					addClass(panel, 'cd-panel--is-visible');
				});
				//close panel when clicking on 'x' or outside the panel
				panel.addEventListener('click', function(event){
					if( hasClass(event.target, 'js-cd-close') || hasClass(event.target, PanelClass)) {
						event.preventDefault();
						removeClass(panel, 'cd-panel--is-visible');
					}
				});
			})(i);
		}
	}
	//class manipulations - needed if classList is not supported
	//https://jaketrent.com/post/addremove-classes-raw-javascript/
	function hasClass(el, className) {
	  	if (el.classList) return el.classList.contains(className);
	  	else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
	}
	function addClass(el, className) {
	 	if (el.classList) el.classList.add(className);
	 	else if (!hasClass(el, className)) el.className += " " + className;
	}
	function removeClass(el, className) {
	  	if (el.classList) el.classList.remove(className);
	  	else if (hasClass(el, className)) {
	    	var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	    	el.className=el.className.replace(reg, ' ');
	  	}
	}

})();

