window.onload = function() {

    var nav = new Vue({
        el: 'nav',
        data: {
            navs: '备忘清单'
        }
    })
    var one = new Vue({
        el: '.list',
        data: {
            title: '坚实的积分',
            flag: false
        },
        methods: {
            fn(e) {
                console.log(event.target);
                this.flag = true
                console.log(this.flag);

                // document.querySelector('input').setAttribute('class', 'input')
            },
        }
    });
    var bottom = new Vue({
        el: '.bottom',
        data: {

        },
        methods: {
            move() {
                console.log(this.$refs.check);


            }
        }
    })
}