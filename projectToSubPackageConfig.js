// 此配置已经开启全部混写状态，可以将原生的代码也发布成微信和头条，如使用到实际项目中，建议先关闭混写插件
module.exports={
    // 微信原生小程序目录
    mainWeixinMpPath: 'mainWeixinMp',
    // 头条原生小程序目录
    mainToutiaoMpPath: 'mainWeixinMp',
    // 支付宝原生小程序目录
    mainAlipayMpPath: 'mainAlipayMp',
    // uni项目输出的分包在原生小程序中的路径
    subPackagePath: 'uniSubpackage',
    // uni项目的App.vue中初始设置的处理方式，默认是relegation(降级模式)，[top(顶级模式) / none(丢弃)]
    // 支付宝不支持relegation模式
    appMode: 'top',
    // 如果原生小程序目录中的目录名称合uni项目输出的目录名相同，是否融合处理，默认不融合处理，直接忽略原生小程序里的目录，merge以uni项目优先
    mergePack: false,
    /**
     * uni项目中的原生资源目录路径,null代表使用默认值
     * process.env.PACK_TYPE = weixin 默认值为 'src/wxresource'
     * process.env.PACK_TYPE = toutiao 默认值为 'src/ttresource'
     * 也可以自行设定，通过环境变量process.env.PACK_TYPE进行动态设置
     */
    wxResourcePath: null,
    // 原生资源目录路径别名, null代表使用默认值，默认值为 @wxResource (所有类型小程序通用)
    wxResourceAlias: null,
    // 引用原生资源的js的特殊API名称设定, null代表使用默认值，默认值为 __uniRequireWx (所有类型小程序通用)
    uniRequireApiName: null,
    // 引用原生资源的样式文件的特殊API名称设定, null代表使用默认值，默认值为 __uniWxss (所有类型小程序通用)
    uniImportWxssApiName: null,
    // uni项目中的原生资源在pages.json中的特殊属性名称，null代表使用默认值，默认值为 wxResource (所有类型小程序通用)
    configWxResourceKey: null,
    // 插件
    plugins: []
}
