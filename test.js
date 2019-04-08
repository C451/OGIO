require('./ogio.js');

(async () => {
    // Good

    'http://example.com/'.g().then(x => {
        console.log('http://example.com/', x && x.length)
    })

    console.log('file.txt', './assets/file.txt'.g())

    console.log('file.json(sync)', './assets/file.json'.g())

    let obj = await '@./assets/file.json'.g()

    console.log('file.json(async)', obj)

    // Bad

    'http://nonexisting.website/'.g().catch(e => {
        console.log('Network error')
    })

    try {
        console.log('no_file.txt', './assets/no_file.txt'.g())
    } catch(e) {
        console.log('No such file')
    }

    try {
        console.log('./assets/bad.json'.g())
    } catch(e) {
        console.log('JSON error')
    }

})()
