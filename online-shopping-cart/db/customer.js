var mysql = require("promise-mysql");
var inquirer = require('inquirer');

console.log('Welcome to Bamazon. Choose a product from our inventory:  ');


// var con = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	database: "bamazon"
// });

mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "onlineStore"
}).then(function (conn) {
	return conn.query("select * from products")
}).then(function (products) {
	for (var i = 0; i < products.length; i++) {
		console.log('Product ID: ' + products[i].itemid + ', Product Name: ' + products[i].departmentname + ' ' + products[i].productname + ', Price: $' + products[i].price);
		console.log('------------------------------------------------------');
	};

	var questions = [{
			message: "Please enter Product ID",
			type: "input",
			name: "productId"
		},
		{
			message: "How many items?",
			type: "input",
			name: "quantity"
		},
		{
			message: "Add more?",
			type: "confirm",
			name: "addMore"
		}
	]

	inquirer
		.prompt(questions)
		.then(async answers => {
			console.log("ANSWER: ", answers)
			var orderTotal, newStockQuantity;

			for (var i = 0; i < products.length; i++) {
				if (answers.productId == products[i].itemid) {
					if (products[i].stock < answers.quantity) {
						console.log('Sorry, not enough stock');
						menu();
					}
					orderTotal = (answers.quantity * products[i].price);
					newStockQuantity = (products[i].stock - answers.quantity);
					console.log('Order total: ' + orderTotal)
				}
			}
			return [answers.productId, newStockQuantity, answers.addMore]
		}).then(function (response) {
			console.log("PRODID: ", response[0])
			console.log("TOTAL: ", response[1])

			mysql.createConnection({
				host: "localhost",
				user: "root",
				password: "",
				database: "bamazon"
			}).then(function (conn) {
				conn.query("UPDATE products SET stock =" + response[1] + " WHERE itemid = " + response[0] + ";"),
					function (err, products) {
						if (err) {
							return err;
						}
						console.log("Products: " + products)
						if (response[2]) {
							menu();
						} else {
							console.log('Order Complete');
							process.exit();
						};
					}
			})
		})
})
