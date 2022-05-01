const { exec } = require('child_process')
const path = require('path')
require('dotenv').config({ path: path.join(__dirname, './.env') })
let samples = []

// setting
const takeSample = () => {
    if (process.env.DEBUG_MODE) console.time('responseTime')
    exec("fast --json -j", (err, stdout, stderr) => {
        if (err || stderr) console.log('ERROR:', 'ERROR_TESTING_INTERNET_SPEED');
        const result = JSON.parse(stdout)
        if (process.env.DEBUG_MODE) console.timeEnd('responseTime')
        samples.push(result)
        if (samples.length === process.env.SAMPLE_QTY) {
            let temp = 0
            samples.forEach(samp => {
                temp += samp.downloadSpeed
            });
            temp = temp / 10
            console.log('avg internet speed:', temp)
            if (process.env.DEBUG_MODE) console.log(samples)
            samples = []
        }
    })
}

// begin routine
if (process.env.DEBUG_MODE) console.log('Starting service...');
setInterval(takeSample, process.env.SAMPLER_TIME ?? 60000)