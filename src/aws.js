const aws = require('aws-sdk');

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'ap-northeast-2'
});

const getSignedUrl = ({key}) => {
    return new Promise((resolve, reject) => {
        s3.createPresignedPost({
            Bucket: process.env.AWS_BUCKET_NAME,
            Fields: {
                key
            },
            Expires: 60,
            Conditions: [
                ['content-length-range', 0, 50 * 1000 * 1000],
                ["starts-with", "$Content-Type", "image/"]
            ]
        }, (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
    
}

module.exports = { s3, getSignedUrl }