const elem = (tags)=>{
  return document.querySelector(tags)
}

btn = elem('#btn');
nameInput = elem('#txtName');
jobInput = elem('#txtJob');

const submitForm = (el)=>{
  el.preventDefault();

  let dados = {
    name: nameInput.value,
    job: jobInput.value
  }

  let options = {
    method: 'POST',
    body: JSON.stringify(dados)
  }

  fetch('https://reqres.in/api/users', options)
    .then(response => response.json())
    .then(response => {
      alert(`${nameInput.value} cadastrado com sucesso!!`)
      nameInput.value = ''
      jobInput.value = ''
    })
    .catch(error => console.log(error))
}

btn.addEventListener('click', submitForm)
