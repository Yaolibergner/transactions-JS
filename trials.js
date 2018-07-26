// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set("home", "510-867-5309");
phoneNumbers.set("mobile", "415-555-1212");
phoneNumbers.set("business", "415-123-4567");


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printInfo(name, number, businessName) {
	console.log("Account Holder Name:", name);
	console.log("Account Holder Number:", number);
	console.log("Business Name:", businessName);
}

// Add function to print all addresses, including a header
function printAddresses(addresses) {
	console.log("Addresses:");

	for (let address of addresses) {
		console.log(address);
	}
}

// Add function to print phone types and numbers

function showPhoneNums(phoneNumbers) {
	console.log("Phone Numbers:");

	for (let [type, num] of phoneNumbers) {
		console.log(`${type}: ${num}`);

	}
}
// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();


// Add function to add transactions

function addTransaction(date, amount) {
	transactions.set(date, amount);
}
// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);

let balance = 5000;

// Add function to show balance status
function showBalanceStatus(balance) {
	console.log("Balance:", balance);

	if (balance < 0) {
		console.log("YOU ARE OVERDRAWN")
	} else if (balance < 20) {
		console.log("Warning: You are close to zero balance.")
	} else {
		console.log("Thank you for your business.")
	}
}

// Add function to show transactions
function showTransactions(transactions, balance) {
	console.log("Beginning balance is:", balance);
	
	let transaction_type;
	
	console.log("");
	console.log("Date | Amount | Type | Balance");

	for (let [date, amount] of transactions) {
		if (amount < 0) {
			transaction_type = 'withdrawal';
		} else {
			transaction_type = 'deposit';
		}

		balance = balance + amount;
		console.log(date, 
					amount, 
					transaction_type, 
					balance);
	}
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customer = {
	'Account Holder': accountHolder,
	'Account Number': accountNumber,
	'Business Name': businessName,
	'Addresses': addresses,
	'Phone Number': phoneNumbers,
	'Transactions': transactions,
	'Starting Balance': balance
}; 


// Function to add customer attributes
function addCustAttr(melon='Canteloupe', numpets=0) {
	customer.favMelon = melon;
	customer.numOfPets = numpets;
}

// Add attributes for this user

addCustAttr('Casaba', 2);
// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate
function getInterest(income, customer) {
	let interestRate;

	if (income < 100000) {
		if (customer.numPets > 5 || customer.favMelon === 'Casaba') {
			interestRate = 0.05;
		} else {
			interestRate = 0.08;
		}
	} else if (income < 200000) {
		if (customer.numPets > 5 || customer.favMelon === 'Casaba') {
			interestRate = 0.04;
		} else {
			interestRate = 0.07;
		}
	} else {
		interestRate = 0.04;
	}

	console.log(interestRate)
}

// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




