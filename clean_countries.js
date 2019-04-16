const fs = require('fs')

const oc = JSON.parse(fs.readFileSync('only_countries.json'))
const cwc = JSON.parse(fs.readFileSync('countries.json'))

const filtered = oc.filter(c=> cwc[c.name])
fs.writeFile( `prod/countries.json` , JSON.stringify( filtered ) , err => {
	if (err) console.log('fail:\n',err)
})
