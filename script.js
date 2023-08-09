var channels = [
    {
        "channelname":"Scenic Relaxation",
        "thumbnail":"Image",
        "title":"The Ocean",
        "views":"10M"
    },
    {
        "channelname":"BANGTANTV",
        "thumbnail":"Image",
        "title":"Suga with Jungkook",
        "views":"9.3M"
    },
    {
        "channelname":"Programming with Mosh",
        "thumbnail":"Image",
        "title":"Python Tutorial",
        "views":"10M"
    }
];
for(let i=0;i<channels.length;i++){
    let channel=channel[i];
    for(key in channel){
        console.log(key,channel[key]);
    }
}
