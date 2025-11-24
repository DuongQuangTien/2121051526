<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //1. Cú pháp in ra màn hình 
    echo "hello world ! <br>" ;
    
    echo  "PHP <br>";
    //2.Biến
    // Cú pháp : $ + TÊN BIẾN = GIÁ TRẠI CỦA BIẾN ;
    $ten = "Dương Tiến";
    $tuoi = 22;
    echo "xin chao". " " . $ten . " " . $tuoi . "tuổi". "<br>";
    //2.Hằng
    define("soPi","3.14 <br>");
    echo soPi."<br>";

    //4.Phân Biệt '' và ""
    echo '$ten'. "<br>";
    echo "$ ten" . "<br>";

    //5.chuỗi
    #5.1 Kiểm tra độ dài của chuỗi 
    //strlen kiểm tra độ dài 
    echo strlen($ten)."<br>";
    echo str_word_count($ten)."<br>";
    #5.3 tìm kiếm skys tự trong chuỗi 
    echo strpos($ten,"A")."<br>";
    #5.4 thay thế kí tự trong chuõi
    echo str_replace("Anh","An",$ten)."<br>";

    //6.Toán Tử 
    # += -= *= /=
    $soThuNhat = 10;
    $soThuHai= 5;
    //echo $soThuNhat + $soThuHai;
    //7. Câu điều kiện 
    $tong=$soThuNhat + $soThuHai;
    if($tong > 15){
        echo "tổng lớn hơn 15 <br>";
    }
    else if($tong == 15){
        echo "tổng bằng  15 <br>";
    }
    else{
        echo " tổng  nhỏ hơn 15<br>";
    }
    //8.switch case 
    $color = "red";
    switch($color){
        case "red":
            echo "is red";
            break;
         case "blue":
            echo "is blue";
            break;
    default:
            echo "no color";
            break;
    }
    //9 for
    for ($i=0;$i < 100 ; $i++){
        echo $i."<br>";
    }
    ?>
    

</body>
</html>
