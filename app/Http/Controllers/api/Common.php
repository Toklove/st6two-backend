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
            return $this->error(__('api.common.upload_failed'));
        }

        //验证文件类型
        $type = $file->getMimeType();
        $allow = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($type, $allow)) {
            return $this->error(__('api.common.file_type_required'));
        }

        //验证文件大小
        $size = $file->getSize();
        if ($size > 1024 * 1024 * 2) {
            return $this->error(__('api.common.file_size_required'));
        }

        $path = $file->store('public');
        $url = env('APP_URL') . '/storage/' . substr($path, 7);
        return $this->success('success', ['url' => $url]);
    }
}
