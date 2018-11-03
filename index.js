const util = require('util')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const Influx = require('influx')
const FILENAME = 'data.txt'

const runSpeedTest = async () => exec('make run-speedtest')

const readSpeedTestData = async () => {
  const [speed, unit] = fs.readFileSync(FILENAME, 'utf8').split(' ')
  return {
    value: parseInt(speed),
    unit
  }
}

const saveSpeedTestData = async (PORT, DATABASE, { value, unit }) => {
  const influxSchema = {
    host: `0.0.0.0:${PORT}`,
    database: DATABASE,
    schema: [
     {
       measurement: 'speed',
       fields: { speed: Influx.FieldType.INTEGER },
       tags: ['host']
     }
   ]
  }

  const influx = new Influx.InfluxDB(influxSchema)

  return influx.writePoints([
    {
      measurement: 'speed',
      fields: { speed: value }
    }
  ])
}

const measure = async () => {
  const { PORT, DATABASE } = process.env

  try {
    await runSpeedTest()
    const speed = await readSpeedTestData()
    await saveSpeedTestData(PORT, DATABASE, speed)
    console.log(`Recorded and saved ${speed.value} to Influx`)
  } catch (error) {
    console.log('error', error)
  }
}

setInterval(() => {
  measure()
}, 300000)
