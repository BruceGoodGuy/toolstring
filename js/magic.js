
$(document).ready(function(){
	function count(){
		var  a = $('input').val()
		var b = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
		var le = b.length
		var c =[]
		if(a<500){
			for(var i = 0; i<a; i++){
			var d =  Math.floor((Math.random() * le-1) + 1)
			c.push(b[d])
			}
			var res ='';
			for(var i = 0; i<c.length;i++){
				res += c[i];
			}
			$('.hehe').fadeIn()
			$("#result").val(res)
			}
	}
	$('.ok').click(function(){
		count()
	})
	$(".numm").keydown(function(event){
		 if (event.keyCode == 13) {
	      	count()
	    }
	})
	$('.copy').click(function(){
		var copyText = document.getElementById("result");
		copyText.select();
		document.execCommand("Copy");
	})
	$(".cou").click(function(){
		$(".bum").hide();
		$(".bem").fadeIn(500);
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		if(isIE){
			$(".paste").fadeIn()
		}
	})
	$(".gen").click(function(){
		$(".bem").hide();
		$(".bum").fadeIn(500);
	})
	function strlen(){
		$('.aa').fadeIn()
		var string = $(".stringa").val()
		$('.aa').html(string.length)
	}
	$(".count").click(function(){
		strlen()
	})
	$(".stringa").keydown(function(event){
		 if (event.keyCode == 13) {
	      	strlen()
	    }
	})
	$(".paste").click(function(event){
		var isIE = /*@cc_on!@*/false || !!document.documentMode;
		if(isIE){
			var clipText = window.clipboardData.getData('Text');
	    	$(".stringa").val(clipText)
		}
	})
	$(".pastea").click(function(){
		$(".stringa").val($("#result").val())
	})
})
