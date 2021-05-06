const testimonialsContainer = document.querySelector(".testimonials-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-image")
const username = document.querySelector(".username")
const role = document.querySelector(".role")

const testimonials = [
    {
        name: 'Miyah Miles',
        position: 'Marketing',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus magnam quisquam saepe explicabo minima officia nihil, dolores odit minus quia aliquam dicta ducimus blanditiis quas ex cum dolorum placeat, earum recusandae alias, sed voluptatem sint! Perspiciatis labore quod deserunt officia doloribus, fugiat id libero vero quia itaque voluptate voluptatibus facilis.',
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Quisquam, quod. Fugiat neque ducimus, temporibus illum non velit fugit. Aspernatur odio qui earum, consequatur deserunt corporis vitae suscipit molestiae blanditiis eaque, obcaecati laudantium maiores officiis dolore debitis nisi officia ea reprehenderit? Nemo quibusdam laudantium saepe ipsam quis, aperiam iste amet, ipsum dolor tenetur esse itaque minus!',
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://randomuser.me/api/portraits/women/68.jpg',
        text: 'Beatae, dolore pariatur sed, aut expedita veritatis repudiandae distinctio natus reiciendis similique animi doloribus soluta aspernatur ut facere! Odio id rerum eveniet. Id laboriosam reiciendis enim, nam illum cupiditate, laudantium voluptatem minus quod asperiores in corporis, libero quia vitae? Nostrum reiciendis nobis aliquam, ut sed quia.',
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'Mollitia labore, necessitatibus adipisci inventore reiciendis expedita fuga voluptates, minus tenetur cum facilis rem numquam quo temporibus soluta ullam ad voluptas doloremque beatae! Accusamus illum aspernatur suscipit! Exercitationem tempora quisquam error perspiciatis impedit itaque facere culpa consectetur officiis praesentium!',
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://randomuser.me/api/portraits/men/43.jpg',
        text: 'Proin ut lectus cursus, sodales lacus at, tristique metus. In a leo ac diam faucibus bibendum a id turpis. Fusce lectus justo, mollis ut consectetur vel, mollis nec nunc. Nunc ultrices ac sem sit amet semper. In tincidunt nulla convallis magna vulputate, vel egestas tortor finibus. Curabitur sem nisi, vehicula.',
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://randomuser.me/api/portraits/women/43.jpg',
        text: 'Duis eu consequat odio. Donec vel imperdiet sem, nec feugiat felis. Aliquam egestas pharetra mauris, rhoncus maximus quam luctus auctor. Aliquam erat volutpat. Ut sodales laoreet augue, dapibus hendrerit odio feugiat a. Ut posuere lectus massa, feugiat ullamcorper libero lobortis eu. Pellentesque dictum justo finibus elementum scelerisque. Class aptent taciti.',
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://randomuser.me/api/portraits/men/97.jpg',
        text: 'Suspendisse vitae quam risus. Curabitur turpis augue, posuere et pellentesque nec, hendrerit non erat. Quisque pretium varius urna, ac semper nulla euismod vitae. Maecenas ex erat, sagittis sed ultrices id, consequat non enim. Etiam tempus consequat odio, sit amet finibus nunc euismod at. Phasellus ut felis felis. Mauris id ullamcorper.',
    },
]



let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}
setInterval(updateTestimonial, 10000)