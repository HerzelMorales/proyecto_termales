<?php include "helpers/header.php";

    require "dbconn.php";
    date_default_timezone_set("America/Puerto_Rico");

    $date = new DateTime();
?>

 <body style="font-family: Times New Roman, Times, serif;">
    <div id="divForGssLogo">
        <p style="text-align:center;"><img src="images/gsslogo.png" id="genesisLogo" width="250" height="200"></p>
    </div>

    <h4 class="center" id="smallDescription">Certificación del Deparamento de Educación</h4>

    <form class="needs-validation" novalidate>
        <div id="dateDiv" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="dateLabelDiv" class="col-auto">
                <label for="fecha" class="col-sm-auto col-form-label" id="dateLabel">Fecha:</label>
            </div>
            <div id="dateInputDiv" class="col-2">
                <input type="text" class="form-control" id="fecha" name="fecha" value="<?php echo $date->format('d/m/Y');?>" readonly>
            </div> 
        </div>

        <br>

        <div id="timeDiv" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="timeLabelDiv" class="col-auto">
                <label for="hora" class="col-sm-auto col-form-label" id="timeLabel">Hora:</label>
            </div>
            <div id="timeInputDiv" class="col-1">
                <input type="text" class="form-control" id="hora" name="hora" value="<?php echo $date->format("h:ia");?>" readonly>
            </div> 
        </div>

        <br>

        <div id="contractDiv" class="center">
            <div class="row mb-auto">
                <div class="col-sm-2"></div>
                <div id="eduEmpNameLabelDiv" class="col-auto">
                    <label for="fullName" class="col-sm-auto col-form-label" id="labelForFullName">Yo</label>
                </div>
                <div id="eduEmpNameInputDiv" class="col-auto">
                    <input type="text" class="form-control" id="fullName" name="fullName" required>
                </div>

                <div id="eduEmpJobLabelDiv" class="col-auto">
                    <label for="job" class="col-sm-auto col-form-label" id="labelForJob">, ocupación</label>
                </div>
                <div id="eduEmpJobInputDiv" class="col-auto">
                    <input type="text" class="form-control" id="job" name="job" required>
                </div>

                <div id="eduEmpKronosNumLabelDiv" class="col-auto">
                    <label for="kronosNum" class="col-sm-auto col-form-label" id="labelForKronosNum">, número de Kronos</label>
                </div>
                <div id="eduEmpKronosNumInputDiv" class="col-1">
                    <input type="text" class="form-control" id="kronosNum" name="kronosNum" required>
                </div>
            </div>

            <br>

            <div class="row mb-auto">
                <div class="col-sm-2"></div>
                <div id="schoolNameLabelDiv" class="col-auto">
                    <label for="school" class="col-sm-auto col-form-label" id="labelForSchool">de la escuela</label>
                </div>
                <div id="schoolNameDiv" class="col-auto">
                    <input type="text" class="form-control" id="schoolName" name="schoolName" readonly>
                </div>

                <div id="schoolCodeLabelDiv" class="col-auto">
                    <label for="schoolCode" class="col-sm-auto col-form-label" id="labelForSchoolCode" onchange="schoolInfoSync()">código</label>
                </div>
                <div id="schoolCodeInputDiv" class="col-1">
                    <input type="number" class="form-control" id="schoolCode" name="schoolCode" required>
                </div>

                <div id="municipalityLabelDiv" class="col-auto">
                    <label for="municipalitySelect" class="col-sm-auto col-form-label" id="labelForMunicipality">del municipio</label>
                </div>
                <div id="municipalityDiv" class="col-auto">
                    <div class="col-auto">
                        <input type="text" class="form-control" id="municipality" name="municipality" readonly>
                    </div>
                </div>
                <div class="col-auto">
                    <p class="col-sm-auto col-form-label">. Certifico</p>
                </div>
            </div>

            <br>

            <div class="row mb-auto">
                <div class="col-sm-2"></div>
                <div id="gssEmpNameLabelDiv" class="col-auto">
                    <label for="gssFullName" class="col-sm-auto col-form-label" id="labelForGssFullName">que la compañía <i>Genesis Security Services, Inc.</i> representada por</label>
                </div>
                <div id="gssEmpNameInputDiv" class="col-auto">
                    <input type="text" class="form-control" id="gssFullName" name="gssFullName" placeholder="nombre de técnico" required>
                </div>

                <div class="col-auto">
                    <p class="col-sm-auto col-form-label">instaló Sistema de Temperaturas Termales.</p>
                </div>
            </div>
        </div>

        <br>
        <br>

        <div id="tableDiv" class="table-responsive">
            <div class="center">
                <div class="col-sm-5">
                    <table id="tableForUnitSN" class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Número Propiedad de Equipo</th>
                                <th scope="col">Terminal Serial Number</th>
                                <th scope="col">Imagen del producto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input type="text" class="form-control" required></td>
                                <td><input type="text" class="form-control" required></td>
                                <td><input type="file" class="form-control" id="formFile1" name="imgOfUnit1" onchange="readURL(input)" required>
                                    <img class="imgPreview" id="img1" src="#" alt="imgUnit1"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile2" name="imgOfUnit2">
                                    <img class="imgPreview" id="img2" src="#" alt="imgUnit2"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile3" name="imgOfUnit3">
                                    <img class="imgPreview" id="img3" src="#" alt="imgUnit3"/>    
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile4" name="imgOfUnit4">
                                    <img class="imgPreview" id="img4" src="#" alt="imgUnit4"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile5" name="imgOfUnit5">
                                    <img class="imgPreview" id="img5" src="#" alt="imgUnit5"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile6" name="imgOfUnit6">
                                    <img class="imgPreview" id="img6" src="#" alt="imgUnit6"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile7" name="imgOfUnit7">
                                    <img class="imgPreview" id="img7" src="#" alt="imgUnit7"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile8" name="imgOfUnit8">
                                    <img class="imgPreview" id="img8" src="#" alt="imgUnit8"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile9" name="imgOfUnit9">
                                    <img class="imgPreview" id="img9" src="#" alt="imgUnit9"/>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="text" class="form-control"></td>
                                <td><input type="file" class="form-control" id="formFile10" name="imgOfUnit10">
                                    <img class="imgPreview" id="img10" src="#" alt="imgUnit10"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <br>

        <style>

            body, canvas, div, form, input {
                margin: 0;
                padding: 0;
            }
            #wrapper2 {
                width: 100%;
                padding: 0px;
                /*position: relative; center: 25%;*/
            }
            canvas {
                position: relative;
                margin: 1px;
                margin-center: 0px;
                border: 0px solid #3a87ad;
                /*width: 600px;*/
            }
            h1, p {
                padding-center: 0px;
                width: 50%;
                /*margin: 0 auto;*/
            }
            /* #controlPanel {
                margin: 2px;
            }*/
            #saveSignature {
                display: none;
            }
            
        </style>

        <script src="./js/signature.js"></script>

        <div id="signatureDiv1" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="signatureInputDiv1">
                <div id="canvas" class="col-auto">
                    Canvas is not supported.
                </div>
                <script>
                    zkSignature.capture();
                </script>
                <div id="signatureLabelDiv1" class="row mb-auto">
                    <div class="col-sm-auto"></div>
                    <label for="canvas" class="col-sm-auto col-form-label" id="signatureLabel1">Firma de Representante Escolar</label>
                </div>
                <div class="clearButtonDiv1">
                    <button type="button" id="myBtn" onclick="zkSignature.clear()" class="btn btn-primary">
                        Borrar
                    </button>
                </div>
            </div>
        </div>

        <br>
        <br>

        <div id="signatureDiv2" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="signatureInputDiv2">
                <div id="canvas" class="col-auto">
                    Canvas is not supported.
                </div>
                <script>
                    zkSignature.capture();
                </script>
                <div id="signatureLabelDiv2" class="row mb-auto">
                    <div class="col-sm-auto"></div>
                    <label for="canvas" class="col-sm-auto col-form-label" id="signatureLabel2">Firma de Técnico</label>
                </div>
                <div class="clearButtonDiv2">
                    <button type="button" id="myBtn" onclick="zkSignature.clear()" class="btn btn-primary" disabled>
                        Borrar
                    </button>
                </div>
            </div>
        </div>

        <br>
        
        <div class="row mb-auto">
            <div class="col-sm-5"></div>
            <div class="col-auto">
                <button id="formSubmitButton" class="btn btn-primary" type="submit">Someter</button>
            </div>
        </div>

        <br>

    </form>

    <br>

<?php include "helpers/footer.php"; ?>