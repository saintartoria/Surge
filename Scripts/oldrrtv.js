const headers = JSON.stringify($request.headers).replace(/\d\.\d\.\d/g, '4.10.1');

$done({
    headers: JSON.parse(headers),
    url: $request.url.replace(/\d\.\d\.\d/g, '4.10.1')
})