//this is a typescript file
class className{
    //properties or properties
   private name:string;
    comments:any[]
    nextVideo:string[];
   private playtime ?:string;
    likes?:string;
    disLikes?:string;
    views?:number;
    private publishedOn?:string;
    private publishedBy?:string;

    //constructor used to initialize the propertied
    constructor (_name:string,_comments:any[],_nextVideo:string[], _playtime?:string,_likes?:string,_disLikes?:string,_views?:number,_publishedOn?:string,_publishedBy?:string){
        this.name=_name;
        this.playtime= _playtime;
        this.likes=_likes;
        this.disLikes=_disLikes;
        this.views=_views;
        this.publishedOn=_publishedOn;
        this.publishedBy=_publishedBy;
        this.comments=_comments;
        this.nextVideo=_nextVideo;
    }
   
        
    //methods for outside world
    getNameMethod=()=>{
        return this.name;
    }//end of Name return method

    getplayTimeMethod=()=>{
        return this.playtime;
    }//end of play time return method

    getlikesMethod=()=>{
        return this.likes;
    }//end of likes return method

    getdisLikesMethod=()=>{
        return this.disLikes;
    }//end of dis likes return method

    getviewsMethod=()=>{
        return this.views;
    }//end of views return method

    getpublishedByMethod=()=>{
        return this.publishedBy;
    }//end of published by return method

    getpublishedOnMethod=()=>{
        return this.publishedOn;
    }//end of published on  return method

    getCommentMethod=()=>{
        let x;
        for ( x in this.comments ){
            $('#comments').append( this.comments[x].Name + ':' + this.comments[x].Comment,'<br>');
            
       }     
    }//end of comments output method
    getNextVideoMethod=()=>{
        let x;
        for(x in this.nextVideo){
            $('#nxtvideo').append(this.nextVideo[x] ,'<br>');
        }//end of next video output method
    }
}//end of class

let video1 = new className("Video1",[{"Name":"randomName1","Comment":"ajsgjhavjcvasyvaycasbciyas"},{"Name":"randomName2","Comment":"jascuayscbiyasgcuiasgiuc"},{"Name":"randomName3",
"Comment":"jacuyafuygac"}],["video2","video3","video4"],"1:25","541K","231K",23596207,"Apr 24,2018","ABC studios")

let videoName = video1.getNameMethod();
let videoTime = video1.getplayTimeMethod();
let videoLikes = video1.getlikesMethod();
let videoDislikes = video1.getdisLikesMethod();
let videoViews = video1.getviewsMethod();
let videoPublishedOn = video1.getpublishedOnMethod();
let videoPublishedBy = video1.getpublishedByMethod();
 video1.getCommentMethod();
video1.getNextVideoMethod();

$('#userName').append(videoName);
$('#playTime').append(videoTime);
$('#like').append(videoLikes);
$('#disLike').append(videoDislikes);
$('#totalView').append(videoViews);
$('#pubOn').append(videoPublishedOn);
$('#pubBy').append(videoPublishedBy);
