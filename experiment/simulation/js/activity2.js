function activity2() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse divide fs-18px fb-500' id='act2-div'>
      <h3 style="text-align:center">Activity 2</h3>
      <p>Find the local maxima and local minima (Saddle Point)</p>
      <br>

      <div class="row" style="display:flex; align-items:center; justify-content:center;">
         <div class="col-sm-3" style="display:flex; justify-content:end;">
            $$ H = \\begin{bmatrix}
            \\frac{\\partial \\ J_1}{\\partial \\ x} \\ \\frac{\\partial \\ J_1}{\\partial \\ y} \\\\

            \\frac{\\partial \\ J_2}{\\partial \\ x} \\ \\frac{\\partial \\ J_2}{\\partial \\ y} \\\\
            \\end{bmatrix}

            = 
            $$
         </div>
         <div class="col-sm-3">
            <table>
               <tbody>
                  <tr>
                        <td>
                           <input type='text' style="margin:0 auto;" id='it1-2-h1-inp' class='form-control fs-16px' />
                        </td>
                        <td>
                           <input type='text' style="margin:0 auto;" id='it1-2-h2-inp' class='form-control fs-16px' />
                        </td>
                  </tr>
                  <tr>
                        <td>
                           <input type='text' style="margin:0 auto;" id='it1-2-h3-inp' class='form-control fs-16px' />
                        </td>
                        <td>
                           <input type='text' style="margin:0 auto;" id='it1-2-h4-inp' class='form-control fs-16px' />
                        </td>
                  </tr>
               </tbody>
            </table>
         </div>
         <div class="col-sm-3">
               <button class='btn btn-info btn-sm std-btn' onclick='verify_act2_h();' id='vf-h'>Verify</button>
         </div>
      </div>

      <div id="div-d" style="display:none;">
         <div class="row" style="display:flex; align-items:center; justify-content:center;">
            <div class="col-sm-3" style="display:flex; justify-content:end;">
               <span>D for P<sub>1</sub> = </span>
            </div>
            <div class="col-sm-3">
               <input type='text' style="margin:0 auto;" id='it1-2-d1-inp' class='form-control fs-16px' />
            </div>
            <div class="col-sm-3"></div>
         </div>
      
         <div class="row" style="display:flex; align-items:center; justify-content:center;">
            <div class="col-sm-3" style="display:flex; justify-content:end;">
               <span>D for P<sub>2</sub> = </span>
            </div>
            <div class="col-sm-3">
               <input type='text' style="margin:0 auto;" id='it1-2-d2-inp' class='form-control fs-16px' />
            </div>
            <div class="col-sm-3"></div>
         </div>

         <div class="row" style="display:flex; align-items:center; justify-content:center; margin-top:1%">
            <div class="col-sm-3" style="display:flex; justify-content:end;"></div>
            <div class="col-sm-3">
               <button class='btn btn-info btn-sm std-btn' onclick='verify_act2_d();' id='vf-d'>Verify</button>
            </div>
            <div class="col-sm-3"></div>
         </div>
      </div>

      <div id="div-hxx" style="display:none;">

         <div class="row" style="display:flex; align-items:center; justify-content:center; margin-top:3%">
            <div class="col-sm-3" style="display:flex; justify-content:end;">
               <span>Local minimum point (H<sub>xx</sub>)<br>(Saddle Point)</span>
            </div>
            <div class="col-sm-3">
               <input type='text' style="margin:0 auto;" id='it1-2-lmin1-inp' class='form-control fs-16px' />
            </div>
            <div class="col-sm-3"></div>
         </div>

         <div class="row" style="display:flex; align-items:center; justify-content:center;">
            <div class="col-sm-3" style="display:flex; justify-content:end;">
               <span>Local maximum point (H<sub>xx</sub>)</span>
            </div>
            <div class="col-sm-3">
               <input type='text' style="margin:0 auto;" id='it1-2-lmin2-inp' class='form-control fs-16px' />
            </div>
            <div class="col-sm-3"></div>
         </div>

         <div class="row" style="display:flex; align-items:center; justify-content:center; margin-top:3%">
            <div class="col-sm-3" style="display:flex; justify-content:end;"></div>
            <div class="col-sm-3">
               <button class='btn btn-info btn-sm std-btn' onclick='verify_act2_hx();' id='vf-hxx'>Verify</button>
            </div>
            <div class="col-sm-3"></div>
         </div>
      </div>

   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
}
function verify_act2_h() {
    hxx = `6x`;
    hxy = `${d}`;
    hyx = `${d}`;
    hyy = `2`;
    let h_values = [`${hxx}`, `${hxy}`, `${hyx}`, `${hyy}`];
    for (let i = 0; i < 4; i++) {
        let inp = (document.getElementById(`it1-2-h${i + 1}-inp`));
        if (!verify_values_str(inp.value, h_values[i])) {
            inp.style.border = '1px solid red';
            alert('Incorrect value');
            return;
        }
        else {
            inp.style.border = '1px solid #ced4da';
            inp.disabled = true;
        }
    }
    let btn = document.getElementById('vf-h');
    btn && btn.remove();
    let div = (document.getElementById('div-d'));
    div.style.display = 'block';
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function verify_act2_d() {
    d1 = (6 * x1 * 2) - Math.pow(d, 2);
    d2 = (6 * x2 * 2) - Math.pow(d, 2);
    console.log("x1= ", x1);
    console.log("x2= ", x2);
    console.log("d1= ", d1);
    console.log("d2= ", d2);
    let d_values = [d1, d2];
    for (let i = 0; i < 2; i++) {
        let inp = (document.getElementById(`it1-2-d${i + 1}-inp`));
        if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(d_values[i].toFixed(4)))) {
            inp.style.border = '1px solid red';
            alert('Incorrect value');
            return;
        }
        else {
            inp.style.border = '1px solid #ced4da';
            inp.disabled = true;
        }
    }
    let btn = document.getElementById('vf-d');
    btn && btn.remove();
    let div = (document.getElementById('div-hxx'));
    div.style.display = 'block';
}
function verify_act2_hx() {
    console.log("x1= ", x1);
    console.log("x2= ", x2);
    console.log("d1= ", d1);
    console.log("d2= ", d2);
    if (d1 < d2) {
        x1_bar = x1;
        x2_bar = x2;
    }
    else {
        x1_bar = x2;
        x2_bar = x1;
    }
    hxx1 = 6 * x1_bar;
    hxx2 = 6 * x2_bar;
    console.log("hxx1= ", hxx1);
    console.log("hxx2= ", hxx2);
    let hxx_values = [hxx1, hxx2];
    for (let i = 0; i < 2; i++) {
        let inp = (document.getElementById(`it1-2-lmin${i + 1}-inp`));
        if (!verify_values(parseFloat(parseFloat(inp.value).toFixed(4)), parseFloat(hxx_values[i].toFixed(4)))) {
            inp.style.border = '1px solid red';
            alert('Incorrect value');
            return;
        }
        else {
            inp.style.border = '1px solid #ced4da';
            inp.disabled = true;
        }
    }
    exp_complete();
}
function exp_complete() {
    let btn = (document.getElementById('act2-btn1'));
    btn && btn.remove();
    let btn1 = document.getElementById('vf-hxx');
    btn1 && btn1.remove();
    alert('Experiment Completed');
}
//# sourceMappingURL=activity2.js.map