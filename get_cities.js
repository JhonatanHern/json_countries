const fs = require('fs')

const oc = JSON.parse(fs.readFileSync('only_countries.json'))
const cwc = JSON.parse(fs.readFileSync('countries.json'))

oc.forEach(c=>{
	const cities = cwc[ c.name ]
	if ( ! cities ) {
		return
	}
	fs.writeFile( `prod/${c.code}.json` , JSON.stringify( cities ) , err => {
		if (err) console.log('failed ',c.name)
	})
})
