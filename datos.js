let rndNumber = Math.random().toString(36).substring(1,3);

let data = {
//Datos para crear cuenta
email: 'bcabrera' + rndNumber + '@mail.com',
firstname : "Bernardo",
lastname : "Cabrera",
password : "88888",
zipcode : "7687",
day : "1",
month : "11",
year : "2000",
city : "Los Angeles",
state : "California",
country : "United States",
company : "nintendo",
addressline1 : "Rainbow road 150",
addressline2 : "Mario Kart",
addinfo : "N/A",
homephone : "78922100.",
mobilephone : "112233456",
addressalias : "My address",
//Datos para las otras pruebas
retrievemail : "a@a.com",
invalidmail : "AAA",
noresults : "tshirts",
product : "summer"

}

export {data}