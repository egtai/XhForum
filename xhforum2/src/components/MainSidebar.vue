<template>
    <div>
    <el-card class="no-padding m-b-15">
       <!-- iconButtons组件的1部分图标通过控制exsits数组元素 -->
      <icon-buttons
        :exists= "['question', 'article', 'thinking']"
      />
       <!-- 我的草稿 -->
      <div class="draft nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-draft middle-icon"></span>
            我的草稿
          </span>
          <span class="num">2</span>
        </a>
      </div>
    </el-card>
    <el-card class="no-padding m-b-15">
       <!-- iconButtons组件的2部分图标 -->
      <icon-buttons
        :exists= "['live', 'book', 'desk', 'expert', 'consult']"
      />
    </el-card>

     <!--右侧部分3-->
    <el-card class="no-padding m-b-15">

        <!-- 我的收藏 -->
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <i class="el-icon-star-on middle-icon"></i>
            我的收藏
          </span>
        </a>
      </div>

      <!-- 我关注的问题 -->
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-question middle-icon"></span>
            我关注的问题
          </span>
          <span class="num">320</span>
        </a>
      </div>

      <!-- 我的邀请 -->
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-add-person-fill middle-icon"></span>
            我的邀请
          </span>
          <span class="num">21</span>
        </a>
      </div>

      <!-- 站务中心 -->
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-xiaoxi-control middle-icon"></span>
            站务中心
          </span>
        </a>
      </div>

      <!-- 我的收藏 -->
      <div class="nav-link">
        <a href="#">
          <span class="text">
            <span class="el el-icon-fakezhihu-banquan middle-icon"></span>
            我的收藏
          </span>
        </a>
      </div>
    </el-card>

    <!-- 底部网站信息 -->
    <sidebar-footer />
    </div>
</template>
<script>

import IconButtons from '@/components/IconButtons.vue'
import SidebarFooter from '@/components/SidebarFooter.vue'
export default {
  components: {
    IconButtons,
    SidebarFooter
  },
  data () {
    return {

    }
  }
}
</script>
