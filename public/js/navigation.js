const newmoodhandler = async (event) =>{
    event.preventDefault();
        document.location.replace('/newmood');

    }

const dashHandler = async (event) => {
    event.preventDefault();
    document.location.replace("/cards")
}

const loginhandler = async (event) =>{
    event.preventDefault();
    document.location.replace("/")
}

document
    .querySelector('#newmood')
    .addEventListener('click', newmoodhandler);


document
    .querySelector('#dash')
    .addEventListener('click', dashHandler);

document
    .querySelector('#login')
    .addEventListener('click', loginhandler);

document
    .querySelector('#signup')
    .addEventListener('click', loginhandler);