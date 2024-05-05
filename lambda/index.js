const sharp = require('sharp');
const aws = require('aws-sdk');
const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2'
});

const transformationOptions = [
  { name: 'w140', width: 140 },
  { name: 'w600', width: 600 },
]

exports.handler = async (event) => {
  try {
    const Key = event.Records[0].s3.object.key;
    const keyOnly = Key.split("/")[1];
    console.log(`Image Resizing ${keyOnly}`)
    const image = await s3.getObject({ Bucket: "image-upload-tutoria", Key }).promise();

    await Promise.all(transformationOptions.map(async ({ name, width }) => {
      try {
        const newKey = `${name}/${keyOnly}`;
        // 가로 사진을 세로 기준으로 압축하게 되면 css로 키우는 과정에서 이미지가 깨지는 현상을 방지하기 위해 fit: "outside"를 사용
        const resizedImage = await sharp(image.Body).rotate()
        .resize({ width, height: width, fit: "outside"}) 
        .toBuffer();
  
        await s3.putObject({ Bucket: "image-upload-tutoria", Key: newKey, Body: resizedImage }).promise();
      } catch (error) {
        throw error;
      }
    }));

    return {
      statusCode: 200,
      body: event
    };
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: event
    };
  }
}