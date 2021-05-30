const {Pool} = require('pg');

const pool = new Pool({
    user: 'kfphvhajdpuxvx',
    password: '4be50848d44f84dcacebbbd81319e76119d5ccf9eee2beb85727e78922362072',
    host: 'ec2-54-152-185-191.compute-1.amazonaws.com',
    port: 5432,
    database: 'da37liub6kcqan',
    ssl:{
        rejectUnauthorized: false
    }
});
module.exports = pool;