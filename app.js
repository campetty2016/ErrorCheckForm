/*

	Author: Candace Petty
	Date: 3/29/16
	File: app.js

*/

//Sets Validations for the Form and Checks if the User Input Validates
function ValidateForm() {

	//When the Submit Button is Clicked Perform the Following Actions
	$( "#Submit" ).click( function ( e ) {

		//Prevents Default Events from Occuring
		e.preventDefault();

		//Gets a Reference to the Value of the Email Input
		var email = $( "#email" ).val();

		//Gets a Reference to the Value of the Sister's Name Input
		var sisName = $( "#sisName" ).val();

		//Gets a Reference to the Value of the Mother's Name Input
		var momName = $( "#MomName" ).val();

		//Gets a Reference to the Value of the Father's Name Input
		var dadName = $( "#DadName" ).val();

		//Gets a Reference to the Value of the SSN Input
		var ssn = $( "#SSN" ).val();

		//Gets a Reference to the Value of the Check SSN Input
		var checkSsn = $( "#checkSSN" ).val();

		//Assigns a Variable to the Outcome of the ValidEmail Function
		var validEmail = validateEmail( email );

		//Assigns a Variable to the Outcome of the ValidSSN Function
		var validSSN = validateSSN( ssn );

		//Scenario #1: If All the Inputs Are Blank, Then Turn All the Inputs Red and Display Error Message
		if ( email === "" && sisName === "" && momName === "" && dadName === "" && ssn === "" && checkSsn === "" ) {

			//Makes Error Message Visible
			$( "#AllError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#AllError" ).html( "You must fill out all the inputs." );

			//Turns All the Inputs Red to Indicate Error
			$( "#SSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#email" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#sisName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#MomName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#DadName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#SSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#checkSSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Hides the Rest of the Error Messages
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #2: If the Email Input Equals False, Then Display an Error Message that States Invalid Email
		} else if ( validEmail === false ) {

			//Makes Error Message Visible
			$( "#EmailError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#EmailError" ).html( "You must enter a valid email." );

			//Turns the Email Input Red to Indicate Error
			$( "#email" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );

			//Scenario #3: If the Sister's Name Input Equals Nothing, Then Display an Error Message that States "You must enter your sister's name"
		} else if ( sisName === "" ) {

			//Makes Error Message Visible
			$( "#SNameError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#SNameError" ).html( "You must enter your sister's name." );

			//Turns the Sister's Name Input Red to Indicate Error
			$( "#sisName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #4: If the Mother's Name Input Equals Nothing, Then Display an Error Message that States "You must enter your mother's name"
		} else if ( momName === "" ) {

			//Makes Error Message Visible
			$( "#MNameError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#MNameError" ).html( "You must enter your mother's name." );

			//Turns the Mother's Name Input Red to Indicate Error
			$( "#MomName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #5: If the Father's Name Input Equals Nothing, Then Display an Error Message that States "You must enter your father's name"
		} else if ( dadName === "" ) {

			//Makes Error Message Visible
			$( "#FNameError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#FNameError" ).html( "You must enter your father's name." );

			//Turns the Father's Name Input Red to Indicate Error
			$( "#DadName" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #5: If the SSN Input Equals False, Then Display an Error Message that States Invalid SSN
		} else if ( validSSN === false ) {

			//Makes Error Message Visible
			$( "#SSNError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#SSNError" ).html( "You must enter a valid SSN." );

			//Turns the SSN Input Red to Indicate Error
			$( "#SSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #6: If the SSN Input Does Not Equals the Check SSN Input, Then Display an Error Message that States the Two SSNs Do Not Match
		} else if ( ssn !== checkSsn ) {

			//Makes Error Message Visible
			$( "#SSNCheckError" ).css( "visibility", "visible" );

			//Error Message that Appears
			$( "#SSNCheckError" ).html( "Your Social Security Numbers do not match." );

			//Turns the SSN and Check SSN Inputs Red to Indicate Match Error
			$( "#SSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );
			$( "#checkSSN" ).css( "backgroundColor", "rgba(189,47,27,.2)" );

			//Makes the Rest of the Inputs Transparent
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Scenario #7: Otherwise IF Everything Validates Successfully, Then Display the Validation Success Modal and Add the User Input to the Database
		} else {

			//Success Modal
			swal( "Success", "Validation Passed!", "success" );

			//Makes the Rest of the Inputs Transparent
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#email" ).css( "backgroundColor", "transparent" );
			$( "#sisName" ).css( "backgroundColor", "transparent" );
			$( "#MomName" ).css( "backgroundColor", "transparent" );
			$( "#DadName" ).css( "backgroundColor", "transparent" );
			$( "#SSN" ).css( "backgroundColor", "transparent" );
			$( "#checkSSN" ).css( "backgroundColor", "transparent" );

			//Hides the Rest of the Error Messages
			$( "#AllError" ).css( "visibility", "hidden" );
			$( "#SSNError" ).css( "visibility", "hidden" );
			$( "#MNameError" ).css( "visibility", "hidden" );
			$( "#SNameError" ).css( "visibility", "hidden" );
			$( "#SSNCheckError" ).css( "visibility", "hidden" );
			$( "#FNameError" ).css( "visibility", "hidden" );
			$( "#EmailError" ).css( "visibility", "hidden" );

			//Add the Valid User Input into the Database
			Service.AddvalidUser( email, sisName, momName, dadName, ssn,
				function ( data ) {
					$( ".FamilyInfo" ).css( "display", "flex" );
				} );
		}
	} );
}

//Validates Email
function validateEmail( email ) {

	//Pattern for Email
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	//Tests Email to See if User Input Follows the Pattern and Validates to True
	return re.test( email );
}

//Validates SSN
function validateSSN( ssn ) {

	//Pattern for SSN
	var Ssn = /^[\dX]{3}-?[\dX]{2}-?[\dX]{4}$/;

	//Tests SSN to See if User Input Follows the Pattern and Validates to True
	return Ssn.test( ssn );
}

//Waits til the Document is Ready
$( document ).ready( function () {

	//Runs the ValidateForm Function when Ready
	ValidateForm();

} );