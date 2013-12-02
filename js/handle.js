$(function () {
     //导航锚点
    $('nav').on('click','a',function(e){
        e.preventDefault();
        var that = $(this);
        var indx = that.index();
        $.scrollTo('#part'+ (indx + 1),600);
        setTimeout(function(){  //todo 点击导航栏设置焦点目标为高亮 延迟执行
            $('nav').find('.cur').removeClass('cur');
            that.addClass('cur');
        },601)

    });

    //导航位置控制
    var hh = $('header').height();
    var vh = $.waypoints('viewportHeight');
    $('.part1').waypoint(function(direction) {  //todo 让导航栏保持在底部
        if(direction === 'down'){
            $('header').css('position','static');
        }else{
            $('header').removeAttr('style');
        }
    },{
        offset:function(){
            return vh - $(this).height() - hh;
        }
    });
    $('.part2').waypoint(function(direction) {  //todo 让导航栏保持在顶端
        if(direction === 'down'){
            $('header').css({
                'position': 'fixed',
                'top':0,
                'bottom':''
            });
        }else{
            $('header').css({
                'position': 'static'
            });
        }
    },{
        offset:function(){
            return hh;
        }
    });

    //滚动到栏目块位置设置导航显示对应高亮标签
    $('.section').waypoint(function(direction){
        //console.log($('.section').index(this));
        var a = $('nav').find('a');
        a.removeClass('cur');
        a.eq($('.section').index(this)).addClass('cur');
    },{
        offset:function(){
            return -hh;
        }
    });


});