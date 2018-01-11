// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
//import * as pomeloModule from "../pomelo/build.js" 
var LoadPomelo = require("../pomelo/build.js");
LoadPomelo();
var pomelo = window.pomelo;
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    init_state : false,

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        
        console.log("初始化开始。。。。。。。。。。。。。。。");
        this.InitNetWork();
        this.onClick();
    },

    onClick(){
        // if(playerControl == true){
            this.node.on(
                cc.Node.EventType.TOUCH_END, 
                function (event) {
                    //TODO 向服务器发送位移消息
                    
                    console.log("reday to move\n");
                   
                },
            );
        // }
    },

    InitNetWork(){
        //1 connect server --TODO choose a random connector
        var param = {};
        param.host = "192.168.116.128";
        param.port = 3010;
        pomelo.init(param, function(){
            console.log("Successfully connected server!")
            pomelo.request("connector.entryHandler.entry", "hello", function(){});
        });

        
        //2 
        this.init_state = true;
    }

    // update (dt) {},
});
