//this is a typescript file
var className = /** @class */ (function () {
    //constructor used to initialize the propertied
    function className(_name, _comments, _nextVideo, _playtime, _likes, _disLikes, _views, _publishedOn, _publishedBy) {
        var _this = this;
        //methods for outside world
        this.getNameMethod = function () {
            return _this.name;
        }; //end of Name return method
        this.getplayTimeMethod = function () {
            return _this.playtime;
        }; //end of play time return method
        this.getlikesMethod = function () {
            return _this.likes;
        }; //end of likes return method
        this.getdisLikesMethod = function () {
            return _this.disLikes;
        }; //end of dis likes return method
        this.getviewsMethod = function () {
            return _this.views;
        }; //end of views return method
        this.getpublishedByMethod = function () {
            return _this.publishedBy;
        }; //end of published by return method
        this.getpublishedOnMethod = function () {
            return _this.publishedOn;
        }; //end of published on  return method
        this.getCommentMethod = function () {
            var x;
            for (x in _this.comments) {
                $('#comments').append(_this.comments[x].Name + ':' + _this.comments[x].Comment, '<br>');
            }
        }; //end of comments output method
        this.getNextVideoMethod = function () {
            var x;
            for (x in _this.nextVideo) {
                $('#nxtvideo').append(_this.nextVideo[x], '<br>');
            } //end of next video output method
        };
        this.name = _name;
        this.playtime = _playtime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.views = _views;
        this.publishedOn = _publishedOn;
        this.publishedBy = _publishedBy;
        this.comments = _comments;
        this.nextVideo = _nextVideo;
    }
    return className;
}()); //end of class
var video1 = new className("Video1", [{ "Name": "randomName1", "Comment": "ajsgjhavjcvasyvaycasbciyas" }, { "Name": "randomName2", "Comment": "jascuayscbiyasgcuiasgiuc" }, { "Name": "randomName3",
        "Comment": "jacuyafuygac" }], ["video2", "video3", "video4"], "1:25", "541K", "231K", 23596207, "Apr 24,2018", "ABC studios");
var videoName = video1.getNameMethod();
var videoTime = video1.getplayTimeMethod();
var videoLikes = video1.getlikesMethod();
var videoDislikes = video1.getdisLikesMethod();
var videoViews = video1.getviewsMethod();
var videoPublishedOn = video1.getpublishedOnMethod();
var videoPublishedBy = video1.getpublishedByMethod();
video1.getCommentMethod();
video1.getNextVideoMethod();
$('#userName').append(videoName);
$('#playTime').append(videoTime);
$('#like').append(videoLikes);
$('#disLike').append(videoDislikes);
$('#totalView').append(videoViews);
$('#pubOn').append(videoPublishedOn);
$('#pubBy').append(videoPublishedBy);
