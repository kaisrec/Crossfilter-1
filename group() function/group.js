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

// changing the format of date from string to date format
data.forEach(function(d){
    var tempDate = new Date(d.date);
    d.date = tempDate;
});

// applying crossfilter() function on our data
var facts = crossfilter(data);

//creating a dimension based on type
var typeDimension = facts.dimension(function(d){return d.type;});
// creating a dimension based on date
var dateDimension = facts.dimension(function(d){return d.date;});

// grouping on the type dimension
/*
 used in its basic default form, group() gives us a unique list of values,
 accessed by the dimension, against the row count.
*/
var typeGroup = typeDimension.group();

/*
When you run *.group(), you are by default running *group(function(d){return d;})
*/
var ridiculousGroup = typeDimension.group(function(d){return d.substring(0,1);}); // grouping on the first character
console.log(ridiculousGroup.all());
// some of the commands that we can run on a group
console.log(typeGroup.all()); // returns an array with 3 objects
console.log(typeGroup.top(1));
console.log(typeGroup.size()); // returns the size of the group

// group on date dimension by hours
var dateGroup = dateDimension.group(function(d){return d.getHours();});
