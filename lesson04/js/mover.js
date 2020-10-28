let mover = {
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }

            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                if (nextPosition.x === 0 && nextPosition.y !== config.colsCount - 1) {
                    nextPosition.y++;
                    break
                } else if (nextPosition.x !== 0 && nextPosition.y === config.colsCount - 1){
                    nextPosition.x--;
                    break;
                } else if (nextPosition.x === 0 && nextPosition.y === config.colsCount - 1){
                    break;
                } else {
                    nextPosition.x--;
                    nextPosition.y++;
                    break;
                }
            case 2:
                if (nextPosition.y === config.colsCount - 1) {
                    break;
                } else {
                    nextPosition.y++;
                    break;
                }
            case 3:
                if (nextPosition.x === config.rowCount - 1 && nextPosition.y !== config.colsCount - 1) {
                    nextPosition.y++;
                    break
                } else if (nextPosition.x !== config.rowCount - 1 && nextPosition.y === config.colsCount - 1){
                    nextPosition.x++;
                    break;
                } else if (nextPosition.x === config.rowCount - 1 && nextPosition.y === config.colsCount - 1){
                    break;
                } else {
                    nextPosition.x++;
                    nextPosition.y++;
                    break;
                }
            case 4:
                if (nextPosition.x === 0) {
                    break;
                } else {
                    nextPosition.x--;
                    break;
                }
            case 6:
                if (nextPosition.x === config.rowCount - 1) {
                    break;
                } else {
                    nextPosition.x++;
                    break;
                }
            case 7:
                if (nextPosition.x === 0 && nextPosition.y !== 0) {
                    nextPosition.y--;
                    break
                } else if (nextPosition.x !== 0 && nextPosition.y === 0){
                    nextPosition.x--;
                    break;
                } else if (nextPosition.x === 0 && nextPosition.y === 0){
                    break;
                } else {
                    nextPosition.x--;
                    nextPosition.y--;
                    break;
                }

            case 8:
                if (nextPosition.y === 0) {
                    break;
                } else {
                    nextPosition.y--;
                    break;
                }
            case 9:
                if (nextPosition.x !== config.rowCount - 1 && nextPosition.y === 0) {
                    nextPosition.x++;
                    break
                } else if (nextPosition.x === config.rowCount - 1 && nextPosition.y !== 0){
                    nextPosition.y--;
                    break;
                } else if (nextPosition.x === config.rowCount - 1 && nextPosition.y === 0){
                    break;
                } else {
                    nextPosition.x++;
                    nextPosition.y--;
                    break;
                }
        }
        return nextPosition;
    }
}