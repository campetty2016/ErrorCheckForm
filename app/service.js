/*

	Author: Candace Petty
	Date: 3/29/16
	File: service.js

*/

//Declares a Function that Performs a Service to the Application By Connecting to the Database
var Service = ( function () {

	//The Database URL
	var _dbURL = "https://api.mongolab.com/api/1/databases/family_errorcheck/collections/members?";

	//API Key
	var _apiKey = "apiKey=fHjbUqEHKms6Hlc9JG8x8Bc9IqrJBfp3";

	//Adds a Valid User to the Database
	var _AddvalidUser = function () {

		//Retrieves the Value of the Email Input
		var email = $( "#email" ).val();

		//Retrieves the Value of the Sister's Name Input
		var sisName = $( "#sisName" ).val();

		//Retrieves the Value of the Mother's Name Input
		var momName = $( "#MomName" ).val();

		//Retrieves the Value of the Father's Name Input
		var dadName = $( "#DadName" ).val();

		//Retrieves the Value of the SSN Input
		var ssn = $( "#SSN" ).val();

		//Creates a New JSON Object for the User Input
		var obj = {
			"email": email,
			"sisName": sisName,
			"momName": momName,
			"dadName": dadName,
			"ssn": ssn,
			"role": "user"
		};

		//Creates An AJAX Call to Post the Object Data into the Database
		$.ajax( {

			//URL for the Database Plus API Key
			url: _dbURL + _apiKey,

			//Method of Retrieval for Data
			type: "POST",

			//Turns "obj" Data into JSON
			data: JSON.stringify( obj ),

			//Declares the Content Type
			contentType: "application/json"

			//When Done with the Data, View it in the Console
		} ).done( function ( data ) {

			//Allows the Data that Has Been Sent to the Database to Be Seen in the Console
			console.log( ( 'data', data ) );
		} );
	};

	//Returns the Service Private Functions to Make them Accessible to Other JavaScript Files
	return {

		//Returns AddvalidUser Function
		AddvalidUser: _AddvalidUser,
	};

} )();