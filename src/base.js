var formAntiClear = {}
const event = document.createEvent('Event');
formAntiClear.clear=function(selector=".form-anticlear"){
	document.querySelectorAll(selector).forEach(
		function(item){item.reset();}
	)
}
function isAntiClearNone(element) {
	if (element.className.split(' ').indexOf('form-anticlear-none')>=0) return true;
    return element.parentElement && isAntiClearNone(element.parentElement, 'form-anticlear-none');
}
window.onbeforeunload=function(){
	document.querySelectorAll(".form-anticlear input:not([type='radio']), .form-anticlear select, .form-anticlear textarea").forEach(
		function(item,i){ 
			if(!isAntiClearNone(item) && item.value!==null && item.value!==""){
				if(item.type=="checkbox"){
					localStorage.setItem("frf_"+item.name+"_"+i,item.checked);
				}else{
					localStorage.setItem("frf_"+item.name+"_"+i,item.value);
				}
			}
		}
	);
	document.querySelectorAll('.form-anticlear input[type="radio"]:checked').forEach(
		function(item,i){
			if(!isAntiClearNone(item)){
				localStorage.setItem("frf_"+item.name+"_"+i,item.value);
			}
		}
	);
}
window.onload=function(){
	var radioGroups=[];
	document.querySelectorAll(".form-anticlear input:not([type='radio']), .form-anticlear select, .form-anticlear textarea").forEach(
		function(item,i){
			var inputName="frf_"+item.name+"_"+i;
			if(localStorage.getItem(inputName)!==null){
				if(item.type=="checkbox"){
					item.checked=localStorage.getItem(inputName)=='true';
				}else{
					item.value=localStorage.getItem(inputName);
				}
			}
		}
	);
	document.querySelectorAll('.form-anticlear input[type="radio"]').forEach(
		function(item){
			var inputName="frf_"+item.name+"_"+i;
			if(radioGroups.indexOf(inputName)<0 && localStorage.getItem(inputName)!==null){
				radioGroups.push(inputName);
				document.querySelector("input[type='radio'][name='"+item.name+"'][value='"+localStorage.getItem(inputName)+"']").checked=true;
			}
		}
	);
	localStorage.clear();
	event.initEvent('anticleared', true, true);
}
