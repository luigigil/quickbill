import * as http from 'http';

const options = {
  port: process.env.PORT || 8080,
  host: '127.0.0.1',
  method: 'GET',
  path: '/ping',
};

const req = http.get(options, (res) => {
  res.on('data', () => {
    process.exit(res.statusCode === 200 ? 0 : 1);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  })

  res.on('error', (err) => {
    console.log(err);
    process.exit(1);
  })
});

req.on('error', (err) => {
  console.log(err);
  process.exit(1);
});

req.end();
