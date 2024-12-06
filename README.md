# Book Details Application

A web application for browsing detailed information about books. Users can view book details, including author, series, publishing information, and more, along with a description of the book.

## Features

- Responsive UI for viewing book details.
- Displays information such as title, author, ISBN, cover type, and more.
- Modern design with React and CSS modules.
- Backend API integration for dynamic book data.
- Supports structured JSON data for book entries.

---

## Installation

### Prerequisites

- Node.js and npm installed.

### Clone the Repository

```bash
git clone https://github.com/your-username/book-details-app.git
cd bookshop
```


## Running the Application
### Start the Client

Run the React client in development mode:
```
npm start
```
Access the app at http://localhost:3000.

### Start the Client
Navigate to the server directory and run:
```
cd server
npm run dev
```
Access the app at http://localhost:5000.


## API Data Example

Below is an example of the JSON format used for book entries in the API:
```
{
  "title": "На маяк",
  "author": "Вирджиния Вулф",
  "series": "Магистраль. Главный тренд.",
  "publishing": "magistr",
  "image": "/image/home/header.png",
  "isbn": "978-5-04-198784-8",
  "ageLimit": "16+",
  "originalTitle": "The Awakening",
  "coverType": "Мягкая обложка",
  "pages": 256,
  "weight": "0 кг",
  "thickness": "15 мм",
  "format": "125x200 мм",
  "paperMaterial": "Бумага офсетная пухлая",
  "readingTime": "12 часов 48 минут",
  "description": "На маяк — книга категорически необычная. Два дня, разделенные десятилетним промежутком времени...",
  "category": "artistic"
}
```

## Swagger API
```
http://localhost:5000/api.
```

