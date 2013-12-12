var util = require('util'),
	graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello", {"color" : "blue", "shape" : "Mdiamond"} );
//n1.set( "color", "blue" );
n1.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
var e = g.addEdge( n1, "World" );
e.set( "color", "red" );


var options = {
	G: {
		minlen: "1",
		splines: false,
		rankdir: "BT",
		nodesep: "0.2"
	}

}
// Generate a PNG output
g.output("png", "properties.png" );