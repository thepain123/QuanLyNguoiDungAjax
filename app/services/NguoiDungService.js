function NguoiDungService() {
    this.LayDanhSachNguoiDung = function () {
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })

    }

    //Them nguoi dung
    this.ThemNguoiDung = function(nguoiDungMoi){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDungMoi,
        })
    }

    //XoaNguoiDung
    this.XoaNguoiDung = function(ID){
        return $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${ID}`,
            type: "DELETE",            
        })
    }
}