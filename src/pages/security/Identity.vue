<template>
  <div>
    <tab :tab="tab" :tabIndex.sync="tabIndex"></tab>
    <div v-show="tabIndex == 0">
      <el-form class="mt-60" label-position="right" :model="form1" ref="form1" :rules="formRules1" label-width="83px">
        <el-form-item prop="name" label="姓名:">
          <el-input v-model="form1.name"></el-input>
        </el-form-item>
        <el-form-item prop="idNumber" label="身份证号:">
          <el-input v-model="form1.idNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn-block" type="success" @click="submit('form1')" size="large">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-show="tabIndex == 1">
      <el-form class="mt-60" label-position="right" :model="form1" ref="form2" :rules="formRules2" label-width="111px">
        <el-form-item label="姓名:">
          <span class="bold">{{form2.name}}</span>
        </el-form-item>
        <el-form-item label="身份证号:">
          <span class="bold">{{form2.idNumber}}</span>
        </el-form-item>
        <el-form-item label="身份证正反面：">
          <div class="box">
            <div class="card-box">
              <span class="iconfont icon-jiahao"></span>
              <div>手持身份证正面</div>
            </div>
            <div class="look">查看示例</div>
          </div>
          <div class="box">
            <div class="card-box">
              <span class="iconfont icon-jiahao"></span>
              <div>手持身份证反面</div>
            </div>
            <div class="look">查看示例</div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn-block" type="success" @click="submit('form2')" size="large">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import tab from '@/components/Tab'
export default {
  data () {
    return {
      tab: ['身份认证', '高级身份认证'],
      tabIndex: '',
      form1: {
        name: '',
        idNumber: ''
      },
      formRules1: {
        name: [
          {
            required: true,
            message: '请填写姓名',
            trigger: 'blur'
          }
        ],
        idNumber: [
          {
            required: true,
            validator: (rule, value, cb) => {
              if (value === '') {
                return cb(new Error('请填写身份证号'))
              }
              if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
                cb()
              } else {
                cb(new Error('身份证号格式不正确'))
              }
            },
            trigger: 'blur'
          }
        ]
      },
      form2: {
        name: '张全蛋',
        idNumber: '2461*************2456'
      },
      formRules2: {}
    }
  },
  components: {
    tab
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    }
  },
  created () {
    this.tabIndex = parseInt(this.$route.query.tab) || 0
  }
}
</script>

<style scoped>
.box{
  display: inline-block;
  text-align: center;
  display: inline-block;
  width: 201px;
  margin-right: 17px;
  & .look{
    display: inline-block;
    color: #1698EB;
    font-size: 12px;
    margin-top: 16px;
    cursor: pointer;
  }
  & .card-box{
    cursor: pointer;
    height: 121px;
    vertical-align: top;
    border: 1px dashed #C8D7DC;
    border-radius: 5px;
    background-color: #f9f9f9;
    color: #999;
    & .iconfont{
      display: inline-block;
      font-size: 32px;
      margin-top: 32px;
      color: #C8D7DC;
    }
  }
}
</style>
