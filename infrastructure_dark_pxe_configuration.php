<html>
    <head>
        <title>Infrastructure - PXE</title>
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
                background-image: url(pics/dark/infrastructure_pxe_configuration.png)
            }

            div#configuration_text {
                position: relative;
                top: 280;
                left: 334;
                width: 200;
                height: 100
            }

        </style>
    </head>
    <body>
        <a href="infrastructure_pxe.html" id="back">
            <div id='configuration_text'>
                <?php
                    echo '<pre>';
                    include('text/configuration.txt');
                    echo '</pre>';
                ?>
            </div>
        </a>

    </body>
</html>