function onSubmit(event) {
    event.preventDefault()

    let request = new XMLHttpRequest()

    request.onreadystatechange = () => handleResponse(request)

    let formData = new FormData(event.target)

    request.open('POST', '/assets/scripts/php/create.php')
    request.send(formData)
}

function handleResponse(request) {
    if (request.readyState !== XMLHttpRequest.DONE || request.status !== 200) {
        return
    }

    let response = JSON.parse(request.responseText)

    if (!response) {
        return
    }

    updateFeedback(response)

    if (response.success) {
        document.querySelector('.create-form').reset()
    }
}

function updateFeedback(feedback) {
    let fields = document.querySelector('.create-form').querySelectorAll('input')

    for (let field of fields) {
        setFeedback(field, feedback[field.id])
    }

    document.querySelector('.feedback.success').innerHTML = feedback.success || ''
}

function setFeedback(field, feedback = null) {
    if (feedback) {
        field.classList.add('invalid')
    } else {
        field.classList.remove('invalid')
    }

    field.nextElementSibling.innerHTML = feedback || ''
}

window.onload = function() {
    document.querySelector('.create-form').addEventListener('submit', onSubmit)
}
