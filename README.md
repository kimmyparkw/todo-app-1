# C40 Todo App

## Requirements

- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) (quick install: install Homebrew and `run brew update && brew tap mongodb/brew && brew install mongodb-community@4.2`)
  - `brew update`
  - `brew tap mongodb/brew`
  - `brew install mongodb-community@4.2`

## Setup

NOTE: A SendGrid API key is required for email notifications.

```shell
$ git clone git@github.com:wyncode/todo-mern-api.git
$ cd todo-mern-api
$ yarn
$ cp .env.sample .env
$ yarn dev
```

Fill in your environment variables in your `.env` files.

To reset and seed your database:

```
$ yarn db:reset
```

To run your API in a local environment:

```
$ yarn dev
```

---

Add collection to your Postman account for more in-depth API documentation:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/99ca62324ef8441fc734)
