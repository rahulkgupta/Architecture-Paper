
$("#rietveld-sq").addLayer({
	method: "drawRect",
	strokeStyle: 'black',
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
	strokeStyle: 'black',
	strokeWidth: 10,
	fillStyle: "#000000",
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
	fillStyle: "#000000",
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
	$('#rietveld-sq')
		.animate({"top": "+=200px"});
	$('#ando-sq').hide()
	$('#sim-sq').hide();
	$('#sq1-container').animate({
    left: '+=600',
  }, 1000, function() {
    // Animation complete.
  });
  $('#sq2-container').animate({
    left: '-=1214',
  }, 1000, function() {
    // Animation complete.
  });
  $('#sq3-container').animate({
    top: '-=1000',
  }, 1000, function() {
    // Animation complete.
  });
  $('#sq4-container').animate({
    top: '+=400',
  }, 1000, function() {
    // Animation complete.
  });
})

$('#book').animate({
    opacity: 0.25,
    left: '+=50',
    height: 'toggle'
  }, 5000, function() {
    // Animation complete.
  });