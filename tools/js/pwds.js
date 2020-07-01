function password2() {

var password = prompt("請輸入密碼","")
if (password=="1fqSrxrv6SwC3ZyOqE5w")
{
$('.pd1').fadeOut(222);
$('.bobd').fadeIn(333);
$('title').html('歡迎');
$('.at').fadeIn(111);
$('.at').fadeOut(3888);
 
}
else
{
if (password=="null")
{
$('title').html('密碼錯誤');
$('.at2').fadeIn(111);
$('.at2').fadeOut(2888);
}
else
if (password!="1fqSrxrv6SwC3ZyOqE5w")
{
$('title').html('密碼錯誤');
$('.at2').fadeIn(222);
$('.at2').fadeOut(2888);
}
} 
}