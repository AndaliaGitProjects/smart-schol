const auto = function(){
    let childrenCount  = document.querySelector('.btn-group').children.length;
    if(childrenCount % 2 != 0 )
        document.querySelectorAll('[data-type=button]').forEach(
            (e,i) => {if(i+2 % 2 == 0 ){ e.classList.add('shrink') }  }
        )
}
auto()

const scrollTranformation = function(){
    document.onscroll = function(e){
        if(document.body.scrollTop > 10)
            document.getElementById('header').style.backgroundColor='#514fcfbe';
        else
            document.getElementById('header').style.backgroundColor='#07194B';
        }

}();

const scrollContainer = function(){
    document.getElementById('scroll-con').style.translate='0 0';
    document.getElementById('scroll-con').style.opacity='1';

}();