const path = require('path');
const fs = require('fs');
const pdf = require('pdf-parse');

var pdfExtract = require('pdf-extract');
var pathStr = "./1.pdf";
var defaultOptions = {
  type: 'ocr',
  clean: false,
  ocr_flags: [
    '-psm 1',       // automatically detect page orientation
    '-l dia',       // use a custom language file
  ]
};

module.exports = {
  convertPDF: async function(req, res) {

    
    const pdfFile = path.resolve(pathStr)
    const dataBuffer = fs.readFileSync(pathStr);
    const data = await pdf(dataBuffer)
    res.send(data);
    // var processor = pdfExtract(pdfFile, defaultOptions, function (error) {

    //   if(error) {
    //     res.send(error);
    //   }
    // });

    // processor.on('complete', function (data) {

    //   res.send(data.text_pages);
    //   //saveFile(filePath + '.txt', data.text_pages, callback);
    // });

    },
}