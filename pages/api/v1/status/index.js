function status(request, response) {
  response.status(200).json({ chave: "teste de api com o status code 200" });
}

export default status;
