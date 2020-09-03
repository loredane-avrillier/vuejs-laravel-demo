<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Fullstack App demo</title>

    <!-- Styles -->
    <style>
        html,
        body {
            background-color: #fff;
            margin: 0;
        }
    </style>
</head>

<body>
    <div id="app">
        Vue.js/Laravel Demo
        <app></app>
    </div>

</body>
<script src="{{mix('/js/app.js')}}"></script>

</html>