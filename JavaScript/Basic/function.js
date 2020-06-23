//// แบบฝึกหัดพิเศษ slide 78 Basic Javascript - 2
//// ข้อ 1
// function draw(n) {
//     let answer = "";
//     for (let i = 0; i < n; i++) {
//         answer = answer + "*";
//     }
//     return answer;
// }
// console.log(draw(4));

//// ข้อ 2 แบบฝึกหัดพิเศษ
function forward(n, text) {
    let answer = "";
    for (let i = 1; i <= n; i++) {
        if (typeof(text) == "string") answer = answer + text;
        else if (typeof(text) == "number") answer = answer + i;
    }
    return answer
}

function backward(n, text) {
    let answer = "";
    for (let i = n; i > 0; i--) {
        if (typeof(text) == "string") answer = answer + text;
        else if (typeof(text) == "number") answer = answer + i;
    }
    return answer
}

function draw(n, sw) {
    switch (sw) {
        case 1: // forward
            return forward(n, "*");
        case 2: // forward
            let answer2 = "";
            for (let i = 1; i <= n; i++) {
                answer2 = answer2 + forward(n, "*") + '\n';
            }
            return answer2;
        case 3: // forward
            let answer3 = "";
            for (let i = 1; i <= n; i++) {
                answer3 = answer3 + forward(n, i) + '\n';
            }
            return answer3;
        case 4: // forward
            let answer4 = "";
            for (let i = 1; i <= n; i++) {
                answer4 = answer4 + forward(n, String(i)) + '\n';
            }
            return answer4;
        case 5: // backward
            let answer5 = "";
            for (let i = n; i > 0; i--) {
                answer5 = answer5 + backward(n, String(i)) + '\n';
            }
            return answer5;
        case 6:
            let answer6 = "";
            for (let i = 1; i <= n * n; i++) {
                answer6 = answer6 + i;
                if ((i % n) == 0) answer6 = answer6 + '\n';
            }
            return answer6;
        case 7:
            let answer7 = "";
            for (let i = n * n; i > 0 * n; i--) {
                answer7 = answer7 + i;
                if ((i % n) == 1) answer7 = answer7 + '\n';
            }
            return answer7;
        case 8:
            let answer8 = 0
            for (i = 0; i < n; i++) {
                answer8 = answer8 + 2 * i + '\n';
            }
            return answer8;
        case 9:
            let answer9 = 0;
            for (i = 1; i <= n; i++) {
                answer9 = answer9 + 2 * i + '\n';
            }
            return answer9;
        case 10:
            let answer10 = 0
            for (i = 1; i <= n; i++) {
                for (j = 1; j <= n; j++) {
                    answer10 = String(answer10 + (i * j));
                }
                answer10 = answer10 + '\n';
            }
            return answer10;
        case 11:
            let answer11 = "";
            for (i = 1; i <= n; i++) {
                for (j = 1; j <= n; j++) {
                    if (j == i) answer11 = answer11 + ("-");
                    else answer11 = answer11 + ("*");
                }
                answer11 = answer11 + '\n';
            }
            return answer11;
        case 12:
            let answer12 = "";
            for (i = 0; i < n; i++) {
                for (j = 1; j <= n; j++) {
                    if (j == n - i) answer12 = answer12 + ("-");
                    else answer12 = answer12 + ("*");
                }
                answer12 = answer12 + '\n';
            }
            return answer12;
        case 13:
            let answer13 = "";
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    if (j > i) answer13 = answer13 + ("-");
                    else answer13 = answer13 + ("*");
                }
                answer13 = answer13 + '\n';
            }
            return answer13;
        case 14:
            let answer14 = "";
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    if (j >= n - i) answer14 = answer14 + ("-");
                    else answer14 = answer14 + ("*");
                }
                answer14 = answer14 + '\n';
            }
            return answer14;
        case 15:
            let answer15 = "";
            for (i = 0; i < n; i++) {
                for (j = 0; j < n; j++) {
                    if (j > i) answer15 = answer15 + ("-");
                    else answer15 = answer15 + ("*");
                }
                answer15 = answer15 + '\n';
            }
            for (i = 1; i < n; i++) {
                for (j = 0; j < n; j++) {
                    if (j >= n - i) answer15 = answer15 + ("-");
                    else answer15 = answer15 + ("*");
                }
                answer15 = answer15 + '\n';
            }
            return answer15;
        case 17:
            let answer17 = "";
            for (i = 1; i <= n; i++) {
                let count = 0;
                for (j = 1; j <= n; j++) {
                    count++;
                    if (count <= (n - i)) answer17 = answer17 + ("-");
                    else answer17 = answer17 + ("*");
                }
                answer17 = answer17 + '\n';
            }
            return answer17;
        case 18:
            let answer18 = "";
            for (i = 0; i < n; i++) {
                let count = 0;
                for (j = 1; j <= n; j++) {
                    count++;
                    if (count <= (i)) answer18 = answer18 + ("-");
                    else answer18 = answer18 + ("*");
                }
                answer18 = answer18 + '\n';
            }
            return answer18;
        case 19:
            let answer19 = draw(n, 17);
            for (i = 1; i < n; i++) {
                let count = 0;
                for (j = 1; j <= n; j++) {
                    count++;
                    if (count <= (i)) answer19 = answer19 + ("-");
                    else answer19 = answer19 + ("*");
                }
                answer19 = answer19 + '\n';
            }
            return answer19;
        case 20:
            let answer20 = "";
            let k = 1;
            for (i = 1; i <= n; i++) {
                let count = 0;
                for (j = 1; j <= n; j++) {
                    count++;
                    if (count <= (n - i)) answer20 = answer20 + ("-");
                    else {
                        answer20 = answer20 + (k);
                        k++;
                    }
                }
                answer20 = answer20 + '\n';
            }
            for (i = 1; i < n; i++) {
                let count = 0;
                for (j = 1; j <= n; j++) {
                    count++;
                    if (count <= (i)) answer20 = answer20 + ("-");
                    else {
                        answer20 = answer20 + (k);
                        k++;
                    }

                }
                answer20 = answer20 + '\n';
            }
            return answer20;
        case 21:
            let answer21 = "";
            for (i = 0; i < n; i++) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) answer21 = answer21 + ("*");
                    else answer21 = answer21 + ("-");
                }
                answer21 = answer21 + ("\n")
            }
            return answer21;
        case 22:
            let answer22 = "";
            for (i = n - 1; i >= 0; i--) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) answer22 = answer22 + ("*");
                    else answer22 = answer22 + ("-");
                }
                answer22 = answer22 + ("\n")
            }
            return answer22;
        case 23:
            let answer23 = "";
            for (i = 0; i < n - 1; i++) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) answer23 = answer23 + ("*");
                    else answer23 = answer23 + ("-");
                }
                answer23 = answer23 + ("\n")
            }
            for (i = n - 1; i >= 0; i--) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) answer23 = answer23 + ("*");
                    else answer23 = answer23 + ("-");
                }
                answer23 = answer23 + ("\n")
            }
            return answer23;
        case 24:
            let answer24 = "";
            let k24 = 1;
            for (i = 0; i < n - 1; i++) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) {
                        answer24 = answer24 + (k24);
                        k24++;
                    } else answer24 = answer24 + ("-");
                }
                answer24 = answer24 + ("\n")
            }
            for (i = n - 1; i >= 0; i--) {
                for (j = 1; j <= 2 * n - 1; j++) {
                    if (j <= n + i && j >= n - i) {
                        answer24 = answer24 + (k24);
                        k24++;
                    } else answer24 = answer24 + ("-");
                }
                answer24 = answer24 + ("\n")
            }
            return answer24;


    }

}
console.log(draw(4, 24));