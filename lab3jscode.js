const textColor = document.querySelector("#textColor");
const backgroundColor = document.querySelector("#backgroundColor");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
	setCookie("textColorCookie", textColor.value, 7);
	setCookie("backgroundColorCookie", backgroundColor.value, 7);
});
cookieBtn.addEventListener("click", () => {
	textColor.value = getCookie("textColorCookie");
	backgroundColor.value = getCookie("backgroundColorCookie");
});

//Set a Cookie//

function setCookie(cookieName,cookieValue,expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays*24*60*60*1000));
    let expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

//Get a Cookie//

function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changeColor() {
}