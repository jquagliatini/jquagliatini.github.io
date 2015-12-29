$(document).ready(function() {

	initMap();

	$(window).resize(function(event) {
		initMap();
	});



	//TODO : internationalization + Angular module
	var skills = [
		{
			skill : "Java",
			size	 : "large",
			caption  : {
				en : {
						language : "en",
						text : "I started Java during my technical degree, and continued. It's kind of THE language to know today. Not a lot of experience with it, but kind of enthusiast to use it."
					},
				fr : {
					language : "fr",
					text : "J'ai commencé le Java pendant mon DUT. C'est LE language à connaitre aujourd'hui. Je n'ai pas beaucoup d'expérience avec, mais je serais très intéressé de travailler avec."
				},
				it : {
					language: "it",
					text : "Ho cominciato Java durante il mio diploma Universitario. Considerato IL LINGUAGGIO oggi. No ho lavorato molto con lui, pero mi piacerebbe."
				}
			}
		},
		{
			skill : "C++",
			size : "large",
			caption : {
				en : {
						language : "en",
						text : "I Learned C++ during my technical degree and continued during my engineer courses."
					},
				fr : {
					language : "fr",
					text : "J'ai également appris le C++ durant mon DUT et je continue encore aujourd'hui."
				},
				it: {
					language : "it",
					text : "Ho anche imparato c++ duranete il mio Diploma Universitario."
				}
			}
		},
		{
			skill : "Javascript",
			size : "large",
			caption : {
				en : {
						language : "en",
						text : "Kind of my favourite language. It's fun to use, there's a ton of libs to discover. You can use from server/client side. Well it's a language which evolution was really interesting"
					},
				fr : {
					language : "fr",
					text : "Mon langage préféré. Sympas à utiliser, beaucoup de librairies à découvrir, on peut l'utiliser côté serveur/client. C'est un langage dont l'utilisation est vraiment intéressante."
				},

				it: {
					language : "it",
					text : "Il linguaggio che mi piacce du più. Si puo fare tante cose con javascript e ci sono tante librerie da discovere. La sua evoluzione è molto interessante."
				}
			}
		},
		{
			skill : "Express",
			size : "small",
			caption : {
				en : {
						language : "en",
						text : "I've never used Node on itself always with Frameworks, particularly Express, on small projects like school works or experiments with MongoDB or Redis."
					},
				fr : {
					language : "fr",
					text : "Je n'ai jamais utilisé Nodejs seul, toujours avec Express, sur de petits projets (scolaires ou personnels) avec MongoDB ou Redis."
				},

				it: {
					language : "it",
					text : "Non ho mai usato Nodejs da solo, sempre con Express, su piccoli progietti (personali o di scuola) con MongoDB o Redis."
				}
			}
		},
		{
			skill : "Perl",
			size : "large",
			caption :  {
				en : {
						language : "en",
						text : "I worked with that language during a year. As a script language or object oriented."
					},
				fr : {
					language : "fr",
					text : "J'ai travaillé avec ce langage pendant un an en tant que langage de script ou orienté objet."
				},

				it: {
					language : "it",
					text : "Ho lavorato con questo linguaggio durante un anno, come script o object-oriented."
				}
			}
		},
		{
			skill : "Shell",
			size : "large",
			caption : {
				en : {
					language : "en",
					text : "I use that language every time, as a tool for my computer. It's what give Linux all its charm."
				},
				fr : {
					language : "fr",
					text : "Je l'utilise tout le temps sur système UNIX pour toutes sortes de manipulations. C'est ce qui donne à Linux tout son charme."
				},

				it: {
					language : "it",
					text : "Uso sempre questo linguaggio per qualsiasi manipulazione on UNIX. Quello che dà Linux il suo fascino."
				}
			}
		},
		{
			skill : "Git",
			size : "medium",
			caption : {
				en : {
					language : "en",
					text : "I discovered Git during an internship, it was just like a revelation for me. For me you can't be a developer without knowing this fantastic tool."
				},
				fr : {
					language : "fr",
					text : "J'ai découvert Git pendant mon stage de DUT, ce qui a été comme une révélation pour moi. Selon moi on ne peut être un développeur sans connaitre cet outil."
				},

				it: {
					language : "it",
					text : "Ho scoperto Git durante una formazion di fine Diploma. È stato una revelazione. Secondo me non si puo essere programatore senza conosciere questo strumento.."
				}
			}
		},
		{
			skill : "Agility",
			size : "small",
			caption : {
				en : {
					language : "en",
					text : "I'm one of these young and inexperienced student who thinks agility is still a way of life, maybe because I've never experienced a Real Agile project, I hope to try it one day."
				},
				fr : {
					language : "fr",
					text : "Je suis un de ces développeur jeune et inexpérimenté, qui pense encore que l'agilité est un mode de vie. Peut-être parce que je n'ai jamais vécu de vrai projet Agile, ce que j'espère combler bientôt."
				},

				it: {
					language : "it",
					text : "Ho scoperto Git durante una formazion di fine Diploma. È stato una revelazione. Secondo me non si puo essere programatore senza conosciere questo strumento.."
				}
			}
		}
	];

	var container = $('#skill-container');
	var row = create('div.row');
	container.append(row);
	skills.forEach(function(skill, index) {
		var size = "medium";
		var title = skill.skill;

		var lang = $('html').attr('lang') || 'en';
		var content = skill.caption[lang].text;

		/*if (index % 3 == 0) {
			row = create('div.row');
			container.append(row);
		}*/

		var cardContainer = create('div.col.s12.m6.l3');

		// GLOBAL  CARD CONTAINER
		var card = create('div.card.' + size);

		// CARD CONTAINER + IMAGE
		var cardImageContainer = create('div.card-image');
		var pattern = GeoPattern.generate(title);
		var image = create('img.activator', {src : pattern.toDataUri()});
		cardImageContainer.append(image);
		// /CARD CONTAINER + IMAGE

		// CARD CONTENT
		var cardContent = create('div.card-content');
		var titleOptions = (title === 'Agility') ? {translate: 'agility', textContent: title} : {textContent : title};
		var spanTitle = create('span.card-title.activator.grey-text.text-darken-4', titleOptions);
		cardContent.append(spanTitle.append(create('i.mdi-navigation-more-vert.right')));
		cardContent.append(
			create('p').append(
				create('a.activator', {href : '#!', translate : "readMoreSkills", textContent : "Read more"})
			)
		);
		// /CARD CONTENT

		// CARD REVEAL
		var cardReveal = create('div.card-reveal');
		var spanReveal = create('span.card-title.grey-text.text-darken-4', {textContent : title});
		var translateText = title.toLowerCase() + "Content";
		var pReveal = create('p', {translate: translateText, textContent : content});
		cardReveal.append(spanReveal.append(create('i.mdi-navigation-close.right')));
		cardReveal.append(pReveal);
		// /CARD REVEAL

		card.append(cardImageContainer);
		card.append(cardContent);
		card.append(cardReveal);

		cardContainer.append(card);
		row.append(cardContainer);
	});
});

var create = function (string, options) {

	var array = string.split('.');

	var toReturn = document.createElement(array[0]);
	var className = '';

	for(var i = 1; i<array.length; i++) {
		className += array[i] + " ";
	}

	className.trim();
	toReturn.className = className;

	if(options) {
		for(var o in options) {
			(o == "textContent") ? toReturn[o] = options[o] : toReturn.setAttribute(o, options[o]);
		}
	}

	return $(toReturn);
};

var initMap = function() {


		var mq = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");

		var mapElement = $('#introduction');
		if(mq === "desktop" && mapElement.data('map') === undefined) 	{
			var map = L.map('introduction', {scrollWheelZoom : false})
						.setView([45.784112807850256,4.8635101318359375],16)
						.on('resize', function(event) {
							var mq = window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
							if(mq === 'mobile') {
								map.remove();
								$('#introduction').removeData('map');
							}
						});


			var cartoDBLight = {
				url : "https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
				attribution : 'Map tiles by <a href="https://cartodb.com/">CartoDB</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://opendatacommons.org/licenses/odbl/">ODbL</a>.'
			};
			/** Alternatives tiles URLs
				var osm = {
					url : 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
					attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
				};
				var mapbox = {
					url : 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
					attribution : 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
					id : 'morebug.b248a7d8',
					accessToken: 'pk.eyJ1IjoibW9yZWJ1ZyIsImEiOiIzZjQ3ZTljMDE1YTcxM2JmZDE4YjQyYzcxYzczNGIwNSJ9.W9T9hE5bpTF7HDcCB_zXoQ'
				}
			*/
			L.tileLayer(cartoDBLight.url, {
				attribution: cartoDBLight.attribution,
				maxZoom: 17,
				zIndex: 0
			}).addTo(map);


			var marker = L.marker([45.7840922326144,4.868751168251038]).addTo(map);
			marker.bindPopup("<strong>CPE Lyon</strong><br>Domaine Scientifique de la Doua<br>Bâtiment Hubert Curien<br>43, boulevard du 11 Novembre 1918<br>BP 82077 - 69616 Villeurbanne Cedex").openPopup();

			mapElement.data('map', 'true');
		}
};
