let locations = [
	{
		name: "Au Bon Pain",
		desc: "Coffee/tea, espresso, soup, sandwiches/salads, grab-n-go, yogurt parfaits, fruit, snacks",
		hours: "7:00 AM - 2:00 AM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Breakfast Express",
		desc: "Waffles, oatmeal, breakfast sandwiches, fruit, and coffee",
		hours: "11:00 AM - 2:30 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Carnegie Mellon Cafe",
		desc: 'Hot breakfast all day, smoothies, superfood breakfast bowls, sandwiches, wraps, ice cream',
		hours: '7:30 AM - 2:00 AM',
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Chef's Table",
		desc: 'Grilled-to-open burgers, fries, chicken tenders and melts, fruit, salads',
		hours: '10:30 AM - 9:00 PM',
		location_description: 'Cohon Center, 2nd Floor',

		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "City Grill",
		desc: 'Fine dining meals offered on Tuesdays and Thursdays',
		hours: '5:00 PM - 9:00 PM',
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Downtown Deli",
		desc: 'Deli sandwiches, wraps, side salads, soups, and fruits',
		hours: '10:30 AM - 4:00 PM',
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Entropy+",
		desc: "Carnegie Mellon's on-campus convenience store",
		hours: '7:30 AM - 3:00 AM',
		location_description: 'Cohon Center, Ground Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Evgefstos",
		desc: 'Vegan, Vegetarian, superfoods',
		hours: '10:30 AM - 9:00 PM',
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "The Exchange",
		desc: "Sandwiches, salad, soup, hot entrées, coffee, tea, baked goods, fruit, yogurt",
		hours: "8:00 AM - 8:00 PM",
		location_description: 'Posner Hall (Tepper)',
		location: 'Posner Hall',
		open: false,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Fresh Select",
		desc: "Salad and Soup Bar",
		hours: "11:00 AM - 9:00 PM",
		location: 'Resnik House',
		open: false,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=92'
	},
	{
		name: "El Gallo De Oro",
		desc: "Mexican cuisine, burritos, and burrito bowls, tacos, quesadillas, salads",
		hours: "10:30 AM - 10:00 PM",
		location_description: 'Cohon Center, Ground Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Garden Bistro",
		desc: "100% vegan, plant-based cuisine, choose from our chef’s signature sandwiches or build your own",
		hours: "11:00 AM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Gingers Express",
		desc: "Deli sandwiches, salads, soups, hot entrées, coffee, organic teas, bottled juices, baked goods",
		hours: "8:00 AM - 4:00 PM",
		location: 'Baker Hall',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=104'
	},
	{
		name: "Grill N' Greens",
		desc: "Lean proteins and super food greens... grilled!",
		hours: "11:00 AM - 2:30 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: 'Heinz Café',
		desc: "Grab-and-go items, bagels, hummus, baked goods, granola, and yogurt",
		hours: "8:30 AM - 6:00 PM",
		location_description: 'Hamburg Hall (Heinz)',
		location: 'Hamburg Hall',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=93'
	},
	{
		name: "iNoodle",
		desc: "Asian cuisine, rice/noodle bowls, hot/cold boba tea",
		hours: "8:00 AM - 7:30 PM",
		location: 'Newell-Simon Hall',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=110'
	},
	{
		name: "La Prima Espresso",
		desc: "Free trade and organic espresso, cappuccino, coffee, pastries, soup, sandwiches",
		hours: "8:00 AM - 6:00 PM",
		location: 'Wean Hall',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=94'
	},
	{
		name: "Mac N' Cheese",
		desc: "Choose from 3 types of mac n' cheese and add your stir-ins and toppings to create your own dish",
		hours: "5:00 PM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Maggie Murph Café",
		desc: "Starbucks, Tazo tea, pastries, bagels, sandwiches, soup, salad, sushi, breakfast",
		hours: "Open 24 Hours",
		location: 'Hunt Library',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=95'
	},
	{
		name: "Nakama",
		desc: "Made-to-open and prepackaged sushi and Pan-Asian cuisine",
		hours: "11:00 AM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Nourish",
		desc: "Allergen-friendly kitchen food made without gluten and the 8 major allergen ingredients",
		hours: "10:30 AM - 6:30 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Pasta Villaggio",
		desc: "Homemade pasta and sauces, Italian ingredients, Halal certified",
		hours: "10:30 AM - 9:00 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "The Pomegranate",
		desc: "Kosher, falafel, hummus, shawarms, salads, grilled meats, vegan/vegetarian",
		hours: "11:00 AM = 9:00 PM",
		location: "Resnik House",
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Ramen Bowl",
		desc: "Authentic ramen bowls with house made broths and your choice of ingredients",
		hours: "10:30 AM - 4:00 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Rice Bowl",
		desc: "Rice bowls, Halal certified, spring rolls, soup, salad",
		hours: "10:30 AM - 9:00 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Rohr Cafe",
		desc: "Tazza D'Oro offers free trade coffee, espresso, tea, panini, desserts, pastries",
		hours: "7:00 AM - 7:00 PM",
		location_description: 'Gates Hillman Complex, 3rd Floor',
		location: 'Gates Hillman Complex',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Rothberg's Roasters",
		desc: 'Breakfast, lunch, dinner, pizza, sandwiches, soups, fruit, dessert, coffee',
		hours: '8:00 AM - 8:00 PM',
		location: 'Scott Hall',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=123'
	},
	{
		name: "Schatz Dining Room",
		desc: "All-you-care-to-eat breakfast/dinner buffet; weekend brunch; fac/staff/grads for lunch",
		hours: "7:30 AM - 9:00 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Seiber Cafe",
		desc: "Hot entrées, soups, sandwiches, pastries, freshly brewed coffee, and a salad bar",
		hours: "7:30 AM - 3:00 PM",
		location: 'Software Engineering Institute',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Spice It Up Grill",
		desc: "Beef, turkey, black bean, portabella burgers; chicken sandwiches, steak, fish",
		hours: "11:00 AM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Spinning Salads",
		desc: "Build your own salads",
		hours: "10:30 AM - 9:00 PM",
		location_description: 'Cohon Center, 2nd Floor',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Stephanie's",
		desc: "Baked goods, fruit, yogurt, sandwiches, soup, salad, organic tea, Starbucks",
		hours: "8:00 AM - 2:00 PM",
		location: 'Mellon Institute',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Stir Crazy",
		desc: "Made-to-open stir fry bowls",
		hours: "5:00 PM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Take Comfort",
		desc: "Home-style chicken, turkey, pork, beef, seafood, and vegetarian entrées",
		hours: "5:00 PM - 9:00 PM",
		location: 'Resnik House',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Tartan Express",
		desc: "Asian fusion bowls",
		hours: "11:00 AM - 7:30 PM",
		location_description: 'Cohon Center, Legacy Plaza',
		location: 'Cohon Center',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Tartan's Pizza",
		desc: "Oven-fired pizza, baked pasta, and salads",
		hours: "11:00 AM - 11:00 PM",
		location: "Resnik House",
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Taste of India",
		desc: "Authentic Indian cuisine",
		hours: "11:00 AM - 9:00 PM",
		location: "Resnik House",
		open: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "Tazzo D'Oro",
		desc: "Coffee, espresso, tea, panini, desserts, pastries",
		hours: "7:00 AM - 7:00 PM",
		location: 'Gates Hillman Complex',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=115'
	},
	{
		name: "The Underground",
		desc: "Hamburgers, chicken tenders, pasta, soup, salad, breakfast, fruit, desserts",
		hours: "8:30 AM - 2:00 AM",
		location_description: "Morewood Gardens, Lower Level",
		location: 'Morewood Gardens',
		open: true,
		order_online: true,
		image: false,
		on_campus: true,
		url: 'https://google.com'
	},
	{
		name: "The Zebra Lounge",
		desc: "Free trade organic tea and coffee, sandwiches, soup, pastries",
		hours: "8:00 AM - 5:00 PM",
		location: 'College of Fine Arts',
		open: true,
		image: false,
		on_campus: true,
		url: 'https://apps.studentaffairs.cmu.edu/dining/conceptinfo/?page=conceptDetails&conceptId=84'
	},
	{
		name: "Subway",
		desc: "Build your own sandwiches",
		hours: "8:00 AM - 11:00 PM",
		location_description: "416-418 South Craig Street",
		location: 'Oakland',
		open: true,
		image: false,
		on_campus: false,
		url: 'http://www.subway.com/'
	}
];
