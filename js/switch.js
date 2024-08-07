alert("hello");
let age = prompt("введите ваш возраст");
age != null ? alert(`Ваш возраст ${age}`) : alert(`Вы нажали отмена`);
confirm("Удалить ваш аккаунт?") ? alert("удалено") : alert("Отменено");

switch (true) {
  case age > 18:
    alert("Мне больше 18 лет");
    break;
  case age < 18:
    alert("Мне меньше 18 лет");
    break;
  default:
    alert("Мне 18 лет");
}
