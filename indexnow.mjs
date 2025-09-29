// indexnow.mjs
// import https from 'https';

// const data = JSON.stringify({
//   host: 'www.femcodersclub.com',
//   key: '6befac582d614d1bb40630f1ea6aeca2',
//   keyLocation: 'https://www.femcodersclub.com/6befac582d614d1bb40630f1ea6aeca2.txt',
//   urlList: [
//     'https://www.femcodersclub.com/',
//     'https://www.femcodersclub.com/eventos',
//     'https://www.femcodersclub.com/equipo',
//     'https://www.femcodersclub.com/blog',
//     'https://www.femcodersclub.com/contacto',
//     'https://www.femcodersclub.com/femcoders-quienes-somos',
//     'https://www.femcodersclub.com/login',
//     'https://www.femcodersclub.com/static-seo/index.html',
//     'https://www.femcodersclub.com/static-seo/eventos.html',
//     'https://www.femcodersclub.com/static-seo/equipo.html',
//     'https://www.femcodersclub.com/static-seo/blog.html',
//     'https://www.femcodersclub.com/static-seo/contacto.html',
//     'https://www.femcodersclub.com/static-seo/femcoders-quienes-somos.html',
//     'https://www.femcodersclub.com/static-seo/login.html'
//   ]
// });

// const options = {
//   hostname: 'api.indexnow.org',
//   path: '/indexnow',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json; charset=utf-8',
//     'Content-Length': data.length
//   }
// };

// const req = https.request(options, res => {
//   console.log(`✅ Status: ${res.statusCode}`);
//   res.on('data', d => process.stdout.write(d));
// });

// req.on('error', error => console.error('❌ Error:', error));
// req.write(data);
// req.end();


// indexnow.mjs
import https from 'https';

const data = JSON.stringify({
  host: 'www.femcodersclub.com',
  key: '6befac582d614d1bb40630f1ea6aeca2',
  keyLocation: 'https://www.femcodersclub.com/6befac582d614d1bb40630f1ea6aeca2.txt',
  urlList: [
    'https://www.femcodersclub.com/'
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
  res.on('data', d => process.stdout.write(d));
});

req.on('error', error => console.error('❌ Error:', error));
req.write(data);
req.end();