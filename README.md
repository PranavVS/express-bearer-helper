# JAI HIND 🇮🇳

# express-bearer-helper

express-bearer-helper is an NPM package for dealing with the bearer token and JWT decoding in the express.

## Installation

You can install the package using the node package manager.

```bash
npm install express-bearer-helper
```

## Middlewares

1. `bearerToken`
2. `expressJWT`

## Usage

1. ### `bearerToken()` Middleware

#### Definition

`bearerToken()`

#### Usage Example

```typescript
//Typescript
import express from "express";
import { bearerToken } from "express-bearer-helper";

const app = express();

app.use(bearerToken());

app.listen(3000, () => {
  console.log("App Listening at 3000.");
});
```

2. ### `expressJWT()` Middleware

#### Definition

`expressJWT(key: string, JWT_KEY: string, jwtToken?: string)`

1. `key` : It is the string key to access the jwt payload like `req.key`
2. `JWT_KEY`: key string to decode jsonwebtoken.
3. `jwtToken`: jwt-token if you already parsed the beared token using some other middlewares.

#### Usage Example

```
//Typescript
import express, { Request, Response } from "express";
import { expressJWT } from "express-bearer-helper";

const router = express.Router();

router.post(
  "/some-route",
  expressJWT("currentUser", process.env.JWT_KEY),
  (req: Request, res: Response) => {
    console.log(req.currentUser);
    return res.status(200).send({ currentUser: req.currentUser });
  }
);
export { router as someRouter };
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
