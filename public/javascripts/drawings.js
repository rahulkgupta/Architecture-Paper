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

// $("#sq3").addLayer({
// 	method: "drawRect",
// 	strokeStyle: 'black',
// 	strokeWidth: 10,
// 	fillStyle: "#ffffff",
// 	x: 6, y: 6,
// 	width: 64,
// 	height: 95,
// 	fromCenter: false
// })


// $("#sq4").addLayer({
// 	method: "drawRect",
// 	strokeStyle: 'black',
// 	strokeWidth: 10,
// 	fillStyle: "#ffffff",
// 	x: 6, y: 6,
// 	width: 64,
// 	height: 95,
// 	fromCenter: false
// })

$('#sq1').drawLayers();
$('#sq2').drawLayers();
// $('#sq3').drawLayers();
// $('#sq4').drawLayers();