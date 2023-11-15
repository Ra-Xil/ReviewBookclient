<template>
    <v-app>
        <v-app-bar app dark>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text rounded><router-link to="/admin">Admin</router-link></v-btn>
            <v-btn text rounded><router-link to="/add-post">ADD</router-link></v-btn>
            <v-btn text rounded><router-link to="/">Logout</router-link></v-btn>
        </v-app-bar>
        <v-container>
            <v-row no-gutters>
                <v-col sm="10" class="mx-auto">
                    <v-card class="pa-5">
                        <v-card-title>Thêm sách mới</v-card-title>
                        <v-divider></v-divider>
                        <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/from-data">
                            <v-text-field label="Tên sách" v-model="post.title" prepend-icon="mdi-note"
                                :rules="rules"></v-text-field>

                            <v-text-field label="Tác giả" v-model="post.category" prepend-icon="mdi-view-list"
                                :rules="rules"></v-text-field>

                            <v-textarea label="Nội dung" v-model="post.content" prepend-icon="mdi-note-plus"
                                :rules="rules"></v-textarea>

                            <v-file-input @change="selectFile" :rules="rules" show-size counter multiple
                                label="Chọn file ảnh"></v-file-input>

                            <v-btn type="submit" class="mt-3" color="primary">Thêm sách</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import API from '../api';
export default {
    data() {
        return {
            rules: [(value) => !!value || "Vui lòng nhập"],
            post: {
                title: "",
                category: "",
                content: "",
                image: "",
            },
            image: "",
        };
    },
    methods: {
        selectFile(file) {
            this.image = file[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append("image", this.image);
            formData.append("title", this.post.title);
            formData.append("category", this.post.category);
            formData.append("content", this.post.content);
            if (this.$refs.form.validate()) {
                const response = await API.addPost(formData);
                this.$router.push({ name: 'HomeAdmin', params: { message: response.message } });
            }
        },
    },
};
</script>