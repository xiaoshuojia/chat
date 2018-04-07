# chat

#### 简介

直接使用了`socket.io`[官方给的例子](https://socket.io/get-started/chat/)，稍作修改，给参与聊天的用户起了个名字，不过都叫`xiaoming`

主要使用了`socket.io`和`express`两个库



#### 安装运行

直接下载代码，安装依赖

```js
npm install
```

运行

```js
node index.js
```



### socket.io

##### 结构

分为客户端和服务器



在代码中用到的一些方法

##### 服务器端

###### Socket.on (eventName, callback)

接收`socket`发送过来的事件，两个参数，第一个是事件名称，可以是库提供的标准的时间，比如`connection`连接，有数据连接，或者自定义，自定义，需要客户端和服务器的名字一一对应，这样才能接收到数据。

第二个参数是回调函数，就是具体的处理逻辑。



###### socket.emit(eventName[, ...args][, ack])

发送信息，有三个参数，第一个参数是事件名称，第二个是参数发送的数据。第三个参数没研究。





##### 客户端

###### io(url)

需要连接一个服务器，url就是具体地址。默认是当前页面地址`window.location`



###### Socket.on和socket.emit

这两个函数和服务器端的用法，一样，分别是接收和发送数据。







