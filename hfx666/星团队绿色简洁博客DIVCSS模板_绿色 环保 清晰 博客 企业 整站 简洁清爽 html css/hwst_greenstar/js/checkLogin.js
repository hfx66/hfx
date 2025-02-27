function checkLoginStatus() {
    // 检查是否已登录
    if (!localStorage.getItem('isLoggedIn')) {
        // 如果未登录，重定向到登录页
        window.location.href = 'login.html';
        return;
    }

    // 显示用户名
    const usernameElement = document.getElementById('username');
    if (usernameElement) {
        const username = localStorage.getItem('username') || 'admin';
        usernameElement.textContent = username;
    }
}

function logout() {
    // 清除所有登录信息
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('isLoggedIn');
    // 跳转到登录页
    window.location.href = 'login.html';
}

// 页面加载时检查登录状态
window.onload = function() {
    checkLoginStatus();
    
    // 检查是否显示欢迎消息
    if(sessionStorage.getItem('isLoggedIn') === 'true') {
        const welcomeBanner = document.getElementById('welcomeBanner');
        const welcomeUsername = document.getElementById('welcomeUsername');
        const username = localStorage.getItem('username') || 'admin';
        
        welcomeUsername.textContent = username;
        welcomeBanner.style.display = 'block';
        welcomeBanner.classList.add('fade-in');
        
        // 3秒后隐藏欢迎横幅
        setTimeout(() => {
            welcomeBanner.style.display = 'none';
            sessionStorage.removeItem('isLoggedIn');
        }, 3000);
    }
}; 