# dati

刚写的没了，补点重要的，其他的下次再写

自己写一个b站春非我春的答题

程序在压缩文件里，里面有打开方法

作者：威震华夏的武圣关云长

第一次写github，兄弟们见谅

有建议可以联系我，我会想办法

#运行代码

下载hbuilder:https://www.dcloud.io/hbuilderx.html

解压到桌面

下载nodejs:https://nodejs.org/en/,选择lts，进去后选择x64.msi下载

安装

-------

按win+x,选择powershell管理员打开，输入node -v,回车（win就是windows图标那个键）

输入npm -v,回车

输入npm root -g,回车

打开文件夹c:\program files\nodejs,新建文件夹node_cache,和node_global

打开文件夹node_global,新建文件夹node_modules

在powershell中输入：npm config set prefix "c:\Program Files\nodejs\node_global",回车

输入：npm config set cache "c:\Program Files\nodejs\node_cache",回车

按win+x键，选择系统打开，点击高级系统设置，选择环境变量

点击用户变量中的path，点击编辑

选择后面为npm的一行，点击编辑，改为：c:\Program Files\nodejs\node_global,点击确定

在系统变量中点击新建，变量名NODE_PATH，变量值：c:\Program Files\nodejs\node_global\node_modules

选择系统变量中的path,点击编辑，再点击新建,输入：%NODE_PATH%，一直点击确定

在powershell中输入npm root -g,检查安装结果。

-----------

打开桌面的hbuilderx文件夹，右键hbuilderx程序，以管理员身份运行

点击文件，打开目录，选择答题文件夹，确定

按alt+c，点击是安装

点击工具，设置，运行配置，选择内置终端，

点击答题，nodejs,src,readjs

按alt+c,输入cd nodejs,回车

npm install express -g,回车

npm install nodemon -s,回车

npm init -y,回车

点击package.json,在test前面加"start": "nodemon ./src/read.js",记得后面有逗号，保存

在终端输入npm start,回车

点击html,index.html,预览，点击是安装

点击预览
