# carbon

> 碳交所

## 构建步骤

``` bash
# 安装依赖
npm install

# 启动开发环境(服务运行在localhost:8080,配有热更新)
npm run dev

# 构建生产环境
npm run build

# 运行项目
npm run start
```

## 目录结构

``` bash
build                           # 构建目录
  setup-dev-server.js           # 配置构建开发环境
  utils.js                      # 封装的工具方法
  vue-loader.config.js          # vue文件的loader配置
  webpack.base.config.js        # 公用的webpack配置
  webpack.client.config.js      # 客户端的webpack配置
  webpack.server.config.js      # 服务器端的webpack配置
src                             # 开发目录
  assets                        # 静态资源目录
    css
      index.css                 # main.js中引入
      var.css                   # 多项目变量
      project.css               # 该项目复用样式
      projectVar.css            # 该项目变量
      reset.css                 # reset样式
      ...                       # 多项目复用样式
    iconfont                    # 字体图标(阿里图标库http://www.iconfont.cn)
    images                      # 图片
  components                    # 可复用组件
  config                        # 项目自定义配置目录
    api.js                      # 接口地址
    index.js                    # 配置
  pages                         # 页面级组件(路由级组件)
    Login.vue...                # 登录页面
  router                        # 路由目录
    index.js                    # 路由配置
  store                         # vuex目录
    modules                     # store模块
    index.js                    # 根store(app.js中引入，文件太大时，可将 action、mutation 和 getter 分割到单独的文件)
  util                          # 工具目录
    api.js                      # axios发送请求(发送和返回数据处理，状态码处理...)
    common.js                   # 封装的函数
    getData.js                  # get请求的封装(是否取用store中的数据...)
    inter.js                    # 不需要保存在store中的数据的接口
    pageData.js                 # 页面需要存储的数据(分页等，可选localStorage和query)
    title.js                    # 页面title控制
  App.vue                       # 根组件
  app.js                        # 公用入口
  entry-client.js               # 客户端入口
  entry-server.js               # 服务器端入口
  index.template.html           # 页面模板
.babelrc                        # babel配置
.eslintignore                   # eslint忽略项配置
.eslintrc.js                    # eslint配置(使用standard标准)
.gitignore                      # git忽略项配置
.postcssrc.js                   # postcss配置
package.json                    # 项目配置
server.js                       # 项目启动文件
```