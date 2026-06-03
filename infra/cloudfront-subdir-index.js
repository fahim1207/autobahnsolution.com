// CloudFront Function — viewer-request (DEPLOYED)
// This is the single viewer-request function attached to the production
// CloudFront distribution for autobahnsolution.com. It does three jobs:
//   1. Canonical host:   www.autobahnsolution.com  -> https://autobahnsolution.com (301, path preserved)
//   2. Clean folder URLs: "/services/bmw-repair-dhaka/" -> serves ".../index.html"
//   3. Extensionless:    "/services/bmw-repair-dhaka"  -> 301 to trailing-slash "/.../"
//      Real files (".css/.js/.webp/...") pass through unchanged.
//
// HTTP -> HTTPS is NOT handled here (a viewer-request function can't read the
// scheme). It is handled natively by the behavior's
// "Viewer protocol policy = Redirect HTTP to HTTPS".
//
// `host` is read defensively (headers.host can be absent in the console Test
// event) so the function never throws a TypeError during testing.
//
// Status: published and associated to the distribution's Default (*) behavior
// on the Viewer request event (one function per event type per behavior).
// See docs/seo/13-next-seo-implementation-roadmap.md (CloudFront runbook),
// docs/seo/08-technical-seo-audit.md (T2), docs/seo/11-page-briefs.md (§4a).

function handler(event) {
    var request = event.request;
    var headers = request.headers;
    var host = (headers && headers.host) ? headers.host.value : "";

    // 1) Canonical host: www -> apex (forces https in the redirect target)
    if (host === "www.autobahnsolution.com") {
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: { "location": { "value": "https://autobahnsolution.com" + request.uri } }
        };
    }

    // 2) Directory request (ends with "/") -> append index.html
    var uri = request.uri;
    if (uri.endsWith("/")) {
        request.uri = uri + "index.html";
        return request;
    }

    // 3) Path with no file extension -> 301 to trailing-slash canonical form
    if (uri.split("/").pop().indexOf(".") === -1) {
        return {
            statusCode: 301,
            statusDescription: "Moved Permanently",
            headers: { "location": { "value": uri + "/" } }
        };
    }

    // Real file -> pass through unchanged
    return request;
}
