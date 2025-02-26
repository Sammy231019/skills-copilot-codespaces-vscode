// Create web server
const express = require('express')
const app = express()
const port = 3000

// Enable CORS
const cors = require('cors')
app.use(cors())

// Enable JSON parsing
app.use(express.json())

// Enable file serving
app.use(express.static('public'))

// Enable file uploads
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// Enable file serving
app.use('/uploads', express.static('uploads'))

// Enable file serving
app.use('/public', express.static('public'))

// Enable file serving
app.use('/scripts', express.static('scripts'))

// Enable file serving
app.use('/styles', express.static('styles'))

// Enable file serving
app.use('/images', express.static('images'))

// Enable file serving
app.use('/icons', express.static('icons'))

// Enable file serving
app.use('/fonts', express.static('fonts'))