$(document).ready(function(){
	$("#el1").draggable();
	$("#el1").resizable();

	$("#sort1").sortable();

	$("#el2").draggable({stack:"#drop1, drop2", revert:true});
	$("#el3").draggable({stack:"#drop1, #drop2"});
	$("#drop1").droppable({
		accept: "#el2, #el3",
		drop:function(event, ui){
			ui.draggable.css("display", "none");
			ui.draggable.css("display", "none");
			$("#drop1").css("background-color", "green");
		}
	});
	$("#drop2").droppable({
		accept:"#el3",
		drop:function(){
			$("#el3").css("display", "none");
			$("#drop2").css("background-color", "green");
		}
	});
});