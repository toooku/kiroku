<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>kiroku</h1>
      </el-header>
      <el-main>
        <el-form label-position="top" label-width="120px" :model="form" class="form">
          <el-form-item class="input" label="Content">
            <el-input v-model="form.input" type="textarea" />
          </el-form-item>
          <el-form-item class="submit" >
            <el-button type="primary" @click="onSubmit">Update</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <p class="service_name">kiroku</p>
        <p class="service_description"><small>"kiroku" is a support tool that saves progress updates and insights to local storage.</small></p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  input: '',
})

const onSubmit = () => {
  console.log('submit!')
}

</script>

<style scoped>
.el-header {
  background-color: #fafafa;
  text-align: center;
  padding: 0.4em;
  height: auto;
}

.el-main {
  display: flex;
  justify-content: center;
}

.form {
  width: 60%;
}

.submit {
  display: flex;
}

:deep(.el-form-item__content) {
    justify-content: end;
}

:deep(.el-textarea__inner) {
  min-height: 150px !important;
}

.el-footer {
  text-align: center;
}

.service_name {
  margin-bottom: 1px;
}

.service_description {
  margin:0;
}

</style>
