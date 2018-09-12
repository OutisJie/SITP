如果需要让service worker生效，需要在正式打包的环境下运行才行
所以需要
npm run build打包

npm i serve -g
serve -s build启用打包的文件

如果是服务器部署，则需要将build的文件部署发布，我暂时用的是express.
之后和队友学习一下怎样使用docker+jeckens搭建一套自动化部署的流程，方便测试