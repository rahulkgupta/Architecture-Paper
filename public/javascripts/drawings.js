// $('.carousel-inner').append('<div class="item active"><img src="http://www.jbdesign.it/idesignpro/images/minimalism/10172d1198944136t-tadao-ando-koshino-house-sketchup-cizimleri-andoexteriorppb-jpg.jpg"/></div>')
// $('.carousel-inner').append('<div class="item"><img src="http://ad009cdnb.archdaily.net/wp-content/uploads/2011/08/1313721857-koshino8-mariana.jpg"/></div>')
// $('.carousel-inner').append('<div class="item"><img src="http://ad009cdnb.archdaily.net/wp-content/uploads/2011/08/1313721868-koshino13-gonzalo-875x1000.jpg"/></div>')
// $('.carousel').carousel();
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
		$('body').css('background','#111111')
		$('#ando-sq').css('left', '740px')
		$('.light').show();
		$('#ando-info').show();
		$('#ando-sq').attr('data-init', 'false')
		// $('#ando-sq').animate({
		// 	top: "+=200px"}
		// 	,1000,function() {
			
			  
			 
			// });
	} else {
		$('.light').hide();
		$('#ando-info').hide();
		$('body').css('background','white')
		$('#rietveld-sq').show()
		$('#ando-sq').css('left', '540px')
		$('#ando-sq').attr('data-init', 'true')
		// $('#ando-sq').animate({
		// 	top: "-=200px"}
		// 	,1000,function() {
				
				
			  
		// 		$('#sim-sq').show();
			 
		// 	});
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


$('#ando-1').click(function(event) {
	$("#ando-text").text('Tadao Ando is famous for using concrete in his works. Hence, the Koshino House is built primarily of concrete with six exposed holes for board screws. The concrete is finely coated to create a smooth texture and to add luminosity, contradicting the hardness and roughness of concrete and giving the illusion of the building having a soft and textile surface. Like the Schroder House, the primary purpose of the concrete is to establish space, and the concrete is “ hard and carefully placed” (Details 48) in order to prevent cracks that could lead to the absorption of water. Besides concrete, glass is extensively used to provide natural sunlight to the interior. In fact, one can argue that sunlight itself is a material used in the construction and design of the Kohsino House, as it is an essential component that is experienced by the residents of the home.')
	$('#ando-text').show();
})