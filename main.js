const fetch = require("node-fetch");

const totalPropertyCount = (array, key) => {
  if (!(key in array[0])){
    throw "Invalid key"
  }

  const count = array.reduce((accum, item) => {
    accum += item[key];
    return accum;
  }, 0)
  return count
}

const findByName = (array, name) => {
  const result = array.find(ele => ele.name === name)
  if (result === undefined) { 
    throw "Product not listed" 
  }
  else { 
    return result
  }
}

const totalProfit = (array) => {
  const total = array.reduce((accum, item) => {
    accum = accum + item.stock * item.price
    return accum;
  }, 0)
  return total
}

const main = async () => {
  const response = await fetch("http://localhost:3000/");
  const data = await response.json()
  return data
}

const option = (opt, data, params = {})  =>{
  if (opt == "stock"){
    console.log("Stock: ", totalPropertyCount(data, "stock"))
  }
  else if (opt == "search")
  {
    console.log("Found: ", findByName(data, params[0]))
  }
  else if (opt == "totalprofit"){
    console.log("total $$ in stock right now: ", totalProfit(data))
  }
}

const myArgs = process.argv.slice(2);

main()
  .then((data) => { option(myArgs[0], data, myArgs.slice(1)) })
  .catch((e) => {console.log(e, "error")});
