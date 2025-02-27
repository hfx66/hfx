function checkRegistration() {
    // 如果未注册，跳转到注册页面
    if (!localStorage.getItem('registeredUsername')) {
        window.location.href = 'register.html';
        return;
    }
    
    // 如果已注册但未登录，跳转到登录页面
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }
}

window.onload = checkRegistration; 