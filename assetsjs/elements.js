class SharedNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="navdiv">
            <img class="logo" src="/images/alpacaCoding.png" alt="logo.png">
            <ul>
                <li><a href="#">About Me</a></li>
                <li><a href="../html/projects.html">Projects</a></li>
                <li><a href="../html/education.html">Education</a></li>
                <li><a href="../html/fun.html">Fun</a></li>
            </ul>
        </div>
        `
    }
}

customElements.define('shared-navbar', SharedNavbar)


