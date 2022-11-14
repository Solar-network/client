# Solar API client

<p align="center">
    <img src="https://github.com/Solar-network/client/raw/main/banner.png" />
</p>

## Installation

```bash
pnpm install @solar-network/client
```

## Usage

```ts
import { Connection } from "@solar-network/client";

const init = async () => {
    const connection: Connection = new Connection("https://tapi.solar.org/api");

    console.log(await connection.api("blocks").all());
};

init();
```

See the [documentation](https://docs.solar.org/sdk/typescript/client/intro/) for more examples.

## Security

If you discover a security vulnerability within this package, please send an e-mail to security@solar.org. All security vulnerabilities will be promptly addressed.

## Credits

This project exists thanks to all the people who [contribute](https://github.com/Solar-network/client/graphs/contributors).

## License

Please read the separate [LICENSE](https://github.com/Solar-network/client/blob/main/LICENSE) file for details.
