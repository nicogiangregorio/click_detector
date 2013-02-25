CLICK_HANDLER = function() {
    var clicks = 0;
    return {
        detect: function(single_click_callback, double_click_callback) {
            ++clicks;
            setTimeout(function(){
                if(clicks === 1) {
                    single_click_callback.call(this);
                } else if (clicks > 1){
                    double_click_callback.call(this);
                }
                clicks = 0;
            }, 300);
        }
    };
}();
