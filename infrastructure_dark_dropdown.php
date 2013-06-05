<html>
    <head>
        <title>Infrastructure</title>
        <style>

            body {
                text-align: left
            }

            a#back {
                color: white;
                text-decoration: none;
                display: block;
                width: 1285;
                height: 715;
                margin-left: auto;
                margin-right: auto;
                background-image: url(pics/dark/infrastructure_dropdown.png)
            }

            div#dropdown_text {
                position: relative;
                top: 455;
                left: 241;
                width: 200;
                height: 100
            }

        </style>
    </head>
    <body>
        <a href="infrastructure.html" id="back">
            <div id='dropdown_text'>
                <?php
                    echo '<pre>';
                    include('text/dropdown.txt');
                    echo '</pre>';
                ?>
            </div>
        </a>

    </body>
</html>
