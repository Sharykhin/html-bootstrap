'use strict';

function companySubMenu() {

	function link(scope, element, attrs) {
		element.on('click', function(event){			
			event.preventDefault();	
			$(this).find('.company-info-sub-menu').slideToggle();
		});
	}

	return {
		restrict: 'A',
		link: link
	}
}

module.exports = companySubMenu;