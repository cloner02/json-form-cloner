const path = require('path');  
const additionalResolvePath = path.resolve(__dirname, 'dist', 'additional_modules');

module.exports = {
    sassConfig: {
        includePaths: [additionalResolvePath],
        precision: 5,
    },
    lessConfig: {
        paths: [additionalResolvePath],
    },
    stylusConfig: {
        paths: [additionalResolvePath],
    },
    postcssConfig: {
        plugins: [
            require('autoprefixer')({
                browsers: ['Chrome 68', 'Firefox 62', 'Safari 12']
            })
        ]
    },
};