$(document).ready(function () {

    //validity and scroll into view
    $('.btn-continue').on('click', function (e){
        console.log('event', e.target, this);

        //assign variable defining the accordionItem that is clicked (one with the button in it)
        const $accordionItem = $(this).parents('.accordion-item');

        if ($accordionItem.find(':invalid').length) {
            $accordionItem.addClass('was-validated');
            $accordionItem.find(':invalid').first().focus();
            return;
        }
            //open next tab
            $accordionItem.next().find('.accordion-header .accordion-button')
                .removeAttr('disabled')
                .click();

            //highlights the next tab and changes previous color
            $accordionItem.find('.accordion-header .accordion-button').removeClass('bg-secondary').addClass('bg-primary');

            //focus on teh first field in the accordion
            $accordionItem.next().find('input').first().focus();

            //scroll to closed accordion tab
            // [0] grabs the first element in the jquery collection
            $accordionItem[0].scrollIntoView();


    })

    //21 check box visibility
    $('#18-check').on('change', function (e){
        const isChecked = $('#18-check').is(":checked")
        if (isChecked === true){
            $('#21').removeClass('visually-hidden')
        }else{
            $('#21').addClass('visually-hidden')
        }
    })

    //end date if year round
    $('#positions-applied-yearRound').on('change', function (e){
        if ($('#positions-applied-yearRound').is(":checked") === true){
            $('#positions-applied-end-date').addClass('visually-hidden')
        }
    })
    $('#positions-applied-seasonal').on('change', function (e){
        if ($('#positions-applied-seasonal').is(":checked") === true){
            $('#positions-applied-end-date').removeClass('visually-hidden')
        }
    })

    //show/hide details if a previous employee
    $('#previous-employee-check').on('change', function (e){
        const isChecked = $('#previous-employee-check').is(":checked")
        if (isChecked === true){
            $('#employee-number-space').removeClass('visually-hidden')
            $('#employee-location-space').removeClass('visually-hidden')
            $('#employee-date-space').removeClass('visually-hidden')
            $('#employee-name-space').removeClass('visually-hidden')
        }else{
            $('#employee-previous-name-space').addClass('visually-hidden')
            $('#employee-number-space').addClass('visually-hidden')
            $('#employee-location-space').addClass('visually-hidden')
            $('#employee-date-space').addClass('visually-hidden')
            $('#employee-name-space').addClass('visually-hidden')

        }
    })

    //show/hide if previous employee had a previous name
    $('#previous-employee-name-check').on('change', function (e){
        const isChecked = $('#previous-employee-name-check').is(":checked")
        if (isChecked === true){
            $('#employee-previous-name-space').removeClass('visually-hidden')
        }else{
            $('#employee-previous-name-space').addClass('visually-hidden')
        }
    })

    //show/hide if they have a family employee
    $('#family-employee-check').on('change', function (e){
        const isChecked = $('#family-employee-check').is(":checked")
        if (isChecked === true){
            $('#family-employee-space').removeClass('visually-hidden')
        }else{
            $('#family-employee-space').addClass('visually-hidden')
        }
    })

    //show/hide if they are applying with a friend
    $('#duo-check').on('change', function (e){
        const isChecked = $('#duo-check').is(":checked")
        if (isChecked === true){
            $('#duo-name-space').removeClass('visually-hidden')
            $('#duo-traveling-space').removeClass('visually-hidden')
            $('#duo-location-space').removeClass('visually-hidden')
        }else{
            $('#duo-name-space').addClass('visually-hidden')
            $('#duo-traveling-space').addClass('visually-hidden')
            $('#duo-location-space').addClass('visually-hidden')
        }
    })

    //show/hide if they have a sponsor
    $('#eligibility-sponsor-check').on('change', function (e){
        const isChecked = $('#eligibility-sponsor-check').is(":checked")
        if (isChecked === true){
            $('#sponsor-space').removeClass('visually-hidden')
        }else{
            $('#sponsor-space').addClass('visually-hidden')
        }
    })

    //show/hide if they have a felony
    $('#eligibility-felon-check').on('change', function (e){
        const isChecked = $('#eligibility-felon-check').is(":checked")
        if (isChecked === true){
            $('#felon-space').removeClass('visually-hidden')
        }else{
            $('#felon-space').addClass('visually-hidden')
        }
    })

    //show/hide if open to other jobs
    $('#positions-applied-interest').on('change', function (e){
        const isChecked = $('#positions-applied-interest').is(":checked")
        if (isChecked === true){
            $('#positions-applied-second-space').removeClass('visually-hidden')
            $('#positions-applied-additional-space').removeClass('visually-hidden')
            $('#positions-applied-backup-space').removeClass('visually-hidden')
        }else{
            $('#positions-applied-second-space').addClass('visually-hidden')
            $('#positions-applied-additional-space').addClass('visually-hidden')
            $('#positions-applied-backup-space').addClass('visually-hidden')
        }
    })

    //additional work experience
    $('.work-btn').on('click', function (e){
        $('#work-experience').html("<!-- employer1 -->\n" +
            "                                                    <!-- name -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"employer-name\" class=\"form-label\">Employer Name</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-name\"\n" +
            "                                                               placeholder=\"Company ABC\" value=\"\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- supervisor -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"employer-supervisor\" class=\"form-label\">Supervisor Name</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-supervisor\"\n" +
            "                                                               placeholder=\"John Doe\" value=\"\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- phone -->\n" +
            "                                                    <div class=\"col-md-6\">\n" +
            "                                                        <label for=\"employer-phone\" class=\"form-label\">Employer Phone Number</label>\n" +
            "                                                        <input type=\"tel\" class=\"form-control\" id=\"employer-phone\"\n" +
            "                                                               placeholder=\"(###) - ### - ####\" maxlength=\"10\" pattern=\"[0-9]{3}[0-9]{3}[0-9]{4}\">\n" +
            "                                                        <div id=\"employer-phone-help\" class=\"form-text\">No not use - or spaces</div>\n" +
            "                                                    </div>\n" +
            "                                                    <!-- address -->\n" +
            "                                                    <div class=\"col-12\">\n" +
            "                                                        <label for=\"employer-address\" class=\"form-label\">Address</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-address\"\n" +
            "                                                               placeholder=\"123 Main St\" value=\"\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- address2 -->\n" +
            "                                                    <div class=\"col-12\">\n" +
            "                                                        <label for=\"employer-address2\" class=\"form-label\">Address 2\n" +
            "                                                            <span class=\"text-body-secondary\">(Optional)</span></label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-address2\"\n" +
            "                                                               placeholder=\"apt or suite\" value=\"\" >\n" +
            "                                                    </div>\n" +
            "                                                    <!-- city -->\n" +
            "                                                    <div class=\"col-md-5\">\n" +
            "                                                        <label for=\"employer-city\" class=\"form-label\">City</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-city\"\n" +
            "                                                               placeholder=\"City\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- state -->\n" +
            "                                                    <div class=\"col-md-4\">\n" +
            "                                                        <label for=\"employer-state\" class=\"form-label\">State</label>\n" +
            "                                                        <select class=\"form-select\" id=\"employer-state\">\n" +
            "                                                            <option value=\"\">-----</option>\n" +
            "                                                            <option>AL </option>\n" +
            "                                                            <option>AK </option>\n" +
            "                                                            <option>AZ </option>\n" +
            "                                                            <option>AR </option>\n" +
            "                                                            <option>CA </option>\n" +
            "                                                            <option>CO </option>\n" +
            "                                                            <option>CT </option>\n" +
            "                                                            <option>DE </option>\n" +
            "                                                            <option>DC </option>\n" +
            "                                                            <option>FL </option>\n" +
            "                                                            <option>GA </option>\n" +
            "                                                            <option>HI </option>\n" +
            "                                                            <option>ID </option>\n" +
            "                                                            <option>IL </option>\n" +
            "                                                            <option>IN </option>\n" +
            "                                                            <option>IA </option>\n" +
            "                                                            <option>KS </option>\n" +
            "                                                            <option>KY </option>\n" +
            "                                                            <option>LA </option>\n" +
            "                                                            <option>ME </option>\n" +
            "                                                            <option>MD </option>\n" +
            "                                                            <option>MA </option>\n" +
            "                                                            <option>MI </option>\n" +
            "                                                            <option>MN </option>\n" +
            "                                                            <option>MS </option>\n" +
            "                                                            <option>MO </option>\n" +
            "                                                            <option>MT </option>\n" +
            "                                                            <option>NE </option>\n" +
            "                                                            <option>NV </option>\n" +
            "                                                            <option>NH </option>\n" +
            "                                                            <option>NJ </option>\n" +
            "                                                            <option>NM </option>\n" +
            "                                                            <option>NY </option>\n" +
            "                                                            <option>NC </option>\n" +
            "                                                            <option>ND </option>\n" +
            "                                                            <option>OH </option>\n" +
            "                                                            <option>OK </option>\n" +
            "                                                            <option>OR </option>\n" +
            "                                                            <option>PA </option>\n" +
            "                                                            <option>PR </option>\n" +
            "                                                            <option>RI </option>\n" +
            "                                                            <option>SC </option>\n" +
            "                                                            <option>SD </option>\n" +
            "                                                            <option>TN </option>\n" +
            "                                                            <option>TX </option>\n" +
            "                                                            <option>UT </option>\n" +
            "                                                            <option>VT </option>\n" +
            "                                                            <option>VA </option>\n" +
            "                                                            <option>WA </option>\n" +
            "                                                            <option>WV </option>\n" +
            "                                                            <option>WI </option>\n" +
            "                                                            <option>WY </option>\n" +
            "                                                        </select>\n" +
            "                                                    </div>\n" +
            "                                                    <!-- zip -->\n" +
            "                                                    <div class=\"col-md-3\">\n" +
            "                                                        <label for=\"employer-zip\" class=\"form-label\">Zip</label>\n" +
            "                                                        <input type=\"number\" class=\"form-control\" id=\"employer-zip\"\n" +
            "                                                               placeholder=\"#####\" min=\"10000\" max=\"99999\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- country -->\n" +
            "                                                    <div class=\"col-md-12\">\n" +
            "                                                        <label for=\"employer-country\" class=\"form-label\">Country</label>\n" +
            "                                                        <select class=\"form-select\" id=\"employer-country\">\n" +
            "                                                            <option selected=\"selected\" value=\"\"> </option>\n" +
            "                                                            <option value=\"US\">United States </option>\n" +
            "                                                            <option value=\"AE\">United Arab Emirates </option>\n" +
            "                                                            <option value=\"AF\">Afghanistan </option>\n" +
            "                                                            <option value=\"AG\">Antigua and Barbuda </option>\n" +
            "                                                            <option value=\"AL\">Albania </option>\n" +
            "                                                            <option value=\"AM\">Armenia </option>\n" +
            "                                                            <option value=\"AM\">Zambia </option>\n" +
            "                                                            <option value=\"AN\">Netherland Antilles </option>\n" +
            "                                                            <option value=\"AQ\">Antarctica </option>\n" +
            "                                                            <option value=\"AR\">Argentina </option>\n" +
            "                                                            <option value=\"AS\">American Samoa </option>\n" +
            "                                                            <option value=\"AT\">Austria </option>\n" +
            "                                                            <option value=\"AU\">Australia </option>\n" +
            "                                                            <option value=\"AW\">Aruba </option>\n" +
            "                                                            <option value=\"AZ\">Azerbaidjan </option>\n" +
            "                                                            <option value=\"BA\">Bosnia-Herzegovina </option>\n" +
            "                                                            <option value=\"BB\">Barbados </option>\n" +
            "                                                            <option value=\"BD\">Bangladesh </option>\n" +
            "                                                            <option value=\"BE\">Belgium </option>\n" +
            "                                                            <option value=\"BG\">Bulgaria </option>\n" +
            "                                                            <option value=\"BH\">Bahrain </option>\n" +
            "                                                            <option value=\"BM\">Bermuda </option>\n" +
            "                                                            <option value=\"BO\">Bolivia </option>\n" +
            "                                                            <option value=\"BR\">Brazil </option>\n" +
            "                                                            <option value=\"BS\">Bahamas </option>\n" +
            "                                                            <option value=\"BW\">Botswana </option>\n" +
            "                                                            <option value=\"BY\">Belarus </option>\n" +
            "                                                            <option value=\"BZ\">Belize </option>\n" +
            "                                                            <option value=\"CA\">Canada </option>\n" +
            "                                                            <option value=\"CG\">Congo </option>\n" +
            "                                                            <option value=\"CH\">Switzerland </option>\n" +
            "                                                            <option value=\"CL\">Chile </option>\n" +
            "                                                            <option value=\"CM\">Cameroon </option>\n" +
            "                                                            <option value=\"CN\">China </option>\n" +
            "                                                            <option value=\"CO\">Columbia </option>\n" +
            "                                                            <option value=\"CR\">Costa Rica </option>\n" +
            "                                                            <option value=\"CS\">Former Czechoslovakia </option>\n" +
            "                                                            <option value=\"CZ\">Czech Republic </option>\n" +
            "                                                            <option value=\"DE\">Germany </option>\n" +
            "                                                            <option value=\"DK\">Denmark </option>\n" +
            "                                                            <option value=\"DM\">Dominica </option>\n" +
            "                                                            <option value=\"DO\">Dominican Republic </option>\n" +
            "                                                            <option value=\"DZ\">Algeria </option>\n" +
            "                                                            <option value=\"EC\">Ecuador </option>\n" +
            "                                                            <option value=\"EE\">Estonia </option>\n" +
            "                                                            <option value=\"EG\">Egypt </option>\n" +
            "                                                            <option value=\"ES\">Spain </option>\n" +
            "                                                            <option value=\"ET\">Ethiopia </option>\n" +
            "                                                            <option value=\"FI\">Finland </option>\n" +
            "                                                            <option value=\"FJ\">Fiji </option>\n" +
            "                                                            <option value=\"FK\">Falkland Islands </option>\n" +
            "                                                            <option value=\"FR\">France </option>\n" +
            "                                                            <option value=\"GB\">Great Britain </option>\n" +
            "                                                            <option value=\"GD\">Grenada </option>\n" +
            "                                                            <option value=\"GE\">Georgia </option>\n" +
            "                                                            <option value=\"GF\">French Guyana </option>\n" +
            "                                                            <option value=\"GH\">Ghana </option>\n" +
            "                                                            <option value=\"GL\">Greenland </option>\n" +
            "                                                            <option value=\"GN\">Guinea </option>\n" +
            "                                                            <option value=\"GR\">Greece </option>\n" +
            "                                                            <option value=\"GT\">Guatamala </option>\n" +
            "                                                            <option value=\"GU\">Guam (USA) </option>\n" +
            "                                                            <option value=\"GY\">Guyana </option>\n" +
            "                                                            <option value=\"HK\">Hong Kong </option>\n" +
            "                                                            <option value=\"HN\">Honduras </option>\n" +
            "                                                            <option value=\"HR\">Croatia </option>\n" +
            "                                                            <option value=\"HT\">Haiti </option>\n" +
            "                                                            <option value=\"HU\">Hungary </option>\n" +
            "                                                            <option value=\"ID\">Indonesia </option>\n" +
            "                                                            <option value=\"IE\">Ireland </option>\n" +
            "                                                            <option value=\"IL\">Israel </option>\n" +
            "                                                            <option value=\"IN\">India </option>\n" +
            "                                                            <option value=\"IQ\">Iraq </option>\n" +
            "                                                            <option value=\"IR\">Iran </option>\n" +
            "                                                            <option value=\"IS\">Iceland </option>\n" +
            "                                                            <option value=\"IT\">Italy </option>\n" +
            "                                                            <option value=\"JM\">Jamaica </option>\n" +
            "                                                            <option value=\"JO\">Jordan </option>\n" +
            "                                                            <option value=\"JP\">Japan </option>\n" +
            "                                                            <option value=\"KE\">Kenya </option>\n" +
            "                                                            <option value=\"KP\">North Korea </option>\n" +
            "                                                            <option value=\"KR\">South Korea </option>\n" +
            "                                                            <option value=\"KW\">Kuwait </option>\n" +
            "                                                            <option value=\"KY\">Cayman Islands </option>\n" +
            "                                                            <option value=\"KZ\">Kazakhstan </option>\n" +
            "                                                            <option value=\"LA\">Laos </option>\n" +
            "                                                            <option value=\"LB\">Lebanon </option>\n" +
            "                                                            <option value=\"LC\">St. Lucia </option>\n" +
            "                                                            <option value=\"LI\">Liechtenstein </option>\n" +
            "                                                            <option value=\"LK\">Sri Lanka </option>\n" +
            "                                                            <option value=\"LR\">Liberia </option>\n" +
            "                                                            <option value=\"LT\">Lithuania </option>\n" +
            "                                                            <option value=\"LU\">Luxembourg </option>\n" +
            "                                                            <option value=\"LV\">Latvia </option>\n" +
            "                                                            <option value=\"LY\">Libya </option>\n" +
            "                                                            <option value=\"MA\">Morocco </option>\n" +
            "                                                            <option value=\"MC\">Monaco </option>\n" +
            "                                                            <option value=\"MD\">Moldavia </option>\n" +
            "                                                            <option value=\"MG\">Madagascar </option>\n" +
            "                                                            <option value=\"YU\">Macedonia </option>\n" +
            "                                                            <option value=\"MN\">Mongolia </option>\n" +
            "                                                            <option value=\"MQ\">Martinique (French) </option>\n" +
            "                                                            <option value=\"MS\">Montserrat </option>\n" +
            "                                                            <option value=\"MT\">Malta </option>\n" +
            "                                                            <option value=\"MX\">Mexico </option>\n" +
            "                                                            <option value=\"MY\">Malaysia </option>\n" +
            "                                                            <option value=\"MZ\">Mozambique </option>\n" +
            "                                                            <option value=\"NA\">Namibia </option>\n" +
            "                                                            <option value=\"NG\">Nigeria </option>\n" +
            "                                                            <option value=\"NI\">Nicaragua </option>\n" +
            "                                                            <option value=\"NL\">Netherlands </option>\n" +
            "                                                            <option value=\"NO\">Norway </option>\n" +
            "                                                            <option value=\"NP\">Nepal </option>\n" +
            "                                                            <option value=\"NZ\">New Zealand </option>\n" +
            "                                                            <option value=\"PA\">Panama </option>\n" +
            "                                                            <option value=\"PE\">Peru </option>\n" +
            "                                                            <option value=\"PH\">Phillipines </option>\n" +
            "                                                            <option value=\"PK\">Pakistan </option>\n" +
            "                                                            <option value=\"PL\">Poland </option>\n" +
            "                                                            <option value=\"PR\">Puerto Rico </option>\n" +
            "                                                            <option value=\"PT\">Portugal </option>\n" +
            "                                                            <option value=\"PY\">Paraguay </option>\n" +
            "                                                            <option value=\"QA\">Qatar </option>\n" +
            "                                                            <option value=\"RO\">Romania </option>\n" +
            "                                                            <option value=\"RU\">Russian Federation </option>\n" +
            "                                                            <option value=\"RW\">Rwanda </option>\n" +
            "                                                            <option value=\"SA\">Saudi Arabia </option>\n" +
            "                                                            <option value=\"RS\">Serbia </option>\n" +
            "                                                            <option value=\"YU\">Serbia and Montenegro </option>\n" +
            "                                                            <option value=\"SD\">Sudan </option>\n" +
            "                                                            <option value=\"SE\">Sweden </option>\n" +
            "                                                            <option value=\"SG\">Singapore </option>\n" +
            "                                                            <option value=\"SI\">Slovenia </option>\n" +
            "                                                            <option value=\"SK\">Slovak Republic </option>\n" +
            "                                                            <option value=\"SN\">Senegal </option>\n" +
            "                                                            <option value=\"SO\">Somalia </option>\n" +
            "                                                            <option value=\"SR\">Suriname </option>\n" +
            "                                                            <option value=\"SV\">El Salvador </option>\n" +
            "                                                            <option value=\"SY\">Syria </option>\n" +
            "                                                            <option value=\"SZ\">Swaziland </option>\n" +
            "                                                            <option value=\"TC\">Turks and Caicos Islands </option>\n" +
            "                                                            <option value=\"TD\">Chad </option>\n" +
            "                                                            <option value=\"TH\">Thailand </option>\n" +
            "                                                            <option value=\"TJ\">Tadjikistan </option>\n" +
            "                                                            <option value=\"TM\">Turkmenistan </option>\n" +
            "                                                            <option value=\"TN\">Tunisia </option>\n" +
            "                                                            <option value=\"TR\">Turkey </option>\n" +
            "                                                            <option value=\"TT\">Trinidad and Tabago </option>\n" +
            "                                                            <option value=\"TW\">Taiwan </option>\n" +
            "                                                            <option value=\"TZ\">Tanzania </option>\n" +
            "                                                            <option value=\"UA\">Ukraine </option>\n" +
            "                                                            <option value=\"UG\">Uganda </option>\n" +
            "                                                            <option value=\"GB\">United Kingdom </option>\n" +
            "                                                            <option value=\"UY\">Uruguay </option>\n" +
            "                                                            <option value=\"UZ\">Uzbekistan </option>\n" +
            "                                                            <option value=\"VA\">Vatican City </option>\n" +
            "                                                            <option value=\"VC\">St. Vincent &amp; Grenadines </option>\n" +
            "                                                            <option value=\"VE\">Venezuala </option>\n" +
            "                                                            <option value=\"VG\">Virgin Islands (British) </option>\n" +
            "                                                            <option value=\"VI\">Virgin Islands (USA) </option>\n" +
            "                                                            <option value=\"VN\">Vietnam </option>\n" +
            "                                                            <option value=\"WS\">Samoa </option>\n" +
            "                                                            <option value=\"YE\">Yemen </option>\n" +
            "                                                            <option value=\"ZA\">South Africa </option>\n" +
            "                                                            <option value=\"ZR\">Zaire </option>\n" +
            "                                                            <option value=\"ZW\">Zimbabwe </option>\n" +
            "                                                        </select>\n" +
            "                                                    </div>\n" +
            "                                                    <!-- date range -->\n" +
            "                                                    <!-- date1 -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"experience-start-date\" class=\"input-group date\" data-provide=\"datepicker\">Select start date</label>\n" +
            "                                                        <input type=\"date\" class=\"form-control\" id=\"experience-start-date\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- date2 -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"experience-end-date\" class=\"input-group date\" data-provide=\"datepicker\">Select end date</label>\n" +
            "                                                        <input type=\"date\" class=\"form-control\" id=\"experience-end-date\">\n" +
            "                                                        <div id=\"experience-help\" class=\"form-text\">\n" +
            "                                                            Leave black in currently employed here.\n" +
            "                                                        </div>\n" +
            "                                                    </div>\n" +
            "                                                    <!-- contact? -->\n" +
            "                                                    <div class=\"col-md-12\">May we contact this employer?</div>\n" +
            "                                                    <div class=\"col-sm-12 form-check form-switch\">\n" +
            "                                                        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"employer-contact?\">\n" +
            "                                                        <label for=\"employer-contact?\" class=\"form-check-label\">No/Yes</label>\n" +
            "                                                    </div>\n" +
            "                                                    <!-- duties -->\n" +
            "                                                    <div class=\"col-sm-12\">\n" +
            "                                                        <label for=\"employer-duties\" class=\"form-label\">Specific Job Duties</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-duties\"\n" +
            "                                                               placeholder=\"\" value=\"\">\n" +
            "                                                    </div>\n" +
            "                                                    <!-- leaving -->\n" +
            "                                                    <div class=\"col-sm-12\">\n" +
            "                                                        <label for=\"employer-leaving\" class=\"form-label\">Reason for Leaving Employer</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"employer-leaving\"\n" +
            "                                                               placeholder=\"\" value=\"\">\n" +
            "                                                    </div>")
    })

    //additional education
    $('.education-btn').on('click',function (e){
        $('#additional-education').html("<div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"education-name\" class=\"form-label\">Name of School</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"education-name\"\n" +
            "                                                               placeholder=\"School A\" value=\"\" >\n" +
            "                                                    </div>\n" +
            "                                                    <!-- location -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"education-location\" class=\"form-label\">School Location</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"education-location\"\n" +
            "                                                               placeholder=\"City A, State B\" value=\"\" >\n" +
            "                                                    </div>\n" +
            "                                                    <!-- degree received -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"education-degree\" class=\"form-label\">Degree Received</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"education-degree\"\n" +
            "                                                               placeholder=\"\" value=\"\" >\n" +
            "                                                    </div>\n" +
            "                                                    <!-- field of study -->\n" +
            "                                                    <div class=\"col-sm-6\">\n" +
            "                                                        <label for=\"education-FoS\" class=\"form-label\">Field of Study</label>\n" +
            "                                                        <input type=\"text\" class=\"form-control\" id=\"education-FoS\"\n" +
            "                                                               placeholder=\"\" value=\"\" >\n" +
            "                                                    </div>\n" +
            "                                                    <!-- graduate? -->\n" +
            "                                                    <div class=\"col-sm-12\">\n" +
            "                                                        <div class=\"form-check\">\n" +
            "                                                            <input type=\"checkbox\" class=\"form-check-input\" id=\"education-graduated\">\n" +
            "                                                            <label class=\"form-check-label\" for=\"education-graduated\">\n" +
            "                                                                Did you graduate?\n" +
            "                                                            </label>\n" +
            "                                                        </div>\n" +
            "                                                    </div>")
    })
});