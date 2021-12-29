import axios from "axios";

//const userUrl = `https://jsonplaceholder.typicode.com/users/${process.argv[2]}`

const userUrl=`http://localhost:3000/`
axios.get(userUrl).then(({ data: user }) => {
    console.log(`Hello ${user.name}`)
})


// axios.get(userUrl).then((res)=>{
//     const data=res.data
//     const user=data
//     console.log(user.name)

// })



