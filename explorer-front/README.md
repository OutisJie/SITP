如果需要让service worker生效，需要在正式打包的环境下运行才行
所以需要
npm run build打包

npm i serve -g
serve -s build启用打包的文件

如果是服务器部署，则需要将build的文件部署发布，我暂时用的是express.
之后和队友学习一下怎样使用docker+jeckens搭建一套自动化部署的流程，方便测试

express启用之后在本地node server启动之后，用lighthouse评测是90分以上，但是部署到服务器之后就只有50分了
一个原因是因为我的服务器不是https服务，这个之后想想办法。其余别的原因暂时没找到，慢慢来吧


郑重声明，这个explorer-front已被玩坏=_=