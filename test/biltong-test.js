QUnit.config.reorder = false;

window.testSuite = function() {

	var tolerance = 0.00000005, withinTolerance = function(v1, v2, msg) {
	    if (Math.abs(v1 - v2) < tolerance) ok(true, msg + "; expected " + v1 + " and got it");
	    else {
	        ok(false, msg + "; expected " + v1 + " got " + v2);
	    }
	};
	
	module("Biltong");
	
    test("quadrant, quadrant 1", function() {
		var p1 = [2,0], p2 = [3,-1], s = Biltong.quadrant(p1,p2);
		equal(s, 1, "quadrant 1 correct");
	});        
    
    test("quadrant, quadrant 2", function() {
		var p1 = [2,0], p2 = [3,1], s = Biltong.quadrant(p1,p2);
		equal(s, 2, "quadrant 2 correct");
	});    
    
    test("quadrant, quadrant 3", function() {
		var p1 = [416.7166748046875, 116.13333129882812], 
            p2 = [95.10000610351562, 391.6666564941406], 
            s = Biltong.quadrant(p1,p2);
        
		equal(s, 3, "quadrant 3 correct");
	});    
    
    test("quadrant, quadrant 3", function() {
		var p1 = [2,0], p2 = [1,1], s = Biltong.quadrant(p1,p2);
		equal(s, 3, "quadrant 3 correct");
	});        
    
    test("quadrant, quadrant 4", function() {
		var p1 = [2,0], p2 = [1,-1], s = Biltong.quadrant(p1,p2);
		equal(s, 4, "quadrant 4 correct");
	});        
    
    test("quadrant, quadrant 1 edge case", function() {
		var p1 = [2,0], p2 = [3,0], s = Biltong.quadrant(p1,p2);
		equal(s, 1, "quadrant 1 correct");
	});        
    
    test("quadrant, quadrant 2 edge case", function() {
		var p1 = [2,0], p2 = [2,1], s = Biltong.quadrant(p1,p2);
		equal(s, 2, "quadrant 2 correct");
	});   
    
    test("quadrant, quadrant 3 edge case", function() {
		var p1 = [2,0], p2 = [1,0], s = Biltong.quadrant(p1,p2);
		equal(s, 4, "quadrant 4 correct");
	});        
    
    test("quadrant, quadrant 4 edge case", function() {
		var p1 = [2,0], p2 = [2,-1], s = Biltong.quadrant(p1,p2);
		equal(s, 1, "quadrant 1 correct");
	});        
        
    test("gradient, horizontal line", function() {
		var p1 = [2,0], p2 = [3,0], m = Biltong.gradient(p1,p2);
		equal(m, 0, "gradient calculated correctly for horizontal line");
	});    

    test("gradient, vertical line", function() {
		var p1 = [0,2], p2 = [0,3], m = Biltong.gradient(p1,p2);
		equal(m, Infinity, "gradient calculated correctly for vertical line");
	});        
    
    test("gradient, quadrant 1", function() {
		var p1 = [2,2], p2 = [3,1], m = Biltong.gradient(p1,p2);
		equal(m, -1, "gradient calculated correctly for simple case");
	});
	test("normal, quadrant 1", function() {
		var p1 = [2,2], p2 = [3,1], m = Biltong.normal(p1,p2);
		equal(m, 1, "normal calculated correctly for simple case");
	});
	test("gradient, quadrant 2", function() {
		var p1 = [2,2], p2 = [3,3], m = Biltong.gradient(p1,p2);
		equal(m, 1, "gradient calculated correctly for simple case");
	});
	test("normal, quadrant 2", function() {
		var p1 = [2,2], p2 = [3,3], m = Biltong.normal(p1,p2);
		equal(m, -1, "normal calculated correctly for simple case");
	});
    test("gradient, quadrant 3", function() {
		var p1 = [2,2], p2 = [1,3], m = Biltong.gradient(p1,p2);
		equal(m, -1, "gradient calculated correctly for simple case");
	});
	test("normal, quadrant 3", function() {
		var p1 = [2,2], p2 = [1,3], m = Biltong.normal(p1,p2);
		equal(m, 1, "normal calculated correctly for simple case");
	});
    test("gradient, quadrant 4", function() {
		var p1 = [2,2], p2 = [1,1], m = Biltong.gradient(p1,p2);
		equal(m, 1, "gradient calculated correctly for simple case");
	});
	test("normal, quadrant 4", function() {
		var p1 = [2,2], p2 = [1,1], m = Biltong.normal(p1,p2);
		equal(m, -1, "normal calculated correctly for simple case");
	});
    test("pointOnLine, quadrant 1", function() {
       var p1 = {x:2,y:2}, p2={x:3, y:1},
           target = Biltong.pointOnLine(p1, p2, Math.sqrt(2));
        withinTolerance(p2.x, target.x, "x is calculated correctly");
        withinTolerance(p2.y, target.y, "y is calculated correctly");
    });
    test("pointOnLine, quadrant 2", function() {
       var p1 = {x:2,y:2}, p2={x:3, y:3},
           target = Biltong.pointOnLine(p1, p2, Math.sqrt(2));
        withinTolerance(p2.x, target.x, "x is calculated correctly");
        withinTolerance(p2.y, target.y, "y is calculated correctly");
    });
    test("pointOnLine, quadrant 3", function() {
       var p1 = {x:2,y:2}, p2={x:1, y:3},
           target = Biltong.pointOnLine(p1, p2, Math.sqrt(2));
        withinTolerance(p2.x, target.x, "x is calculated correctly");
        withinTolerance(p2.y, target.y, "y is calculated correctly");
    });
    test("pointOnLine, quadrant 4", function() {
       var p1 = {x:2,y:2}, p2={x:1, y:1},
           target = Biltong.pointOnLine(p1, p2, Math.sqrt(2));
        withinTolerance(p2.x, target.x, "x is calculated correctly");
        withinTolerance(p2.y, target.y, "y is calculated correctly");
    });
    test("perpendicularLineTo, quadrant 1", function() {
        var p1 = {x:2, y:2}, p2={x:3, y:1}, m = Biltong.gradient(p1, p2),
            l = Biltong.perpendicularLineTo(p1, p2, 2 * Math.sqrt(2));

        withinTolerance(4, l[0].x, "point 1 x is correct");
        withinTolerance(2, l[0].y, "point 1 y is correct");

        withinTolerance(2, l[1].x, "point 2 x is correct");
        withinTolerance(0, l[1].y, "point 2 y is correct");
    });
	test("perpendicularLineTo, quadrant 2", function() {
        var p1 = {x:2, y:2}, p2={x:3, y:3}, m = Biltong.gradient(p1, p2),
            l = Biltong.perpendicularLineTo(p1, p2, 2 * Math.sqrt(2));

        withinTolerance(4, l[0].x, "point 1 x is correct");
        withinTolerance(2, l[0].y, "point 1 y is correct");

        withinTolerance(2, l[1].x, "point 2 x is correct");
        withinTolerance(4, l[1].y, "point 2 y is correct");
    });
    test("perpendicularLineTo, quadrant 3", function() {
        var p1 = {x:2, y:2}, p2={x:1, y:3}, m = Biltong.gradient(p1, p2),
            l = Biltong.perpendicularLineTo(p1, p2, 2 * Math.sqrt(2));

        withinTolerance(2, l[0].x, "point 1 x is correct");
        withinTolerance(4, l[0].y, "point 1 y is correct");

        withinTolerance(0, l[1].x, "point 2 x is correct");
        withinTolerance(2, l[1].y, "point 2 y is correct");
    });
    test("perpendicularLineTo, quadrant 4", function() {
        var p1 = {x:2, y:2}, p2={x:1, y:1}, m = Biltong.gradient(p1, p2),
            l = Biltong.perpendicularLineTo(p1, p2, 2 * Math.sqrt(2));

        withinTolerance(2, l[0].x, "point 1 x is correct");
        withinTolerance(0, l[0].y, "point 1 y is correct");

        withinTolerance(0, l[1].x, "point 2 x is correct");
        withinTolerance(2, l[1].y, "point 2 y is correct");
    });
    test("intersects, with intersection", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 3, y:4, w:3, h:3};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });
    test("intersects, with no intersection", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 13, y:4, w:3, h:3};

    	ok(!Biltong.intersects(r1, r2), "r1 and r2 do not intersect");
    });
    test("intersects, with intersection, equal Y", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 1, y:2, w:3, h:6};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });
    test("intersects, with intersection, equal X", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 2, y:1, w:4, h:6};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });
    test("intersects, identical rectangles", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 2, y:2, w:4, h:6};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });
    test("intersects, corners touch (intersection)", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 6, y:8, w:3, h:3};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });
    test("intersects, one rectangle contained within the other", function() {
    	var r1 = { x: 2, y:2, w:4, h:6},
    		r2 = { x: 0, y:0, w:23, h:23};

    	ok(Biltong.intersects(r1, r2), "r1 and r2 intersect");
    });	
	
// ----------------------------------------- /intersection -----------------------------------------------	

// ----------------------------------------- enclosure --------------------------------------

	test("encloses,  rectangle is enclosed", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:4,y:4,w:3,h:3};
			
		ok(Biltong.encloses(r1, r2), "r2 is enclosed by r1");
	});
	
	test("encloses, rectangle intersects but not enclosed", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:4,y:4,w:13,h:3};
			
		ok(!Biltong.encloses(r1, r2), "r2 is not enclosed by r1");
	});
	
	test("encloses, rectangles not incident at all", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:44,y:44,w:13,h:3};
			
		ok(!Biltong.encloses(r1, r2), "r2 is not enclosed by r1");
	});
	
	test("encloses, rectangle intersects but not enclosed", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:4,y:4,w:13,h:3};
			
		ok(!Biltong.encloses(r1, r2), "r2 is not enclosed by r1");
	});
	
	test("encloses, shared edges by default excluded from enclosure", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:4,y:4,w:8,h:3};
			
		ok(!Biltong.encloses(r1, r2), "r2 is not enclosed by r1");
	});
	
	test("encloses, shared edges included in enclosure via param", function() {
		var r1 = {x:2,y:2,w:10,h:10},
			r2 = {x:4,y:4,w:8,h:3};
			
		ok(Biltong.encloses(r1, r2, true), "r2 is enclosed by r1");
	});
	
	
	
    test("theta", function() {
        var x1 = 0, y1 = 0, 
            x2 = 10, y2 = 0,   // 0 degrees : 0 PI or 2 PI
            x3 = 10, y3 = 10,  // 45 degrees : 0.25 PI
            x4 = 0, y4 = 10,   // 90 degrees : 0.5 PI
            x5 = -10, y5 = 10, // 135 degrees : 0.75 PI
            x6 = -10, y6 = 0,  // 180 degrees : PI
            x7 = -10, y7 = -10, // 225 degress : 1.25 PI
            x8 = 0, y8 = -10,   // 270 degrees : 1.5 PI        
            x9 = 10, y9 = -10;  // 315 degrees : 1.75 PI            
        
        var t2 = Biltong.theta([x1,y1],[x2,y2]),
            t3 = Biltong.theta([x1,y1],[x3,y3]),
            t4 = Biltong.theta([x1,y1],[x4,y4]),
            t5 = Biltong.theta([x1,y1],[x5,y5]),
            t6 = Biltong.theta([x1,y1],[x6,y6]),
            t7 = Biltong.theta([x1,y1],[x7,y7]),
            t8 = Biltong.theta([x1,y1],[x8,y8]),            
            t9 = Biltong.theta([x1,y1],[x9,y9]);            
        
        equal(t2, 0, "t2 is zero degrees");
        equal(t3, 0.25 * Math.PI, "t3 is 45 degrees");
        equal(t4, 0.5 * Math.PI, "t4 is 90 degrees");
        equal(t5, 0.75 * Math.PI, "t5 is 135 degrees");
        equal(t6, Math.PI, "t6 is 180 degrees");
        equal(t7, 1.25 * Math.PI, "t7 is 225 degrees");
        equal(t8, 1.5 * Math.PI, "t8 is 270 degrees");        
        equal(t9, 1.75 * Math.PI, "t9 is 315 degrees");                
    });
};

