<template>
  <div>
    <div class="title2"><div class="breadcrumb"><router-link to="/security/center">安全中心</router-link><span class="angle">></span>企业认证</div></div>
    <div class="title4 mt-40">企业资质信息</div>
    <el-form class="mt-30" label-position="right" :model="form" ref="form" :rules="formRules" label-width="140px">
      <el-form-item prop="oldPwd" label="企业名称：">
        <el-input type="password" v-model="form.oldPwd"></el-input>
      </el-form-item>
      <el-form-item prop="newPwd" label="统一社会信用代码：">
        <el-input type="password" v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="企业地址：">
        <el-input type="password" v-model="form.checkPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="营业执照：">
        <div class="upload-btn">点击上传</div>
        <div class="tip">
          说明：<br>
          1. 证书必须在有效期内，如无法提供营业执照照片，请上传事业单位法人证书/统一社会信用代码证书图片<br>
          2. 格式要求为：原件照片、扫描件或加盖公章的复印件，支持jpg、JPEG、png格式照片，大小不超过5M<br>
        </div>
      </el-form-item>
    </el-form>
    <div class="title4 mt-50">企业对公账号</div>
    <el-form class="mt-30" label-position="right" :model="form" ref="form" :rules="formRules" label-width="140px">
      <el-form-item prop="oldPwd" label="企业开户名称：">
        <el-input type="password" v-model="form.oldPwd"></el-input>
      </el-form-item>
      <el-form-item prop="newPwd" label="企业开户银行：">
        <el-input type="password" v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="企业地址：">
        <el-input type="password" v-model="form.checkPwd"></el-input>
      </el-form-item>
    </el-form>
    <div class="title4 mt-50">企业联系人信息</div>
    <el-form class="mt-30" label-position="right" :model="form" ref="form" :rules="formRules" label-width="140px">
      <el-form-item prop="oldPwd" label="联系人：">
        <el-input type="password" v-model="form.oldPwd"></el-input>
      </el-form-item>
      <el-form-item prop="newPwd" label="手机号：">
        <el-input type="password" v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="邮箱：">
        <el-input type="password" v-model="form.checkPwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="form-btn-block" type="success" @click="submit('form')" size="large">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      formRules: {}
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    }
  }
}
</script>

<style scoped>
.upload-btn{
  font-size: 12px;
  width: 95px;
  height: 35px;
  line-height: 33px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #ddd;
  text-align: center;
}

.tip{
  font-size: 12px;
  color: #999;
  line-height: 1.5;
}
</style>
