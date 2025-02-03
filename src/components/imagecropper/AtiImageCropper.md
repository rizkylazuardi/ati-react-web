Rectangle Image Cropper.

## When To Use

Crop uploaded image with rectangle cropper

```jsx
const crop={
    x: 10,
    y: 10,
    width: 80,
    height: 80
};

const handleCropComplete = (crop,pixelCrop) => {
    store.set({pixelCrop:pixelCrop});
    console.log('pixelCrop',store.state.pixelCrop);
}

const handleImageLoaded = image => {
    console.log('loadedImage',image);
}

<AtiImageCropper
    src={text('URL',url)} //can text or blob
    crop={object("crop",crop)}
    events={{
        onCropComplete:handleCropComplete,
        onImageLoaded:handleImageLoaded
}}/>
```

## Get Cropped Image
```jsx
/**
 * @param {File} image - Image File Object
 * @param {Object} pixelCrop - pixelCrop Object provided by react-image-crop
 * @param {String} fileName - Name of the returned file in Promise
 */
function getCroppedImg(image, pixelCrop, fileName) {

  const canvas = document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileName;
      resolve(file);
    }, 'image/jpeg');
  });
}

async test() {
  const croppedImg = await getCroppedImg(image, pixelCrop, returnedFileName);
}
```