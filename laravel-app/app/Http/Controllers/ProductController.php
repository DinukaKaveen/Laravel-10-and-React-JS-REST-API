<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

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

        try
        {
            Product::create([
                'name' => $request->name,
                'qty' => $request->qty,
                'price' => $request->price
            ]);
    
            return response()->json([
                'message' => 'Product created successfully',
            ], 200);
        }
        catch(Exception $e)
        {
            Log::error($e);
            return response()->json([
                'message' => "Something went wrong",
            ], 500);
        }

    }

    public function update_product(Request $request, $id)
    {
        try
        {
            $product = Product::find($id);

            if($product)
            {
                $product->update([
                    'name' => $request->name,
                    'qty' => $request->qty,
                    'price' => $request->price
                ]);

                return response()->json([
                    'message' => 'Product updated successfully'
                ], 200);
            }
            else
            {
                return response()-> json([
                    'message' => 'Product not found'
                ], 404);
            }
        }
        catch(Exception $e)
        {
            Log::error($e);
            return response()->json([
                'message' => 'Something went wrong'
            ], 500);
        }
        
    }

    public function delete_product($id)
    {
        $product = Product::find($id);

        if($product)
        {
            $product->delete();
            return response()->json([
                'message' => 'Product deleted successfully'
            ], 200);
        }
        else
        {
            return response()->json([
                'message' => 'Product not found'
            ], 404);
        }
        
    }
    
}
