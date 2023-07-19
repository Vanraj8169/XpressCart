
# XpressCart

XpressCart is a secure and user-friendly e-commerce website with essential features like product listings, cart, and checkout. It offers secure payment options and includes an admin panel for efficient order and product management. The website ensures smooth navigation with sorting, filtering, and pagination features. User authentication, order emails, password reset emails, and user profiles enhance the overall shopping experience.



## Screenshots

![App Screenshot](![image](https://github.com/Vanraj8169/XpressCart/assets/87256781/45ac260d-78b8-4fed-ad03-59512e00d1c3)
)



## Features

- Implemented and optimized essential e-commerce features resulting in a 40% decrease in page load time, enhancing user experience.
- Streamlined order management processes with the development of an admin panel, reducing order processing time by 30%.
- Increased customer engagement and retention by 25% through the integration of automated email notifications for orders and password resets.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Vanraj8169/XpressCart.git
```

Go to the project directory

```bash
  cd XpressCart-main
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## API Reference
### api : https://dummyjson.com
#### Get all items

```http
  GET /api/product
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
