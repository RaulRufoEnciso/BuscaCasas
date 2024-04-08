<!DOCTYPE html>
<html>
<head>
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="functionsPisos.js"></script>

    <style>
        /* Estilos para campos inválidos */
        .invalid-input {
            border-color: red !important;
        }
    </style>
</head>
<body>
    <div class="container pt-5 pb-5">
        <h4>Formulari de registre de pisos</h4>

        <div class="row">
            <div class="col-6">
                <form id="form-user-register">
                    <div class="form-row mt-5 mb-4">
                        <div class="col-8">
                            <label for="nombre">Nom*</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" required>
                        </div>

                        <div class="col-4">
                            <label for="preu">Preu*</label>
                            <input type="text" class="form-control" id="preu" name="preu" required>
                        </div>    
                    </div>
                    
                    <div class="form-row mb-4">
                        <div class="col-4">
                            <label for="via">Via</label>
                            <select class="custom-select" id="via" name="via" required>
                                <option selected disabled>Open this select menu</option>
                                <option value="1">Carrer</option>
                                <option value="2">Torrent</option>
                                <option value="3">Avinguda</option>
                            </select>
                        </div>

                        <div class="col-4">
                            <label for="nom">Nom</label>
                            <input type="text" class="form-control" id="nom" name="nom" required>
                        </div>

                        <div class="col-4">
                            <label for="numero">Número</label>
                            <input type="text" class="form-control" id="numero" name="numero" required>
                        </div>
                    </div>

                    <div class="form-row mb-4">
                        <div class="col-4">
                            <label for="pis">Pis</label>
                            <input type="text" class="form-control" id="pis" name="pis" required>
                        </div>

                        <div class="col-4">
                            <label for="escala">Escala</label>
                            <input type="text" class="form-control" id="escala" name="escala" required>
                        </div>

                        <div class="col-4">
                            <label for="porta">Porta</label>
                            <input type="text" class="form-control" id="porta" name="porta" required>
                        </div>
                    </div>
                    
                    <div class="form-row mb-4">
                        <!-- div para el mapa que nos encontrará la latitud y la longitud mediante una API de Google. -->
                    </div>

                    <div class="form-row mb-4">
                        <div class="col-4">
                            <label for="cp">CP</label>
                            <input type="text" class="form-control" id="cp" name="cp" required>
                        </div>

                        <div class="col-4">
                            <label for="districte">Districte</label>
                            <select class="custom-select" id="districte" name="districte" required>
                                <option selected disabled>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div class="col-4">
                            <label for="barri">Barri</label>
                            <select class="custom-select" id="barri" name="barri" required>
                                <option selected disabled>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row mb-4">
                        <div class="col-4">
                            <label for="poblacio">Població</label>
                            <select class="custom-select" id="poblacio" name="poblacio" required>
                                <option selected disabled>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div class="col-4">
                            <label for="latitud">Latitud</label>
                            <input type="text" class="form-control" id="latitud" name="latitud" required>
                        </div>

                        <div class="col-4">
                            <label for="longitud">Longitud</label>
                            <input type="text" class="form-control" id="longitud" name="longitud" required>
                        </div>
                    </div>

                    <div class="form-row mb-4">
                        <textarea></textarea>
                    </div>
                    
                    <button class="btn btn-primary" type="submit">Registrar</button>
                    <button class="btn btn-info">Visualitzar</button>
                </form>
            </div>

            <div class="col-6 pt-5">
                <h4 id="nomPis">Nom + barri, districte</h4>
                <p id="dir">Via Nom Número Pis Escala Porta · CP · Districte · Barri · Pobliacio</p>
                <p id="preu">300€</p>
                <p>Text</p>
            </div>
        </div>
    </div>
</body>
</html>
