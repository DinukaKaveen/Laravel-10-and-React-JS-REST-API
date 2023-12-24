<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function get_products()
    {
        $products = Product::all();

        return response()->json([
            'products' => $products
        ], 200);
    }

    public function get_product_by_id($id)
    {
        $product = Product::find($id);

        if($product)
        {
            return response()->json([
                'product' => $product
            ], 200);
        }
        else 
        {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }
    }

    public function create_product(Request $request)
    {
        $product = Product::create([
            'name' => $request->name,
            'qty' => $request->qty,
            'price' => $request->price
        ]);

        return response()->json([
            'message' => 'Product created successfully',
        ], 201);
    }
    
}
