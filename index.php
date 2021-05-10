<?php include "helpers/header.php"; 

?>

 <body style="font-family: Times New Roman, Times, serif;">
    <div id="divForGssLogo">
        <p style="text-align:center;"><img src="images/gsslogo.png" id="genesisLogo" width="300" height="200"></p>
    </div>

    <h4 class="center" id="smallDescription">Certificación del Deparamento de Educación</h4>

    <form>
        <div id="dateDiv" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="dateLabelDiv" class="col-auto">
                <label for="fecha" class="col-sm-auto col-form-label" id="dateLabel">Fecha:</label>
            </div>
            <div id="dateInputDiv" class="col-auto">
                <input type="date" class="form-control" id="fecha" required>
            </div> 
        </div>

        <br>

        <div id="timeDiv" class="row mb-auto">
            <div class="col-sm-auto"></div>
            <div id="timeLabelDiv" class="col-auto">
                <label for="hora" class="col-sm-auto col-form-label" id="timeLabel">Hora:</label>
            </div>
            <div id="timeInputDiv" class="col-auto">
                <input type="time" class="form-control" id="hora" required>
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
                <div id="schoolLabelDiv" class="col-auto">
                    <label for="school" class="col-sm-auto col-form-label" id="labelForSchool">de la escuela</label>
                </div>
                <div id="schoolInputDiv" class="col-auto">
                    <input type="text" class="form-control" id="school" name="school" required>
                </div>

                <div id="schoolCodeLabelDiv" class="col-auto">
                    <label for="schoolCode" class="col-sm-auto col-form-label" id="labelForSchoolCode">código</label>
                </div>
                <div id="schoolCodeInputDiv" class="col-1">
                    <input type="text" class="form-control" id="schoolCode" name="schoolCode" required>
                </div>

                <div id="municipalityLabelDiv" class="col-auto">
                    <label for="municipalitySelect" class="col-sm-auto col-form-label" id="labelForMunicipality">del municipio</label>
                </div>
                <div id="municipalityInputDiv" class="col-auto">
                    <div class="form-floating">
                        <select class="form-select" id="municipalitySelect" name="municipalitySelect" required>
                            <option value="" selected>Seleccione</option>
                            <option value="Ejemplo 1">Ejemplo 1</option>
                            <option value="Ejemplo 2">Ejemplo 2</option>
                            <option value="Ejemplo 3">Ejemplo 3</option>
                        </select>
                        <label for="municipalitySelect0">Municipio</label>
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

        <div id="tableDiv" class="table-responsive">
            <div class="center">
                <div class="col-sm-5">
                    <table id="tableForUnitSN" class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Número Propiedad de Equipo</th>
                                <th scope="col">Terminal Serial Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td><input type="text" class=""></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </form>

    <br>

<?php include "helpers/footer.php"; ?>
