# http-training

Demo about HTTP client - server model
---

# PREREQUISITES:

```sh
yarn install
```

# Running Client example

```sh
yarn ts-node src/http-client-demo.ts <user-id>
```

Where `<user-id>` is in range of 1 - 10

Example:

```sh
yarn ts-node src/http-client-demo.ts 1
```

Then, this programing will fetch the user data from the endpoint [https://jsonplaceholder.typicode.com/users/1](https://jsonplaceholder.typicode.com/users/1) and showing the hello message

```sh
Hello Leanne Graham
Done in 1.74s.
```

**Credit** 

@monkey-programmer
