// objects 

var oscar = {
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

// console.log(user.username);

function intoUser (user) {
	console.log('Hello there, ' + user.username) +'!';
	console.log('You are ' + user.age + 'years old.');
}

intoUser(oscar);

intoUser(ita);