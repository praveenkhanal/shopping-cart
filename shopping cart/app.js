// Items in our shopping cart
// console.log('kriyan');
var shoppingCart = [];

// Beer items
var beerItems = [
	{
		img: './beer/budweiser.jpg',
		name: 'Budweiser'
	},
	{
		img: './beer/Corona_Beach_Coaster_POP.jpg',
		name: 'Corona'
	},
	{
		img: './beer/heineken.jpg',
		name: 'Heineken'
	},
	
];

// wine items
var wineItems = [
	{
		img: './wine/cabernet-sav.jpg',
		name: 'Cabernet-savignon'
	},
	{
		img: './wine/merlot.jpeg',
		name: 'Merlot'
	},
	{
		img: './wine/mix-blend.jpg',
		name: 'Mix-Blend'
	},
	
];

// Candy items
var liquorItems = [
	{
		img: './liquor/Hennessy.jpg',
		name: 'Hennessy'
	},
	{
		img: './liquor/makers mark.jpg',
		name: 'Maker\'s mark'
	},
	{
		img: './liquor/tequilla.jpg',
		name: 'Tequilla'
	}
	
];


// Add click handlers to our category buttons
$('#beer').click(function() {
	(addShoppingItems('beer'));
});

$('#wine').click(function() {
	(addShoppingItems('wine'));
});

$('#liquor').click(function() {
	(addShoppingItems('liquor'));
});

// // // Add click handlers to each shopping item
$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});

// Add shopping items to our page
function addShoppingItems(sections) {
	// first, clear out all items I am currently showing
	clearShoppingItems();

	var myType;
	switch(sections) {
		case 'beer':
			myItems = beerItems;
			break;
		case 'wine':
			myItems = wineItems;
			break;
		case 'liquor':
			myItems  = liquorItems;
			break;
		default:
	}

	var newList = $('<ul>');
	for(var i = 0; i < myItems.length; i++) {
		var currentItem = myItems[i];

		newList.append(
			`<li class="shopping-item">
				<img src="${currentItem.img}">
				<p>${currentItem.name}</p>
			</li>`);
	}

	$('#shopping-items').append(newList);
}

// Clear our current shopping-items
function clearShoppingItems() {
	$('#shopping-items').empty();
}

// Add item to shopping cart
function addItemToShoppingCart(item) {
	$('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}
