// indexnow-quienes-somos.mjs
import https from 'https';

const data = JSON.stringify({
  host: 'www.femcodersclub.com',
  key: '6befac582d614d1bb40630f1ea6aeca2',
  keyLocation: 'https://www.femcodersclub.com/6befac582d614d1bb40630f1ea6aeca2.txt',
  urlList: [
    'https://www.femcodersclub.com/femcoders-quienes-somos'
  ]
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

const req = https.request(options, res => {
  console.log(`✅ Status: ${res.statusCode}`);
  console.log(`📄 Solicitando indexación de: femcoders-quienes-somos`);
  res.on('data', d => process.stdout.write(d));
});

req.on('error', error => console.error('❌ Error:', error));
req.write(data);
req.end();