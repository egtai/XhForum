<template>
    <header class="main-header">
       <div class="header-content">
      <router-link class="m-r-20" :to="{name: 'home'}">
        <img class="logo" src="./../assets/imgs/logo.png" alt="">
      </router-link>
      <el-menu
        :default-active="activeIndex"
        class="m-r-20"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">发现</el-menu-item>
        <el-menu-item index="3">话题</el-menu-item>
      </el-menu>
      <el-input size="small" class="search m-r-10" placeholder="请输入内容" v-model="keywords" >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button size="small" type="primary" @click="askModelVisiable = true">提问</el-button>
      <div class="userInfo" v-if="!isLogin">
        <router-link :to="{ name: 'signup'}">登录</router-link>
      </div>
      <div class="userInfo" v-if="isLogin">
        <i class="el-icon-bell m-r-40 icon-item"></i>
        <i class="el-icon-message m-r-40 icon-item"></i>
        <el-dropdown placement="bottom" trigger="click" class="hand-click">
          <span>
            {{this.name}}
            <!-- <img class="avatar" src="./../assets/imgs/logo.png" alt=""> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goToPersonalPage()">
              <span class="el el-icon-fakezhihu-person"></span>
              我的主页
            </el-dropdown-item>
            <el-dropdown-item divided>
              <i class="el-icon-setting"> 设置</i>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <div @click="logout">
                <span class="el el-icon-fakezhihu-poweroff"></span>
                退出
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key) {
      console.log(key)
    },
    goToPersonaPage () {
      console.log('跳转到用户首页')
    }
  }
}
</script>

<style scoped lang="stylus">
// .main-header
//  display:flex;
</style>
