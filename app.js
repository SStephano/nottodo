$(document).ready(function(){

	$("form").submit(function(e){
		e.preventDefault();
		var input = $("input").val();

	$("#list-item").append("<ul>" +"<li>"+input+" </li>" 
		+ "<li class='no'><button> No</button></li>"    + "</ul>")
	});


});
	$(document).on("click",".no",function(event){
		event.preventDefault();
		$(this).parent().remove()
});


