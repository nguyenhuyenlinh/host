var a=location.hostname;var e = document.getElementById('dathang-form2 #name');
function createForm()
{
var FORM = '<div class="form-title">Điền thông tin đặt hàng để nhận được<br/>Sản phẩm giảm cân độc đáo<br/>Green Coffee Bean với mức giá khuyến mãi đặc biệt</div>';
FORM += '<input class="client-name input" name="name" id="name" placeholder="Họ và Tên" type="text"/>';
FORM += '<input class="client-phone input only_number" name="phone" id="phone" placeholder="Số điện thoại" type="tel"/>';
FORM += '<input class="client-address input" name="address" id="address" placeholder="Địa chỉ nhận" type="text"/>';        
FORM += '<div class="text-align-center">';
FORM += '<button class="sound-button submit regular two-lines" onclick="return OrderTwo()"><span class="text"><b>ĐẶT HÀNG</b><br/>ƯU ĐÃI MỚI: Khuyến mãi Mua 2 Tặng 1<br/><span class="newprice"><b>Giá chỉ có 1.198.000 đ</b></span><span class="curr">!</span></span></button>';
FORM += '<button class="sound-button submit regular two-lines" onclick="return OrderOne()"><span class="text"><b>ĐẶT HÀNG</b><br/>Khuyến mãi giảm giá 50% từ <span class="l-t oldprice">1.200.000 đ</span><span class="curr">!</span><br/><span class="newprice"><b>Nay chỉ còn 599.000 đ</b></span><span class="curr">!</span></span></button>';         
FORM += '</div>';
FORM += '<div class="page-form-risk">Miễn phí giao hàng. Nếu bạn ở Hà Nội hoặc TP. Hồ Chí Minh hoặc lân cận sẽ nhận được Sản phẩm trong ngày,<br/> Những bạn ở tỉnh khác sẽ nhận được sau 3 - 5 ngày tùy theo vị trí, Nhận được hàng rồi mới thanh toán.</div>';        
return FORM;
}
  if((a!='localhost')&&(a!='green-coffee-bean.shop')) {
  //  var FORM=createForm();document.getElementById("dathang-form").innerHTML=FORM;
    var FORM=createForm();document.getElementById("dathang-form2").innerHTML=FORM;
};
