<template>
  <div class="wrapper">
      <!-- 写回答 -->
    <div class="icon-item normal-btn" v-if="exists.includes('question')">
        <!-- 判断exists数组中是否有当前按钮的名称，若是有的话，则展示i,若是没有的，则不渲染 -->
      <i class="el-icon-tickets big-icon"></i>
      <p>写回答</p>
    </div>

    <!-- 写文章 -->
    <div class="icon-item normal-btn" v-if="exists.includes('article')">
      <router-link :to="{name: 'editor', params: {articleId: 0}}">
        <i class="el-icon-edit-outline big-icon"></i>
        <p>写文章</p>
      </router-link>
    </div>

    <!-- 写想法 -->
    <div class="icon-item normal-btn" v-if="exists.includes('thinking')">
      <span class="el el-icon-fakezhihu-thinking big-icon"></span>
      <p>写想法</p>
    </div>

    <!-- Live -->
    <div class="icon-item thunder-btn" v-if="exists.includes('live')">
      <span class="el el-icon-fakezhihu-Thunder big-icon"></span>
      <p>Live</p>
    </div>

    <!-- 书店 -->
    <div class="icon-item book-btn" v-if="exists.includes('book')">
      <span class="el el-icon-fakezhihu-book big-icon"></span>
      <p>书店</p>
    </div>

    <!-- 圆桌 -->
    <div class="icon-item desk-btn" v-if="exists.includes('desk')">
      <span class="el el-icon-fakezhihu-desk big-icon"></span>
      <p>圆桌</p>
    </div>

    <!-- 专栏 -->
    <div class="icon-item pen-btn" v-if="exists.includes('expert')">
      <span class="el el-icon-fakezhihu-pen big-icon"></span>
      <p>专栏</p>
    </div>

    <!-- 付费咨询 -->
    <div class="icon-item money-btn" v-if="exists.includes('consult')">
      <span class="el el-icon-fakezhihu-money big-icon"></span>
      <p>付费咨询</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['exists']
}
</script>
