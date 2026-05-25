const https = require('https');
https.get('https://ibb.co/HpRzqgRR', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/og:image.*?content="(.*?)"/);
    if(match) console.log(match[1]);
  });
});
