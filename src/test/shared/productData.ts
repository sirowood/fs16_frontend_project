const products = [
  {
    "id": 1,
    "title": "Nuevo Titulo",
    "price": 10,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!",
    "images": [
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"
    ],
    "createdAt": "2023-09-27T18:34:51.000Z",
    "updatedAt": "2023-09-28T03:35:49.000Z",
    "category": {
      "id": 1,
      "name": "Clothe",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 2,
    "title": "Nuevo Titulo",
    "price": 10,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!",
    "images": [
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"
    ],
    "createdAt": "2023-09-27T18:36:43.000Z",
    "updatedAt": "2023-09-28T03:36:04.000Z",
    "category": {
      "id": 1,
      "name": "Clothe",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 3,
    "title": "Nuevo Titulo",
    "price": 10,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!",
    "images": [
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"
    ],
    "createdAt": "2023-09-27T18:44:53.000Z",
    "updatedAt": "2023-09-28T03:36:44.000Z",
    "category": {
      "id": 1,
      "name": "Clothe",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 4,
    "title": "Nuevo Titulo",
    "price": 10,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!",
    "images": [
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"
    ],
    "createdAt": "2023-09-27T18:44:58.000Z",
    "updatedAt": "2023-09-28T03:36:48.000Z",
    "category": {
      "id": 1,
      "name": "Clothe",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 5,
    "title": "Nuevo Titulo",
    "price": 123,
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore consequuntur magnam dolorem earum nemo cupiditate a voluptates fugiat ipsa voluptatibus!",
    "images": [
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random",
      "https://source.unsplash.com/random"
    ],
    "createdAt": "2023-09-27T18:54:36.000Z",
    "updatedAt": "2023-09-28T03:36:52.000Z",
    "category": {
      "id": 2,
      "name": "Electronics",
      "image": "https://picsum.photos/640/640?r=9478",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T14:46:55.000Z"
    }
  },
  {
    "id": 6,
    "title": "Otro producto nuevo",
    "price": 1111,
    "description": "Descripción nueva",
    "images": [
      "https://firebasestorage.googleapis.com/v0/b/platzi-store-forms.appspot.com/o/image.png?alt=media&token=9aa27b09-faea-4570-953d-f99c101f9db5"
    ],
    "createdAt": "2023-09-27T19:00:17.000Z",
    "updatedAt": "2023-09-27T19:00:17.000Z",
    "category": {
      "id": 2,
      "name": "Electronics",
      "image": "https://picsum.photos/640/640?r=9478",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T14:46:55.000Z"
    }
  },
  {
    "id": 7,
    "title": "aaaaaaaq",
    "price": 1,
    "description": "a",
    "images": [
      "pepe.png"
    ],
    "createdAt": "2023-09-27T19:15:48.000Z",
    "updatedAt": "2023-09-27T19:15:48.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 8,
    "title": "Gaaaa",
    "price": 10,
    "description": "A description",
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "createdAt": "2023-09-27T19:44:37.000Z",
    "updatedAt": "2023-09-27T19:44:37.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
  {
    "id": 9,
    "title": "gggg",
    "price": 2,
    "description": "gasdfgdsf",
    "images": [
      "pepe.png"
    ],
    "createdAt": "2023-09-27T19:45:08.000Z",
    "updatedAt": "2023-09-27T19:45:08.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://picsum.photos/640/640?r=2293",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T14:46:55.000Z"
    }
  },
  {
    "id": 10,
    "title": "New Product Course",
    "price": 9999,
    "description": "A description",
    "images": [
      "https://placeimg.com/640/480/any"
    ],
    "createdAt": "2023-09-27T20:17:29.000Z",
    "updatedAt": "2023-09-27T20:17:29.000Z",
    "category": {
      "id": 4,
      "name": "Shoes",
      "image": "https://picsum.photos/640/640?r=1389",
      "createdAt": "2023-09-27T14:46:55.000Z",
      "updatedAt": "2023-09-27T15:16:05.000Z"
    }
  },
];

export { products };
