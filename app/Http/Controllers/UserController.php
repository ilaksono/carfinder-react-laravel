<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\Client\Response;

class UserController extends Controller
{
    //
    public function index(Request $req, $id) {
      $user = User::find($id);
      if(is_null($user)) {
        return response() -> json('Record not found!', 404);
      }

      return response()->json($user, 200);
    }
}
