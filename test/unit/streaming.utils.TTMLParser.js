import TTMLParser from '../../src/streaming/utils/TTMLParser.js';

import {expect} from 'chai';

const context = {};
const ttmlParser = TTMLParser(context).getInstance();

describe('TTMLParser', function () {

    it('should return an empty array when parse is called and parameters are undefined', () => {
        expect(ttmlParser.parse.bind(ttmlParser)).to.throw('no ttml data to parse');
    });
});
