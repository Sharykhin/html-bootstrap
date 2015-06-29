'use strict';

function companyInfoMenu() {

	function link(scope, element, attrs) {
		element.on('click', function(event){
			event.preventDefault();
			var that = $(this);			
			$('.advanced-company-info-menu').slideToggle(400, function(){
				$(this).is(':visible')
				? that.find('i').addClass('fa-angle-up').removeClass('fa-angle-down')
				: that.find('i').addClass('fa-angle-down').removeClass('fa-angle-up');
			});
			
		})
	}

	return {
		restrict: 'A',
		link: link
	}
}

module.exports = companyInfoMenu;