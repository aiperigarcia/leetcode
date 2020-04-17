// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
//
// Your task is to make 'Past' function which returns time converted to milliseconds.

function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}
