require('./ogio.js');

(async () => {

    // good

    'http://example.com/'.g().then(x => {
        console.log('http://example.com/', x && x.length, '[OK]')
    })

    console.log('file.txt', './assets/file.txt'.g(), '[OK]')

    console.log('file.json(sync)', './assets/file.json'.g(), '[OK]')

    let obj = await '@./assets/file.json'.g()

    console.log('file.json(async)', obj, '[OK]')

    './assets/saved.txt'.s('This is text')

    console.log('saved.txt', '[OK]')

    './assets/saved.json'.s({txt: "This is json"})

    console.log('saved.json', '[OK]')

    '@./assets/saved_async.json'.s({txt: "This is async json"}).then(x => {
        console.log('saved_async.json', '[OK]')
    })

    // bad

    'http://nonexisting.website/'.g().catch(e => {
        console.log('Network error', '[OK]')
    })

    try {
        console.log('no_file.txt', './assets/no_file.txt'.g(), '[OK]')
    } catch(e) {
        console.log('No such file', '[OK]')
    }

    try {
        console.log('./assets/bad.json'.g(), '[OK]')
    } catch(e) {
        console.log('JSON error', '[OK]')
    }

})()
