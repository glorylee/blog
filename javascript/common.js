 $(function () {});
 var input_type = {
    init:function ($obj) {
        this.name = $obj.html().split("")
        this.length = this.name.length;
        this.i = 0;
    },
    pri:function () {
        var $this = this
        //在此处只能使用闭包，因为windown.settimeout使函数的this指向object windown，而非原型链的this对象。而此时我需要递归，所以只能将this对象传到闭包内，递归匿名的闭包函数。
        return (function () {
            if ($this.i > $this.length) {
                window.clearTimeout(Go)
                return false;
            }
            var char = $this.name
            $(".div1").append(char[$this.i])
            $this.i++
            var Go = window.setTimeout(arguments.callee, 100)//在这里arguments.callee妙用因为是匿名闭包，调用函数本身。
        })
    }
}


//建立class类
function Input_type() {
    this.init.apply(this, arguments)
}

Input_type.prototype = input_type

//创建实例
var p = new Input_type($(".content"))
p.pri()()
 
        
