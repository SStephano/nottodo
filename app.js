$(document).ready(function() {

	$('#add-button').click(function() {
		$('ul').append('<li class="todo"><button class="item">No</button>' + $('input#add-todo').val() + '</li>');
		$('input#add-todo').val("");


	};

});