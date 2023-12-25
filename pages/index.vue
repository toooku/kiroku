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
          <el-form-item class="submit">
            <el-button type="primary" @click="onSubmit">Update</el-button>
          </el-form-item>
        </el-form>

        <el-timeline :reverse="true">
          <el-timeline-item v-for="(activity, index) in entries" :key="index" :timestamp="activity.timestamp">
            <div style="white-space: pre-wrap;" v-text="activity.text" />
          </el-timeline-item>
        </el-timeline>
      </el-main>
      <el-footer>
        <p class="service_name">kiroku</p>
        <p class="service_description">
          <small>"kiroku" is a support tool that saves progress updates and insights
            to local storage.</small>
        </p>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
const form = reactive({
  input: "",
});
const entries = ref([]);

const onSubmit = () => {
  const now = new Date().toLocaleString({ timeZone: "Asia/Tokyo" });

  const entry = {
    text: form.input,
    timestamp: now,
  };

  entries.value.unshift(entry);
  saveEntries();
  form.input = "";
};

const saveEntries = () => {
  localStorage.setItem("kiroku", JSON.stringify(entries.value));
};

const loadEntries = () => {
  const savedEntries = localStorage.getItem("kiroku");
  if (savedEntries) {
    const entriesArray = JSON.parse(savedEntries);
    const validEntries = entriesArray.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return dateB - dateA; // 昇順ソート
    });

    entries.value = validEntries;
  }
};

onMounted(() => {
  loadEntries();
});
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
  flex-direction: column;
  align-items: center;
}

.form {
  width: 60%;
}

.el-timeline {
  margin-top: 40px;
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
  margin: 0;
}
</style>
