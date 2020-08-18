/* Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]". */

var defangIPaddr = function(address) {
  let newAddress = address.split('.').join('[.]')
   return newAddress;
};


//Version B
/*
var defangIPaddr = function(address) {
    return address.replace(/[.]/g,'[.]')
};
*/
