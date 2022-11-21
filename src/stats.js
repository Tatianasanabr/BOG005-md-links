const arrayPrueba = [
    {
        href: 'https://www.github.com/',
        title: 'GitHub',
        file: '/Users/tatianasanabr/BOG005-md-links/try/readme.md',
        status: 200,
        ok: 'OK'
    },    
    {
        href: 'https://www.google.com/',
        title: 'Google',
        file: '/Users/tatianasanabr/BOG005-md-links/try/readme.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://www.figma.o/',
        title: 'Figma',
        file: '/Users/tatianasanabr/BOG005-md-links/try/readme.md',
        status: 404,
        ok: 'FAIL'
    },
]

const stats = (arrayPrueba) => {
    console.log('Contenido arrayPrueba', arrayPrueba, 26)
    total = {
        'Total': arrayPrueba.length,
        'Unique': new Set(arrayPrueba.map((element) => element.href)).size
    }
    //console.log(total, 31)
    return total
}

const statsAndValidate = (arrayPrueba) => {
    //console.log('Contenido arrayPrueba', arrayPrueba, 36)
    const broken = arrayPrueba.filter((links) => links.ok === 'FAIL').length;
    total = {
        'Total': arrayPrueba.length,
        'Unique': new Set(arrayPrueba.map((element) => element.href)).size,
        'Broken': broken
    }
    //console.log(total, 43)
    return total
}

stats(arrayPrueba);
statsAndValidate(arrayPrueba);  

module.exports = {
    stats,
    statsAndValidate
};