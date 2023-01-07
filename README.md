# Hyperdrive Speedometer

This is an [Astro](https://astro.build) site that displays performance metrics for sites built by [ansidev](https://github.com/ansidev).

It is based on [Chris Swithinbank](http://chrisswithinbank.net/)’s awesome [Speedlify for Astro sites](https://github.com/delucis/hyperdrive-speedometer) tool and uses the same underlying measurement techniques.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                      |
| :----------------------- | :------------------------------------------ |
| `pnpm install`           | Installs dependencies                       |
| `pnpm run collect-stats` | Run Lighthouse tests for all sites          |
| `pnpm run dev`           | Starts local dev server at `localhost:3000` |
| `pnpm run build`         | Build the production site to `./dist/`      |
| `pnpm run preview`       | Preview the build locally, before deploying |

## Author

Le Minh Tri [@ansidev](https://ansidev.xyz/about).

## License

This source code is released under the [MIT License](/LICENSE).
