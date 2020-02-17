
var updateTraverserList = (function(){
	"use strict";
	function updateGraphTraversers(mapping){

			var options = "<option value=none selected disabled >  Select the graph  </option> ";

			mapping.forEach(function(map) {
	 		 options += "<option value="+map.traverser+">"+map.label+"</option> \n";
			}); 
			console.log(options);
			document.getElementById("graphInstance").innerHTML = options; 
					
	}

	return {
			updateGraphTraversers : updateGraphTraversers
			};

})();