<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index/Index',
        );
    }

    public function about()
    {
        return inertia(
            'Index/About',
        );
    }
}
