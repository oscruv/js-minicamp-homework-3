// objects 

var user = {
	username: 'oscruv',
	password: 'pass',
	age: 44,
	likesIceCream: true,
	sayHi: function() {
		console.log('hello');
	}
};

var ita = {
	username: 'itaname',
	password: 'pass',
	age: 33,
	likesIceCream: true,
	sayHi: function() {
		console.log('hello');
	}
};


// user.isPremium = true; // added to user object
function addProperty(object, newProp, newVal) {
	object[newProp] = newVal;
}
//addProperty(user, 'livesInUs', false);

for (var key in user) {
	console.log('>>>key', key);
	console.log('>>>val', user[key]);
}

console.log(user);