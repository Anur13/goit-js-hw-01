const credits = 23580
const pricePerDroid = 3000
const message = prompt(`How many droids does one want?`)
const totalPrice = Number(message) * pricePerDroid

if (message === null) {
    console.log(`Отменено пользователем!`)
} else if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету!`)
} else {
    console.log(`Вы купили ${message} дроидов, на счету осталось ${credits - totalPrice}  кредитов.`)
}
