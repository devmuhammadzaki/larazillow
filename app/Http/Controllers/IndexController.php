<?php

namespace App\Http\Controllers;

use App\Models\Listing;

class IndexController extends Controller
{
    public function index()
    {
        return inertia(
            'Index/Index',
            [
                'listings' => Listing::mostRecent()
                    ->withoutSold()
                    ->paginate(10)
            ]
        );
    }

    public function about()
    {
        return inertia(
            'Index/About',
        );
    }
}
