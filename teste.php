<?PHP 

session_start();

include('conexao.php') ;

if(isset($_POST['email']) || isset($_POST['senha'])) {

    if(strlen($_POST['email']) == 0) {
      echo'Preencha seu email';
    } else if(strlen($_POST['senha']) == 0) {
      echo'prenncha sua senha';
    } else {

      $email = $mysqli->real_escape_string($_POST['email']);
      $senha = $mysqli->real_escape_string($_POST['senha']);

      $sql_code = "SELECT * FROM cadastro where email = '$email' AND senha = '$senha'";
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