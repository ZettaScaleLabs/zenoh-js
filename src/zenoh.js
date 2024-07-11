export class Zenoh {
    constructor(endpoint) {
        this.endpoint = endpoint
    }

    put(ke, value) {
        const Http = new XMLHttpRequest();
        Http.open('PUT', this.endpoint + ke, true);
        Http.setRequestHeader('Content-Type', 'application/octet-stream');
        Http.send(value);
    }

    subscribe(ke, cb) {
        var sub = new EventSource(this.endpoint + ke);
        sub.addEventListener("PUT", cb, false);
        return sub;
    }

    get(ke, cb, data) {
        const Http = new XMLHttpRequest();
        Http.open('POST', this.endpoint + ke, true);
        Http.setRequestHeader('Content-Type', 'application/json');
        Http.send(data);

        Http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               cb(Http.response)
            }
        };

    }
}