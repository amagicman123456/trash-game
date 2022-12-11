export const winScreen = `
    <html>
        <head>
            <title>you won!</title>
        </head>
        <body>
            <p id='text' align='center'>reload to start again.</p>
            <p id='text2' align='center'>or, click here.</p>
            <style>
                *{
                    font-family: 'DM Sans', sans-serif;
                }
                #text{
                    font-size: 40px;
                }
                #text2{
                    font-size: 30px;
                }
            </style>
        </body>
        <script>
            document.querySelector('#text2').addEventListener('click', function(){
                location.reload();
            })
        </script>
    </html>
`;