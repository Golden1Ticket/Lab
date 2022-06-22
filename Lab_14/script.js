//Task 1
function calcRectangleArea(height, width) {
    try {
        if (typeof width != 'number' || typeof height != 'number') {
            throw new Error('Ви ввели неправильний тип даних');
        }
        let area = height * width;
        return area;
    } catch (exeption) {
        return exeption.message;
    }
}

console.log(calcRectangleArea(undefined, null));

//Task 2
function checkAge() {
    let age = prompt('Введіть Ваш вік: ');
    if (age == null) {
        throw new Error("Ваше поле пусте, будь ласка введіть ваш вік!");
    } else if (age !== "number") {
        throw new Error("Неправильний тип данних!");
    } else if (age < 14) {
        throw new Error("Ти занадто малий!");
    }
    alert("Ви можете переглянути фільм!");
}

try {
    checkAge();
} catch (exeption) {
    alert(exeption.message);
}

//Task 3
function showUser(id) {
    if (id < 0) {
        throw new Error('ID не може бути від`ємним!');
    }
    console.log({id: id});
}

function showUsers(ids) {
    let userIds = [];
    for (const id of ids) {
        try {
            showUser(id);
            userIds.push(id);
        } catch (exeption) {
            console.log(exeption.message);
        }
    }
    return userIds;
}

showUsers([1, -2, 5, -91]);

//Task 4
showMonthName = (month) => {
    let monthName = '';
    switch (month) {
        case 1:
            monthName = 'Січень';
            break;
        case 2:
            monthName = 'Лютий';
            break;
        case 3:
            monthName = 'Березень';
            break;
        case 4:
            monthName = 'Квітень';
            break;
        case 5:
            monthName = 'Травень';
            break;
        case 6:
            monthName = 'Червень';
            break;
        case 7:
            monthName = 'Липень';
            break;
        case 8:
            monthName = 'Серпень';
            break;
        case 9:
            monthName = 'Вересень';
            break;
        case 10:
            monthName = 'Жовтень';
            break;
        case 11:
            monthName = 'Листопад';
            break;
        case 12:
            monthName = 'Грудень';
            break;
        default:
            throw new Error('Введено неправильний номер місяця!');
    }
    return monthName;
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (exeption) {
    console.log(exeption.message);
}