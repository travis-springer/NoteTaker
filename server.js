//DEPENDENCIES
const express = require('express');

//EXPRESS CONFIGURATION
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//LISTENER
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));