var express = require('express');
var router = express.Router();
var jimp = require('jimp');

/* GET home page. */
router.get('/:name/:tile/:size', async function(req, res, next) {
  let rgbaToHex = (r, g, b, a = 255) => {
    const hex = (256 + r).toString(16).substr(1) +((1 << 24) + (g << 16) | (b << 8) | a).toString(16).substr(1)
    return parseInt(hex, 16)
  }
  let drawRect = (img, x, y, w, h, color) => {
    img.scan(x, y, w, h, (x, y, offset) => {
      img.bitmap.data.writeUInt32BE(color, offset, true);
    })
  }

  try {
    const imageName = req.params.name
    const tiles = req.params.tile.split('_').map(Number)
    const imageSize = parseInt(req.params.size)
    const imageFile = `./public/images/${imageName}.png`
    const font = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
    const image = await jimp.read(imageFile)
    // make tiles
    const xTile = 7
    const yTile = 7
    const stepX = Math.round(image.bitmap.width / xTile)
    const stepY = Math.round(image.bitmap.height / yTile)

    let colorR = rgbaToHex(112,193,179)
    let colorG = rgbaToHex(178,219,191)

    for ( let i = 1 ; i <= yTile ; i++ ) {
      for ( let j = 1 ; j <= xTile ; j++ ) {
        let tileNum = (yTile * (i - 1)) + j
        let color = colorR
        if ( !tiles.includes(tileNum) ) {
          if ( tileNum % 2 === 0 ) color = colorG
          const currentX = Math.round(stepX * (j - 1))
          const currentY = Math.round(stepY * (i - 1))
          drawRect(image, currentX, currentY, stepX, stepY, color)
          image.print(font, currentX + 10, currentY, {
            text: tileNum.toString(),
            alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
            alignmentY: jimp.VERTICAL_ALIGN_MIDDLE
          },
          stepX, ( currentY * 2 ) + stepY )
        }
      }
    }
    image.resize(imageSize, imageSize)
    const imageBuffer = await image.getBufferAsync(jimp.MIME_PNG)
    res.contentType(jimp.MIME_PNG);
    res.send(imageBuffer)
  } catch (err) {
    console.error(err.message)
    console.error(err)
  }
});

router.get('/preview', async function (req, res, next){
  try {
    const imageName = req.query.filename
    const imageFile = `./public/${imageName}`
    const image = await jimp.read(imageFile)
    if (image.bitmap.width < image.bitmap.height) {
      image.resize(jimp.AUTO, 240)
    } else {
      image.resize(240, jimp.AUTO)
    }
    const imageBuffer = await image.getBufferAsync(jimp.MIME_PNG)
    res.contentType(jimp.MIME_PNG);
    res.send(imageBuffer)
  } catch (err) {
    console.error(err.message)
    console.error(err)
  }
})

module.exports = router;
