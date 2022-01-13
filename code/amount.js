
const d = 30 // number of days to calculate
let value = 0 // total net value
const price = 10.43 // usd per cake
let powerPrice = 95670 // current power per cake
let power = 9400000 // total power
const change = 5670 // power price change per day
const compounding =  process.argv[2] // number of days to compound
let totalYield = 0 // accumulated yield


for (i = 0; i < d; i++) {
    const yield = (power*.06)/powerPrice
    const perDay = yield * price
    totalYield += perDay

    if (i<compounding) {
        let newPower = yield * powerPrice
        power += newPower
    } else {
        value += perDay
    }
    console.log(`Value after ${i+1} days: ${value}; per day: ${perDay}; Total yield: ${totalYield}; Compounding: ${i<compounding}`)

    powerPrice += [[2022-01-13]]
}
