;(function($){
    $.fn.extend({
        num: function(options){
        //isEdit是否编辑，传过去一个对象,settings.min就可以的到最小值
        //$.extend将两个对象或更多对象合并一个对象，现在settings有个默认值对象，option是用户自己传的对象，option可覆盖默认对象
            var settings = $.extend({
                min: 1,
                max: 100,
                isEdit: true
            }, options);

            //this是被选中的元素，是这个$('#product-num')，onselectstart="return false;"双击选中，阻止默认行为
            this.addClass('num-value')
                .val(settings.min)
                .wrap('<div class="num-input"/>')
                .before('<span class="num-minus" onselectstart="return false;">-</span> ')
                .after(' <span class="num-add" onselectstart="return false;">+</span>')
                .on('keydown', function(e){
                    //小键盘数字1~6是96~102，大键盘1~6是49~54 8是删除键
                    if(!(e.which>=48&&e.which<=57 || e.which==8 || e.which>=96&&e.which<=102)){
                        return false;
                    }
                }).on('keyup', function(){
                    //不能大于6
                    if(parseInt(this.value) > settings.max){
                        this.value = settings.max;
                    }
                });

            var that = this;//这个this是用户自己写的id="product-num"的input，
            this.prev('.num-minus').on('click', function(){//它的前一个是span class="num-minus"
                var val = parseInt(that.val());
                val--;
                if(val < settings.min){
                    val = settings.min;
                }
                that.val(val);
                return false;//双击选中，阻止默认行为
            });
            this.next('.num-add').on('click', function(){
                var val = parseInt(that.val());
                val++;
                if(val > settings.max){
                    val = settings.max;
                }
                that.val(val);
                return false;
            });


            return this;//可以链式操作$(xx).css().xx

        }
    });

})(jQuery);