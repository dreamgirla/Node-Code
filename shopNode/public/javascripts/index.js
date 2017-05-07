$(function(){
    $col = $('#content .col');//先获取ul
    //ajax获取图片数据,查询所有商品信息,json类型
    $.get('/products/list', function(data){
        //data[0]返回形式
        // img_src:"uploads/1.jpg"
        // prod_desc:"好好好吃"
        // prod_id:1
        // prod_name:"蛋糕1"
        // prod_price:100
        for(var i=0; i<data.length; i++){
            
            var html =  '<li>' + '<a href="http://localhost:3000/products/detail?productId='+(i+1)+'">'+
                            '<img src="'+data[i].img_src+'" alt=""/>' +
                            '</a>'  + 
                            '<p>' +
                                '<span class="title">'+data[i].prod_name+'</span>' +
                                '<span class="price">'+data[i].prod_price+'</span>' +
                            '</p>' +
                         
                        '</li>';

            var minUl = getMinUl();//往最短的ul高度查信息
            minUl.append(html);

        }
    }, 'json');

    function getMinUl(){//返回ul高度最短的那个，col是数组
        //eq() 方法将匹配元素集缩减值指定 index 上的一个。
        var minUl = $col.eq(0);//假设第一个最短
        for(var i=1; i<$col.length; i++){
            if($col.eq(i).height() < minUl.height()){//如果循环元素和第一个比，小于的话，重新复制
                minUl = $col.eq(i);
            }
        }
        return minUl;
    }
});