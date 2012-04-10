// $('.carousel-inner').append('<div class="item active"><img src="http://www.jbdesign.it/idesignpro/images/minimalism/10172d1198944136t-tadao-ando-koshino-house-sketchup-cizimleri-andoexteriorppb-jpg.jpg"/></div>')
// $('.carousel-inner').append('<div class="item"><img src="http://ad009cdnb.archdaily.net/wp-content/uploads/2011/08/1313721857-koshino8-mariana.jpg"/></div>')
// $('.carousel-inner').append('<div class="item"><img src="http://ad009cdnb.archdaily.net/wp-content/uploads/2011/08/1313721868-koshino13-gonzalo-875x1000.jpg"/></div>')
// $('.carousel').carousel();

$("a[rel^='prettyPhoto']").prettyPhoto();
$("a[rel^='rprettyPhoto']").prettyPhoto();

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
		$('#thesis').hide()
		$('#title').hide()
		$('#sim-sq').hide();
		$('#sq1-container').animate({
	    left: '+=1200',
	  }, 1000, function() {
	    // Animation complete.
	  });
	  $('#sq2-container').animate({
	    left: '-=3214',
	  }, 1000, function() {
	  	$('#rietveld-text').text('The Rietveld Schroder House was designed in 1922 and built in 1924 in Utrecht, Netherlands. While Gerrit Rietveld was the “architect” of the house and Mrs. Truus Schroder was the “client,” both individuals were critical to the design of the building. In fact, the two kindled a relationship, and Rietveld ended up living in the house with Schroder. The house was initially commissioned by the recently widowed Schroder, who desired to live in a house smaller than the one she had previously lived in. The house was designed with a focus on De Stijl and practicality, making it a marvel of the modern era.')
	  	$('#rietveld-header').text('Main')
	  	$('#rietveld-info').show();
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
		$('body').css('background','#ffffff')
		$('#rietveld-sq').animate({
			top: "-=200px"}
			,1000,function() {
				$('#ando-sq').show()
				$('#sim-sq').show();
				$('#thesis').show()
				$('#title').show()
			});

		$('#sq1-container').animate({
	    left: '-=1200',
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
	  $('#rietveld-info').hide();
		$('#rietveld-sq').attr('data-init', 'true')
	}
	
})


$('#ando-sq').click(function(event) {
	if ($('#ando-sq').attr('data-init') == 'true') {
		$('#rietveld-sq').hide()
		$('#thesis').hide()
		$('#title').hide()
		$('body').css('background','#111111')
		$('#ando-sq').css('left', '740px')
		$('.light').show();
		$('#ando-info').show();
		$('#ando-sq').attr('data-init', 'false')
		// $('#ando-sq').animate({
		// 	top: "+=200px"}
		// 	,1000,function() {
		$('#ando-text').text('The Koshino House was designed by Tadao Ando, commissioned by the designer Koshin, and built in the early 1980s in Ashiya, Japan. Ando, a modernist, believed in individualism, an ideal opposite to the philosophies surround De Stijl. His individualism is seen in his work ethic, as assumes responsibility for his actions and goes through every detail of his firm’s designs personally. As seen by the design of the Koshino House, he is a modernist, during a time when everyone else has been swept by the Post Modern movement, showing Ando’s testament to individualism and aversion to conformity. A celebrated architect from Osaka, Ando is a, “Master of geometry and proportions that sustains a superb sense of proportion.” (Matsuba 9)')
		$('#ando-1').attr('data-clicked', 'true')
		$('#ando-1').css('background','#ffff99')
		$('#ando-1-text').text('Main')
			  
			 
			// });
	} else {
		$('.light').hide();
		$('#ando-info').hide();
		$('body').css('background','white')
		$('#rietveld-sq').show()
		$('#thesis').show()
		$('#title').show()
		$('#ando-sq').css('left', '540px')
		$('#ando-sq').attr('data-init', 'true')
		// $('#ando-sq').animate({
		// 	top: "-=200px"}
		// 	,1000,function() {
		$('#ando-1').attr('data-clicked', 'false')
		$('#ando-3').attr('data-clicked', 'false')
		$('#ando-2').attr('data-clicked', 'false')
		$('#ando-4').attr('data-clicked', 'false')		
		$('#ando-1').css('background','#080808')
		$('#ando-3').css('background','#080808')
		$('#ando-2').css('background','#080808')
		$('#ando-4').css('background','#080808')		
		$('#ando-2-text').text('')
		$('#ando-3-text').text('')
		$('#ando-4-text').text('')
		$('#ando-1-text').text('')
		// 		$('#sim-sq').show();
			 
		// 	});
	}
	
})

$('#ando-1').hover(function(event) {
	$('#ando-1').css('background','#ffff99')
	$('#ando-1-text').text('Main')
}, function(event) {
	if ($('#ando-1').attr('data-clicked') != 'true') {
		$('#ando-1-text').text('')
		$('#ando-1').css('background','#080808')
	}
})

$('#ando-2').hover(function(event) {
	$('#ando-2').css('background','#ffff99')
	$('#ando-2-text').text('Materials')
}, function(event) {
	if ($('#ando-2').attr('data-clicked') != 'true') {
		$('#ando-2-text').text('')
		$('#ando-2').css('background','#080808')
	}
})

$('#ando-3').hover(function(event) {
	$('#ando-3').css('background','#ffff99')
	$('#ando-3-text').text('Interior')
}, function(event) {
	if ($('#ando-3').attr('data-clicked') != 'true') {
		$('#ando-3-text').text('')
		$('#ando-3').css('background','#080808')
	}
	
})

$('#ando-4').hover(function(event) {
	$('#ando-4').css('background','#ffff99')
	$('#ando-4-text').text('Structure & Form')
}, function(event) {
	if ($('#ando-4').attr('data-clicked') != 'true') {
		$('#ando-4-text').text('')
		$('#ando-4').css('background','#080808')
	}
})

$('#ando-1').click(function(event) {
	$('#ando-1').attr('data-clicked', 'true')
	$('#ando-3').attr('data-clicked', 'false')
	$('#ando-2').attr('data-clicked', 'false')
	$('#ando-4').attr('data-clicked', 'false')
	$('#ando-2-text').text('')
	$('#ando-3-text').text('')
	$('#ando-4-text').text('')
	$('#ando-1').css('background','#ffff99')
	$('#ando-3').css('background','#080808')
	$('#ando-2').css('background','#080808')
	$('#ando-4').css('background','#080808')
	$("#ando-text").text('The Koshino House was designed by Tadao Ando, commissioned by the designer Koshin, and built in the early 1980s in Ashiya, Japan. Ando, a modernist, believed in individualism, an ideal opposite to the philosophies surround De Stijl. His individualism is seen in his work ethic, as assumes responsibility for his actions and goes through every detail of his firm’s designs personally. As seen by the design of the Koshino House, he is a modernist, during a time when everyone else has been swept by the Post Modern movement, showing Ando’s testament to individualism and aversion to conformity. A celebrated architect from Osaka, Ando is a, “Master of geometry and proportions that sustains a superb sense of proportion.” (Matsuba 9)')
	$('#ando-text').show();
})

$('#ando-2').click(function(event) {
	$('#ando-2').attr('data-clicked', 'true')
	$('#ando-3').attr('data-clicked', 'false')
	$('#ando-1').attr('data-clicked', 'false')
	$('#ando-4').attr('data-clicked', 'false')
	$('#ando-2').css('background','#ffff99')
	$('#ando-1-text').text('')
	$('#ando-3-text').text('')
	$('#ando-4-text').text('')
	$('#ando-1').css('background','#080808')
	$('#ando-3').css('background','#080808')
	$('#ando-4').css('background','#080808')
	$("#ando-text").text('Tadao Ando is famous for using concrete in his works. Hence, the Koshino House is built primarily of concrete, a feat Rietveld could not afford, with six exposed holes for board screws. The concrete is finely coated to create a smooth texture and to add luminosity, contradicting the hardness and roughness of concrete and giving the illusion of the building having a soft and textile surface. Like the Schroder House, the primary purpose of the construction material, in this case concrete, is to establish space, and the concrete is “ hard and carefully placed” (Details 48) in order to prevent cracks that could lead to the absorption of water. Besides concrete, glass is extensively used to provide natural sunlight to the interior. In fact, one can argue that sunlight itself is a material used in the construction and design of the Kohsino House, as it is an essential component that is experienced by the residents of the home.')
	$('#ando-text').show();
})

$('#ando-3').click(function(event) {
	$('#ando-3').attr('data-clicked', 'true')
	$('#ando-1').attr('data-clicked', 'false')
	$('#ando-2-text').text('')
	$('#ando-1-text').text('')
	$('#ando-4-text').text('')
	$('#ando-2').attr('data-clicked', 'false')
	$('#ando-4').attr('data-clicked', 'false')
	$('#ando-3').css('background','#ffff99')
	$('#ando-1').css('background','#080808')
	$('#ando-2').css('background','#080808')
	$('#ando-4').css('background','#080808')
	$('#ando-3-text').text('Interior')
	$("#ando-text").text('Each structure contains certain components of the house. The two story column contains the living room, dining room, and the kitchen on the first floor and the master bedroom on the second floor. The other column contains 6 children’s rooms and a tatami room, an homage to traditional Japanese style. The curved building contains the study and seems to provide closure to the house as a whole. Each structure contains openings and windows that allow for the play between light and shadow, for, “Natural light, ingeniously let in through adroitly situated slits in ceiling and walls, disperses the darkness and creates a pleasantly habitable space.” (Matusba 150) For example, the opening on the top of the extension structure  along the curved wall allows incoming light to create patterns of shadows. Similarly, one can experience such a phenomenon in the large two story living room in the center structure which allows for the light to create large shadows on the wall. Furthermore, the number of light fixtures is limited throughout the house, as Ando promotes natural light and the abstract geometry of the home. Hence, unlike the Rietveld-Schroder House, the Koshino House lacks thought out furnishing, as Ando stays true to only providing the client with a space to live in and nothing else.')
	$('#ando-text').show();
})

$('#ando-4').click(function(event) {
	$('#ando-4').attr('data-clicked', 'true')
	$('#ando-1').attr('data-clicked', 'false')
	$('#ando-2').attr('data-clicked', 'false')
	$('#ando-3').attr('data-clicked', 'false')
	$('#ando-2-text').text('')
	$('#ando-3-text').text('')
	$('#ando-1-text').text('')
	$('#ando-4').css('background','#ffff99')
	$('#ando-1').css('background','#080808')
	$('#ando-2').css('background','#080808')
	$('#ando-3').css('background','#080808')
	$("#ando-text").text('The structure of the Koshino is abstract in nature that focuses on the building’s basic geometry. After all, “There is no element that takes away from the full appreciation of its geometry,” (Matsuba 145) showing that the 2 parallel rectangular buildings and the curved addition are simple and to the point. All three of the buildings are buried in the ground to become a part of the landscape and are placed in a way so as to not disrupt any of the nearby foliage in order to respect nature. At the same time, the buildings, because of their basic geometrical shapes, seem to be completely out of space, as if they dropped from the sky and buried in the landscape. The buildings create useful negative space, such as the stepped courtyard between the two parallel rectangular structures, showing Ando’s deep understanding of geometry and positioning.')
	$('#ando-text').show();
})


$('#sq1-container').click(function(event) {
	$('body').css('background','#ff2100')
	$('#rietveld-header').text('Materials')
	$('#rietveld-text').text('The materials of the Rietveld Schroder House were of great importance. While Rietveld wished to make the house entirely of concrete, a limited budget forced him to make house out of brick, for the walls; wood, for the window frames, doors, and floors; reinforced concrete, for the foundation and balconies; and steel, for the roof and columnal support. While Ando’s house seemed bare on the outside, Reitveld emulated the energy of the De Stijl by painting both the exterior and the interior with bold, mostly primary, colors such as red, white, black, blue, and yellow. Interestingly enough, the paint was applied with a focus on practicality, for black paint was used primarily on components, such as doors and handles, that would be susceptible to wear and tear.')
})


$('#sq2-container').click(function(event) {
	$('body').css('background','#ff8900')
	$('#rietveld-header').text('Interior')
	$('#rietveld-text').text('Inside, the house is very practical, with an emphasis on space. Rietveld and Schroder believed, “that the size of the rooms must be related to the time spent in them” (Kuper, Zijl 98). At the same time, the two felt that rooms should not be strictly defined, which is exemplified in the second floor room organization. Rietveld designed the second story with thin, sliding walls which could be rearranged into a variety of configurations, such as three bedrooms and one sitting room. With sliding walls, Schroder could set up the bedrooms during the night, but get rid of the walls during the day to promote interaction amongst the residents, in line with the focus on universality. Unlike in Ando’s Koshino House, no space is used for corridors, preventing any form of hierarchy, and each room has access to the outside. Reitveld’s attention to practicality can be easily through the furniture design. Since Reitveld was primarily a furniture designer, he took it upon himself to implement furniture in such a way that it was an integral component of the home. For example, there are tables that can be folded to open up the room, and cupboards and storage areas are placed in a way to maximize space. In addition, the house contains highly innovative features such as a speaking tube, an early version of an intercom, and hot water pipes that would flow through certain locations to keep objects, such as shoes, warm. Overall, one can see Reitveld’s emphasis towards practicality nicely blended with his collectivist beliefs making the interior of the home a true innovation.')
})

$('#sq3-container').click(function(event) {
	$('body').css('background','#ffffff')
	$('#rietveld-header').text('Form')
	$('#rietveld-text').text('Like the Koshino house, the structure of the Schroder house represents highly abstract geometry. After all, the facade of the two story house is composed of basic multiple intersecting planar elements, as if they all were moving in space and collided with one another to create such an overall shape. Each plane is interesting colored and unique in size and shape. However, when all these planar surfaces come together, the building as a whole represents something greater than simply the sum of the individual parts, showing the essence of the De Stijl movement and the focus on universality over individuality. Furthermore, the overall asymmetry properly represents the lack of focus on any one element and the general philosophies of the De Stijl movement. Such philosophy carries over to the positioning of the house, for it, “Deliberately faces away from Prins Hendriklaan, an avenue which Truus Scroder and Rietveld dismissed as ‘bourgeois’.” (Mulder, Zijl 8) Similar to the Koshino House, natural light plays an important role in the structure of the building, since there are many windows in the house, along with a skylight. In the end, the use of abstract geometry with a focus on collectivism controls the structure of the Rietveld-Schroder House.')
})

$('#sq4-container').click(function(event) {
	$('body').css('background','#ffffff')
	$('#rietveld-header').text('Main')
	$('#rietveld-text').text('The Rietveld Schroder House was designed in 1922 and built in 1924 in Utrecht, Netherlands. While Gerrit Rietveld was the “architect” of the house and Mrs. Truus Schroder was the “client,” both individuals were critical to the design of the building. In fact, the two kindled a relationship, and Rietveld ended up living in the house with Schroder. The house was initially commissioned by the recently widowed Schroder, who desired to live in a house smaller than the one she had previously lived in. The house was designed with a focus on De Stijl and practicality, making it a marvel of the modern era.')
})