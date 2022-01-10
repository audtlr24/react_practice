module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename: 'index_bundle.[hash].js'
    },
    resolve : {
        fallback: {
            "stream": false,
            "crypto": false,
            "http": false,
            "https": false,
            "url": false,
            "os": false
        }
    }
};