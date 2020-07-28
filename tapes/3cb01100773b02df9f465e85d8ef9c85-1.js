var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("100d10bf-2f06-4aa0-be15-0b95b2d9f9e3" or "d6f7c1ba-a237-465e-94ed-f37e91bc64bd")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImUzYjhjNjc1LWJjNzAtNWJhOC04MDNiLWJiZmJhYWQwZGJhOSIsImlhdCI6MTU5NTkzNjkyNiwidGVuYW50IjoiZGlrdSJ9.a_A3vnYrca45cKS_eC5fi5Kagn_RZS5TV7ovFhYAGBw
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/574e947b-5cdd-4876-b477-45ff145a5959
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Tue, 28 Jul 2020 11:50:06 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.132:9178/inventory/items.. : 202 7210us, GET mod-inventory-16.1.0-SNAPSHOT.268 http://10.36.1.132:9173/inventory/items.. : 200 74583us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiMTAwZDEwYmYtMmYwNi00YWEwLWJlMTUtMGI5NWIyZDlmOWUzIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIgogICAgfSwKICAgICJ0aXRsZSIgOiAiQSBzZW1hbnRpYyB3ZWIgcHJpbWVyIiwKICAgICJjYWxsTnVtYmVyIiA6ICJUSzUxMDUuODg4MTUgLiBBNTggMjAwNCBGVCBNRUFERSIsCiAgICAiaHJpZCIgOiAiaXRlbTAwMDAwMDAwMDAxNSIsCiAgICAiY29udHJpYnV0b3JOYW1lcyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkFudG9uaW91LCBHcmlnb3JpcyIKICAgIH0sIHsKICAgICAgIm5hbWUiIDogIlZhbiBIYXJtZWxlbiwgRnJhbmsiCiAgICB9IF0sCiAgICAiZm9ybWVySWRzIiA6IFsgXSwKICAgICJkaXNjb3ZlcnlTdXBwcmVzcyIgOiBudWxsLAogICAgImhvbGRpbmdzUmVjb3JkSWQiIDogImUzZmY2MTMzLWI5YTItNGQ0Yy1hMWM5LWRjMTg2N2Q0ZGYxOSIsCiAgICAiYmFyY29kZSIgOiAiOTAwMDAiLAogICAgIml0ZW1MZXZlbENhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICJlbnVtZXJhdGlvbiIgOiAiIiwKICAgICJjaHJvbm9sb2d5IiA6ICIiLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJjaXJjdWxhdGlvbk5vdGVzIiA6IFsgXSwKICAgICJ0YWdzIiA6IHsKICAgICAgInRhZ0xpc3QiIDogWyBdCiAgICB9LAogICAgInllYXJDYXB0aW9uIiA6IFsgXSwKICAgICJlbGVjdHJvbmljQWNjZXNzIiA6IFsgewogICAgICAidXJpIiA6ICJodHRwOi8vd3d3LmxvYy5nb3YvY2F0ZGlyL3RvYy9lY2lwMDcxOC8yMDA3MDIwNDI5Lmh0bWwiLAogICAgICAibGlua1RleHQiIDogIkxpbmtzIGF2YWlsYWJsZSIsCiAgICAgICJtYXRlcmlhbHNTcGVjaWZpY2F0aW9uIiA6ICJUYWJsZSBvZiBjb250ZW50cyIsCiAgICAgICJwdWJsaWNOb3RlIiA6ICJUYWJsZSBvZiBjb250ZW50cyBvbmx5IiwKICAgICAgInJlbGF0aW9uc2hpcElkIiA6ICIzYjQzMDU5Mi0yZTA5LTRiNDgtOWEwYy0wNjM2ZDY2YjlmYjMiCiAgICB9IF0sCiAgICAic3RhdGlzdGljYWxDb2RlSWRzIiA6IFsgImI1OTY4YzllLWNkZGMtNDU3Ni05OWUzLThlNjBhZWQ4YjBkZCIgXSwKICAgICJwdXJjaGFzZU9yZGVyTGluZUlkZW50aWZpZXIiIDogbnVsbCwKICAgICJtYXRlcmlhbFR5cGUiIDogewogICAgICAiaWQiIDogIjFhNTRiNDMxLTJlNGYtNDUyZC05Y2FlLTljZWU2NmM5YTg5MiIsCiAgICAgICJuYW1lIiA6ICJib29rIgogICAgfSwKICAgICJwZXJtYW5lbnRMb2FuVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTI3IiwKICAgICAgIm5hbWUiIDogIkNhbiBjaXJjdWxhdGUiCiAgICB9LAogICAgInRlbXBvcmFyeUxvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyZTQ4ZTcxMy0xN2YzLTRjMTMtYTlmOC0yMzg0NWJiMjEwYTQiLAogICAgICAibmFtZSIgOiAiUmVhZGluZyByb29tIgogICAgfSwKICAgICJwZXJtYW5lbnRMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9jYXRpb24iIDogewogICAgICAiaWQiIDogImZjZDY0Y2UxLTY5OTUtNDhmMC04NDBlLTg5ZmZhMjI4ODM3MSIsCiAgICAgICJuYW1lIiA6ICJNYWluIExpYnJhcnkiCiAgICB9LAogICAgIm1ldGFkYXRhIiA6IHsKICAgICAgImNyZWF0ZWREYXRlIiA6ICIyMDIwLTA3LTI4VDAzOjM0OjMwLjgyNyswMDAwIiwKICAgICAgInVwZGF0ZWREYXRlIiA6ICIyMDIwLTA3LTI4VDExOjUwOjA1LjI3MiswMDAwIiwKICAgICAgInVwZGF0ZWRCeVVzZXJJZCIgOiAiZTNiOGM2NzUtYmM3MC01YmE4LTgwM2ItYmJmYmFhZDBkYmE5IgogICAgfSwKICAgICJsaW5rcyIgOiB7CiAgICAgICJzZWxmIiA6ICJodHRwOi8vZm9saW8tc25hcHNob3Qtb2thcGkuYXdzLmluZGV4ZGF0YS5jb20vaW52ZW50b3J5L2l0ZW1zLzEwMGQxMGJmLTJmMDYtNGFhMC1iZTE1LTBiOTViMmQ5ZjllMyIKICAgIH0sCiAgICAiZWZmZWN0aXZlQ2FsbE51bWJlckNvbXBvbmVudHMiIDogewogICAgICAiY2FsbE51bWJlciIgOiAiVEs1MTA1Ljg4ODE1IC4gQTU4IDIwMDQgRlQgTUVBREUiLAogICAgICAicHJlZml4IiA6IG51bGwsCiAgICAgICJzdWZmaXgiIDogbnVsbCwKICAgICAgInR5cGVJZCIgOiAiNTEyMTczYTctYmQwOS00OTBlLWI3NzMtMTdkODNmMmI2M2ZlIgogICAgfSwKICAgICJlZmZlY3RpdmVMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0KICB9LCB7CiAgICAiaWQiIDogImQ2ZjdjMWJhLWEyMzctNDY1ZS05NGVkLWYzN2U5MWJjNjRiZCIsCiAgICAic3RhdHVzIiA6IHsKICAgICAgIm5hbWUiIDogIkF2YWlsYWJsZSIKICAgIH0sCiAgICAidGl0bGUiIDogIkJyaWRnZXQgSm9uZXMncyBCYWJ5OiB0aGUgZGlhcmllcyIsCiAgICAiY2FsbE51bWJlciIgOiAiUFI2MDU2Lkk0NTg4IEI3NDkgMjAxNiIsCiAgICAiaHJpZCIgOiAiaXRlbTAwMDAwMDAwMDAxMCIsCiAgICAiY29udHJpYnV0b3JOYW1lcyIgOiBbIHsKICAgICAgIm5hbWUiIDogIkZpZWxkaW5nLCBIZWxlbiIKICAgIH0gXSwKICAgICJmb3JtZXJJZHMiIDogWyBdLAogICAgImRpc2NvdmVyeVN1cHByZXNzIiA6IG51bGwsCiAgICAiaG9sZGluZ3NSZWNvcmRJZCIgOiAiZmI3YjcwZjEtYjg5OC00OTI0LWE5OTEtMGU0YjYzMTJiYjVmIiwKICAgICJiYXJjb2RlIiA6ICI0NTM5ODc2MDU0MzgzIiwKICAgICJjb3B5TnVtYmVyIiA6ICJDb3B5IDMiLAogICAgIm5vdGVzIiA6IFsgXSwKICAgICJjaXJjdWxhdGlvbk5vdGVzIiA6IFsgXSwKICAgICJudW1iZXJPZlBpZWNlcyIgOiAiMSIsCiAgICAidGFncyIgOiB7CiAgICAgICJ0YWdMaXN0IiA6IFsgXQogICAgfSwKICAgICJ5ZWFyQ2FwdGlvbiIgOiBbIF0sCiAgICAiZWxlY3Ryb25pY0FjY2VzcyIgOiBbIF0sCiAgICAic3RhdGlzdGljYWxDb2RlSWRzIiA6IFsgXSwKICAgICJwdXJjaGFzZU9yZGVyTGluZUlkZW50aWZpZXIiIDogbnVsbCwKICAgICJtYXRlcmlhbFR5cGUiIDogewogICAgICAiaWQiIDogIjFhNTRiNDMxLTJlNGYtNDUyZC05Y2FlLTljZWU2NmM5YTg5MiIsCiAgICAgICJuYW1lIiA6ICJib29rIgogICAgfSwKICAgICJwZXJtYW5lbnRMb2FuVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMmI5NGM2MzEtZmNhOS00ODkyLWE3MzAtMDNlZTUyOWZmZTI3IiwKICAgICAgIm5hbWUiIDogIkNhbiBjaXJjdWxhdGUiCiAgICB9LAogICAgInRlbXBvcmFyeUxvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICJlOGIzMTFhNi0zYjIxLTQzZjItYTI2OS1kZDkzMTBjYjJkMGUiLAogICAgICAibmFtZSIgOiAiQ291cnNlIHJlc2VydmVzIgogICAgfSwKICAgICJ0ZW1wb3JhcnlMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0sCiAgICAibWV0YWRhdGEiIDogewogICAgICAiY3JlYXRlZERhdGUiIDogIjIwMjAtMDctMjhUMDM6MzQ6MzAuNzg3KzAwMDAiLAogICAgICAidXBkYXRlZERhdGUiIDogIjIwMjAtMDctMjhUMTE6NTA6MDMuNzIwKzAwMDAiLAogICAgICAidXBkYXRlZEJ5VXNlcklkIiA6ICJlM2I4YzY3NS1iYzcwLTViYTgtODAzYi1iYmZiYWFkMGRiYTkiCiAgICB9LAogICAgImxpbmtzIiA6IHsKICAgICAgInNlbGYiIDogImh0dHA6Ly9mb2xpby1zbmFwc2hvdC1va2FwaS5hd3MuaW5kZXhkYXRhLmNvbS9pbnZlbnRvcnkvaXRlbXMvZDZmN2MxYmEtYTIzNy00NjVlLTk0ZWQtZjM3ZTkxYmM2NGJkIgogICAgfSwKICAgICJlZmZlY3RpdmVDYWxsTnVtYmVyQ29tcG9uZW50cyIgOiB7CiAgICAgICJjYWxsTnVtYmVyIiA6ICJQUjYwNTYuSTQ1ODggQjc0OSAyMDE2IiwKICAgICAgInByZWZpeCIgOiBudWxsLAogICAgICAic3VmZml4IiA6IG51bGwsCiAgICAgICJ0eXBlSWQiIDogbnVsbAogICAgfSwKICAgICJlZmZlY3RpdmVMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0KICB9IF0sCiAgInRvdGFsUmVjb3JkcyIgOiAyCn0=", "base64"));
  res.end();

  return __filename;
};