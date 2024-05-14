<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-footer">
      <highlightjs :language="type" :code="code" />
      <dic class="card-code">
        <div class="card-look" @click="onClick">
          <span class="iconfont icon-shangla-grey" v-if="show"></span>
          <span class="iconfont icon-xiala-grey" v-if="!show"></span>
          <span class="card-mark" v-text="show ? '收起代码' : '查看代码'"></span>
        </div>
      </dic>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue"

const props = defineProps({
  title: String,
  type: String,
  code: String
})

const show = ref(false)
const codeBlockHeight = ref(0)
const codeBlockPadding = ref(0)
const codeBlockOpacity = ref(0)
const codeMarkHeight = ref(0)

const onClick = () => {
  show.value = !show.value
  codeBlockPadding.value = show.value ? "16px 0" : "0px"
  codeBlockHeight.value = show.value ? "400px" : "0px"
  codeBlockOpacity.value = show.value ? 1 : 0
  codeMarkHeight.value = show.value ? "16px" : "0px"
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  transition: all 0.3s;
  .card-header {
    padding: 20px;
  }
  .card-content {
    padding: 20px;
    border-top: 1px solid #e4e7ed;
    border-bottom: 1px solid #e4e7ed;
  }

  .card-footer {
    padding: 20px;
    color: #8a8a8a;
    &:hover {
      background: #f9fafc;
      .card-code .card-look {
        transition: all 0.3s;
        cursor: pointer;
        transform: translate(-20px, 0);
        .card-mark {
          opacity: 1;
          color: #3963bc;
          margin-left: 8px;
          display: inline-block;
        }
        .icon-xiala-grey {
          color: #3963bc;
        }
        .icon-shangla-grey {
          color: #3963bc;
        }
      }
    }
    .card-code {
      width: 100%;
      display: flex;
      justify-content: center;

      .card-look {
        transform: translate(20px, 0);
        margin-top: v-bind(codeMarkHeight);
        .card-mark {
          opacity: 0;
          display: inline-block;
        }
        // &:hover {
        //   transition: all 0.3s;

        //   transform: translate(-10px, 0);
        //   cursor: pointer;
        //   .card-mark {
        //     opacity: 1;
        //     color: #3963bc;
        //     margin-left: 8px;
        //     display: inline-block;
        //   }
        //   .icon-xiala-grey {
        //     color: #3963bc;
        //   }
        //   .icon-shangla-grey {
        //     color: #3963bc;
        //   }
        // }
      }
    }
  }
}

// pre code.hljs {
//   transition: all 0.3s;
//   padding: v-bind(codeBlockPadding);
//   opacity: v-bind(codeBlockOpacity);
//   height: v-bind(codeBlockHeight);
// }

:deep(pre code.hljs) {
  transition: all 0.3s;
  padding: v-bind(codeBlockPadding);
  opacity: v-bind(codeBlockOpacity);
  height: v-bind(codeBlockHeight);
}

// ::-webkit-scrollbar-thumb {
//   background: #ccc;
//   border-radius: 32px;
// }
</style>
