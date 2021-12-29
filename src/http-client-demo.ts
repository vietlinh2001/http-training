import axios from "axios";

const userUrl = `http://localhost:3000`

axios.get(userUrl).then(({ data: user }) => {
    console.log(`Hello ${user.name}!. You are ${user.describe}`)
})
