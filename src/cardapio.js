let itensCardapio = [
  { nome: 'Café', preco: '8,00', descricao: 'Café Especial' },
];

for (let itemCardapio of itensCardapio) {
  let itensCardapioTBody = document.getElementById('itensCardapioTBody');
  let itemCardapioTr = `<tr>
    <th scope="row">1</th>
    <td>${itemCardapio.nome}</td>
    <td>${itemCardapio.preco}</td>
    <td>${itemCardapio.descricao}</td>
  </tr>`;

  itensCardapioTBody.insertAdjacentHTML('beforeend', itemCardapioTr);
  console.log(itemCardapioTr);
}

const handleSubmit = (event) => {
  event.preventDefault();
  // let nomeInput = document.getElementById('nome');
  // let nome = nomeInput.value;
  // let precoInput = document.getElementById('preco');
  // let preco = precoInput.value;
  // let descricaoInput = document.getElementById('descricao');
  // let descricao = descricaoInput.value;
  // let itemCardapio = new Cardapio();
  // let itemCardapio = { nome: nome, preco: preco, descricao: descricao };

  // Dados do formulário -> criação do objeto.
  let cardapioForm = document.getElementById('itemCadastrarForm');
  let cardapioFormData = new FormData(cardapioForm);
  let itemCardapio = Object.fromEntries(cardapioFormData);

  // Adicionam o valor no localstorage.
  itensCardapio.push(itemCardapio);
  localStorage.setItem('itensCardapio', JSON.stringify(itensCardapio));

  // Fechar o modal.
  $('#cardapioModal').modal('toggle');

  // Toastify({
  //   text: 'This is a toast',
  //   duration: 3000,
  //   destination: 'https://github.com/apvarun/toastify-js',
  //   newWindow: true,
  //   close: true,
  //   gravity: 'top', // `top` or `bottom`
  //   position: 'left', // `left`, `center` or `right`
  //   stopOnFocus: true, // Prevents dismissing of toast on hover
  //   style: {
  //     background: 'linear-gradient(to right, #00b09b, #96c93d)',
  //   },
  //   onClick: function () {}, // Callback after click
  // }).showToast();
};

let itemCadastrarForm = document.getElementById('itemCadastrarForm');
itemCadastrarForm.onsubmit = handleSubmit;
// itemCadastrarForm.addEventListener('submit', handleSubmit);
