# Laravel Dev Kit

![Code Quality Checks](https://github.com/DiligentCreators/Laravel-Dev-Kit/actions/workflows/code-quality.yml/badge.svg)

Laravel Dev Kit is a Laravel 13 starter with linting, formatting, tests, and GitHub Actions on PHP 8.5.

## Git blame for formatting commits

To skip automatic formatting commits in `git blame`, run this once after cloning:

```bash
git config blame.ignoreRevsFile .git-blame-ignore-revs
```

## Features

- **CI**: Prettier check, Duster lint, Vite production build, and PHPUnit on PHP 8.5
- **Husky**: lint-staged on commit; tests on push
- **Formatting**: Pint (via Duster) for PHP; Prettier for JS, CSS, and Markdown
- **Production defaults**: HTTPS in production, trusted proxies/hosts, health check at `/up`

## Tooling layout

```plaintext
/
|-- .github
|   |-- dependabot.yml
|   |-- workflows
|       |-- auto-merge-dependabot.yml
|       |-- code-quality.yml
|-- .husky
|   |-- pre-commit
|   |-- pre-push
|-- .prettierrc
|-- .prettierignore
|-- lint-staged.config.js
```

## Getting started

### Prerequisites

- PHP 8.3+ (PHP 8.5 recommended; CI runs on 8.5)
- [Node.js](https://nodejs.org/) 22+
- [Composer](https://getcomposer.org/)
- [Laravel](https://laravel.com) 13.x

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/DiligentCreators/Laravel-Dev-Kit.git my-new-app
    cd my-new-app
    ```

2. Install PHP dependencies:

    ```bash
    composer install
    ```

3. Install Node.js dependencies (also installs Husky git hooks):

    ```bash
    npm install
    ```

4. Copy `.env.example` to `.env`.

5. Generate the application key:

    ```bash
    php artisan key:generate
    ```

6. Run migrations if you use the database session, cache, or queue drivers:

    ```bash
    php artisan migrate
    ```

### Usage

1. Run the local development server:

    ```bash
    php artisan serve
    ```

2. Watch frontend assets:

    ```bash
    npm run dev
    ```

3. Commits run lint-staged; pushes run the test suite.

## Workflows

### GitHub Actions

- **code-quality.yml**: Prettier, Duster, `npm run build`, and `php artisan test` on PHP 8.5
- **auto-merge-dependabot.yml**: Auto-approves Dependabot PRs. Merge only after CI is green (enable required status checks on `main`).

### Production checklist

- `APP_ENV=production`
- `APP_DEBUG=false`
- `APP_KEY` generated
- `APP_URL` set to your HTTPS origin
- `SESSION_SECURE_COOKIE=true`
- `composer install --no-dev --optimize-autoloader`
- `npm ci && npm run build`
- `php artisan migrate --force`
- `php artisan optimize`
- Run a queue worker and the scheduler if you use jobs or scheduled tasks

## Contributing

Contributions are welcome. Open a pull request or an issue.

## License

This repository is open-source under the [MIT License](LICENSE).

## Credit

- [Laravel](https://laravel.com)
- [Pint](https://laravel.com/docs/pint)
- [Prettier](https://prettier.io)
- [Husky](https://typicode.github.io/husky)
- [Lint-Staged](https://github.com/lint-staged/lint-staged)
- [GitHub Actions](https://github.com/features/actions)
