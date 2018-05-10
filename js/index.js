let list;
$(document).ready(function() {
	list = new Vue({
		el: '.list',
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
					case('open'):
						locations = locations.filter(function(location) {
							return location.open;
						});
						break;
					case('order'):
						locations = locations.filter(function(location) {
							return location.open;
						});
						break;
					case('on campus'):
						locations = locations.filter(function(location) {
							return location.oncampus;
						});
						break;
					case('off campus'):
						locations = locations.filter(function(location) {
							return !location.oncampus;
						});
						break;
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
