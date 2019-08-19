$(function(){
	
})
function isAuthenticate(){
	var userinfo = JSON.parse(localStorage.getItem('userinfo'));
	if(userinfo == null){
		window.location.href = '../user/login.html';
	}else{
		$('#username').html(userinfo.username);
	}
}
$(document).on('click','#logout',function(e){
	e.preventDefault();
	localStorage.removeItem('userinfo');
	window.location.href = '../user/login.html';
})
var validation = {
	empty : function (data, name, message){
		$(".validationMessage").empty();
		if(data == ''){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		return true;
	},
	minLength : function(data, length, name, message){
		$(".validationMessage").empty();
		if(data.length < length){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		return true;
	},
	minMaxLength : function(data, min, max, name, message){
		$(".validationMessage").empty();
		console.log(data)
		if(data.length < min){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		if(data.length > max){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		return true;
	},
	patternMatch : function (data, pattern, name, message){
		$(".validationMessage").empty();
		if(data.match(pattern)){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		return true;
	},
	same : function(data, secdata, name, message){
		$(".validationMessage").empty();
		if(data != secdata){
			$('input[name='+name+']').after("<span class='validationMessage' style='color:red;'>"+message+"</span>");
			return false;
		}
		return true;
	},
}