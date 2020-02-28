<?php

namespace App\Http\Controllers;

use App\AuthUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = AuthUser::all()->toArray();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)     // sign up
    {
        $this->validate($request, [
            'name'      => 'required',
            'email'     => 'required',
            'password'  => 'required',
            'image'     => 'image|mimes:jpeg,png,jpg'
        ]);

        $result                         = array();
        $result['status']               = 0;
        $result['msg']                  = "User name or email exist. Please use another.";
        
        $imgUrl = '';
        if (isset($request->imgFile)) {
            $image = $request->file('imgFile');
            $name = time().'.'.$image->getClientOriginalExtension();
            $destinationPath = public_path('/userImages');
            $image->move($destinationPath, $name);
            $imgUrl = '/userImages/'.$name;
        }

        if (AuthUser::where(['name' => $request->name])->count() == 0
            && AuthUser::where(['email' => $request->email])->count() == 0 ) 
        {
            $idToken = $request->header('X-XSRF-TOKEN');
            $user = new AuthUser();
            $user->name         = $request->name;
            $user->email        = $request->email;
            $user->password     = Hash::make($request->password);
            $user->imgUrl       = $imgUrl;
            $user->roll         = "user";
            $user->idToken      = $idToken;
            $user->loginStatus  = true;
            $user->save();

            $result['status']               = 1;
            $result['msg']                  = "Account created successfuly!";
            $result['data']                 = array();
            $result['data']['idToken']      = $idToken;
        }
        
        return $result;
    }

    public function signin(Request $request)
    {
        $idToken = $request->header('X-XSRF-TOKEN');

        $this->validate($request, [
            'name'      => 'required',
            'password'  => 'required'
        ]);

        $match = [
            'name'      => $request->name,
            'password'  => $request->password
        ];

        $user = AuthUser::where(['name' => $request->name])->first();
        // $affectedRows  = AuthUser::where($match)->update(['idToken' => $idToken]);

        $result = array();
        $result['status']   = 0;
        $result['msg']      = "There is no account! Please sign up first.";

        if ($user) {
            $result['msg'] = "Password invalid. Please try again!";

            if (Hash::check($request->password, $user->password)) {
                $user->idToken = $idToken;
                $user->save();

                $result['status']               = 1;
                $result['msg']                  = "Sign in success!";
                $result['data']                 = array();
                $result['data']['idToken']      = $idToken;
            }
        }

        return $result;
    }

    public function validateToken(Request $request)
    {
        $user  = AuthUser::where(['idToken' => $request->user])->first();
        $result = array();
        $result['status']   = 0;
        $result['msg']      = "There is no account!";

        if ($user) {
            $result['status']   = 1;
            $result['msg']      = "Validated user";
            $result['name']     = $user->name;
            $result['email']    = $user->email;
            $result['roll']     = $user->roll;
            $result['imgUrl']   = $user->imgUrl;
        }

        return $result;
    }

    public function logout(Request $request)
    {
        $affectedRows  = AuthUser::where(['idToken' => $request->user])->update(['idToken' => '', 'loginStatus' => false]);

        $result = array();
        $result['status']   = 0;
        $result['msg']      = "Logout Failed!";

        if ($affectedRows == 1) {
            $result['status']               = 1;
            $result['msg']                  = "Logout Success!";
            $result['data']                 = array();
            $result['data']['name']         = "user";
            $result['data']['loginStatus']  = false;
        }
        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AuthUser  $authUser
     * @return \Illuminate\Http\Response
     */
    public function show(AuthUser $authUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AuthUser  $authUser
     * @return \Illuminate\Http\Response
     */
    public function edit(AuthUser $authUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AuthUser  $authUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AuthUser $authUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AuthUser  $authUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(AuthUser $authUser)
    {
        //
    }
}
