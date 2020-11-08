let rndNumber = Math.random().toString(36).substring(1,3);

let data = {
//Datos para crear cuenta
email: 'bc' + rndNumber + '@abrera.com',
firstname : "Bernardo",
lastname : "Cabrera",
password : "password",
zipcode : "90005",
city : "Los Angeles",
company : "Nintendo",
addressline1 : "Rainbow road 150",
addressline2 : "Mario Kart",
addinfo : "N/A",
homephone : "78922100",
mobilephone : "112233456",
//Datos para las otras pruebas
retrievemail : "a@a.com",
invalidmail : "AAA",
noresults : "tshirts",
product : "summer"

}

export {data}