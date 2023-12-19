<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        //验证TOKEN
        if (!$request->header('Authorization')) {
            return response()->json([
                'code' => 0,
                'msg' => 'Unauthorized',
                'data' => []
            ]);
        }

        return $next($request);
    }
}
