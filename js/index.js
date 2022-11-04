const nav = document.querySelector("#nav");
const workspace = document.querySelector("#workspace");
const items = document.querySelectorAll(".nav-item")



const selectItem = page => {

    items.forEach(item => {
        if(item.textContent === page) {
            if(!item.classList.contains('selected')) {
                item.classList.add('selected')
            }
        } else {
            if(item.classList.contains('selected')) {
                item.classList.remove('selected')
            }
        }
    })

}
const buildPage = page => {
    if(page === 'Home') {

        workspace.innerHTML = `
        <section id="home">
             <img src="https://media1.popsugar-assets.com/files/thumbor/WKtUknaQaTiKyXhcRc3h-HD0BcQ/0x73:1640x1713/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/26/002/n/1922398/03e845f35f9755e6aa1b97.06354587_/i/Nicolas-Cage.jpg" alt="Nicolas Cage" class="image">

            <p class="phrase">"Hi, my name is Nick. I am passionate about what I do and I have infinite skills in the arts of God. You can recognize me as an unstopabble force of nature and it is a fact that I should be put in jail for being so awesome."</p>
        </section>
        `
    } else if(page === "Projects") {
        workspace.innerHTML = `
        <section id="projects">
            <a href="https://stupefied-raman-bae026.netlify.app/" target="_blank"><img src="./img/site.png" alt="My website" class="site-img"></a>
                

            <p class="phrase">Check out my best css project so far. I made it using Sass and tried to make everything fit nicely.
                You can also check it on <a href="https://github.com/unknowndude36/piup" target="_blank">GitHub</a>
            </p>
        </section>
        `
    } else {
        workspace.innerHTML = `
        <section id="contact" class="nope">
                
            <h2>Contact me:</h2>
        
            <form action="" class="contact-form">
                <input type="text" placeholder="Name">
                <input type="email" placeholder="Email">
                <textarea name="message" id="message">You're awesome!</textarea>
                <button type="submit" class="btn submit-btn">Send</button>

            </form>
        </section>
        `
    }
}

const getName = e => {

    const name = e.target.textContent;

    switch(name) {
        case "Home":
            selectItem(name)
            buildPage(name);
            break;
        case "Projects":
            selectItem(name)
            buildPage(name);
            break;
        case "Contact":
            selectItem(name)
            buildPage(name);
            break;      
    }


}


nav.addEventListener('click', getName)