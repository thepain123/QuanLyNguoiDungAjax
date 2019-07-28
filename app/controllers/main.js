/*
Lấy danh sách người dùng từ back-end
*/
// Đợi html css render ra hết rồi mới chạy code trong hàm
$(document).ready(function () {
    var mangNguoiDung = [];
    var nguoiDungService = new NguoiDungService();
    var ajaxNguoiDung = nguoiDungService.LayDanhSachNguoiDung();
    ajaxNguoiDung
        .done(function (result) {
            mangNguoiDung = result;
            HienThi(mangNguoiDung);
            //Luu vao local storage
            var jsonData = JSON.stringify(mangNguoiDung);
            // luu du lieu vao local storage
            localStorage.setItem("DSND", jsonData);
            console.log(mangNguoiDung);
        })
        .fail(function (err) {
            console.log(err);
        })
    //console.log(mangNguoiDung);
    function Them(){
        console.log("ahihihihihi")
        console.log("ahihihi")
    }
    function HienThi(mangHienThi) {
        //var tbodyNguoiDung = getEle("tblDanhSachNguoiDung");
        var tableDanhSach = $("#tblDanhSachNguoiDung");
        var content = "";
        if (mangHienThi.length != 0) {

            // Viet theo js
            // for (var i = 1; i < mangHienThi.length; i++) {
            //     var nguoiDung = mangHienThi[i];
            //     // template string
            //     content += `
            // <tr>
            //     <td>${i}</td>
            //     <td>${nguoiDung.TaiKhoan}</td>
            //     <td>${nguoiDung.MatKhau}</td>
            //     <td>${nguoiDung.HoTen}</td>
            //     <td>${nguoiDung.Email}</td>
            //     <td>${nguoiDung.SoDT}</td>        
            // </tr>
            // `
            //     tbodyNguoiDung.innerHTML = content;
            // }

            // Viet theo Jquery
            mangHienThi.map(function (nguoiDung, index) {
                if (index !== 0) {
                    content += `
            <tr>
                <td>${index}</td>
                <td>${nguoiDung.TaiKhoan}</td>
                <td>${nguoiDung.MatKhau}</td>
                <td>${nguoiDung.HoTen}</td>
                <td>${nguoiDung.Email}</td>
                <td>${nguoiDung.SoDT}</td>    
                <td>
                <button 
                class="btn btn-danger btnXoa"
                id="${nguoiDung.TaiKhoan}"
                >
                <i class="fa fa-times"></i>
                Xóa
              </button></td>   
            </tr>
            `}
            })
            tableDanhSach.html(content);
        }
    }

    $("#btnThemNguoiDung").click(function () {
        $("#modal-title").html("Thêm người dùng")
        var btn = `
        <button class="btn btn-success" id="btnThem">Thêm người dùng</button>                
        `;
        $("#modal-footer").html(btn);

    })
    $("body").delegate("#btnThem", "click", function () {
        var TaiKhoan = $("#TaiKhoan").val();
        var HoTen = $("#HoTen").val();
        var MatKhau = $("#MatKhau").val();
        var Email = $("#Email").val();
        var SoDT = $("#SoDienThoai").val();
        var MaLoai = $("#maLoaiNguoiDung").val();

        //Tao doi tuong
        var nguoiDung = new NguoiDung(TaiKhoan, MatKhau, HoTen, Email, SoDT, MaLoai);
        nguoiDungService.ThemNguoiDung(nguoiDung)
            .done(function (result) {
                location.reload();
                console.log(result);
            })
            .fail(function (result) {
                console.log(result);
            })
    })
    $("body").delegate(".btnXoa", "click", function () {
                //Tao doi tuong
        // var btnXoa = event.target;
        // var id = btnXoa.getAttribute("data-id");
        var taiKhoan = $(this).data("id");
        nguoiDungService.XoaNguoiDung(TaiKhoan)
            .done(function (result) {
                alert("Xoa Thanh Cong");
                location.reload();
            })
            .fail(function (result) {
                console.log(result);
            })
    })
})


