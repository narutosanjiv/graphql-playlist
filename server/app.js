const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors');

const app = express()

//allow cors origin request
app.use(cors())

mongoose.connect("mongodb://sanjiv:test123@ds351827.mlab.com:51827/gql-ninja")
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))
app.listen(4000, () => {
    console.log("now listening for request on port 4000")
})