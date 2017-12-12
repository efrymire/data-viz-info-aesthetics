var width = window.innerWidth
var height = window.innerHeight

d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

var svg = d3.select('svg');

// Title and associated text    

svg.append('text')

d3.select('text')
    .text('The 162 Sailing Stones of Death Valley')
    .attr('x', 250)
    .attr('y', 70)
    .attr('class','title')
    .style('fill','black')

d3.csv('rock_movements.csv', function(error, data) {

    // svg.append('div')
    //     .selectAll('div').data(data).enter()
    //     .append('div')
    //     .attr('class','table')
    //     .style('width', '30%')
    //     .text( function(d) { 
    //         return d.Number; })
    //     .style('fill', 'black')
    //     .on('mouseover', function() {
    //         d3.select(this)
    //         .style('fill','white')
    //     })
    //     .on('mouseout', function() {
    //         d3.select(this)
    //         .style('fill','black')
    //     });
    
    
    
    // d = data, i = iterator
    data.forEach(function(d, i) {
        svg.append('div')
            .attr('class', function(d) { return 'row ' + d.Number })
            .append('text')
            // calls the text to fill the append of 'text'
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
    
    data.forEach(function(d, i) {
        svg.append('text')
            // calls the text to fill the append of 'text'
            .text(d.utmeasting)
            .attr('x', 90)
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
    
    data.forEach(function(d, i) {
        svg.append('text')
            // calls the text to fill the append of 'text'
            .text(d.utmnorthing)
            .attr('x', 160)
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
    
});



// Distance Circles
    
svg.append('circle')
    .attr('r', 10)
    .attr('cx', 2*(window.innerWidth/3))
    .attr('cy', 3*(window.innerHeight/4))
    .attr('opacity','0.6')
    .attr('fill','white')

svg.append('circle')
    .attr('r', 200)
    .attr('cx', 2*(window.innerWidth/3))
    .attr('cy', 3*(window.innerHeight/4))
    .attr('stroke','white')
    .attr('fill','none')
    .attr('opacity','0.6')
    .style("stroke-dasharray", ("3, 3"))
    
svg.append('circle')
    .attr('r', 400)
    .attr('cx', 2*(window.innerWidth/3))
    .attr('cy', 3*(window.innerHeight/4))
    .attr('stroke','white')
    .attr('fill','none')
    .attr('opacity','0.6')
    .style("stroke-dasharray", ("3, 3"))
    
svg.append('circle')
    .attr('r', 600)
    .attr('cx', 2*(window.innerWidth/3))
    .attr('cy', 3*(window.innerHeight/4))
    .attr('stroke','white')
    .attr('fill','none')
    .attr('opacity','0.6')
    .style("stroke-dasharray", ("3, 3"))
    
svg.append('circle')
    .attr('r', 800)
    .attr('cx', 2*(window.innerWidth/3))
    .attr('cy', 3*(window.innerHeight/4))
    .attr('stroke','white')
    .attr('fill','none')
    .attr('opacity','0.6')
    .style("stroke-dasharray", '3')
    .style('z-index',-1)