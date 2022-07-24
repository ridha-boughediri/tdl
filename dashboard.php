<?php
include_once 'dbconfig.php';
if(!$user->is_loggedin())
{
 $user->redirect('index.php');
}
$user_id = $_SESSION['user_session'];
$stmt = $DB_con->prepare("SELECT * FROM users WHERE user_id=:user_id");
$stmt->execute(array(":user_id"=>$user_id));
$userRow=$stmt->fetch(PDO::FETCH_ASSOC);


?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>connexion:</title>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"> -->
<!-- <link rel="stylesheet" href="./css/style.css" type="text/css"  /> -->
<link rel="stylesheet" href="todolist.css">
<title>Dashbord - <?php print($userRow['user_email']); ?></title>

</head>
<body>

<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">TODOLIST</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <a href="logout.php?logout=true"><i class="glyphicon glyphicon-log-out"></i> Déconnexion</a>
      </li>
    </ul>
    
  </div>
</nav>  -->
<!-- 
<div class="header">
 <div class="left">
 <p>Vous etês sur votre todolist  : <?php print($userRow['user_name']); ?><br/></p>
 <p>prenom: <?php print($userRow['user_prenom']); ?><br/></p>
    </div>
    <div class="right">
    <p> mail: <?php print($userRow['user_email']); ?><br/></p>
    </div>
</div> -->

  <!-- modal -->
  <div class="modal" id="todo_form">
      <div class="header">
        <div class="title">Rajouter une tache</div>
        <button class="btn close-modal">&times;</button>
      </div>
      <div class="body">
        <input type="text" id="todo_input" />
        <input type="submit" value="Add Todo" id="todo_submit" />
      </div>
    </div>
    <!-- todo -->
    <div class="todo-container">
      <div class="status" id="no_status">
        <h1>Pas de status</h1>
        <button id="add_btn" data-target-modal="#todo_form">+ Ajout </button>
        <div class="todo" draggable="true">
        "T'as une tache, pistache !"

          <span class="close">&times;</span>
        </div>
      </div>
      <div class="status">
        <h1>Debut</h1>
      </div>
      <div class="status">
        <h1>milieu</h1>
      </div>
      <div class="status">
        <h1>Fini</h1>
      </div>
    </div>

    <div id="overlay"></div>

    <script src="test.js"></script>
    <script src="main.js"></script>

</body>
</html>