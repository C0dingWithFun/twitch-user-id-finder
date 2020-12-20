<template>
  <div class="columns mt-5">
    <p class="column is-6 is-offset-3 intro">
      This is a simple tool to quickly Find Twitch user's ID from their Login Name 😄 ! Type the
      login name below, and click find to get their ID. I hope it will fasten your development
      process with Twitch API!
    </p>
  </div>
  <div class="column is-6 is-offset-3 mt-5">
    <div class="notification is-danger is-light" v-if="error">
      {{ error }}
    </div>
    <div class="field has-addons">
      <div class="control">
        <input class="input" type="text" placeholder="Find a repository" v-model="loginName" />
      </div>
      <div class="control">
        <button
          class="button is-info"
          @click.prevent="findId"
          :disabled="!loginName || !loginName.trim()"
        >
          Find ID
        </button>
      </div>
    </div>
  </div>
  <div class="column is-6 is-offset-3 mt-5" v-if="channelStats">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                :src="channelStats.stats.profile_image_url"
                :alt="channelStats.stats.display_name"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ channelStats.stats.display_name }}</p>
            <p class="subtitle is-6">User ID: {{ channelStats.stats.id }}</p>
          </div>
        </div>

        <div class="content">{{ channelStats.stats.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { API_URL } from "../lib";

export default defineComponent({
  name: "Home",
  data: () => ({
    loginName: "",
    error: "",
    channelStats: null
  }),
  methods: {
    async findId() {
      this.channelStats = null;
      this.error = "";
      await fetch(`${API_URL}/user-id`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          loginName: this.loginName.toString()
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data.errorCode) {
            throw new Error(data.message);
            return;
          }
          if (!data.data.userId) {
            throw new Error("Invalid Login Username 😞. Please enter correct username.");
            return;
          }
          this.channelStats = data.data;
          console.log(data);
        })
        .catch(err => {
          this.channelStats = null;
          this.error = err.message;
        });
    }
  }
});
</script>

<style scoped>
.card {
  text-align: left;
}

.intro,
.subtitle {
  font-weight: bold;
}

.field,
.button {
  width: 100%;
}

.control:first-of-type {
  width: 75%;
}

.control:last-of-type {
  width: 25%;
}

input,
.button {
  font-weight: bold;
}
</style>
