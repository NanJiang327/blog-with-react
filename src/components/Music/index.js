import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const options = {
    //audio lists model
    audioLists: [
        // {
        //     name: "后来的我们",
        //     singer: "五月天",
        //     cover: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=1cb4a5bc00f3d7ca18fb37249376d56c/b3119313b07eca80e1aedb659d2397dda044838d.jpg",
        //     musicSrc: "http://www.ytmp3.cn/down/49444.mp3"
        // },
        // {
        //     name: "往后余生",
        //     singer: "王良",
        //     cover: 'https://m10.music.126.net/20180811031914/1ba45c0574e9e7eb52970aa0d89c1e87/ymusic/9ddc/b10e/919e/2ef50b0473f7f2cce3193ed620898cd7.mp3',
        //     musicSrc: "http://www.ytmp3.cn/down/50539.mp3"
        // },
        {
            name: "Lemon",
            singer: "よねづ けんし",
            cover: "http://i2.hdslb.com/bfs/archive/32bfb8b6805ea20952588b9c1bc5c86dd7411215.jpg",
            musicSrc: "https://dl.stream.qqmusic.qq.com/M500003pZAGe4Q2w81.mp3?vkey=05BA0B25154B277177FD3F37B66DC47C363032C54C80201BB9781D99A3E7FFF1B994C01838C8E169842595C221B9F5DA693EA7605FDD2E63&guid=325293437&uid=0&fromtag=30"
        },
        {
            name: "小さな恋のうた",
            singer: "Koda Kumi",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywP3UFZd77pqRfySx6wC82ZNxhfJhLasmvP8_8OqH_bywFxKR",
            musicSrc: "https://dl.stream.qqmusic.qq.com/M500002kbpOX2ft7DV.mp3?vkey=AFF36565C3343672684B18C91C8B1C4EA17558810452FF5DC5B3E81BD1212BF1DB720FA4B9FDA4865BB9E301D18257CC5E832059D515088D&guid=1014772327&uid=0&fromtag=30"
        },
        {
            name: "Wherever you are",
            singer: "ONE OK ROCK",
            cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnXHc3ETErnUD03g0NdO-GwUCYeD0PPlBA9_i7uFrwmMyMJqV",
            musicSrc: "https://dl.stream.qqmusic.qq.com/M500002Cbznl4LtfQ4.mp3?vkey=F1B1228002158875773796E9C56051F4CEB4E9888890E4E7C43E2E5182B69A4D2492C41AA9702C7D8E4C6C6A2F92CD98BA10EA5C77B14F1F&guid=899729894&uid=0&fromtag=30"
        },
    ],

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        bottom: 20,
        left: 20
    },

    // play mode text config of the audio player
    playModeText: {
        order: "Order",
        orderLoop: "Random",
        singleLoop: "Single Loop",
        shufflePlay: "Shuffle"
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "Open",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "Close",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "On",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "Off",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "No Music",

    panelTitle: "Play list ",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: true,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    //Music is downloaded handle

};

export default class Music extends React.Component {

    render() {
        return (
            <div>
                <ReactJkMusicPlayer {...options} />
            </div>
        );
    }
}