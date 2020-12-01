//后台执行的js  
self.onmessage = function(ev){
	console.log(ev);
	/**
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 
	 * 处理好了，传回给显示层
	 * */
	 self.postMessage("处理好的数据"+ev.data);
	
}