class SharedNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div class="navdiv">
            <a href="/index.html"><img class="logo" src="/images/alpacaCoding.png" alt="logo.png"></a>
            <ul>
                <li><a href="/index.html">About Me</a></li>
                <li><a href="../html/projects.html">Projects</a></li>
                <li><a href="../html/education.html">Education</a></li>
                <li><a href="../html/fun.html">Fun</a></li>
            </ul>
        </div>
        `
    }
}

customElements.define('shared-navbar', SharedNavbar)


