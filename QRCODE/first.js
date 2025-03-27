
const qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrbody = document.getElementById('qr-body');

generateBtn.addEventListener('click',()=>{
    e.preventDefault();
    generateQRcode();
})

function generateQRcode() {
    new QRcode (qrcontainer,{
        text:qrtext.value,
        height:sizes,
        width:sizes,
        colorLight:"#fff",
        colordark:"#000",

    });
}