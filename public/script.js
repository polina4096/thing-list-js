function $(selector) {
    return document.querySelector(selector);
}

function html(str) {
    let template = document.createElement('template');
    let trimmed = str.trim();
    template.innerHTML = trimmed;
    return template.content.firstChild;
}

Object.prototype.tryWrap = function() {
    if (this.nodeName === "#text") {
        var element = document.createElement("div");
        element.appendChild(this);
        return element;
    } else {
        return this;
    }
}

HTMLElement.prototype.height = function() {
    return this.clientHeight;
}

NodeList.prototype.height = function(event, callback) {
    return this.reduce((acc, e => acc + e.height(event, callback)), 0);
}

HTMLElement.prototype.listen = function(event, callback) {
    return this.addEventListener(event, callback);
}

NodeList.prototype.listen = function(event, callback) {
    return this.map(el => el.listen(event, callback));
}