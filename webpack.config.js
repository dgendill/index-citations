const path = require('path');

const base = {
    entry: './index-citations.js'
};

const globalOutput = Object.assign({}, base, {
    target: 'web',
    mode: 'production',
    output: {
        filename: 'index-citations-global.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'IndexCitations',
        libraryTarget: 'global'
    }
});

const globalOutputDev = Object.assign({}, globalOutput, {
    mode: 'development',
    output :  Object.assign({}, globalOutput.output, {
        filename: 'index-citation-global-dev.js'
    })
});

const nodeOutput = Object.assign({}, base, {
    target: 'node',
    mode: 'production',
    output: {
        filename: 'index-citations-node.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'IndexCitations',
        libraryTarget: 'commonjs2'
    }
});

const nodeOutputDev = Object.assign({}, nodeOutput, {
    mode: 'development',
    output :  Object.assign({}, nodeOutput.output, {
        filename: 'index-citation-node-dev.js'
    })
});

module.exports = [
    globalOutput,
    globalOutputDev,
    nodeOutput,
    nodeOutputDev
];