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
                background-image: url(pics/dark/infrastructure_quadicons.png)
            }

            div#quadicons_text {
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
            <div id='quadicons_text'>
                <?php
                    echo '<pre>';
                    include('text/quadicons.txt');
                    echo '</pre>';
                ?>
            </div>
        </a>

    </body>
</html>
