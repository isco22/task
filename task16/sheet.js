function get(p){
	var num=document.getElementById('num'); //获取输入框的节点
	var num_list=document.getElementById('bottom'); //获取输出节点
	if(num.value==""){ //过滤空元素
		alert("请输入数字");
	}
	else if(!isNaN(num.value)){
		if(p==0){
			var add_p=document.createElement("p");//创造一个P节点
			add_p.innerHTML=num.value;
			num_list.appendChild(add_p);//在父节点下插入一个子节点
			add_p.addEventListener('click',function(){
				num_list.removeChild(this);
			})
		}
		else{
			var add_p=document.createElement("p");
			add_p.innerHTML=num.value;
			num_list.insertBefore(add_p,num_list.firstChild);//在父节点下的第一个子节点前插入新节点
			add_p.addEventListener('click',function(){
				num_list.removeChild(this);
			})
		}
	}
	else{	
		alert("格式不对，请重新输入数字");
	}
}

function out(p){
	var num=document.getElementById('bottom');
	var childs=num.childNodes;
	if(p==0){
		num.removeChild(childs[0]);	
	}
	else{
		num.removeChild(childs[childs.length-1]);	
	}
}
