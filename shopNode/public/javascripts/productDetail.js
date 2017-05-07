$(function(){
    var $bigImg = $('#product-imgs .big-img img');
    $('#product-imgs li').on('click', function(){
        //给自己加红框，兄弟的红框去除
        $(this).addClass('selected').siblings().removeClass('selected');
        //换图片，找孩子，其实是数组，的第一个，原生写法$(this).children()[0].src
        $bigImg.attr('src', $(this).children()[0].src);
    });

    var $productPrice = $('.product-price'),
        $productSize = $('#product-size');
        //把价格传给隐藏的input
    $('#product-form .product-size-list li').on('click', function(){
        $productPrice.html($(this).data('price'));
        $productSize.val($(this).html());
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    $('#product-num').num({
        max: 6,
        isEdit: false
    });

    $('#product-form').on('submit', function(){
        var that = this;//that是form表单
        $.get('/users/checkLogin', function(data){
            if(data == 'fail'){
                alert('您未登录,请您先登录~');
            }else{
                that.submit();
            }
        });
        return false;
    });
});