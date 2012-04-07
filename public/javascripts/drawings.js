
$("#rietveld-sq").addLayer({
	method: "drawRect",
	strokeStyle: '#080808',
	strokeWidth: 10,
	fillStyle: "#ff2100",
	x: 6, y: 6,
	width: 188,
	height: 188,
	fromCenter: false
})

$('#rietveld-sq').addLayer({
	strokeStyle:'black',
	fillStyle:'black',
	method:'drawText',
  strokeWidth: 1,
  x: 100, y: 50,
  text: "Rietveld",
  align: "center",
  baseline: "middle",
  font: "normal 26pt Verdana, sans-serif"
});

$("#ando-sq").addLayer({
	method: "drawRect",
	strokeStyle: '#080808',
	strokeWidth: 10,
	fillStyle: "#111111",
	x: 6, y: 6,
	width: 188,
	height: 188,
	fromCenter: false
})

$('#ando-sq').addLayer({
	strokeStyle:'white',
	fillStyle:'white',
	method:'drawText',
  strokeWidth: 1,
  x: 100, y: 130,
  text: "Ando",
  align: "center",
  baseline: "middle",
  font: "normal 26pt Verdana, sans-serif"
});
$("#sim-sq").addLayer({
	method: "drawRect",
	strokeStyle: 'ff2100',
	strokeWidth: 10,
	fillStyle: "#080808",
	x: 6, y: 6,
	width: 100-12,
	height: 100-12,
	fromCenter: false
})

$('#rietveld-sq').drawLayers()
$('#ando-sq').drawLayers()
$('#sim-sq').drawLayers()

$("#sq1").addLayer({
	method: "drawRect",
	strokeStyle: 'black',
	strokeWidth: 10,
	fillStyle: "#ff2100",
	x: 6, y: 6,
	width: 188,
	height: 188,
	fromCenter: false
})

$("#sq2").addLayer({
	method: "drawRect",
	strokeStyle: 'black',
	strokeWidth: 10,
	fillStyle: "#ff8900",
	x: 6, y: 6,
	width: 128,
	height: 93,
	fromCenter: false
})

$("#sq3").addLayer({
	method: "drawRect",
	strokeStyle: 'black',
	strokeWidth: 10,
	fillStyle: "#ffffff",
	x: 6, y: 6,
	width: 64,
	height: 95,
	fromCenter: false
})


$("#sq4").addLayer({
	method: "drawRect",
	strokeStyle: 'black',
	strokeWidth: 10,
	fillStyle: "#ffffff",
	x: 6, y: 6,
	width: 64,
	height: 95,
	fromCenter: false
})

$('#sq1').drawLayers();
$('#sq2').drawLayers();
$('#sq3').drawLayers();
$('#sq4').drawLayers();

$('#rietveld-sq').click(function(event) {
	if ($('#rietveld-sq').attr('data-init') == 'true') {
		$('#rietveld-sq')
		.animate({"top": "+=200px"});
		$('#ando-sq').hide()
		$('#sim-sq').hide();
		$('#sq1-container').animate({
	    left: '+=800',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq2-container').animate({
	    left: '-=3214',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq3-container').animate({
	    top: '-=1000',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq4-container').animate({
	    top: '+=1400',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#rietveld-sq').attr('data-init', 'false')
	} else {
		$('#rietveld-sq').animate({
			top: "-=200px"}
			,1000,function() {
				$('#ando-sq').show()
				$('#sim-sq').show();
			});

		$('#sq1-container').animate({
	    left: '-=800',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq2-container').animate({
	    left: '+=3214',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq3-container').animate({
	    top: '+=1000',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq4-container').animate({
	    top: '-=1400',
	  }, 1000, function() {
	   
	  });
	  		
		$('#rietveld-sq').attr('data-init', 'true')
	}
	
})


$('#ando-sq').click(function(event) {
	if ($('#ando-sq').attr('data-init') == 'true') {
		$('#rietveld-sq').hide()
		$('#sim-sq').hide();
		$('body').css('background','#111111')
		$('#ando-sq').css('left', '100px')
		$('#ando-sq').animate({
			top: "+=200px"}
			,1000,function() {
				$('.light').show();
			  $('#ando-sq').attr('data-init', 'false')
			  
			 
			});
	} else {
		$('.light').hide();
		$('body').css('background','white')
		$('#ando-sq').animate({
			top: "-=200px"}
			,1000,function() {
				
				$('#ando-sq').css('left', '-100px')
			  $('#ando-sq').attr('data-init', 'true')
			  $('#rietveld-sq').show()
				$('#sim-sq').show();
			 
			});
	}
	
})

$('#ando-1').hover(function(event) {
	$('#ando-1-text').text('Size')
}, function(event) {
	$('#ando-1-text').text('')
})

$('#ando-2').hover(function(event) {
	$('#ando-2-text').text('Materials')
}, function(event) {
	$('#ando-2-text').text('')
})

$('#ando-2').hover(function(event) {
	$('#ando-2-text').text('Materials')
}, function(event) {
	$('#ando-2-text').text('')
})

$('#ando-3').hover(function(event) {
	$('#ando-3-text').text('Interior')
}, function(event) {
	$('#ando-3-text').text('')
})

$('#ando-4').hover(function(event) {
	$('#ando-4-text').text('Structure & Form')
}, function(event) {
	$('#ando-4-text').text('')
})