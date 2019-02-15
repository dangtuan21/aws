var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//---------
function findCustomerByFriendlyId(friendlyId) {
    return {
        fullName : 'Full Name of ' + friendlyId,
        address : 'Address of ' + friendlyId,
        dateOfBirth : 'DoB of ' + friendlyId      
    };
}


//----------
app.post('/compliance/fetch_info', function (request, response) {
    console.log('compliance server fetch_info starting...' );
    var addressParts = response.body.address.split('*');
    var friendlyId = addressParts[0];
    console.log('friendlyId', friendlyId);

    var account = findCustomerByFriendlyId(friendlyId);
    response.json({
        name: account.fullName,
        address: account.address,
        date_of_birth: account.dateOfBirth
    });
    response.end();   
  });

  //------------
  app.listen(8008, function () {
    console.log('Compliance server callbacks running on port 8008!');
  });