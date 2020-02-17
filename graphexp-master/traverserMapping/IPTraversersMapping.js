
var mapping = (function(){

function getMapping(){
	
	var mapping = [
	
			{		
			"label" : "zeograph",
			"serverip" : "scylla-zeograph-prod-us-1.zeotap.net",
			"serverport" : 8182,
			"traverser" : "zeograph"
			},
			{
			"label" : "tapadgraph",
			"serverip" : "scylla-zeograph-prod-us-1.zeotap.net",
			"serverport" : 8182,
			"traverser" : "tapadgraph"
			}
	
	];

	return mapping;
				
}
	return {
		getMapping : getMapping
	};
})();