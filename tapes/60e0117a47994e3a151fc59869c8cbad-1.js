var path = require("path");

/**
 * GET /inventory/items?limit=20&query=id=("100d10bf-2f06-4aa0-be15-0b95b2d9f9e3")
 *
 * connection: keep-alive
 * host: folio-snapshot-okapi.aws.indexdata.com
 * proxy-connection: keep-alive
 * origin: http://localhost:3001
 * x-okapi-tenant: diku
 * x-okapi-token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWt1X2FkbWluIiwidXNlcl9pZCI6ImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIsImlhdCI6MTU5NjE5OTAxNiwidGVuYW50IjoiZGlrdSJ9.Rfzb9MkbMTQdQrDUPfrXyZfFBQRHnWyMQPtPd_jqQ6I
 * user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Cypress/4.11.0 Chrome/80.0.3987.165 Electron/8.3.1 Safari/537.36
 * content-type: application/json
 * accept: application/json
 * sec-fetch-dest: empty
 * sec-fetch-site: same-site
 * sec-fetch-mode: cors
 * referer: http://localhost:3001/cr/courses/83034b0a-bf71-4495-b642-2e998f721e5d?filters=departments.1fc91124-cd2a-4fae-9ae4-40368d80982d%2Ccoursetypes.f5063ee8-b18c-402b-b0c9-1b0f93d8570b%2Ccoursetypes.9154048b-3698-42ec-a5ca-cfcebf04e094%2Cterms.cd1eb7ed-2704-4b6a-9037-d7f1a5351f6b&sort=name
 * accept-encoding: gzip
 * accept-language: en-GB
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("date", "Fri, 31 Jul 2020 12:37:34 GMT");
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "keep-alive");
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-expose-headers", "location,X-Okapi-Trace,X-Okapi-Token,Authorization,X-Okapi-Request-Id,X-Okapi-Module-Id");
  res.setHeader("x-okapi-trace", "GET mod-authtoken-2.6.0-SNAPSHOT.73 http://10.36.1.15:9178/inventory/items.. : 202 6961us, GET mod-inventory-16.1.0-SNAPSHOT.270 http://10.36.1.15:9173/inventory/items.. : 200 70215us");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("ewogICJpdGVtcyIgOiBbIHsKICAgICJpZCIgOiAiMTAwZDEwYmYtMmYwNi00YWEwLWJlMTUtMGI5NWIyZDlmOWUzIiwKICAgICJzdGF0dXMiIDogewogICAgICAibmFtZSIgOiAiQXZhaWxhYmxlIiwKICAgICAgImRhdGUiIDogIjIwMjAtMDctMzFUMTA6NDk6NDUuNzAxKzAwMDAiCiAgICB9LAogICAgInRpdGxlIiA6ICJBIHNlbWFudGljIHdlYiBwcmltZXIiLAogICAgImNhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICJocmlkIiA6ICJpdGVtMDAwMDAwMDAwMDE1IiwKICAgICJjb250cmlidXRvck5hbWVzIiA6IFsgewogICAgICAibmFtZSIgOiAiQW50b25pb3UsIEdyaWdvcmlzIgogICAgfSwgewogICAgICAibmFtZSIgOiAiVmFuIEhhcm1lbGVuLCBGcmFuayIKICAgIH0gXSwKICAgICJmb3JtZXJJZHMiIDogWyBdLAogICAgImRpc2NvdmVyeVN1cHByZXNzIiA6IG51bGwsCiAgICAiaG9sZGluZ3NSZWNvcmRJZCIgOiAiZTNmZjYxMzMtYjlhMi00ZDRjLWExYzktZGMxODY3ZDRkZjE5IiwKICAgICJiYXJjb2RlIiA6ICI5MDAwMCIsCiAgICAiaXRlbUxldmVsQ2FsbE51bWJlciIgOiAiVEs1MTA1Ljg4ODE1IC4gQTU4IDIwMDQgRlQgTUVBREUiLAogICAgIml0ZW1MZXZlbENhbGxOdW1iZXJQcmVmaXgiIDogIlBSRUZJWCIsCiAgICAiaXRlbUxldmVsQ2FsbE51bWJlclN1ZmZpeCIgOiAiU1VGRklYIiwKICAgICJ2b2x1bWUiIDogInZvbC4yIiwKICAgICJlbnVtZXJhdGlvbiIgOiAiZW51bSIsCiAgICAiY2hyb25vbG9neSIgOiAiY2hyb25vIiwKICAgICJjb3B5TnVtYmVyIiA6ICJjcC4xIiwKICAgICJub3RlcyIgOiBbIF0sCiAgICAiY2lyY3VsYXRpb25Ob3RlcyIgOiBbIF0sCiAgICAibnVtYmVyT2ZQaWVjZXMiIDogIjEiLAogICAgImRlc2NyaXB0aW9uT2ZQaWVjZXMiIDogInBpZWNlcyIsCiAgICAidGFncyIgOiB7CiAgICAgICJ0YWdMaXN0IiA6IFsgXQogICAgfSwKICAgICJ5ZWFyQ2FwdGlvbiIgOiBbICIxMDAwIiBdLAogICAgImVsZWN0cm9uaWNBY2Nlc3MiIDogWyB7CiAgICAgICJ1cmkiIDogImh0dHA6Ly93d3cubG9jLmdvdi9jYXRkaXIvdG9jL2VjaXAwNzE4LzIwMDcwMjA0MjkuaHRtbCIsCiAgICAgICJsaW5rVGV4dCIgOiAiTGlua3MgYXZhaWxhYmxlIiwKICAgICAgIm1hdGVyaWFsc1NwZWNpZmljYXRpb24iIDogIlRhYmxlIG9mIGNvbnRlbnRzIiwKICAgICAgInB1YmxpY05vdGUiIDogIlRhYmxlIG9mIGNvbnRlbnRzIG9ubHkiLAogICAgICAicmVsYXRpb25zaGlwSWQiIDogIjNiNDMwNTkyLTJlMDktNGI0OC05YTBjLTA2MzZkNjZiOWZiMyIKICAgIH0gXSwKICAgICJzdGF0aXN0aWNhbENvZGVJZHMiIDogWyAiYjU5NjhjOWUtY2RkYy00NTc2LTk5ZTMtOGU2MGFlZDhiMGRkIiBdLAogICAgInB1cmNoYXNlT3JkZXJMaW5lSWRlbnRpZmllciIgOiBudWxsLAogICAgIm1hdGVyaWFsVHlwZSIgOiB7CiAgICAgICJpZCIgOiAiMWE1NGI0MzEtMmU0Zi00NTJkLTljYWUtOWNlZTY2YzlhODkyIiwKICAgICAgIm5hbWUiIDogImJvb2siCiAgICB9LAogICAgInBlcm1hbmVudExvYW5UeXBlIiA6IHsKICAgICAgImlkIiA6ICIyYjk0YzYzMS1mY2E5LTQ4OTItYTczMC0wM2VlNTI5ZmZlMjciLAogICAgICAibmFtZSIgOiAiQ2FuIGNpcmN1bGF0ZSIKICAgIH0sCiAgICAidGVtcG9yYXJ5TG9hblR5cGUiIDogewogICAgICAiaWQiIDogIjJlNDhlNzEzLTE3ZjMtNGMxMy1hOWY4LTIzODQ1YmIyMTBhNCIsCiAgICAgICJuYW1lIiA6ICJSZWFkaW5nIHJvb20iCiAgICB9LAogICAgInBlcm1hbmVudExvY2F0aW9uIiA6IHsKICAgICAgImlkIiA6ICJmY2Q2NGNlMS02OTk1LTQ4ZjAtODQwZS04OWZmYTIyODgzNzEiLAogICAgICAibmFtZSIgOiAiTWFpbiBMaWJyYXJ5IgogICAgfSwKICAgICJtZXRhZGF0YSIgOiB7CiAgICAgICJjcmVhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQwMzozNDozOS42MjcrMDAwMCIsCiAgICAgICJ1cGRhdGVkRGF0ZSIgOiAiMjAyMC0wNy0zMVQxMjoyOTowNy40NTYrMDAwMCIsCiAgICAgICJ1cGRhdGVkQnlVc2VySWQiIDogImIwNDhiNmVhLTQyODUtNTk0My04MDUxLWI2NDQyYWY1NDY5MCIKICAgIH0sCiAgICAibGlua3MiIDogewogICAgICAic2VsZiIgOiAiaHR0cDovL2ZvbGlvLXNuYXBzaG90LW9rYXBpLmF3cy5pbmRleGRhdGEuY29tL2ludmVudG9yeS9pdGVtcy8xMDBkMTBiZi0yZjA2LTRhYTAtYmUxNS0wYjk1YjJkOWY5ZTMiCiAgICB9LAogICAgImxhc3RDaGVja0luIiA6IHsKICAgICAgInNlcnZpY2VQb2ludElkIiA6ICIzYTQwODUyZC00OWZkLTRkZjItYTFmOS02ZTI2NDFhNmU5MWYiLAogICAgICAic3RhZmZNZW1iZXJJZCIgOiAiYjA0OGI2ZWEtNDI4NS01OTQzLTgwNTEtYjY0NDJhZjU0NjkwIiwKICAgICAgImRhdGVUaW1lIiA6ICIyMDIwLTA3LTMxVDEwOjQ5OjQ1LjY5MFoiCiAgICB9LAogICAgImVmZmVjdGl2ZUNhbGxOdW1iZXJDb21wb25lbnRzIiA6IHsKICAgICAgImNhbGxOdW1iZXIiIDogIlRLNTEwNS44ODgxNSAuIEE1OCAyMDA0IEZUIE1FQURFIiwKICAgICAgInByZWZpeCIgOiAiUFJFRklYIiwKICAgICAgInN1ZmZpeCIgOiAiU1VGRklYIiwKICAgICAgInR5cGVJZCIgOiAiNTEyMTczYTctYmQwOS00OTBlLWI3NzMtMTdkODNmMmI2M2ZlIgogICAgfSwKICAgICJlZmZlY3RpdmVMb2NhdGlvbiIgOiB7CiAgICAgICJpZCIgOiAiZmNkNjRjZTEtNjk5NS00OGYwLTg0MGUtODlmZmEyMjg4MzcxIiwKICAgICAgIm5hbWUiIDogIk1haW4gTGlicmFyeSIKICAgIH0KICB9IF0sCiAgInRvdGFsUmVjb3JkcyIgOiAxCn0=", "base64"));
  res.end();

  return __filename;
};
