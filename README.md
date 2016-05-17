##使用方法

修改 app/scripts 下的 index-ui.js，把第三行中的`<Your appId>`改为你自己的 appId。由于代码中使用了匿名登录，你可以修改成帐号名密码登录，或者把 appId 对应应用的匿名登录打开。

运行环境要求：安装 nodejs 4 以上版本，安装 bower。

运行 

	npm install
	bower install
	gulp build

生成的文件在 dist 目录下，可以将其部署到服务器中。

运行

	gulp serve

可以部署在本地测试。
