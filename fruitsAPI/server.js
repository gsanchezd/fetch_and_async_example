const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const data = [
  { 
      name: 'Manzana',
      price: 800,
      stock: 50
  },
  { 
      name: 'Pera',
      price: 1000,
      stock: 100
  },
  { 
      name: 'Plátano',
      price: 850,
      stock: 30
  },
  { 
      name: 'Naranja',
      price: 700,
      stock: 60
  },
  { 
      name: 'Kiwi',
      price: 1500,
      stock: 40
  },
  { 
      name: 'Tuna',
      price: 1500,
      stock: 1
  },
  { 
      name: 'Durazno',
      price: '1500',
      stock: 0
  },
]

app.get('/', (req, res) => {
  res.json(data)
})



app.listen(port, () => { 
  console.log('todo list RESTful API server started on: ' + port);
});
