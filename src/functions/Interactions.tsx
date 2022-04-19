export const toggleMobileMenu = () => {
    const body = document.querySelector('body');
    const iconContainer  = document.querySelector('.toggle-container');
    const hamburger = document.querySelector('.hamburger');
    const close = document.querySelector('.close');
    const mobileMenu = document.querySelector('#mobile-menu');
    const mobileMenuLinks = mobileMenu?.querySelector('ul');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const splashContent = document.querySelector('.splash-content');

    if (mobileMenu?.classList.contains("visible")) {
        // Menu is already open, close it
            // Fade out the toggler icon + the container
            close?.classList.remove('visible');
            iconContainer?.classList.remove('visible');
            // Remove links
            mobileMenuLinks?.classList.remove('visible');
            setTimeout(() => {
                mobileMenu?.classList.remove('visible');
            }, 100)
            // Remove the mobile overlay
            setTimeout(() => {
                mobileOverlay?.classList.remove('visible'); // 500ms
            }, 300) 
            // Pull in the icon
            setTimeout(() => {
                iconContainer?.classList.add('visible');
                hamburger?.classList.add('visible');
            }, 800) // wait 500ms + 300ms
            // Fade in content, unlock the scroll
            setTimeout(() => {
                splashContent?.classList.remove('fadeout');
                body?.classList.remove('overflow')
            }, 1100) // wait 500ms + 300ms + 300ms
        } else {
        // Menu is already closed,open it
            // Lock the users scroll to the top of the body
            body?.classList.add('overflow')
            // Fade out splash content
            splashContent?.classList.add('fadeout')
            // Fade out the toggler icon + the container
            hamburger?.classList.remove('visible');
            iconContainer?.classList.remove('visible'); // 300ms
            // Pull in the mobile overlay
            setTimeout(() => {
                mobileOverlay?.classList.add('visible'); // 500ms
            }, 300)
            // Pull in the icon
            setTimeout(() => {
                iconContainer?.classList.add('visible');
                close?.classList.add('visible');
            }, 800) // wait 500ms + 300ms
            // Pull in links
            setTimeout(() => {
                mobileMenu?.classList.add('visible');
            }, 1100) // wait 500ms + 300ms + 300ms
            setTimeout(() => {
                mobileMenuLinks?.classList.add('visible');
            }, 1200) // wait 500ms + 300ms + 300ms + 100ms
    }
}

const callbackScrollTo = (section: any) => {
    section.scrollIntoView();
}
// On navigation link click, send to that section of the site
export const mainNavClick = (link: string) => {
    let hash = `#${link}`;
    let section = document.querySelector(hash);

    if (window.innerWidth <= 550) {
        toggleMobileMenu()
        setTimeout(() => {
            callbackScrollTo(section);
        }, 1000)
    } else {
        section?.scrollIntoView();
    }
}

export const splashNavClick = () => {
    let hash = '#about';
    let section = document.querySelector(hash);
    callbackScrollTo(section);
}

export const splashContentResizeFix = () => {
    window.addEventListener('resize', () => {
        // If the window is resized check classes
        const image = document.querySelector('.splash-image-container');
        const text = document.querySelector('.splash-text');
        const width = window.innerWidth;
        // If class is large, is screen still large
        if (image?.classList.contains('animated-l')) {
            // If not, need to compensate for lost classes
            if (width <= 768) {
                image.setAttribute("style", "top:0px; left: 0px; opacity:1 !important;")
                text?.setAttribute("style", "top:0px; left: 0px; opacity:1;")
            }
        } else {
            // Small class, check if screen is small
            if (image?.classList.contains('animated-s')) {
                // If not, need to compensate for lost classes
                if (width <= 768) {
                    // Give image
                    image.setAttribute("style", "top:0px; left: 0px; opacity:1 !important;")
                    text?.setAttribute("style", "top:0px; left: 0px; opacity:1 !important;")
                }
            }
        }
    });
}

const aboutThreshold = [.50];
export const aboutObserver = () => {
    const aboutContainer = document.querySelector('.about');
    const title = document.querySelector('.about-content h1');
    const card = document.querySelector('.about-text');
    let expObserver = new IntersectionObserver(entries =>  {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].intersectionRatio >  0) {
            title?.setAttribute("style", "left:0px !important; opacity:1 !important;")
            card?.setAttribute("style", "top:0px !important; opacity:1 !important;")
        }
    }, { threshold: aboutThreshold });
    expObserver.observe(aboutContainer!);
}

const toolThreshold = [.50];
export const toolObserver = () => {
    const toolContainer = document.querySelector('.toolkit');
    const title = document.querySelector('.toolkit-content h1');
    const card = document.querySelector('.icon-row');
    const icons = document.querySelectorAll('.icon-row .icon');
    console.log(title, card)
    let toolObserver = new IntersectionObserver(entries =>  {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].intersectionRatio >  0) {
            title?.setAttribute("style", "left:0px !important; opacity:1 !important;")
            card?.classList.add('visible');
            setTimeout(() =>  {
                icons.forEach(icon => {
                    icon?.classList.add('visible');
                })
            }, 300)
        }
    }, { threshold: toolThreshold });
    toolObserver.observe(toolContainer!);
}

const repoThreshold = [.50];
export const repoObserver = () => {
    const firstRepoContainer = document.querySelector('.repos .project-card-container');
    const title = document.querySelector('.repos .title');
    const cards = document.querySelectorAll('.repo-row .project-card');
    let repoObserver = new IntersectionObserver(entries =>  {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].intersectionRatio >  0) {
            title?.setAttribute("style", "left:0px !important; opacity:1 !important;")
            cards.forEach(card => {
                card?.classList.add('visible');
            })
        }
    }, { threshold: repoThreshold });
    repoObserver.observe(firstRepoContainer!);
}

const footThreshold = [.50];
export const footObserver = () => {
    const footContainer = document.querySelector('.footer');
    let footObserver = new IntersectionObserver(entries =>  {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if(entries[0].intersectionRatio >  0){
            const l1 = document.querySelector('.layer-1');
            const l2 = document.querySelector('.layer-2');
            const l3 = document.querySelector('.layer-3');
            const all = [l1, l2, l3];
    
            all.forEach(item=> {
                item?.classList.add('active');
            })
        }
    }, { threshold: footThreshold });
    footObserver.observe(footContainer!);
}