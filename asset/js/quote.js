

let quote = [
    {
        pera: "it is better to have loved and lost than never to have loved at all.",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSKmq772O9Q4vmbQH0xIs_zHqzgvrMbdlt0wEtDOhvwc-Ap96CASyJ__LzAZ_hOoAtG54&usqp=CAU',
        text: 'Alfred Tennyson'
    },
    {
        pera: " Imagination is more important than knowledge ",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPZxfL-B_mmWl2rd8OiZUg0CFlcM-lLpcPA&s',
        text: 'Albert Einstein'
    },
    {
        pera: "You cannot believe in God until you believe in yourself ",
        img: 'https://rhythmartgallery.com/wp-content/uploads/2017/09/Tripurari-Singh-Portrait1-22-x-18-inches-Oil-on-canvas-487x600-1.jpg',
        text: 'Swami Vivekananda'
    },
    {
        pera: "If you want to shine like a sun, first burn like a sun. ",
        img: 'https://i.redd.it/tu73xi5i1wt91.jpg',
        text: 'A.P.J Abdul Kalam'
    },
    {
        pera: "No matters what you do some people will never like you ",
        img: 'https://i.pinimg.com/564x/ed/e1/dc/ede1dcd6ac02590b2297f1fb92b9db20.jpg',
        text: 'Thomas Shelby'
    },
    {
        pera: "The End of story the beginning of man",
        img: 'https://i.pinimg.com/236x/c7/8d/d9/c78dd9ec8e435e46f2e09fe6cdcc2c9b.jpg',
        text: 'The Berlin'
    },
    {
        pera: "Why do we fall ? So we can learn to Pick Ourselves Up ",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5kTvuA_XhgVsawZTKd_7R_FnxKOjhma2x6Q&s',
        text: 'Christian Bale'
    }
]
let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    let radomnumber = Math.floor(Math.random() * quote.length)
    

    let heading = document.getElementById('h3')
    let photo = document.getElementById('photos')
    let thought = document.getElementById('p')
    let value = quote[radomnumber].pera
    let imges = quote[radomnumber].img
    let thoughttext = quote[radomnumber].text


    heading.textContent = value
    photo.src = imges
    thought.textContent = thoughttext
})

