
# REST API NODEJS

This API is built using Nodejs, mysql and sequelize, with the CRUD method to study the SmartPhone case

## Preparation material

- create a new database with the name db_restapi_node



## Running Tests

To run tests, run the following command,Run program with npm

```bash
  npm install
  npx sequelize db:migrate
  npm start
```


## API Reference

#### Get all items

```http
  GET localhost:3000/products/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/` | `string` |  for get all data |

#### Get item by id

```http
  GET localhost:3000/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | for params id |

#### Create Item

```http
  POST localhost:3000/products
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | for Name smartphone |
| `brand`      | `string` | for Brand smartphone |
| `Description`      | `string` | for Description smartphone |

#### Update Item

```http
  PUT localhost:3000/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | for params id |
| `name`      | `string` | for Name smartphone |
| `brand`      | `string` | for Brand smartphone |
| `Description`      | `string` | for Description smartphone |

#### Delete Item

```http
  DELETE localhost:3000/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | for params id |



## Authors

- [@iksanArifki27](https://github.com/IksanArifki27)



## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

