
const fetch = require('node-fetch')
const fs = require('fs')

/**
 * String.prototype.g - fetch everything 
 *
 * @param  {type} typ Select data type explicitly:
 *                    text | json
 * @return {type}     Data | Promise
 */
String.prototype.g = function(typ) {

    let path = this.toString()

    if (path[0] === '@') {
        this._async = true
        path = path.slice(1)
    }

    if (web_url(path)) {
        return fetch_web(path, typ)
    }

    return fetch_file(path, typ)
}

function web_url(str) {
    return str.slice(0, 4) === 'http'
}

function fetch_web(url, typ) {
    return fetch(url).then(res => {
        let ct = res.headers.get('content-type')
        if (!ct) {
            if (!typ) { typ = 'text' }
            ct = ''
        }
        if (typ === 'text' || ct.includes('text/'))  {
            return res.text()
        } else
        if (typ === 'json' || ct.includes('/json')){
            return res.json()
        } else {
            return res.buffer()
        }
    })
}

function fetch_file(path, typ) {

    if (!this._async) {
        let raw = fs.readFileSync(path, 'utf-8')
        let ext = path.split('.').pop();

        if (typ === 'json' || ext === 'json') {
            return JSON.parse(raw)
        } else {
            return raw
        }

    } else {
        return fetch_file_async(path, typ)
    }

}

async function fetch_file_async() {
    return new Promise(rs, rj => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) rj(err)
            if (typ === 'json' || ext === 'json') {
                try {
                    rs(JSON.parse(data))
                } catch(e) {
                    rj(e)
                }
            }
            rs(data)
        })
    })
}
