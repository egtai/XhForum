<template>
    <div class="main-content">
        <div class="List">
            <main-list-wrapper/>
        </div>
        <div class="sidebar">
            <main-sidebar/>
            nihao1
        </div>
    </div>
</template>

<script>
import MainListWrapper from '@/components/MainListWrapper.vue'
import MainSidebar from '@/components/MainSidebar.vue'
export default {
  name: 'main',
  components: {
    MainListWrapper,
    MainSidebar
  }
}
</script>
