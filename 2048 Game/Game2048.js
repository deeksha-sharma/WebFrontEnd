var Game = ( function() {
    var mat = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    var score = 0;
    var cssMap = { 2 : 'two' , 4: 'four', 8: 'eight', 16:'sixteen', 32: 'thirty-two', 64: 'sixty-four', 128: 'onetwoeight', 256: 'twofivesix', 512: 'fivetwelve', 1024: 'onetwofour', 2048: 'twofoureight'};
    var grid_list;
    
    function movement(row, column, travel, input) {
        	if(input === 38 || input === 40) {
			if(( mat[row][column + travel] !== 0) && (mat[row][column + travel] == mat[row][column]))
			{
				mat[row][column] = 0;
				mat[row][column + travel] *= 2;
                if(mat[row][column + travel] == 2048) {
                
                }
				score += mat[row][column + travel];
			}
			else if( mat[row][column + travel] === 0 && mat[row][column] !== 0  && (column + travel != -1) && (column + travel != 4))
			{
				mat[row][column + travel] = mat[row][column];
				mat[row][column] = 0;
			}
			if( travel > 0 ) { if( column + travel < 3 ) movement(row, column + travel, 1 ,input); }
			else        { if( column + travel > 0 ) movement(row, column + travel, -1 ,input); }
		}
		else if(input == 37 || input == 39) {
			if(( mat[row + travel][column] !== 0) && (mat[row + travel][column] == mat[row][column]) && (row + travel != -1) && (row + travel != 4))
			{
				mat[row][column] = 0;
				mat[row + travel][column] *= 2;
				score += mat[row + travel][column];

			}
			else if( mat[row + travel][column] === 0 && mat[row][column] !== 0 && (row + travel != -1) && (row + travel != 4) )
			{
				mat[row + travel][column] = mat[row][column];
				mat[row][column] = 0;
			}
			if( travel > 0 ) { if( row + travel < 3 ) movement(row + travel, column, 1 ,input); }
			else        { if( row + travel > 0 ) movement(row + travel, column, -1 ,input); }
		}
	}
    
    function scoring() {
        var el = document.getElementById("score");
        el.innerHTML = score;
    }
    
    function move(e) {
        var enter = e.keyCode;
        console.log(e.keyCode);
        e.preventDefault();
        switch(e.which) {
        case 38: {
			for (var i = 0; i < 4; i++) {
				for (var j = 1; j < 4; j++) {
					if(mat[i][j] !== 0) {
						movement(i,j,-1,enter);
					}
				}
			}
			break;
        }
		case 40: {
			for (var k = 0; k < 4; k++) {
				for (var l = 2; l >= 0; l--) {
					if(mat[k][l] !== 0) {
						movement(k,l,1,enter);
					}
				}
			}
			break;
		}
		case 37: {
			for (var m = 0; m < 4; m++) {
				for (var n = 1; n < 4; n++) {
					if(mat[n][m] !== 0) {
						movement(n,m,-1,enter);
					}
				}
			}
			break;
		}
		case 39: {
			for (var o = 0; o < 4; o++) {
				for (var p = 2; p >= 0; p--) {
					if(mat[p][o] !== 0) {
						movement(p,o,1,enter);
					}
				}
			}
			break;
		}
    }
        scoring();
        var position = generateRamdomIndexPositionAndValue();
        
        if(position.x === -1) {
            GameOver();
        }
        else {
            mat[position.x][position.y] = position.number;
            redraw();
        }
    }
    
    function generateRamdomIndexPositionAndValue() {
        var x,y,b;
        for(var i = 0; i<4; i++) {
            for( var j = 0; j<4; j++) {
                if(mat[j][i] === 0) {
                    do {
                        x = Math.floor((Math.random() * 4));
                        y = Math.floor((Math.random() * 4));
                    } while(mat[x][y] !== 0);
                }
                //var b;
                var a = Math.floor((Math.random() * 20));
                if( a < 15) 
                    b = 2;
                else
                    b = 4;
                if(CanMove() === false) {
                    x = -1;
                    y = -1;
                }
            }
         }
         return { x: x, y:y, number: b };                     
    }
                
    function CanMove() {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if( mat[i][j] === 0 )
					return true;
			}
		}
		return false;
	}
    
    function GameOver() {
        var el = document.getElementById('container');
        el.innerHTML = "game over";
    }
    
    function gameInit() {
        console.log("deeksha");
        var first = generateRamdomIndexPositionAndValue();
        var second = generateRamdomIndexPositionAndValue();
        mat[first.x][first.y] = first.number;
        mat[second.x][second.y] = second.number;
        console.log(first.x);
        console.log(second.number);
        
    }
    
function redraw() {
    for( var i = 0 ; i<4; i++){
        for( var j = 0 ; j<4 ; j++) {
            var grid_ele = grid_list[i*4 + j];
            if(mat[j][i] !== 0)
              grid_ele.setAttribute('class', 'grid ' + cssMap[mat[j][i]]);
            else {
                    grid_ele.setAttribute('class', 'grid');
                }
        }
    }
}

    
function restart() {
        // Hide the dialog;
        mat = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0,]];
        for (var i = 0; i < grid_list.length;i++) {
            grid_list[i].setAttribute('class', 'grid');
        }
        score = 0;
        hasReached2048 = false;
        gameInit();
        reDraw();
    }
    
    return {
        init: function() {
            grid_list = document.querySelectorAll('#container > div');
            gameInit();
            window.addEventListener('keydown',move);
            redraw();
        }
    };
    
    })();