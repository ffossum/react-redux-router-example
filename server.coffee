express = require 'express'
app = express()

db = require './db'

app.use express.static 'public'
app.get '/', (req, res) ->
  res.render 'index.jade'

app.listen 3000

