let BLK_I = [
    [
        [9, 9, 9, 9],
        [0, 0, 0, 0],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 0, 9],
        [9, 9, 0, 9],
        [9, 9, 0, 9],
        [9, 9, 0, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [0, 0, 0, 0],
        [9, 9, 9, 9]
    ],[
        [9, 0, 9, 9],
        [9, 0, 9, 9],
        [9, 0, 9, 9],
        [9, 0, 9, 9]
    ]
];

let BLK_O = [
    [
        [9, 9, 9, 9],
        [9, 1, 1, 9],
        [9, 1, 1, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 1, 1, 9],
        [9, 1, 1, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 1, 1, 9],
        [9, 1, 1, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 1, 1, 9],
        [9, 1, 1, 9],
        [9, 9, 9, 9]
    ]
];

let BLK_S = [
    [
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ]
];

let BLK_Z = [
    [
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ],[
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9],
        [9, 9, 9, 9]
    ]
];

let BLK = [
  BLK_I,
  BLK_O,
  BLK_S,
  BLK_Z
];

let MAP = [
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],

    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];

const COLOR = [
  "cyan",//0
  "gray",//1
  "gray",//2
  "gray",//3
  "gray",//4
  "gray",//5
  "gray",//6
  "gray",//7
  "gray",//8
  "gray"//9
];

const MAP_H = 20;
const MAP_W = 10;
const BLK_H =  4;
const BLK_W =  4;

let BLK_X = 0;
let BLK_Y = 0;
let BLK_N = 0;
let BLK_T = 0;

function disp(x, y, n, t) {
    let cvs = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    for (let i = 0; i < MAP_H; i++) {
        for (let j = 0; j < MAP_W; j++) {
            ctx.fillStyle = COLOR[MAP[i][j]];
            ctx.fillRect(j * 10, i * 10, 10, 10);
        }
    }

    let blk = BLK[n][t];
    for (let i = 0; i < BLK_H; i++) {
        for (let j = 0; j < BLK_W; j++) {
            if (blk[i][j] < 9) {
                ctx.fillStyle = COLOR[blk[i][j]];
                ctx.fillRect((x + j) * 10, (y + i) * 10, 10, 10);
            }
        }
    }
}

function test(x, y, n, t) {
    let test = true;
    let blk = BLK[n][t];
    for (let i = 0; i < BLK_H; i++) {
        for (let j = 0; j < BLK_W; j++) {
            if (blk[i][j] < 9) {
                if (y + i < 0) {
                    test = false;
                }
                else if (y + i >= MAP_H) {
                    test = false;
                }
                else if (x + j < 0) {
                    test = false;
                }
                else if (x + j >= MAP_W) {
                    test = false;
                }
                else if (MAP[y + i][x + j] < 9) {
                    test = false;
                }
            }
        }
    }
    return test;
}

window.onkeydown = function(e) {
    console.log("A");
    switch (e.keyCode) {
        case 37:
            if (test(BLK_X - 1, BLK_Y, BLK_N, BLK_T)) {
                BLK_X -= 1;
            }
            break;
        case 39:
            if (test(BLK_X + 1, BLK_Y, BLK_N, BLK_T)) {
                BLK_X += 1;
            }
            break;
        case 40:
            if (test(BLK_X, BLK_Y + 1, BLK_N, BLK_T)) {
                BLK_Y += 1;
            }
            break;
        case 88:
            if (test(BLK_X, BLK_Y, BLK_N, (BLK_T + 1) % 4)) {
                BLK_T = (BLK_T + 1) % 4;
            }
            break;
        case 90:
            if (test(BLK_X, BLK_Y, BLK_N, (BLK_T + 3) % 4)) {
                BLK_T = (BLK_T + 3) % 4;
            }
            break;
        default:
            console.log(e.keyCode);
    }
    disp(BLK_X, BLK_Y, BLK_N, BLK_T);
}

disp(BLK_X, BLK_Y, BLK_N, BLK_T);
