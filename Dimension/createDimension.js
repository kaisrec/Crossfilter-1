// Loading a dummy dataset
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

// applying crossfilter function on it

var facts = crossfilter(data);

/*
Let us say we want to create a dimension on the "type "field
*/

var typeDimension = facts.dimension(function(d){return d.type;});

// Once a dimension is created we can apply a few more methods on the dimension.
console.log(typeDimension.top(3));

/*
 console.log(typeDimension.top(Infinity));
 will return all the rows

 in order to index from taht we can use:
 console.log(typeDimension.top(Infinity)[0]);

 what if we wanted that date from the above indexed data?
 console.log(typeDimension.top(Infinity)[0].date);

 */

 // creating a dimension on the "tip" field

 var tipDimension = facts.dimension(function(d){return d.tip;});
 console.log(tipDimension.bottom(3));
