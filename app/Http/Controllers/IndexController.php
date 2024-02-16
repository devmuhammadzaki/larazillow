<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index/Index',
            [
                'message' => 'Hello Index, from Laravel!',
            ]
        );
    }

    public function show()
    {
        return inertia(
            'Index/Show',
            [
                'message' => 'Hello Show, from Laravel!',
            ]
        );
    }
}
