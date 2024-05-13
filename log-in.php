<?PHP 
include('conexao.php') ;

if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
      echo'Preencha seu email';
    } else if(strlen($_POST['senha']) == 0) {
      echo'prenncha sua senha';
    } else {

      $email = $mysqli->real_escape_string($_POST['email']);
      $senha = $mysqli->real_escape_string($_POST['senha']);

      $sql_code = "SELECT * FROM usuarios where email = '$email' AND senha = '$senha'";
      $sql_query = $mysqli->query($sql_code) or die('Falha na execução' . $mysqli->error);

      $quantidade = $sql_query->num_rows;

      if($quantidade == 1) {

        $usuario = $sql_query->fetch_assoc();

        if(!isset($_SESSION)){
          session_start();
        }

        $_SESSION['id'] = $usuario['id'];
        $_SESSION['nome'] = $usuario['nome'];

        header("LOCATION: index.php");

        } else {
        echo'Falha ao logar';
      }
    }

}

?>

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
      <form action="" method="POST" id="form">
        <input type="text" placeholder="E-mail" name="email">
        <input id="senha" type="password" placeholder="Senha" name="senha">
        <a href="#">esqueceu a senha?</a>
        <button id="btn" type="submit" onclick="window.location.href='index.html'">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="cadastre-se.html">Cria a sua conta!</a></p>
    </div>

  </section>
<script src="app/login.js"></script>
</body>

</html>