<template>
  <div class="answer-main">
    <!-- 根据关键词判断是否展示标题 -->
    <div class="title" v-if="showPart.includes('title')">
      <h2>
        <router-link
          :to="{name: type === 0 ? 'detailsArticles' : 'detailsQuestions', params: {id: transtedInfo.id}}">
          {{transtedInfo.title}}
        </router-link>
      </h2>
    </div>

    <!-- 根据关键词判断是否展示作者 -->
    <div class="creator-info clearfix" v-if="showPart.includes('creator')">
      <router-link :to="{name: 'peopleMain', params: {id: item.author ? item.author.id : 0}}">
        <!-- 作者头像 -->
        <img :src="item.author ? item.author.avatarUrl : ''" alt="">
        <!-- 作者名字和座右铭 -->
        <div class="detail">
          <p class="username">{{item.author ? item.author.name : ''}}</p>
          <p class="introduce">{{item.author ? item.author.headline: ''}}</p>
        </div>
      </router-link>
    </div>

    <!-- 根据关键词判断是否展示支持人数 -->
    <div class="vote" v-if="showPart.includes('votes')">
      <span>
        {{item.status ? JSON.parse(item.status.voteUp).length : 0}} 人赞同了该回答
      </span>
    </div>

    <!-- 内容核心区 -->
    <div class="content-wrapper clearfix">
      <div class="shortCut" v-if="showType === 'experct'">
        <!-- 是否有图片需要进行展示 -->
        <div class="cover" v-if="transtedInfo.cover">
          <img :src="transtedInfo.cover" alt="">
        </div>

        <!-- 展示简介 -->
        <div class="experct">
          <span>
            <!-- 简介内容 -->
            <span v-html="item.excerpt"></span>
            <!-- 点击阅读全文 -->
            <el-button class="btn-no-padding" type="text" icon="el-icon-arrow-down" @click="showType = 'all'">阅读全文</el-button>
          </span>
        </div>
      </div>

      <!-- 根据showtype类型判断是否展示全文 -->
      <div class="content" v-if="showType === 'all'">
        <router-link v-if="!showPart.includes('creator')" class="mini-creator-info clearfix" :to="{name: 'peopleMain', params: {id: item.author ? item.author.id : 0}}">
          <img class="avatar" :src="item.author ? item.author.avatarUrl : ''" alt="">
          <p class="username">{{item.author ? item.author.name : ''}}</p>
        </router-link>
        <!-- 展示全文内容 -->
        <div v-html="item.content"></div>
        <!-- 点击按钮收起 -->
        <el-button class="btn-no-padding" type="text" icon="el-icon-arrow-up" @click="showType = 'experct'">收起</el-button>
      </div>
    </div>

    <!-- 引入ListItemActions组件 -->
    <list-item-actions
      class="actions"
      v-bind="$attrs"
      v-on="$listeners"
      :type="item.type"
      :itemId="item.id"
      :status="item.status"
      :commentShowType="showType"
      :commentCount="item.comment ? item.comment.length : 0"
      :showActionItems="showActionItems"
    />
  </div>
</template>
<script>
import ListItemActions from '@/components/ListItemActions'
export default {
  // item为当前元素的主要内容，showPart为展示内容
  //  type为当前内容类型，文章还是回答
  props: ['item', 'showPart', 'type'],
  inheritAttrs: false,
  components: {
    ListItemActions

  },
  data () {
    return {
      showType: 'experct'
    }
  },
  computed: {
    transtedInfo () {
      // 如果当前的内容是文章
      if (this.type === 0) {
        return {
          id: this.item.id,
          title: this.showPart.includes('title') ? this.item.title : '',
          cover: this.item.cover || ''
        }
      }

      // 如果当前的内容是回答
      if (this.type === 2 && this.showPart.includes('title')) {
        return {
          id: this.item.question.id,
          title: this.item.question.title,
          cover: this.item.thumbnail || ''
        }
      }
      return {
        id: 0,
        title: '',
        cover: ''
      }
    },
    showActionItems () {
      if (this.$route.name === 'peopleArticles' || this.$route.name === 'peopleMain') {
        return ['vote', 'thanks', 'comment', 'share', 'favorite', 'setting']
      }
      return ['vote', 'thanks', 'comment', 'share', 'favorite', 'more']
    }
  }
}
</script>
