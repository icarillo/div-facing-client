(() => {
    const Box = function (boxEl) {
        const bx = this;
        bx.el = boxEl;

        bx.setProprieties = () => {
            bx.getPos();
            bx.width = bx.el.offsetWidth;
            bx.height = bx.el.offsetHeight;
            bx.centerX = bx.pos.left + (bx.width/2);
            bx.centerY = bx.pos.top + (bx.height/2);
        };

        bx.getPos = () => {
            bx.pos = bx.el.getBoundingClientRect();
        }

        bx.el.addEventListener("mousemove", e => {
            bx.setProprieties();
            const maxDeg = 35;
            const cursorXrelat = (e.clientX - bx.centerX)/(bx.width/2);
            const cursorYrelat = (e.clientY - bx.centerY)/(bx.height/2);
            const yRot = cursorXrelat*maxDeg;
            const xRot = -cursorYrelat*maxDeg;
            bx.el.firstElementChild.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
        });
        bx.el.addEventListener("touchmove", e => {
            bx.setProprieties();
            const maxDeg = 35;
            const cursorXrelat = (e.touches[0].clientX - bx.centerX)/(bx.width/2);
            const cursorYrelat = (e.touches[0].clientY - bx.centerY)/(bx.height/2);
            const yRot = cursorXrelat*maxDeg;
            const xRot = -cursorYrelat*maxDeg;
            bx.el.firstElementChild.style.transform = `perspective(1000px) rotateX(${xRot}deg) rotateY(${yRot}deg)`;
        });
        bx.el.addEventListener("mouseleave", () => {
            bx.el.firstElementChild.style.transform ='perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
        bx.el.addEventListener("touchend", () => {
            bx.el.firstElementChild.style.transform ='perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });

    };

    const boxes = document.querySelectorAll(".facing");
    boxes.forEach( box => {
        const oBox = new Box(box);
        oBox.setProprieties();
        window.addEventListener("resize", () => {
            oBox.setProprieties();
        });
    });
})();