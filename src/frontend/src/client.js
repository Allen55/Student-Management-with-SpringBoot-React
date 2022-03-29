import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok){
        return response;
    }
    const error = new Error(response.statusText);
    error.reponse = response;
    return Promise.reject(error);
}

export const getAllStudents = () => {
    fetch("http://localhost:8080/api/v1/students")
        .then(checkStatus);
}