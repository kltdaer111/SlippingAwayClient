// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html
var LoadPomelo = require("../pomelo/build.js");

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
        monsterID : 1,
        playerControl : false,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        //this.properties.playerControl = true;
        this.gameStart();
    },

    gameStart(){
        // if(playerControl == true){
            this.node.on(
                cc.Node.EventType.TOUCH_END, 
                function (event) {
                    //TODO 向服务器发送位移消息
                    
                    console.log("reday to move\n");
                    LoadPomelo();
                },
            );
        // }
    },

    update (dt) {
        //TODO 帧同步 将第几帧、位置、速度、加速度重置为服务端下发的
    },
});
