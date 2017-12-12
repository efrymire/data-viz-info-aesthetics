var width = window.innerWidth
var height = window.innerHeight

d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    
var svg = d3.select('svg');

function background() {
    
    svg.append('circle')
        .attr('r', 10)
        .attr('cx', 2 * (window.innerWidth / 3))
        .attr('cy', 3 * (window.innerHeight / 4))
        .attr('opacity', '0.6')
        .attr('fill', 'white')
    
    svg.append('circle')
        .attr('r', 200)
        .attr('cx', 2 * (window.innerWidth / 3))
        .attr('cy', 3 * (window.innerHeight / 4))
        .attr('stroke', 'white')
        .attr('fill', 'none')
        .attr('opacity', '0.6')
        .style("stroke-dasharray", ("3, 3"))
    
    svg.append('circle')
        .attr('r', 400)
        .attr('cx', 2 * (window.innerWidth / 3))
        .attr('cy', 3 * (window.innerHeight / 4))
        .attr('stroke', 'white')
        .attr('fill', 'none')
        .attr('opacity', '0.6')
        .style("stroke-dasharray", ("3, 3"))
    
    svg.append('circle')
        .attr('r', 600)
        .attr('cx', 2 * (window.innerWidth / 3))
        .attr('cy', 3 * (window.innerHeight / 4))
        .attr('stroke', 'white')
        .attr('fill', 'none')
        .attr('opacity', '0.6')
        .style("stroke-dasharray", ("3, 3"))
    
    svg.append('circle')
        .attr('r', 800)
        .attr('cx', 2 * (window.innerWidth / 3))
        .attr('cy', 3 * (window.innerHeight / 4))
        .attr('stroke', 'white')
        .attr('fill', 'none')
        .attr('opacity', '0.6')
        .style("stroke-dasharray", '3')
        .style('z-index', -1)

};

function table(data) {
    
    // var table = d3.select('svg')
    //     .selectAll('div')
    //     .data(data.sort(function(b, a){
    //         return b["Number"]-a["Number"];
    //         })).enter()
    //     .append('div')
    //         .attr('class', function(d) { return 'row ' + d.Number })
    //         .attr('width','150')
    //         .attr('height','150')
    //     .attr('x', 160)
    //     .attr('y', i*20 + 40)
            
    // table.append('text')
    //     .text(function(d) { return d.Number + ' ' + d.utmeasting + ' ' +  d.utmnorthing })
    
    d3.csv('rock_movements.csv', function(error, data) {
    
        data.forEach(function(d, i) {
            svg.selectAll('div')
                .attr('class', function(d) { return 'row ' + d.Number })
                .append('text')
                    .text(d.Number)
                    .attr('x', 60)
                    .attr('y', i*20 + 40) // spaces 20 pixles at a time
                    // .style('text-anchor', 'start')
                    .style('fill', 'black')
                    .attr('class','table')
                    .on('mouseover', function() {
                        d3.select(this)
                        .style('fill','white')
                    })
                    .on('mouseout', function() {
                        d3.select(this)
                        .style('fill','black')
                    });
        })
    })
}

d3.csv("rock_movements.csv", function(error, data) {
    if (error) throw error;
    console.log(data);
    background();
    table(data);
});