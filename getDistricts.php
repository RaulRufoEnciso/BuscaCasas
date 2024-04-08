<?php
// Simulando una consulta a la base de datos para obtener los distritos
$distritos = array(
    1 => "Distrito 1",
    2 => "Distrito 2",
    3 => "Distrito 3"
);

// Generar opciones para cada distrito
$options = "";
foreach ($distritos as $id => $nombre) {
    $options .= "<option value='$id'>$nombre</option>";
}

// Devolver las opciones al cliente
echo $options;
?>
