<template>
    <v-container>
        <v-app-bar app dark>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer>Review Book</v-spacer>
            <v-btn text rounded><router-link to="/">Home</router-link></v-btn>
            <v-btn text rounded><router-link to="/login">Login</router-link></v-btn>
        </v-app-bar>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${post.image}`" width="200px"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                            </v-col>

                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import API from '../api';
export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        const response = await API.getPostById(this.$route.params.id);
        this.post = response;
    },
}
</script>