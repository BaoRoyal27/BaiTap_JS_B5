// Quản lý sinh viên
export function tinhDiemKhuVuc(khuVuc){
    let diemKV=0;
    if(khuVuc=="A"){
        diemKV=2;
    } else if(khuVuc=="B"){
        diemKV=1;
    } else if(khuVuc=="C"){
        diemKV=0.5;
    } else{
        diemKV=0;
    }
    return diemKV;
}
export function tinhDiemDoiTuong(doiTuong){
    let diemDT=0;
    if(doiTuong===1){
        diemDT=2.5;
    } else if(doiTuong===2){
        diemDT=1.5;
    } else if(doiTuong===3){
        diemDT =1;
    } else{
        diemDT=0;
    }
    return diemDT;
}
//Tính tiền điện
export function tinhTienDien(soKW){
    let tongTien=0;
    if(soKW>= 0 && soKW<=50){
        tongTien= soKW*500;
    } else if(soKW<=100){
        tongTien=50*500+(soKW-50)*650;
    }else if(soKW<=200){
        tongTien= 50*500 +50*650+(soKW-100)*850;
    }else if(soKW<=350){
        tongTien=50*500 +50*650+ 100*850 +(soKW-200)*1100;
    } else{
        tongTien=50*500 +50*650+ 100*850 +200*1100+(soKW-350)*1300;
    }
    return tongTien;
}
//Tính Thuế thu nhập cá nhân
export function tinhTienThue(tienChiuThue){
    let tienThue=0;
    if(tienChiuThue<=60e6){
        tienThue= tienChiuThue*0.05;
    }
    else if(tienChiuThue<=120e6){
        tienThue= tienChiuThue*0.1;
    }
    else if(tienChiuThue<=210e6){
        tienThue= tienChiuThue*0.15;
    }
    else if(tienChiuThue<=384e6){
        tienThue=tienChiuThue*0.2;
    }
    else if(tienChiuThue<=624e6){
        tienThue=tienChiuThue*0.25;
    }
    else if(tienChiuThue<=960e6){
        tienThue=tienChiuThue*0.3;
    } 
    else{
        tienThue=tienChiuThue*0.35;
    }
    return tienThue;
}
// Tính tiền cáp
export function tinhPhiDVCoBan(ketNoi){
    let giaTien=0;
    if(ketNoi>0 && ketNoi<10){
        giaTien=75;
    }else{
        giaTien=75+(ketNoi-10)*5;
    }
    return giaTien;
}
