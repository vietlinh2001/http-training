import axios from "axios";

const userUrl = `https://jsonplaceholder.typicode.com/users/${process.argv[2]}`

axios.get(userUrl).then(({ data: user }) => {
    console.log(`Hello ${user.name}`)
})
