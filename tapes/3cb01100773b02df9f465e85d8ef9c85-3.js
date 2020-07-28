var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("100d10bf-2f06-4aa0-be15-0b95b2d9f9e3" or "d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNzI0NCwidGVuYW50IjoiZGlrdSJ9.8PHaFd3828ZJIAGiapdtKeg4YJgSDqmtKSfVlaYzjeQ
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/410287b8-02ab-4b31-90e5-a09f8e073db3
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:55:21 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/inventory/items.. : 202 7206us, GET mod-inventory-16.1.0-SNAPSHOT.268 http://10.36.1.132:9173/inventory/items.. : 200 72358us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQnJpZGdldCBKb25lcydzIEJhYnk6IHRoZSBkaWFyaWVzIiwKICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDEwIiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiRmllbGRpbmcsIEhlbGVuIgogICAgfSBdLAogICAgImZvcm1lcklkcyIgOiBbIF0sCiAgICAiZGlzY292ZXJ5U3VwcHJlc3MiIDogbnVsbCwKICAgICJob2xkaW5nc1JlY29yZElkIiA6ICJmYjdiNzBmMS1iODk4LTQ5MjQtYTk5MS0wZTRiNjMxMmJiNWYiLAogICAgImJhcmNvZGUiIDogIjQ1Mzk4NzYwNTQzODMiLAogICAgImNvcHlOdW1iZXIiIDogIkNvcHkgMyIsCiAgICAibm90ZXMiIDogWyBdLAogICAgImNpcmN1bGF0aW9uTm90ZXMiIDogWyBdLAogICAgIm51bWJlck9mUGllY2VzIiA6ICIxIiwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogImU4YjMxMWE2LTNiMjEtNDNmMi1hMjY5LWRkOTMxMGNiMmQwZSIsCiAgICAgICJuYW1lIiA6ICJDb3Vyc2UgcmVzZXJ2ZXMiCiAgICB9LAogICAgInRlbXBvcmFyeUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yOFQwMzozNDozMC43ODcrMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0yOFQxMTo1NToxNy42OTUrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy9kNmY3YzFiYS1hMjM3LTQ2NWUtOTRlZC1mMzdlOTFiYzY0YmQiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlBSNjA1Ni5JNDU4OCBCNzQ5IDIwMTYiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiBudWxsCiAgICB9LAogICAgImVmZmVjdGl2ZUxvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfQogIH0sIHsKICAgICJpZCIgOiAiMTAwZDEwYmYtMmYwNi00YWEwLWJlMTUtMGI5NWIyZDlmOWUzIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQSBzZW1hbnRpYyB3ZWIgcHJpbWVyIiwKICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAiaHJpZCIgOiAiaXRlbTAwMDAwMDAwMDAxNSIsCiAgICAiY29udHJpYnV0b3JOYW1lcyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkFudG9uaW91LCBHcmlnb3JpcyIKICAgIH0sIHsKICAgICAgIm5hbWUiIDogIlZhbiBIYXJtZWxlbiwgRnJhbmsiCiAgICB9IF0sCiAgICAiZm9ybWVySWRzIiA6IFsgXSwKICAgICJkaXNjb3ZlcnlTdXBwcmVzcyIgOiBudWxsLAogICAgImhvbGRpbmdzUmVjb3JkSWQiIDogImUzZmY2MTMzLWI5YTItNGQ0Yy1hMWM5LWRjMTg2N2Q0ZGYxOSIsCiAgICAiYmFyY29kZSIgOiAiOTAwMDAiLAogICAgIml0ZW1MZXZlbENhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICJlbnVtZXJhdGlvbiIgOiAiIiwKICAgICJjaHJvbm9sb2d5IiA6ICIiLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJjaXJjdWxhdGlvbk5vdGVzIiA6IFsgXSwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgewogICAgICAidXJpIiA6ICJodHRwOi8vd3d3LmxvYy5nb3YvY2F0ZGlyL3RvYy9lY2lwMDcxOC8yMDA3MDIwNDI5Lmh0bWwiLAogICAgICAibGlua1RleHQiIDogIkxpbmtzIGF2YWlsYWJsZSIsCiAgICAgICJtYXRlcmlhbHNTcGVjaWZpY2F0aW9uIiA6ICJUYWJsZSBvZiBjb250ZW50cyIsCiAgICAgICJwdWJsaWNOb3RlIiA6ICJUYWJsZSBvZiBjb250ZW50cyBvbmx5IiwKICAgICAgInJlbGF0aW9uc2hpcElkIiA6ICIzYjQzMDU5Mi0yZTA5LTRiNDgtOWEwYy0wNjM2ZDY2YjlmYjMiCiAgICB9IF0sCiAgICAic3RhdGlzdGljYWxDb2RlSWRzIiA6IFsgImI1OTY4YzllLWNkZGMtNDU3Ni05OWUzLThlNjBhZWQ4YjBkZCIgXSwKICAgICJwdXJjaGFzZU9yZGVyTGluZUlkZW50aWZpZXIiIDogbnVsbCwKICAgICJtYXRlcmlhbFR5cGUiIDogewogICAgICAiaWQiIDogIjFhNTRiNDMxLTJlNGYtNDUyZC05Y2FlLTljZWU2NmM5YTg5MiIsCiAgICAgICJuYW1lIiA6ICJib29rIgogICAgfSwKICAgICJwZXJtYW5lbnRMb2FuVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTI3IiwKICAgICAgIm5hbWUiIDogIkNhbiBjaXJjdWxhdGUiCiAgICB9LAogICAgInRlbXBvcmFyeUxvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyZTQ4ZTcxMy0xN2YzLTRjMTMtYTlmOC0yMzg0NWJiMjEwYTQiLAogICAgICAibmFtZSIgOiAiUmVhZGluZyByb29tIgogICAgfSwKICAgICJwZXJtYW5lbnRMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9jYXRpb24iIDogewogICAgICAiaWQiIDogImZjZDY0Y2UxLTY5OTUtNDhmMC04NDBlLTg5ZmZhMjI4ODM3MSIsCiAgICAgICJuYW1lIiA6ICJNYWluIExpYnJhcnkiCiAgICB9LAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDIwLTA3LTI4VDAzOjM0OjMwLjgyNyswMDAwIiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDIwLTA3LTI4VDExOjU1OjE5LjgwMCswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiZTNiOGM2NzUtYmM3MC01YmE4LTgwM2ItYmJmYmFhZDBkYmE5IgogICAgfSwKICAgICJsaW5rcyIgOiB7CiAgICAgICJzZWxmIiA6ICJodHRwOi8vZm9saW8tc25hcHNob3Qtb2thcGkuYXdzLmluZGV4ZGF0YS5jb20vaW52ZW50b3J5L2l0ZW1zLzEwMGQxMGJmLTJmMDYtNGFhMC1iZTE1LTBiOTViMmQ5ZjllMyIKICAgIH0sCiAgICAiZWZmZWN0aXZlQ2FsbE51bWJlckNvbXBvbmVudHMiIDogewogICAgICAiY2FsbE51bWJlciIgOiAiVEs1MTA1Ljg4ODE1IC4gQTU4IDIwMDQgRlQgTUVBREUiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiAiNTEyMTczYTctYmQwOS00OTBlLWI3NzMtMTdkODNmMmI2M2ZlIgogICAgfSwKICAgICJlZmZlY3RpdmVMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0KICB9IF0sCiAgInRvdGFsUmVjb3JkcyIgOiAyCn0=", "base64"));
  res.end();

  return __filename;
};