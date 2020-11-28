const ADMIN_PASSWORD = 'asd';
let message;

   const password = prompt(`Укажите пароль`);
if (password === ADMIN_PASSWORD) {
    message = `Добро пожаловать`
} else if (mes === null) {
    message = `Отмененно пользователем`
} else {
    message = `Доступ запрещен, неверный пароль!`
}

alert(message)
