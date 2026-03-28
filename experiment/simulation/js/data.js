//compare two values using absolute difference
function verify_values_abs(value, truevalue) {
    if ((truevalue == 0) && (value == truevalue)) {
        return true;
    }
    let res = false;
    res = (Math.abs(value - truevalue) < 0.001) ? true : false;
    // if(calculated_value <= 1) {
    //     return true
    // } else {
    //     return false;
    // }
    return res;
}
function verify_values_str(value, truevalue) {
    if (value == truevalue) {
        return true;
    }
}
let tb_data = [];
let acc_val;
let x0 = 0;
let y0 = 1;
let x_val = [];
let h = 0.02;
let y_past;
let no_iter = 0;
let y_curr = [];
let err;
let y_val = [];
let y_values = [];
let y_accval;
let y_accval1;
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let j_num = '';
let j_dem = '';
let JValues;
let a1 = 0;
let b1 = 0;
let c1 = 0;
let x1 = 0;
let x2 = 0;
let y1 = 0;
let y2 = 0;
let hxx = '';
let hxy = '';
let hyx = '';
let hyy = '';
let d1 = 0;
let d2 = 0;
let x1_bar = 0;
let x2_bar = 0;
let hxx1 = 0;
let hxx2 = 0;
//# sourceMappingURL=data.js.map