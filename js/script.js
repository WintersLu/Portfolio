
//alert($('#aaa').width());
//alert("im in!");
console.log($('.tile').width());
$(document).ready(function(){
	$(window).resize(function() {
		$('.tile').each(function(){
			$(this).height($(this).width());
		});
	});
})
