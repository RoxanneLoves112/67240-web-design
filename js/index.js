let list;
$(document).ready(function() {
	list = new Vue({
		el: '.location-list',
		data: {
			locations: locations,
			search_term: '',
			filter_setting: 'alphabetical',
		},
		methods: {
			processLocations: function() {
				// clone array
				let locations = this.locations.slice(0);
				// filter
				if (this.filter_setting) {
					locations = this.filter(locations, this.filter_setting);
				}
				// search
				if (this.search_term) {
					locations = this.search(locations, this.search_term);
				}
				return locations;
			},
			filter: function(locations, setting) {
				switch(setting) {
					case('alphabetical'):
						locations = locations.sort(function(a, b) {
							if (b.name > a.name) return -1;
							if (b.name < a.name) return 1;
							return 0;
						});
						break;
					// case('generational'):
					// 	locations = locations.sort(function(a, b) {
					// 		return a.gen - b.gen;
					// 	});
					// 	break;
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
			}
		}
	});
});