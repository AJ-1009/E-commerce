import axios from 'axios'

export function fetchusers(){
    return new Promise(async(resolve,reject)=>{
        let res = await axios.get("https://dummyjson.com/users")
        let data = res?.data?.users.map((user)=>{
           return{
            ...user,
            address:user.address.address + " " + user.address.city +" "+ user.address.postalCode + " "+user.address.state,
            name:user.firstName + " " + user.lastName
           }
        })
        resolve(data)
    })
}