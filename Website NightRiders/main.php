<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['Name'];
    $email = $_POST['Email'];
    $modelo = $_POST['Bikemodel'];
    $registomota = $_POST['Bikeregist'];
    $mensagem = str_replace(array("\r", "\n"), ' ', $_POST['Message']);

    $linha = "Nome: $nome | Email: $email | Modelo: $modelo | Matricula da Mota: $registomota | Mensagem: $mensagem\n";

    file_put_contents("dados.txt", $linha, FILE_APPEND);

    echo "Dados guardados com sucesso!";
}
?>
