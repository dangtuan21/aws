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
  app.post('/compliance/sanctions', function (request, response) {
    console.log('compliance server sanctions starting...' );
    // var sender = JSON.parse(request.body.sender);
  
    // // You need to create a function to check whether there are any sanctions
    // // against someone.
    // sanctionsDatabase.isAllowed(sender)
    //   .then(function() {
    //     response.status(200).end();
    //   })
    //   .catch(function(error) {
    //     // In this example, we're assuming `isAllowed` returns an error with a
    //     // `type` property that indicates the kind of error. Your systems may
    //     // work differently; just return the same HTTP status codes.
    //     if (error.type === 'DENIED') {
    //       response.status(403).end();
    //     }
    //     else if (error.type === 'UNKNOWN') {
    //       // If you need to wait and perform manual checks, you'll have to
    //       // create a way to do that as well
    //       notifyHumanForManualSanctionsCheck(sender);
    //       // The value for `pending` is a time to check back again in seconds
    //       response.status(202).json({pending: 3600}).end();
    //     }
    //     else {
    //       response.status(500).end(error.message);
    //     }
    //   });

    response.status(200).end();

  });

  app.post('/compliance/ask_user', function (request, response) {
    console.log('compliance server sanctions starting...' );
    // var sender = JSON.parse(request.body.sender);
  
    // // You can do any checks that make sense here. For example, you may not
    // // want to share information with someone who has sanctions as above:
    // sanctionsDatabase.isAllowed(sender)
    //   .then(function() {
    //     response.status(200).end();
    //   })
    //   .catch(function(error) {
    //     if (error.type === 'UNKNOWN') {
    //       // If you need to wait and perform manual checks, you'll have to
    //       // create a way to do that as well.
    //       notifyHumanForManualInformationSharing(sender);
    //       // The value for `pending` is a time to check back again in seconds
    //       response.status(202).json({pending: 3600}).end();
    //     }
    //     else {
    //       response.status(403).end();
    //     }
    //   });
    response.status(200).end();

  });
  //------------
  app.listen(8008, function () {
    console.log('Compliance server callbacks running on port 8008!');
  });