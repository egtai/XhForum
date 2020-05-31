<template>
  <div>
    <!-- 调用MainList组件 -->
    <main-list-nav
      :type= "type"
    />

    <!-- 列表外层套用Card组件 -->
    <el-card v-loading="loading" >
      <div class="card-content">
        <!-- 调用route-view组件 -->
        <router-view
          v-for="(item, index) in fakeInfo"
          :key="index"
          :item="item"
          :index="index"
          :type="item.type"
          :showPart="['title']"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import MainListNav from '@/components/MainListNav.vue'

export default {
  components: {
    MainListNav
  },
  watch: {
    $route: 'fetchDate'
  },
  mounted () {
    this.fetchDate()
  },
  data () {
    return {
      type: 'main',
      loading: false,
      fakeInfo: [],
      hotList: [],
      normalList: []
    }
  }
}
</script>
