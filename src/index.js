const { readAllFilesMds, validateLinks } = require("./read-file");
const { isPathAbsolute } = require("./path");
const { getMdFiles } = require("./readDir");

const rutaTerminal = process.argv[2]

const mdLinks = (path, options={validate:true}) => {
    return new Promise((resolve, reject) =>{
        const absolutePaht = isPathAbsolute(path)
        const arrayMds = getMdFiles(absolutePaht)
        if(options.validate===true) {
            readAllFilesMds(arrayMds)
            .then(response=> validateLinks(response))
            .then(resp => resolve(resp))
        } else {
            readAllFilesMds(arrayMds)
            .then(response=> resolve(response))
        }
    })
}
//mdLinks(rutaTerminal).then(res=>console.log('jlaskjlasjlkajlj', res))

module.exports = {
    mdLinks,
};