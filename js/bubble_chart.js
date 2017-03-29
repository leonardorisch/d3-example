var diameter = 960,
    format = d3.format(",d"),
    color = d3.scaleOrdinal(d3.schemeCategory20c);

var bubble = d3.pack()
    .size([diameter, diameter])
    .padding(5.0);

var svg = d3.select("body").append("svg")
    .attr("class", "bubble");

d3.csv("dataset/Pokemon.csv", function(error, data) {

    var node = svg.select("body")
    .data(data)
    .enter().append("svg")
    .attr("class", "node bubble")
    .style('height', function(d){ return (d.Total/10)*2 })
    .style('width', function(d){ return (d.Total/10)*2 })
    .attr("transform", function(d) { return "translate(" + d.Total + "," + d.Total + ")"; });

    node.append("title")
    .text(function(d) { return d.Name + ": " + d.Total });

    node.append("circle")
    .attr("cy", function(d){ return (d.Total/10) })
    .attr("cx", function(d){ return (d.Total/10) })
    .attr("r", function(d){ return d.Total/10 })
    .style("fill", function(d) {
      return color('blue');
    });

    node.append("textArea")
      .attr("dy", function(d){ return (d.Total/10) })
      .style("width", function(d){ return (d.Total/10)/2 })
      .text(function(d){return d.Name})

});

d3.select(self.frameElement).style("height", diameter + "px");
