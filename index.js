const responses = [
  "Tudo leva a crer que sim!",
  "Com certeza. Precisa perguntar?",
  "Claramente, não. Não, não e não.",
  "Claro, pode apostar nisso.",
  "Essa foi fácil: SIIIIIIM",
  "Minhas fontes dizem que não.",
  "Não conte com isso."
]

function handleQuestionResolve() {
  const numberResponse = Math.floor(Math.random() * responses.length)
  const inputQuestion = question.value

  if (inputQuestion.length == 0) {
    response.innerHTML = `
      <p><strong>Não vai fazer pergunta?</strong></p>
      <p>Fica sem resposta...</p>
    `
  } else {
    question.value = ""
    response.innerHTML = `
      <p><strong>${inputQuestion}</strong></p>
      <p>${responses[numberResponse]}</p>
    `

    setTimeout(() => {
      response.innerHTML = `      
        <p>Vamos lá, manda outra.</p>
        <p>Quero uma mais complicada.</p>
      `
    }, 3000)
  }
}