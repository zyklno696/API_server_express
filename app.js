// import sharp from 'sharp';
// import { readdirSync, writeFile } from 'fs';
// const images = readdirSync('./static/images');


// writeFile('./static/images.json', JSON.stringify(images), 'utf8', function (err) {
//     console.log(err)

// })


// for (let i = 0; i < images.length; i++){
//     sharp('./images/' + images[i])
//         .resize(320, 240)
//         .toFile('./images/min_' + images[i], (err, info) => {
//             console.log(info);
//             console.log(err);
//         });
// }