# MK Tower

MK tower gif generator from user-configured images.

## Demo

`Project doesn't deployed yet`.

## Stack

- [Preact](https://preactjs.com/) v10.29.8
- [TypeScript](https://www.typescriptlang.org/) v6.0.2
- [Vite](https://vite.dev/) v8.3.0
- [Vitest](https://vitest.dev/) v5.0.4
- [Testing Library](https://testing-library.com/) v7.0.1
- [Playwright](https://playwright.dev/) v1.64.1

## Project structure

```text
mk-tower/
|-- .husky/             # Git hooks
|   |-- commit-msg      # Commit message validation
|   |-- pre-commit      # Pre-commit checks
|-- public/             # Public static files
|-- src/
|   |-- assets/         # Imported assets
|   |-- components/     # UI components
|   |-- styles/         # Stylesheets
|   |-- utils/          # Shared utility functions
|   |-- types/          # Shared TypeScript types
|   |-- app.tsx         # Root application component
|   |-- index.css       # Global styles
|   |-- main.tsx        # Application entry point
|-- tests/
|   |-- integration/    # Integration tests
|   |-- unit/           # Unit tests
|   |-- e2e/           # E2e tests
|-- package.json        # Dependencies and scripts
|-- vite.config.ts      # Vite configuration
```

## Work flow criteria

- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Requirements

- [NodeJs](https://nodejs.org/en) v24.16.0
- [Git](https://git-scm.com/) v2.47.3

## Instalation

- Clone remote repository

```bash
git clone [URL_REPOSITORIO]
cd [NOMBRE_PROYECTO]
```

## Local environment

- Run local server

```bash
pnpm dev
```

## Commands

### Development

| Command        | Description                           |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Starts the Vite development server.   |
| `pnpm build`   | Creates a production build with Vite. |
| `pnpm preview` | Serves the production build locally.  |

### Testing

| Command          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `pnpm test`      | Runs the full testing suite in sequence.                 |
| `pnpm test:unit` | Runs unit tests once.                                    |
| `pnpm test:int`  | Runs integration tests once.                             |
| `pnpm test:e2e`  | Runs end-to-end tests in a real browser with Playwright. |

### Code Quality

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `pnpm lint`         | Lints the project with ESLint.   |
| `pnpm format`       | Formats all files with Prettier. |
| `pnpm format:check` | Checks formatting with Prettier. |

## License

This project is licensed under the MIT License.
