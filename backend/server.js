const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; 

app.use(cors());

app.use(express.json());
// tanishq:tanishqsoni
// mongoose.connect('mongodb+srv://tanishq:tanishqsoni@cluster0.rch2cyk.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0')

mongoose.connect('mongodb+srv://tanishq:tanishqsoni@cluster0.rch2cyk.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch(err => {
  console.log('❌ Connection error:', err);
});

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/messages', async (req, res) => {
  console.log('📩 Received form data:', req.body);
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: '✅ Contact form data saved successfully' });
  } catch (error) {
    console.error('❌ Error saving contact form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('📡 Server is running');
});

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
