let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Charactertizing extrema</h4>
            <p>Objective: To study characterizing extrema.</p>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    calculation();
    let btn_text = get_collapse_btn_text("Activity 1", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>
        <h3 style="text-align: center">Activity 1</h3>
        <span style="font-weight:600">Find the critical points of the function. </span>

        $$ f(x, y) = x^a - bx + y^c + dxy  $$

        $$ a = 3, b = ${b}, c = 2, d = ${d}  $$

        <span style="font-weight:600">Note: Enter the exponential expression a<sup>n</sup> as a^n </span>

        <div class="row" style="display:flex; align-items:center; justify-content:center;">
            <div class="col-sm-3" style="display:flex; justify-content:end;">
                $$ J = \\begin{bmatrix}
                \\frac{\\partial \\ f}{\\partial \\ x} \\\\

                \\frac{\\partial \\ f}{\\partial \\ y} \\\\
                \\end{bmatrix}

                = 
                $$
            </div>
            <div class="col-sm-3">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <input type='text' style="margin:0 auto;" id='it1-2-JV1-inp' class='form-control fs-16px' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type='text' style="margin:0 auto;" id='it1-2-JV2-inp' class='form-control fs-16px' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-3">
                <button class='btn btn-info btn-sm std-btn' onclick='act1_verify_j();' id='vf-j'>Verify</button>
            </div>
        </div>

        
        
        <div id="cp-eqn" style="display:none;">

            <div class="row" style="display:flex; align-items:center; justify-content:center;">
                <div class="col-sm-3" style="display:flex; justify-content:end;">
                    $$ J = \\begin{bmatrix}
                    0 \\\\

                    0 \\\\
                    \\end{bmatrix} 
                    $$
                </div>
                <div class="col-sm-3"></div>
                <div class="col-sm-3"></div>

                <div class="row">
                    <p>Now solving simultaneously, we get</p>
                </div>
            </div>

            <div id="cp-xone-div" class="row" style="align-items:center; justify-content:center; display:flex; margin-top: 3%">
                <div class="col-sm-3" style="display:flex; justify-content:end;">
                    $$ x_1 = \\frac{- b_1 + \\sqrt{b_1^2 - 4 a_1 c_1}}{2 a_1} = 
                    $$
                </div>

                <div class="col-sm-2">
                    <input type='text' style="margin:0 auto;" id='x-one-inp' class='form-control fs-16px' />
                </div>

                <div class="col-sm-2"></div>
            </div>

            <div id="cp-xtwo-div" class="row" style="align-items:center; justify-content:center; display:flex;">
                <div class="col-sm-3" style="display:flex; justify-content:end;">
                    $$ x_2 = \\frac{- b_1 - \\sqrt{b_1^2 - 4 a_1 c_1}}{2 a_1} = 
                    $$
                </div>

                <div class="col-sm-2">
                    <input type='text' style="margin:0 auto;" id='x-two-inp' class='form-control fs-16px' />
                </div>

                <div class="col-sm-2"></div>
            </div>

            <div id="cp-yone-div" class="row" style="align-items:center; justify-content:center; display:flex;">
                <div class="col-sm-3" style="display:flex; justify-content:end;">
                    $$ y_1 = \\frac{- d x_1}{2} = $$
                </div>

                <div class="col-sm-2">
                    <input type='text' style="margin:0 auto;" id='y-one-inp' class='form-control fs-16px' />
                </div>

                <div class="col-sm-2"></div>
            </div>

            <div id="cp-ytwo-div" class="row" style="align-items:center; justify-content:center; display:flex;">
                <div class="col-sm-3" style="display:flex; justify-content:end;">
                    $$ y_2 = \\frac{- d x_2}{2} = $$
                </div>

                <div class="col-sm-2">
                    <input type='text' style="margin:0 auto;" id='y-two-inp' class='form-control fs-16px' />
                </div>

                <div class="col-sm-2"></div>
            </div>

            <div id="cp-eq" class="row" style="align-items:center; justify-content:center; display:flex;">
                <div class="col-sm-3" style="display:flex; justify-content:end;">$$ $$</div>
                <div class="col-sm-2">
                    <button class='btn btn-info btn-sm std-btn' onclick='verify_critical_points();' id='vf-cp'>Verify</button>
                    <button class='btn btn-info btn-sm std-btn' id="act1-btn1" style="display:none;" onclick='activity2();'>Next</button>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function calculation() {
    a = 3;
    b = 0;
    c = 2;
    d = 0;
    b = random1(2, 4);
    d = random1(2, 5);
    console.log("a= ", a);
    console.log("b= ", b);
    console.log("c= ", c);
    console.log("d= ", d);
}
function act1_verify_j() {
    j_num = `${a}x^2-${b}+${d}y`;
    j_dem = `${c}y+${d}x`;
    console.log("j num= ", j_num);
    console.log("j dem= ", j_dem);
    JValues = [`${a}x^2-${b}+${d}y`, `${c}y+${d}x`];
    for (let i = 0; i < 2; i++) {
        let inp = (document.getElementById(`it1-2-JV${i + 1}-inp`));
        if (!verify_values_str(inp.value, JValues[i])) {
            inp.style.border = '1px solid red';
            alert('Incorrect value');
            return;
        }
        else {
            inp.style.border = '1px solid #ced4da';
            inp.disabled = true;
        }
    }
    let btn = document.getElementById('vf-j');
    btn && btn.remove();
    let div = (document.getElementById('cp-eqn'));
    div.style.display = 'block';
    calculate_critical_points();
}
function calculate_critical_points() {
    a1 = a;
    b1 = (-(Math.pow(d, 2)) / 2);
    c1 = -b;
    x1 = (-b1 + Math.sqrt(Math.pow(b1, 2) - (4 * a1 * c1))) / (2 * a1);
    x2 = (-b1 - Math.sqrt(Math.pow(b1, 2) - (4 * a1 * c1))) / (2 * a1);
    y1 = (-d * x1) / 2;
    y2 = (-d * x2) / 2;
}
function verify_critical_points() {
    console.log("x1= ", x1);
    console.log("x2= ", x2);
    console.log("y1= ", y1);
    console.log("y2= ", y2);
    let x1inp = (document.getElementById(`x-one-inp`));
    let x2inp = (document.getElementById(`x-two-inp`));
    let y1inp = (document.getElementById(`y-one-inp`));
    let y2inp = (document.getElementById(`y-two-inp`));
    let x_match = (x1inp.value == x2inp.value) ? true : false;
    let y_match = (y1inp.value == y2inp.value) ? true : false;
    if (!x_match) {
        if ((verify_values(parseFloat(parseFloat(x1inp.value).toFixed(4)), parseFloat(x1.toFixed(4)))) || (verify_values(parseFloat(parseFloat(x1inp.value).toFixed(4)), parseFloat(x2.toFixed(4))))) {
            x1inp.style.border = '1px solid #ced4da';
            x1inp.disabled = true;
        }
        else {
            x1inp.style.border = '1px solid red';
            alert('Incorrect value of x1');
            return;
        }
        if ((verify_values(parseFloat(parseFloat(x2inp.value).toFixed(4)), parseFloat(x2.toFixed(4)))) || (verify_values(parseFloat(parseFloat(x2inp.value).toFixed(4)), parseFloat(x1.toFixed(4))))) {
            x2inp.style.border = '1px solid #ced4da';
            x2inp.disabled = true;
        }
        else {
            x2inp.style.border = '1px solid red';
            alert('Incorrect value of x2');
            return;
        }
    }
    else {
        alert('x1 and x2 values are same');
        return;
    }
    if (!y_match) {
        if ((verify_values(parseFloat(parseFloat(y1inp.value).toFixed(4)), parseFloat(y1.toFixed(4)))) || (verify_values(parseFloat(parseFloat(y1inp.value).toFixed(4)), parseFloat(y2.toFixed(4))))) {
            y1inp.style.border = '1px solid #ced4da';
            y1inp.disabled = true;
        }
        else {
            y1inp.style.border = '1px solid red';
            alert('Incorrect value of y1');
            return;
        }
        if ((verify_values(parseFloat(parseFloat(y2inp.value).toFixed(4)), parseFloat(y2.toFixed(4)))) || (verify_values(parseFloat(parseFloat(y2inp.value).toFixed(4)), parseFloat(y1.toFixed(4))))) {
            y2inp.style.border = '1px solid #ced4da';
            y2inp.disabled = true;
        }
        else {
            y2inp.style.border = '1px solid red';
            alert('Incorrect value of y2');
            return;
        }
    }
    else {
        alert('y1 and y2 values are same');
        return;
    }
    let btn = document.getElementById('vf-cp');
    btn && btn.remove();
    let btn1 = (document.getElementById('act1-btn1'));
    btn1.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map