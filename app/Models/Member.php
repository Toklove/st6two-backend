<?php

namespace App\Models;

use App\extends\Udun\uDun;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Member extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function title()
    {
        return $this->email;
    }

    function parent()
    {
        return $this->belongsTo(Member::class, 'parent_id', 'id');
    }

    function banks()
    {
        return $this->hasMany(UserBank::class, 'member_id', 'id');
    }

    function initWallet()
    {
        $udun = uDun::getInstance();
        $currencies = Currency::all();
        $has_add_chain = [];
        foreach ($currencies as $currency) {
            if (isset($has_add_chain[$currency->main_coin_type])) {
                //如果已经存在地址 则直接保存
                $userCryptoWallet = new UserCryptoAddress();
                $userCryptoWallet->member_id = $this->id;
                $userCryptoWallet->currency_id = $currency->id;
                $userCryptoWallet->address = $has_add_chain[$currency->main_coin_type];
                $userCryptoWallet->save();
                continue;
            }
            $data = $udun->createAddress($currency->main_coin_type);
//            $data = json_decode($data, true);
            if ($data['code'] != 200) {
                throw new \Exception('创建钱包地址失败');
            }
            $address = $data['data']['address'];
            $has_add_chain[$currency->main_coin_type] = $address;
            $userCryptoWallet = new UserCryptoAddress();
            $userCryptoWallet->member_id = $this->id;
            $userCryptoWallet->currency_id = $currency->id;
            $userCryptoWallet->address = $address;
            $userCryptoWallet->save();
        }
    }
}
