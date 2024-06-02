document.addEventListener('DOMContentLoaded', function() {
    function checkScreenWidth() {
        const screenWidth = window.innerWidth;
        const postHeader = document.querySelector('.post-header');
        const profile = document.querySelector('.profiles');
        const header = document.querySelector('.header');
        const joins = document.querySelector('.joins');

        postHeader.style.display = screenWidth < 980 ? 'none' : 'flex';
        profile.style.display = screenWidth < 980 ? 'none' : 'block';
        header.style.display = screenWidth < 870 ? 'none' : 'flex';
        joins.style.display = screenWidth < 870 ? 'flex' : 'none';
    }

    function handleShowSignup() {
        const signup = document.querySelector('.signup-container');
        signup.style.display = 'flex';
    }

    function handleSignup() {
        const rlogin = document.querySelector('.rlogin');
        const login = document.querySelector('.login');
        const sign = document.querySelector('.signs');
        const rsign = document.querySelector('.rsigns');
        
        if (login.style.display === 'flex' || rlogin.style.display === 'flex'){
            rlogin.style.display = 'none';
            login.style.display = 'none';
            sign.style.display = 'flex';
            rsign.style.display = 'flex';
        } else {
            sign.style.display = 'flex';
            rsign.style.display = 'flex';
        }
    }       

    function handleLogin(){
        const sign = document.querySelector('.signs');
        const login = document.querySelector('.login');
        const rsign = document.querySelector('.rsigns');
        const rlogin = document.querySelector('.rlogin');

        if (sign.style.display === 'flex' || rsign.style.display === 'flex'){
            sign.style.display = 'none';
            rsign.style.display = 'none';
            login.style.display = 'flex';
            rlogin.style.display = 'flex';
        } else {
            login.style.display = 'flex';
            rlogin.style.display = 'flex';
        }
    }

    function handleTimes(){
        const signup = document.querySelector('.signup-container');
        signup.style.display = 'none';
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    window.handleShowSignup = handleShowSignup;
    window.handleSignup = handleSignup;
    window.handleLogin = handleLogin;
    window.handleTimes = handleTimes;
});
