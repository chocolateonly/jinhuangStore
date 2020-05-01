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
    host : "127.0.0.1"//hot loader----end
  }
}