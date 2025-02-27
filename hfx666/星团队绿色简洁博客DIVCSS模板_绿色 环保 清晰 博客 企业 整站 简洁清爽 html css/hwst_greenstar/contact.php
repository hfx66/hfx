<?php
header('Content-Type: text/html; charset=UTF-8');

if(!$_POST) exit;

$email = $_POST['email'];

// 验证邮箱格式
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $error = "邮箱地址格式不正确";
    $errors = 1;
}

if($errors == 1) {
    echo $error;
} else {
    // 必填字段
    $values = array('name', 'email', 'subject', 'message');
    $required = array('name', 'email', 'subject', 'message');
     
    // 接收邮件的地址
    $your_email = "your-email@example.com"; // 请替换为您的邮箱地址
    $email_subject = "新消息: ".$_POST['subject'];
    $email_content = "新消息内容:\n\n";
    
    // 构建邮件内容
    foreach($values as $key => $value){
        if(in_array($value, $required)){
            if(empty($_POST[$value])) { 
                echo '请填写所有必填字段（标有*号的字段）'; 
                exit; 
            }
            $email_content .= ucfirst($value).": ".$_POST[$value]."\n";
        }
    }
     
    // 发送邮件
    $headers = "From: ".$_POST['email']."\r\n" .
               "Reply-To: ".$_POST['email']."\r\n" .
               "Content-Type: text/plain; charset=UTF-8\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    if(@mail($your_email, $email_subject, $email_content, $headers)) {
        echo '消息已发送！'; 
    } else {
        echo '发送失败，请稍后重试！';
    }
}
?>