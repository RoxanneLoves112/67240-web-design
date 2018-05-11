let locations_list;
$(document).ready(function() {
	locations_list = new Vue({
		el: '.location-content',
		data: {
			locations: locations,
			search_term: '',
			filter_settings: {
				open: false,
				order_online: false,
				on_campus: {
					'Baker Hall': true,
					'Cohon Center': true,
					'College of Fine Arts': true,
					'Gates Hillman Complex': true,
					'College of Fine Arts': true,
					'Hamburg Hall': true,
					'Hunt Library': true,
					'Mellon Institute': true,
					'Morewood Gardens': true,
					'Newell-Simon Hall': true,
					'Posner Hall': true,
					'Resnik House': true,
					'Wean Hall': true,
					'Scott Hall': true,
					'Software Engineering Institute': true
				},
				off_campus: {
					'Oakland': true,
					'Squirrel Hill': true,
					'Shadyside': true
				}
			},
			filtering: false
		},
		methods: {
			processLocations: function() {
				let locations = this.locations.slice(0);
				locations = locations.sort(function(a, b) {
					b_name = b.name.toLowerCase();
					a_name = a.name.toLowerCase();
					if (b_name > a_name) return -1;
					if (b_name < a_name) return 1;
					return 0;
				});
				// filter
				if (this.filter_settings) {
					locations = this.filter(locations);
				}
				// search
				if (this.search_term) {
					locations = this.search(locations, this.search_term);
				}
				return locations;
			},
			search: function(locations, term) {
				locations = locations.filter(function(location) {
					try {
						let re = new RegExp(term, 'i');
						return location.name.match(re);	
					}
					catch(e) {
						return location.name.indexOf(term);
					}
				});
				return locations;
			},
			filter: function(locations) {
				let settings = this.filter_settings;
				// filter open
				if (settings.open) {
					locations = locations.filter(l => l.open);
				}
				// filter order online
				if (settings.order_online) {
					locations = locations.filter(l => l.order_online);
				}
				// filter by on_campus buildings
				let on_campus = Object.values(settings.on_campus).filter(l => l).length;
				let off_campus = Object.values(settings.off_campus).filter(l => l).length;
				if (on_campus && off_campus) {
					locations = locations.filter(l => settings.on_campus[l.location] || settings.off_campus[l.location]);
				}
				else if (on_campus) {
					locations = locations.filter(l => settings.on_campus[l.location]);
				}
				// filter by on_campus buildings
				else if (off_campus) {
					locations = locations.filter(l => settings.off_campus[l.location]);
				}
				return locations;
			},
			redirect: function(url) {
				window.location = url;
			},
			toggleShowSubsettings: function(setting) {
				let $elem = $('.list-subsetting.' + setting);
				if ($elem.css('display') == 'none') {
					$elem.slideDown();
				} else {
					$elem.slideUp();
				}
			},
			toggleSubsettings: function(setting) {
				let subsettings = Object.keys(this.filter_settings[setting]);
				let value = Object.values(this.filter_settings[setting]).filter(l => l).length;
				for (let subsetting of subsettings) {
					this.filter_settings[setting][subsetting] = value ? false : true;
				}
			},
			resetQuery: function() {
				let settings = this.filter_settings;
				let on_subsettings = Object.keys(settings['on_campus']);
				let off_subsettings = Object.keys(settings['off_campus']);
				settings.open = false;
				settings.order_online = false;
				for (let subsetting of on_subsettings) {
					settings['on_campus'][subsetting] = true;
				};
				for (let subsetting of off_subsettings) {
					settings['off_campus'][subsetting] = true;
				};
			}
		}
	});

	menu = new Vue({
		el: '.menu-system',
		data: {
			menu_open: false
		},
		methods: {
			redirect: function(url) {
				window.location = url;
			}
		}
	});



});






