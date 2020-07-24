var path = require("path");

/**
 * GET /coursereserves/departments?query=cql.allRecords=1 sortby name&limit=2000
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * accept: application/json
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImRhMzkwNTRmLTdjNGUtNTZhZS1iYTNjLWY2MDUwYzFhZWEyYSIsImlhdCI6MTU5NTYwOTg2NiwidGVuYW50IjoiZGlrdSJ9.bsovF9Zun5yyT1F9VfaKl3XM6gN4pAGMkUcoZgY65Lg
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36
 * content-type: application/json
 * origin: http://localhost:3001
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * sec-fetch-dest: empty
 * referer: http://localhost:3001/settings/cr/departments
 * accept-encoding: gzip
 * accept-language: en-GB,en-US;q=0.9,en;q=0.8
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 24 Jul 2020 16:58:29 GMT");
  res.setHeader("content-type", "application/json");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.43:9178/coursereserves/departments.. : 202 6279us, GET mod-courses-1.0.6-SNAPSHOT.96 http://10.36.1.43:9157/coursereserves/departments.. : 200 3397us");
  res.setHeader("content-encoding", "gzip");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("H4sIAAAAAAAAALyUMW/bMBCF9/wKQmtMg6RImtTmoEWRoUubTkWH0/FkC5ApQaIHI/B/Ly07MNokRdIC1UCIx3uP4vsIPd4wVgQaYEw7imkqWMW+s8dczfU2nKZFWNWlgRq5IN1w7YPjQLLkVgXrkAgd6mJxlkTY0Sxar9fsE/Vdvzk8rQWacGyH1PZxbnnYEpvSPhxY37CUJ0MHkdJT+44SBEhw6j1/UC7iSJAofMjD7KGEElysuNIP0lbGVcovjfG3Ij8Xo6vq7vBtovH+cioovTD5QCvUxI0F4jWUyBsrjEAJBAquDvsh/MW+F9X7950Njnk8Ln6DIY21TkvkRiJxHTRyAOEzG1CyFsILDc9gfMx4t+wrthSRptd43Efs9qGNG7Y5g1uwgdI4vzKIgQ3QAfUx/UL1vZhEWWlRydXSevNyXH8I2Sy9LP9DyA16KZXmGBRw3WS5B9Jci9K64IR3KjwL+TPkO7yD1OIbEq77DGTYjzQHC8PQtRRYVm+nfw/WvRLR21TXWNiPk0OR+gTdF8J+DPP/obw5/gQAAP//AwAvLvruNwQAAA==", "base64"));
  res.end();

  return __filename;
};
