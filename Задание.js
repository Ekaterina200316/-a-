let age = prompt('Введите Ваш возраст');
if (age <= 1) {
    alert("младенец");
} else if (age >= 1 && age <= 11) {
    alert("ребёнок");
} else if (age >= 12 && age <= 15) {
    alert("подросток");
} else if (age >= 16 && age <= 26) {
    alert("юноша");
} else if (age >= 26 && age <= 70) {
    alert("мужчина");
} else if (age >= 70) {
    alert("старик")
}

