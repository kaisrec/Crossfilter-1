// Loading some dummy data
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

//take a peek at the data in the console of your browser
console.log(data);

// changing the format of date from string to date format
data.forEach(function(d){
    var tempDate = new Date(d.date);
    d.date = tempDate;
});

// applying crossfilter() function on our data
var facts = crossfilter(data);

console.log("Data after crossfilter function is applied.");
console.log(facts);

 // creating a dimension that is made from more than just one field.
// a concatenation of type and tip field in the following case
var multiDimension = facts.dimension(function(d){return d.type+":"+d.tip;});

//what if we wanted a dimension of tips that are greater than zero?
var tipDimension = facts.dimension(function(d){return d.tip>0;});

// what if we wanted the year or month or any unit of time to be a dimension?
var dateDimension = facts.dimension(function(d){return d.date;});

// creating a dimension on two fields, let us say for a scatterplot
var scatterDimesnion = facts.dimension(function(d){return [d.total,d.tip];})

/*
You cannot have more than 32 dimensions on a dataset
*/
