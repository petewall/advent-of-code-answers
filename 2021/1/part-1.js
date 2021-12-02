#!/usr/local/bin/node

const fs = require('fs')
fs.readFile('./input.txt', (err, data) => {
    if (err) {
        console.error(`failed to read input file: ${err}`)
        process.exit(1)
    }

    const measurements = data.toString().split('\n')
    let increases = 0
    let previous
    measurements.forEach((measurement) => {
        measurement = parseInt(measurement, 10)
        if (previous !== undefined && measurement > previous) {
            increases++
        }
        previous = measurement
    })

    console.log(`The measurement increased ${increases} times`)
})
