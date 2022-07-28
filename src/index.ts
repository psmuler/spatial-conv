class Helper {
    public component(): HTMLDivElement {
        const element = document.createElement('div')
        element.innerHTML = 'hello World!'
        return element
    }
}

document.body.appendChild(new Helper().component())