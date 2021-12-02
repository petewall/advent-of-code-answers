#!/usr/local/bin/node

function parseIntBase10(input) {
    return parseInt(input, 10)
}

const fs = require('fs')
fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.error(`failed to read input file: ${err}`)
        process.exit(1)
    }

    const measurements = data.toString().split('\n').map(parseIntBase10)
    let increases = 0
    let previous
    measurements.forEach((measurement, index) => {
        if (index >= 2) {
            bufferedMeasurement = measurement + measurements[index - 1] + measurements[index - 2]
            if (previous !== undefined && bufferedMeasurement > previous) {
                increases++
            }
            previous = bufferedMeasurement
        }
    })

    console.log(`The measurement increased ${increases} times`)
})
