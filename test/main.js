let users = ["@id509237296","@absolute_radiance","@oleg_t0","@derenesy","@maksim__grachev","@ontalex","@n1ght_cloud","@wertix_0iq","@id209578767","@maksvip21","@ekaterina6420","@snezha0111"];
let step = 1;
let stepPlus = 5;
users.forEach(user => {
    user=="@ontalex"?stepPlus++:stepPlus = 5;
    document.querySelector('body').innerText+=`${user}, твои вопросы: ${step}~${step+=stepPlus};`+"\n";
    step++;
});

/*
Доработать в виде полноценного UX/UI интерфейса, через который можно управлять пользователями построчно.
Также программа должна спрашивать количество вопросов.
Программа может работать в режиме распределения вопросов по людям.
Программа может работать в режиме случайного соотнесения вопросов и пользователей.
Программа должна выводить список пользователей и соответствующими им номерам заданий.
*/
