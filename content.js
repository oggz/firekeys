console.log('Firekeese are active!');

var firekeese = document.createElement('div');
firekeese.id = "firekeese";
firekeese.style.position = "fixed";
firekeese.style.height = "1%";
firekeese.style.width = "100%";
firekeese.style.top = "0";
// firekeese.style.background = "#000000";
firekeese.style.zIndex = '99999999';
firekeese.style.display = 'block';

var fklist = document.createElement('ul');
fklist.id = "fklist";
firekeese.appendChild(fklist);

let body = document.getElementsByTagName('html')[0];
body.appendChild(firekeese);

document.onkeydown = parsekey;

function parsekey(event) {
    var LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    switch(event.key) {
    case "t":
        console.log(tabs);
        break;
    case "ArrowUp":
        console.log(event);
        break;
    case "ArrowDown":
        console.log(event);
        break;
    case "ArrowRight":
        console.log(event);
        break;
    case "ArrowLeft":
        console.log(event);
        break;
    case "Escape":
        fklist.innerHTML = "";
        tabs = [];
        break;
    };
};

var tabs;

browser.runtime.onMessage.addListener(request => {
    console.log('message recieved');
    tabs = request.tabs
    for (var tab in tabs) {
        var tabTitle = tabs[tab].title;
        console.log(tabTitle);

        var li = document.createElement('li');
        li.textContent = tab + " - " + tabTitle;
        // li.style.color = "#ffffff";
        fklist.appendChild(li);
    }
    // return Promise.resolve({response: "OK"});
});
