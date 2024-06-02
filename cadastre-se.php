<?php

if(isset($_POST['submit'])) {
  include_once('conexao.php');

  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $cpf = $_POST['cpf'];
  $telefone = $_POST['telefone'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];

 

  $result = mysqli_query($mysqli, "INSERT INTO cadastro (nome, sobrenome, cpf, telefone, email, senha) VALUES ('$nome','$sobrenome','$cpf','$telefone','$email','$senha')");
  
  header("LOCATION: log-in.php");
}


?>

<!DOCTYPE html>




<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
        integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Cadastre-se</title>
</head>

<body>
    <section class="container">

        <div class="container__filho-logo">
            <a href="/">
                <h1>Cappuccinododev</h1>
            </a>
        </div>

        <div class="container__filho-login">
            <h2>Bem Vindo</h2>
            <p>Por favor coloque suas credencias para se cadastrar</p>
            <form id="form" action="cadastre-se.php" method="POST">
                <input id="fnome" type="text" name="nome" placeholder="Nome">
                <input id="fsobrenome" type="text" name="sobrenome" placeholder="Sobrenome">
                <input id="fcpf" type="numeric" name="cpf" placeholder="CPF">
                <input id="fcelular" type="tel" name="telefone" placeholder="Telefone">
                <p>Crie seu login</p>
                <input type="text" name="email" placeholder="E-mail">
                <input id="fsenha" type="password" name="senha" placeholder="Senha">
                <input id="fconfsenha" type="password" placeholder="Repita a senha">
                <button id="fbtn" name="submit" type="submit">criar</button> 
            </form>
        </div>

    </section>
    <script src="app/cadastro.js"></script>
</body>

</html>