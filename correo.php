<?php
    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){

            $nombre=$_POST['nombre'];
            $email=$_POST['email'];
            $asunto="Consulta desde web photography";
            $msg="Nombre: ".$nombre."\n".$_POST['msg'];
            $header="From: ".$email."\r\n";
            $header.="Reply-To: noreply@example.com"."\r\n";
            $header.="X-Mailer: PHP/".phpversion();
            $tuCasilla="erikawelschen91@gmail.com";
            $mail=mail($tuCasilla,$asunto,$msg,$header);
            if($mail){
                echo "<script>
                        alert('Gracias por tu contacto! en breve me voy a estar comunicando');
                        window.location='index.html'
                        </script>";
            }else{
                echo "<script>
                        alert('No se ha podido enviar su consulta, intente nuevamente por favor');
                        window.location='index.html'
                        </script>";
            }
        }
        else{
            echo "<script>
            alert('Error, hay datos por llenar');
                    window.location='index.html'
                  </script>"; 
        }
    }  
?>