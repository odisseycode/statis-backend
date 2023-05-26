import { mean, median, standardDeviation, variance, min, max } from 'simple-statistics';
import data from 'src/interface/data.interface';

const meanFunction = (dataInput: data) => {
  return mean(dataInput.data)
}

const medianFunction = (dataInput: data) => {
return median(dataInput.data)
}

const standardDeviationFunction = (dataInput: data) => {
return standardDeviation(dataInput.data)
}

const varianceFunction = (dataInput: data) => {
return variance(dataInput.data)
}

const minFunction = (dataInput: data) => {
return min(dataInput.data)
}

const maxFunction = (dataInput: data) => {
return max(dataInput.data)
}

export {meanFunction, medianFunction, standardDeviationFunction, varianceFunction, minFunction, maxFunction}