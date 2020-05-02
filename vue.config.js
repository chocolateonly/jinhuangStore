module.exports = {
  /*  publicPath: process.env.NODE_ENV === 'production'
      ? '/production/' //项目部署到服务器的路径配置
      : '/'*/
  //publicPath:'./',
  //outputDir:'test',
  //indexPath:"index.html",
  devServer : {
    hot:true,//hot loader------start
    open : true,
    port : 8080,
    host : "localhost",//hot loader----end

    //proxy:{'/api':{}},代理器中设置/api,项目中请求路径为/api的替换为target
    // proxy:{
    //   '/':{
    //     target:'https://douban.uieee.com/v2/movie/top250',// 'http://jinhuang.test.hbbeisheng.com',//代理地址，这里设置的地址会代替axios中设置的baseURL
    //     changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
    //     //ws: true, // proxy websockets
    //     //pathRewrite方法重写url
    //     /*pathRewrite: {
    //       '^/api': '/'
    //       //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
    //       //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
    //     }*/
    //   }}
  }
}