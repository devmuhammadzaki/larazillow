# Larazillow

![](./larazillow.png)

Larazillow is a Single page Web Application for selling and buying real estate, built with Laravel/Vue.js, Tailwind CSS, and Inertia.js.

## Installation

1. Download the code by clicking **Code**, **Download ZIP**. Or if you have Git install in your machine, you can run this in your terminal.

```
git clone https://github.com/0xAlMo3geZ/larazillow.git
```

2. Change directory to your local copy of `larazillow` in your terminal. Then install composer dependencies.

```
composer install
```

3. Copy `.env` file from `.env.example`. In NIX machine you can use this command.

```
cp .env.example .env
```

4. Prepare a database. You can use this command.

```
mysql -uroot -e "CREATE DATABASE larazillow_db"
```

If you have password for your database, you need to specify `-p` on the command.

5. Configure your database and email sender settings in `.env`

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=larazillow_db
DB_USERNAME=root
DB_PASSWORD=

MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="test@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```

6. Migrate database tables and seed them with fake data

```
php artisan migrate --seed
```

7. Generate a key for you application

```
php artisan key:generate
```
8. Link storage (for photos and icons associated with the project)

```
php artisan storage:link
```

10. Install frontend dependencies.

```
npm install
```

10. Run local server

```
php artisan serve
```

Your local copy of larazillow is ready to access in your browser ;)
