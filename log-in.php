<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <title>Log-In</title>

</head>

<body>
  <section class="container">

    <div class="container__filho-logo">
      <a href="/"><h1>Cappuccinododev</h1></a>
    </div>

    <div class="container__filho-login">
      <h2>Bem Vindo</h2>
      <p>Porfavor coloque suas credencias para entrar</p>
      <form action="teste.php" method="POST" id="form">
        <input type="text" placeholder="E-mail" name="email">
        <input id="senha" type="password" placeholder="Senha" name="senha">
        <a href="#">esqueceu a senha?</a>
        <button id="btn" type="submit" name="submit" onclick="window.location.href='index.html'">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="cadastre-se.php">Cria a sua conta!</a></p>
    </div>

  </section>
<script src="app/login.js"></script>
</body>

</html>