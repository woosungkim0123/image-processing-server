const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'ap-northeast-2'
});

module.exports = { s3 }