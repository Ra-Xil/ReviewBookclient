<template>
    <v-container>
        <v-app-bar app dark>
            <v-toolbar-title>Review Book</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text rounded><router-link to="/admin">Admin</router-link></v-btn>
            <v-btn text rounded><router-link to="/add-post">ADD</router-link></v-btn>
            <v-btn text rounded><router-link to="/">Logout</router-link></v-btn>
        </v-app-bar>
        <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible
            v-if="this.$route.params.message">
            {{ this.$route.params.message }}
        </v-alert>
        <v-row no-gutters>
            <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
                <v-card class="pa-1" :to="{ name: 'postadmin', params: { id: post._id } }">
                    <v-img height="250" :src="`/${post.image}`"></v-img>
                    <v-btn class="ml-4 mt-3" small outlined color="indigo">
                        {{ post.category.substring(0, 75) + "..." }}
                    </v-btn>
                    <v-card-title class="headline">
                        {{ post.title }}
                    </v-card-title>
                    <v-card-text class="py-0">
                        <p>{{ post.content.substring(0, 100) + "..." }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import API from "../api";

export default {
    name: 'homeadmin',
    data() {
        return {
            posts: [],
        };
    },
    async created() {
        this.posts = await API.getAllPost();
    },
}
</script>
  