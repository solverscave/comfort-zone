const config = require('config');
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const stripe = require('stripe')('sk_test_JbQYpS47bHjAnH6iyGfpTN6z00omKRfxgS');

const server = express();

if (!config.get('jwtPrivateKey')) {
  console.error('FATAL ERROR: jwtPrivateKey is not defined.');
  process.exit(1);
}

//MONGOOSE
mongoose.connect(
  'mongodb+srv://imuhammadosama:comfortzone@comfort-zone-cluster-2o6ke.mongodb.net/comfortzone?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
let db = mongoose.connection;
db.once('open', () => console.log('Connected to DB!'));
db.on('errors', (err) => console.log(err));

const ads = require('./routes/ads');
const complains = require('./routes/complains');
const funds = require('./routes/funds');
const issues = require('./routes/issues');
const bills = require('./routes/bills');
const users = require('./routes/users');
const auth = require('./routes/auth');
const pay = require('./routes/pay');

server.use(express.json());

server.use(fileUpload());

server.use(express.static(path.join(__dirname, 'public')));

server.use(cors());
var whitelist = ['http://localhost:3000'];

server.use('/api/ads', ads);
server.use('/api/complains', complains);
server.use('/api/funds', funds);
server.use('/api/issues', issues);
server.use('/api/bills', bills);
server.use('/api/users', users);
server.use('/api/auth', auth);
server.use('/api/pay', pay);

(async () => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'usd',
    metadata: { integration_check: 'accept_a_payment' },
  });
})();

server.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  let file = req.files.file;

  file.mv(
    `${__dirname}/client/public/uploads/${file.name.split(' ').join('')}`,
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      res.json({
        fileName: file.name,
        filePath: `/uploads/${file.name.split(' ').join('')}`,
      });
    }
  );
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));
