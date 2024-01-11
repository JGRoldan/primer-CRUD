const express = require('express')
const cors = require('cors')
const app = express()
const estudiantesRoutes = require('./routes/estudiantesRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', estudiantesRoutes)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});