class SharedNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="navdiv">
            <img class="logo" src="/images/alpacaCoding.png" alt="logo.png">
            <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="../html/projects.html">Projects</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Fun</a></li>
            </ul>
        </div>
        `
    }
}

customElements.define('shared-navbar', SharedNavbar)
