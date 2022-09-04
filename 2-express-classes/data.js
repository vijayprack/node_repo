const users =  [
  {
    "userId": 1,
    "firstName": "Krish",
    "lastName": "Lee",
    "phoneNumber": "123456",
    "emailAddress": "krish.lee@learningcontainer.com"
  },
  {
    "userId": 2,
    "firstName": "racks",
    "lastName": "jacson",
    "phoneNumber": "123456",
    "emailAddress": "racks.jacson@learningcontainer.com"
  },
  {
    "userId": 3,
    "firstName": "denial",
    "lastName": "roast",
    "phoneNumber": "33333333",
    "emailAddress": "denial.roast@learningcontainer.com"
  },
  {
    "userId": 4,
    "firstName": "devid",
    "lastName": "neo",
    "phoneNumber": "222222222",
    "emailAddress": "devid.neo@learningcontainer.com"
  },
  {
    "userId": 5,
    "firstName": "jone",
    "lastName": "mac",
    "phoneNumber": "111111111",
    "emailAddress": "jone.mac@learningcontainer.com"
  }
];

const products = [
  {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000001"
    },
    "id": 1,
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000002"
    },
    "id": 2,
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
  }, {
    "_id": {
      "$oid": "5968dd23fc13ae04d9000003"
    },
    "id": 3,
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }
];

const people = [
  {id: 1, name: 'vijay'},
  {id: 2, name: 'ajay'},
  {id: 3, name: 'ramesh'},
  {id: 4, name: 'suresh'},
  {id: 5, name: 'gautam'},
];

module.exports = {products, users, people};
                