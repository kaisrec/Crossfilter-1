// Loaing dummy data

var data = [
  {date: "2011-11-14T16:17:54Z", quantity: 2, total: 190, tip: 100, type: "tab"},
  {date: "2011-11-14T16:20:19Z", quantity: 2, total: 190, tip: 100, type: "tab"},
  {date: "2011-11-14T16:28:54Z", quantity: 1, total: 300, tip: 200, type: "visa"},
  {date: "2011-11-14T16:30:43Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:48:46Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:53:41Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T16:54:06Z", quantity: 1, total: 100, tip: 0, type: "cash"},
  {date: "2011-11-14T16:58:03Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:07:21Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:22:59Z", quantity: 2, total: 90, tip: 0, type: "tab"},
  {date: "2011-11-14T17:25:45Z", quantity: 2, total: 200, tip: 0, type: "cash"},
  {date: "2011-11-14T17:29:52Z", quantity: 1, total: 200, tip: 100, type: "visa"}
];

/* What if we wanted to find the sum of "quantity", "total" or "tip" from the above dataset?
we shall see how reduceSum() does the job but first we have to apply the crossfilter() function on the dataset
*/

var facts = crossfilter(data);

// sum of "tip" field
var tipSum = facts.groupAll()
                    .reduceSum(function(d){return d.tip;})
                    .value();
console.log("Sum of tips is "+tipSum);

// sum of "quantity" field
var quantitySum = facts.groupAll()
                        .reduceSum(function(d){return d.quantity;})
                        .value();

console.log("Sum of quantity is "+quantitySum);

var totalSum = facts.groupAll()
                        .reduceSum(function(d){return d.total;})
                        .value();

console.log("The sum of total is "+totalSum);
