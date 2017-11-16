/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

let lineArtIcon = document.getElementById('svg_1');
let svgElement = document.getElementById('svgElement');

svgElement.addEventListener('mousemove', function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
});

function splitPathToPoints(path) {
    let pathPoints = [];

    for (let i = 0; i < path.getTotalLength(); i++) {
        pathPoints.push(path.getPointAtLength(i));
    }
    return pathPoints;
}

console.log(splitPathToPoints(lineArtIcon));
