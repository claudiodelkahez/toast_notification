const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messeges = [
    'Messege One',
    'Messege Two',
    'Messege Three',
    'Messege Four',
    'Messege Five',
    'Messege Six',
]

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('toast')


    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()

    }, 3000)
}

function getRandomMessage() {
    return messeges[Math.floor(Math.random() * messeges.length)]
}