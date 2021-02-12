window.onbeforeunload=function(){
	$('.form-anticlear input[type!="radio"], .form-anticlear select, .form-anticlear textarea').each(
		function(index){ 
			if($(this).val()!==null && $(this).val()!==""){
				if($(this).attr('type')=="checkbox"){
					localStorage.setItem("frf_"+$(this).attr('name'),$(this).is(":checked"));
				}else{
					localStorage.setItem("frf_"+$(this).attr('name'),$(this).val());
				}
			}
		}
	);
	$('.form-anticlear input[type="radio"]:checked').each(
		function(index){
			localStorage.setItem("frf_"+$(this).attr('name'),$(this).val());
		}
	);
}
window.onload=function(){
	var radioGroups=[];
	$('.form-anticlear input[type!="radio"], .form-anticlear textarea,.form-anticlear select').each(
		function(index){
			var inputName="frf_"+$(this).attr('name');
			if(localStorage.getItem(inputName)!==null){
				if($(this).attr('type')=="checkbox"){
					$(this).prop('checked', localStorage.getItem(inputName)=='true');
				}else{
					$(this).val(localStorage.getItem(inputName));
				}
			}
		}
	);
	$('.form-anticlear input[type="radio"]').each(
		function(index){
			var inputName="frf_"+$(this).attr('name');
			if(radioGroups.indexOf(inputName)<0 && localStorage.getItem(inputName)!==null){
				radioGroups.push(inputName);
				$("input[type='radio'][name='"+$(this).attr('name')+"'][value='"+localStorage.getItem(inputName)+"']").prop("checked",true);
			}
		}
	);
	localStorage.clear();
}
