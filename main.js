//Quản lý tuyển sinh
import { tinhDiemKhuVuc,tinhDiemDoiTuong } from "./methol.js";
document.getElementById('btnTinhKQ').onclick=function(){
    // nhập điểm chuẩn, điểm 3 môn &  đối tượng(number), nhập khu vực(string)
    let inputDChuan=+document.getElementById('diemChuan').value;
    let inputD1=+document.getElementById('diem1').value;
    let inputD2=+document.getElementById('diem2').value;
    let inputD3=+document.getElementById('diem3').value;
    let inputKhuVuc=document.getElementById('khuVuc').value;
    let inputDoiTuong=+document.getElementById('doiTuong').value;
    //process
    let diemKhuVuc=tinhDiemKhuVuc(inputKhuVuc);
    let diemDoiTuong= tinhDiemDoiTuong(inputDoiTuong);
    let tongDiem= inputD1+ inputD2+ inputD3+ diemDoiTuong+ diemKhuVuc;
    let ketQua='';
    if(inputD1===0||inputD2===0||inputD3===0){
        ketQua='Bạn đã rớt. Do có môn 0 điểm';
    } else if(tongDiem<inputDChuan){
        ketQua='Bạn đã rớt';
    }else if(tongDiem>inputDChuan){
        ketQua='Bạn đã đậu'
    }
    //Output kết quả
    document.getElementById('ketQua1').innerHTML=`${ketQua}. Tổng điểm : ${tongDiem}`;
}

// Tính tiền điện
import { tinhTienDien } from "./methol.js";
document.getElementById('btnKW').onclick=function(){
    //Nhập hoten(string), soKW (number)
    let hoTen=document.getElementById('nhapTen').value;
    let inputKW= +document.getElementById('KW').value;
    // process
    let tongTienDien= tinhTienDien(inputKW);
    // Xuất kết quả
    document.getElementById('ketQua2').innerHTML=` Họ Tên: ${hoTen}. Số tiền điện là: ${tongTienDien.toLocaleString()} VNĐ`
}
// Tính thuế thu nhập cá nhân
import { tinhTienThue } from "./methol.js";
document.getElementById('btnThue').onclick= function(){
    //nhập họ tên(string), tổng thu nhập và người phụ thuộc(number)
    let inputTen= document.getElementById('nhapHoTen').value;
    let inputSumYear= +document.getElementById('sumYear').value;
    let inputHuman=+document.getElementById('numP').value;
     // PROCESS
     let tongTienChiuThue= inputSumYear-4000000-(inputHuman*1600000);
    //xuất kết quả 
    let tongTienThue=tinhTienThue(tongTienChiuThue);
    document.getElementById('ketQua3').innerHTML=` Họ tên : ${inputTen}; Tiền thuế thu nhập cá nhân là: ${new Intl.NumberFormat("de-DE",{style:"currency", currency:"VND"}).format(tongTienThue)}`;
}
// tính tiền cáp
import { tinhPhiDVCoBan } from "./methol.js";
document.getElementById('btnTienCap').onclick=function(){
    // Nhập KH ,MaKH (string), nhập KN và KenhCC (NUMBER)
    let tagKH=document.getElementById('khachHang').value;
    let tagKN=+document.getElementById('soKetNoi').value;
    let tagMaKH= document.getElementById('maKH').value;
    let tagKenhCC=+document.getElementById('soKenhCC').value;
    //Process
    let giaKetNoi=tinhPhiDVCoBan(tagKN);
    let tienCapDan=25+7.5*tagKenhCC;
    let tienCapDN= 15+giaKetNoi+50*tagKenhCC;
    let tienCap=0;
    if(tagKH=="nhaDan"){
        tienCap=tienCapDan;
    } else if(tagKH=="doanhNghiep"){
        tienCap=tienCapDN;
    }
    //Xuất kết quả tiền cáp(number)
    document.getElementById('ketQua4').innerHTML=`Ma Khách Hàng: ${tagMaKH}; Tiền cáp: ${new Intl.NumberFormat("de-De",{style:"currency",currency:"USD"}).format(tienCap)}`
}
