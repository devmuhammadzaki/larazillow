# Larazillow

![](./larazillow.png)

Larazillow is a Single page Web Application for selling and buying real estate, built with Laravel/Vue.js, Tailwind CSS, and Inertia.js.

## Demo

Due to obvious financial issues, I was not able to host the project on any free hosting platform. Therefore, I have decided to provide a poor-quality [video](https://drive.google.com/file/d/15oe8j-NZ3A4gXTgtSUrqFF37Foh0wp4L/view?usp=sharing) for it.

## Installation

1. Download the code by clicking **Code**, **Download ZIP**. Or if you have Git install in your machine, you can run this in your terminal.

```
git clone https://github.com/0xAlMo3geZ/larazillow.git
```

2. Change directory to your local copy of `larazillow` in your terminal. Then install composer dependencies.

```
composer install
```

3. Install frontend dependencies.

```
npm install
```

4. Copy `.env` file from `.env.example`. In NIX machine you can use this command.

```
cp .env.example .env
```

5. Prepare a database. You can use this command.

```
mysql -uroot -e "CREATE DATABASE larazillow_db"
```

If you have password for your database, you need to specify `-p` on the command.

6. Configure your database and email sender settings in `.env`

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

7. Migrate database tables and seed them with fake data

```
php artisan migrate --seed
```

8. Generate a key for you application

```
php artisan key:generate
```
9. Link storage (for photos and icons associated with the project)

```
php artisan storage:link
```

10. Run php development server

```
php artisan serve
```

11. Run node.js development server (alongside php server)

```
npm run dev
```

Your local copy of larazillow is ready to access in your browser ;)
