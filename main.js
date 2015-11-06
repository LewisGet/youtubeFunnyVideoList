/**
 * 嗨嗨！這是 LJ Youtube 整人程式瑪。
 */

if(typeof(ljFunny) == 'undefined') {
    var ljFunny = {
        videoClassName: "video-list-item",
        videos: {},
        consolePrint: "嗨嗨！這是 LJ Youtube 整人程式瑪。"
    };
}

ljFunny.getAllVideo = function () {
    ljFunny.videos = document.getElementsByClassName(ljFunny.videoClassName);
};

ljFunny.updateLeft = function (video, value) {
    var left = parseInt(video.style.left);

    if (isNaN(left))
    {
        left = 0;
    }

    left += value;

    video.style.left = left.toString() + "px";
};

ljFunny.updateTop = function (video, value) {
    var top = parseInt(video.style.top);

    if (isNaN(top))
    {
        top = 0;
    }

    top += value;

    video.style.top = top.toString() + "px";

};

ljFunny.hoverJob = function (video) {
    var videoWidth = video.offsetWidth;
    var videoHegiht = video.offsetHeight;

    var doJobWay = Math.round(Math.random() * 3);

    if (0 == doJobWay)
    {
        ljFunny.updateLeft(video, (videoWidth + 20));
    }

    if (1 == doJobWay)
    {
        ljFunny.updateLeft(video, (videoWidth + 20) * -1);
    }

    if (2 == doJobWay)
    {
        ljFunny.updateTop(video, (videoHegiht + 20));
    }

    if (3 == doJobWay)
    {
        ljFunny.updateTop(video, (videoHegiht + 20) * -1);
    }
};

ljFunny.addEventHover = function () {

    for (var index = 0; index < ljFunny.videos.length; index++)
    {
        var video = ljFunny.videos[index];

        video.onmouseover = function () {
            ljFunny.hoverJob(this);
        };
    }

};

ljFunny.init = function() {
    ljFunny.getAllVideo();

    ljFunny.addEventHover();

    if (console)
    {
        console.log(ljFunny.consolePrint);
    }
};

ljFunny.init();
