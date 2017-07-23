1.首先创建一个项目文件夹的根目录然后初始化,生成一个package.json的文件
    ```javascript
        npm init    或者  npm init --all
    ```
2.然后输入```npm install gulp --save-dev```  安装gulp  同是生成一个node_modules的文件夹，放置npm install下来的文件，npm提供的工具包分为两种，一种像bootstrap我们任何环节都需要用叫做项目依赖记录在Dependencies中，另一种像gulp只有在开发阶段需要用到叫做开发依赖Devdependencise中，都记录在package.json里面
3.创建src文件夹用来存放源码<http://www.baidu.com>
4.在根目录下创建一个gulpfile.js 的文件用来设置自动化命令
5.编写页面  然后执行自动化命令
6.生成dist文件夹  为最终的文件夹
7.测试页面
8.再次测试页面
