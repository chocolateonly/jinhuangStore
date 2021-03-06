module.exports = ({ file }) => {
    let remUnit
    if (file && file.dirname && file.dirname.indexOf("vant")>-1) {
        remUnit = 37.5
    } else {
        remUnit = 75
    }
    return {
        plugins: {
            'postcss-pxtorem': {
                rootValue: remUnit,
                propList: ['*']
            },
            'autoprefixer': {
                overrideBrowserslist: ['last 20 versions']  //自动加前缀配置
            }
        }
    }
}
