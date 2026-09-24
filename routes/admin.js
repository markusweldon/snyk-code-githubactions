// ⚠️ INTENTIONALLY VULNERABLE sample routes for Snyk Code demo purposes.
// These exist so the CI security gate has new finding types to catch.
const express = require('express');
const { exec } = require('child_process');
const https = require('https');
const router = express.Router();

// Command Injection vulnerability
router.get('/ping', (req, res) => {
  const host = req.query.host;
  exec('ping -c 1 ' + host, (err, stdout) => {
    res.send(stdout);
  });
});

// Server-Side Request Forgery (SSRF) vulnerability
router.get('/fetch', (req, res) => {
  const target = req.query.url;
  https.get(target, (proxied) => {
    proxied.pipe(res);
  });
});

module.exports = router;
