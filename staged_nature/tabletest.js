
d3.csv("rock_movements.csv", function(error, data) {
  if (error) throw error;

    function tabulate(data, columns) {
        var table = d3.select("body").append("table")
            .attr("style", "margin-left: 30px")
            thead = table.append("thead"),
            tbody = table.append("tbody");
        
        thead.append("tr")
            .selectAll("th")
            .data(columns)
            .enter()
            .append("th")
            .text(function(column) { return column; });
        
        var rows = tbody.selectAll("tr")
            .data(data)
            .enter()
            .append("tr")
            .attr("class", function(d) { return 'row ' + d.Number })
            .on('mouseover', function() {
                d3.select(this).style('fill','white')
            })
            .on('mouseout', function() {
                d3.select(this).style('fill','black')
            });
            
        var cells = rows.selectAll("td")
            .data(function(row) {
                return columns.map(function(column) {
                    return { column: column, value: row[column] };
                });
            })
            .enter()
            .append("td")
            .html(function(d) { return d.value; });
    
        return table;
    }
    
    var table = tabulate(data, ["Number", "utmeasting", "utmnorthing"]);

});