import data from 'src/interface/data.interface'
import {jstat} from 'jstat'

const pdfFunction = (x: number, mean: number, standardDeviation: number) => { //Probability density function of the normal distribution
      return jstat.normal.pdf(x, mean, standardDeviation)
}

const cdfFunction = (x: number, mean: number, standardDeviation: number) => { // Cumulative distribution function of the normal distribution
      return jstat.normal.cdf(x, mean, standardDeviation)
}

const invFunction = (x: number, mean: number, standardDeviation: number) => { // Quantile (inverse) function of the normal distribution
      return jstat.normmal.inv(x, mean, standardDeviation)
}

const sampleFunction = (mean: number, standardDeviation: number) => { // Generate random numbers from the normal distribution
      return jstat.normal.sample(mean, standardDeviation)
}

export {pdfFunction, cdfFunction, invFunction, sampleFunction}