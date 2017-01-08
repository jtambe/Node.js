const dns = require('dns');

dns.resolve4('facebook.com', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses resolve4: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});

dns.lookup('facebook.com', (err, addresses, family) => {
  console.log('addresses lookup:', addresses);
});