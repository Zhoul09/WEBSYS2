const express = require('express');
const app = express();


const customerRoutes = require('./src/customers/customer-routes');
const productRoutes = require('./src/products/product-routes');
const orderRoutes = require('./src/orders/orders-routes');


app.use(express.json());


app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


app.listen(3000, () => {
    console.log('✅ Server started at http://localhost:3000');
});



/*
app.use('/students', studentRoutes)
app.use('/students', courseRoutes)

*/

























/*
app.get('/users', (req,res) => {
    let result = users;

    if (req.query.course) {
        result = result.filter((user) => user.course == req.query.course) 
    }

    if (req.query.year) {
        result = result.filter((user) => user.adminssion == req.query.year) 
    }
    
    if (req.query.yearFrom && req.query.yearEnd) {
        result = result.filter((user) => user.admissionYear >= req.query.yearFrom && user.admissionYear <= req.query.yearEnd);
 
    }
    
    res.send(result);
})

*/


































/*
app.get('/', (req, res) => {
    res.send('Hello!');
});

app.get('/users', (req, res) => {
    res.send('Getting all users!');
});



app.get('/users/:username', (req, res) => {
    res.send(`Hello ${req.params.username}`);
});

app.get('/users/:username', (req, res) => {
    res.send(`Hello ${req.params.username}!!! Your hair color is ${req.query.color}`);
});



app.get('/orders/:id', (req, res) => {
    res.send(`Showing order with ID number ${req.params.id}`);
});

app.get('/orders/iphone', (req, res) => {
    res.send(`Showing order with ID number ${req.params.id}`);
});




app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req,res) => {
    console.log(req.body);

    res.send('testing post!!!')
})

app.get('/users/:id', (req, res) => {
    const student = req.params.id;
    const user = users.filter(user => user.id === student);
    res.json(user)
    console.log(user)
})

app.get('/users/course/:course', (req, res) => {
    const course  = req.params;
    const filtered = users.filter(u => u.course === course);
    res.json(filtered);
});


app.post('/users/:id', (req,res) => {
    users.push(req.body);

    res.send('Success!!!')
})
*/



/*
app.get('/users', (req,res) => {
    res.send(users);
    users.push(req.body);
})

app.get('/users/:id', (req, res) => {
    const users = req.params.id;
    const result = req.params.id; 
    console.log(result);
  });




app.post('/users', (req,res) => {
    users.push(req.body);

    res.send('Success!!!')
})


*/
