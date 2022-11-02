import axios from 'axios'

export function fetchItems(){
return new Promise (async (resolve,reject)=>{
  let res = await axios.get("https://dummyjson.com/products")
console.log(res)
})
}
