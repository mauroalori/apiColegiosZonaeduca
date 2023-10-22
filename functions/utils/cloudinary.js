const cloudinary = require('cloudinary').v2;
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET  } = require('../config.js')

cloudinary.config({ 
  cloud_name: CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET
});

async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath, {
    folder: 'fotosColegios'
  })
}

async function deleteImageCloud(publicId){
  return await cloudinary.uploader.destroy(publicId)
}

module.exports = {
  uploadImage,
  deleteImageCloud
}