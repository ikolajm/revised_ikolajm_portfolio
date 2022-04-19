const workThreshold = [.50];
for (let i = .51; i <= 1; i += .01) {
    workThreshold.push(i);
    i += .01;
    i = Number(i.toFixed(2))
}
const workSwitch = () => {
    const list = document.querySelector('.experience__details nav ul');
    const buttons = document.querySelector('.experience__details nav .experience-button-container');
    // Check the width
    if (window.innerWidth <= 768) {
        // If the width is small, fade in the buttons
        buttons?.setAttribute("style", "top:0px; opacity:1 !important;")
    } else {
        // Fade in the list
        list?.setAttribute("style", "opacity:1 !important;")
    }
    setTimeout(() => {
        swapExperience('efa')
    }, 300)
    workObserver.disconnect();
}
let workObserver = new IntersectionObserver(entries =>  {
    const title = document.querySelector('.work .work-content h1')
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if(entries[0].intersectionRatio >  0) {
        title?.setAttribute("style", "left:0px !important; opacity:1 !important;")
        workSwitch();
    }
}, { threshold: workThreshold });
export const externalWorkObserver = () => {
    const workContainer = document.querySelector('.work');
    workObserver.observe(workContainer!);
    workNavResizeFix();
}

const workNavResizeFix = () => {
    window.addEventListener('resize', () => {
        // If the window is resized check classes
        const list = document.querySelector('.experience__details nav ul');
        const buttons = document.querySelector('.experience__details nav .experience-button-container');
        const width = window.innerWidth;
        if (width <= 768) {
            buttons?.setAttribute("style", "opacity:1 !important;")
        } else {
            list?.setAttribute("style", "opacity:1 !important;")
        }
    });
}

let currentExperience = "";
export const swapExperience = (newExp: string) => {
    if (newExp === currentExperience) return;
    currentExperience = newExp;
    const all = document.querySelectorAll(".experience-list-item");
    const one = document.querySelector("#efa-li")
    const two = document.querySelector("#propelup-li")
    const three = document.querySelector("#freelance-li")
    const four = document.querySelector("#spectrum-li");
    const container = document.querySelector(".jobs-container");

    all.forEach(el => el.classList.remove("active"));
    container?.classList.remove("visible");

    // Wait for animation to near completion, begin new animations
    setTimeout(() => {
        switch(newExp) {
            case "efa":
                one?.classList.add("active");
                break;
            case "propelup":
                two?.classList.add("active");
                break;
            case "freelance":
                three?.classList.add("active");
                break;
            default:
                four?.classList.add("active");
        }
    }, 300)
    swapDescription(newExp);
}

const swapDescription = (newExp: string) => {
    const all = document.querySelectorAll(".job-container");
    const one = document.querySelector("#efa-desc")
    const two = document.querySelector("#propelup-desc")
    const three = document.querySelector("#freelance-desc")
    const four = document.querySelector("#spectrum-desc")
    const container = document.querySelector(".jobs-container");
    const text = document.querySelector("#position-indicator");

    all.forEach(el => el.classList.remove("active"));

    let currentPosition;
    setTimeout(() => {
        switch(newExp) {
            case "efa":
                one?.classList.add("active");
                currentPosition = 1;
                text!.innerHTML = `${currentPosition}/3`;
                break;
            case "propelup":
                two?.classList.add("active");
                currentPosition = 2;
                text!.innerHTML = `${currentPosition}/3`;
                break;
            case "freelance":
                three?.classList.add("active");
                currentPosition = 3;
                text!.innerHTML = `${currentPosition}/3`;
                break;
            default:
                four?.classList.add("active");
                currentPosition = 4;
                text!.innerHTML = `${currentPosition}/3`;
        }
        container?.classList.add("visible");
    }, 300)
}

let currentPosition = 1;
export const shiftJob = (direction: string) => {
    const leftBtn = document.querySelector("#left-btn");
    const rightBtn = document.querySelector("#right-btn");
    const all = [leftBtn, rightBtn];
    const text = document.querySelector("#position-indicator");
    let toSend = "";

    all.forEach((element: any) => element.disabled = false);
    if (direction === 'left' && currentPosition !== 1) {
        currentPosition--;
        text!.innerHTML = `${currentPosition}/4`;
    }
    if (direction === 'right' && currentPosition !== 4) {
        currentPosition++;
        text!.innerHTML = `${currentPosition}/3`;
    }

    switch(currentPosition) {
        case 1:
            toSend = 'efa';
            break;
        case 2:
            toSend = 'propelup';
            break;
        case 3:
            toSend = 'freelance';
            break;
        default:
            toSend = 'spectrum';
    }

    swapExperience(toSend);
}