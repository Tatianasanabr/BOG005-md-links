const path = require('path');
const {getMdFiles } = require('../src/readDir');

describe ('getMdFiles function', () => {

    it ('Should be a function', () => {
        expect(typeof getMdFiles).toBe('function');
    })

    it ('Should return all mdFiles from mock directory', () => {
        const secondTestRoute = '/Users/tatianasanabr/BOG005-md-links/__mocks__/mock-directory';
        const getMdFilesFunction = getMdFiles(secondTestRoute);
        const expectedResult = [
            '/Users/tatianasanabr/BOG005-md-links/__mocks__/mock-directory/mock-md-file-2.md',
            '/Users/tatianasanabr/BOG005-md-links/__mocks__/mock-directory/mock-md-file.md'
          ];

          expect(getMdFilesFunction).toStrictEqual(expectedResult);
    })
});