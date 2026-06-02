// CloudFront Function — viewer-request
// Purpose: make clean folder URLs work on an S3-origin CloudFront distribution.
//   - "/services/bmw-repair-dhaka/"  -> serves "/services/bmw-repair-dhaka/index.html"
//   - "/services/bmw-repair-dhaka"   -> 301 redirect to the trailing-slash canonical
//   - "/"                            -> serves "/index.html"
//
// Deploy (NOT automated by the GitHub Action — do this once in AWS):
//   1. CloudFront > Functions > Create function (runtime: cloudfront-js-2.0)
//   2. Paste this code, Publish.
//   3. Attach to the distribution behavior(s) on the "Viewer request" event.
//   4. Test: deploy a throwaway /test-page/index.html and confirm
//      https://autobahnsolution.com/test-page/  returns 200
//      https://autobahnsolution.com/test-page   301 -> /test-page/
//
// See docs/seo/08-technical-seo-audit.md (T2) and docs/seo/11-page-briefs.md (§4a).

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Directory request (ends with "/") -> append index.html
    if (uri.endsWith('/')) {
        request.uri = uri + 'index.html';
        return request;
    }

    // Path with no file extension -> redirect to trailing-slash canonical form
    var lastSegment = uri.split('/').pop();
    if (lastSegment.indexOf('.') === -1) {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: { 'location': { value: uri + '/' } }
        };
    }

    // Otherwise (real file like .css/.js/.webp) -> pass through unchanged
    return request;
}
