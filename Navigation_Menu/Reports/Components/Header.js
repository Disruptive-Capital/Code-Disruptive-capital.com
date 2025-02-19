class dcHeader extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch('/Navigation_Menu/Main_Header');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const headerContent = await response.text();
            this.innerHTML = headerContent;

            // Execute any scripts in the fetched HTML
            const scripts = this.getElementsByTagName('script');
            for (let script of scripts) {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    }
}

customElements.define('dc-header', dcHeader);