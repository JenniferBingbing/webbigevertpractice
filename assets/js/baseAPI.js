//每次调用ajax的post或者get或者ajax时候，会先调用这个函数
//在这个函数中，可以拿到我们给ajax提供的配置对象
$.ajaxPrefilter(function(options){
    // 在发起真正的ajax请求之前，统一根路径
    options.url='http://www.liulongbin.top:3007'+options.url
    // console.log(options.url)
})