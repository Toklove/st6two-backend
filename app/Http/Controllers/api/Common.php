<?php

namespace App\Http\Controllers\api;

class Common extends BaseApi
{
    //
    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth:api', ['except' => []]);
    }

    function upload()
    {
        //上传文件
        $file = request()->file('files');
        if (!$file->isValid()) {
            return $this->error('上传失败');
        }

        //验证文件类型
        $type = $file->getMimeType();
        $allow = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($type, $allow)) {
            return $this->error('文件类型不允许');
        }

        //验证文件大小
        $size = $file->getSize();
        if ($size > 1024 * 1024 * 2) {
            return $this->error('文件大小不能超过2M');
        }

        $path = $file->store('public');
        $url = env('APP_URL') . '/storage/' . substr($path, 7);
        return $this->success('success', ['url' => $url]);
    }
}
