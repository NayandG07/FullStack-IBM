const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connection = mongoose.connect(process.env.MONGO_URI);

module.exports = {
    connection
}
