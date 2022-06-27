<?php 

include_once("core.php");

$data = array(
    [
        'id' => 1,
        'name' => "Mohammed",
        "age" => 23
    ],
    [
        'id' => 2,
        'name' => "Ahmad",
        "age" => 26
    ],
    [
        'id' => 3,
        'name' => "Zaid",
        "age" => 24
    ],
    [
        'id' => 4,
        'name' => "Tamer",
        "age" => 22
    ],
);

$json = json_encode($data);

echo $json;
?>