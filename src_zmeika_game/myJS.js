var FIELD_SIZE_X = 35;
var FIELD_SIZE_Y = 35;
var SNAKE_SPEED = 100;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snake_timer;
var food_timer;
var score = 0;

function init(){
    prepareGameField();

    var wrap = document.getElementsByClassName('wrap')[0];
    wrap.style.width = '400px';

    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);


    addEventListener('keydown', changeDirection);

}    
/*
Функция генерации игрового поля
*/
function prepareGameField() {
    // Создаём таблицу
    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');
    
    // Генерация ячеек игровой таблицы
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        // Создание строки
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;
        
        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            // Создание ячейки
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;
            row.appendChild(cell); // Добавление ячейки
        }
        
        game_table.appendChild(row); // Добавление строки
    }
    
    document.getElementById('snake-field').appendChild(game_table); // Добавление таблицы
}
function startGame() {
    gameIsRunning = true;
    respawn();//создали змейку
    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 200);
}



function respawn() {

var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
// Тело змейки
var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');
snake.push(snake_head);
snake.push(snake_tail);
}
/*
Движение змейки
*/
function move() {
    // console.log('move', direction);
    
    // Сборка классов
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');
    
    // Сдвиг головы
    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);
    
    // Определяем новую точку
    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + coord_y + '-' + (coord_x - 1))[0];
    } else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + coord_y + '-' + (coord_x + 1))[0];
    } else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + coord_x)[0];
    } else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + coord_x)[0];
    }

    // Проверки
    // 1) new_unit не часть змейки
    // 2) Змейка не ушла за границу поля
    // console.log(new_unit);
    if (!isSnakeUnit(new_unit) && new_unit !== undefined) {
        // Добавление новой части змейки
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);
        
        // Проверяем, надо ли убрать хвост
        if (!haveFood(new_unit)) {
            // Находим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');
            
            // Удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    } else {
        finishTheGame();
    }
}
/*
Проверка на змейку
@param unit
@returns {boolean}
*/
function isSnakeUnit(unit) {
    var check = false;
    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

/*
Проверка на еду
@param unit
@returns {boolean}
*/
function haveFood(unit) {
    var check = false;
    var unit_classes = unit.getAttribute('class').split(' ');
    
    // Если еда
    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood(); // Создаем новую еду
        score++;      // Увеличиваем счет
    }
    
    return check;
}

function createFood() {
    var foodCreated = false;
    
    while (!foodCreated) {
        // Генерация случайных координат для еды
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);
        
        // Получаем ячейку с этими координатами
        var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        var food_cell_classes = food_cell.getAttribute('class').split(' ');

        // Проверка, что еда не появляется на змейке
        if (!food_cell_classes.includes('snake-unit')) {
            var classes = '';
            for (var i = 0; i < food_cell_classes.length; i++){
                classes += food_cell_classes[i] + ' ';
            }
            food_cell.setAttribute('class', food_cell.getAttribute('class') + ' food-unit');
            foodCreated = true;
        }
    }
}

function changeDirection(e) {
    console.log(e);
    switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-';
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+';
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+';
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-';
            }
            break;
    }
}
/*
Функция завершения игры
*/
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

/*
Новая игра
*/
function refreshGame() {
    location.reload();
}

// Инициализация
window.onload = init;













