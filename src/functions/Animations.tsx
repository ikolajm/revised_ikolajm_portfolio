export const animNavbar = () => {
    const nav = document.querySelector('#nav');
    nav?.classList.add('animated');
}

export const animateSplashContent = () => {
    const image = document.querySelector('.splash-image-container');
    const text = document.querySelector('.splash-text');
    // Wait for the nav to come down
    setTimeout(() => {
        if (window.innerWidth <= 768) {
            image?.classList.add('animated-s');
            text?.classList.add('animated-s');
        } else {
            image?.classList.add('animated-l');
            text?.classList.add('animated-l');
        }
    }, 1500)
}