<?php
    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){
            $nombre=$_POST['nombre'];
            $email=$_POST['email'];
            $asunto="Consulta fotografía";
            $msg="Nombre: ".$nombre."\n".$_POST['msg'];
            $header="From: ".$email."\r\n";
            $header.="Reply-To: noreply@example.com"."\r\n";
            $header.="X-Mailer: PHP/".phpversion();
            $tuCasilla="erikawelschen91@gmail.com";
            $mail=mail($tuCasilla,$asunto,$msg,$header);
                echo "<script>
                        alert('¡Gracias por tu mensaje! en breve me estaré comunicando con vos :)');
                        window.location='contacto.html'
                        </script>";
            }else{
                echo "<script>
                        alert('Hubo un problema con el envío de tu consulta, por favor prueba de nuevo más tarde');
                        window.location='contacto.html'
                        </script>";
            }
        }
        else{
            echo "<script>
            alert('Error faltan parametros');
                    window.location='contacto.html'
                  </script>"; 
        }
    }  
?>