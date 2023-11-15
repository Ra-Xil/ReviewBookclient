<template>
    <v-app>
        <v-app-bar app dark>
            <v-toolbar-title></v-toolbar-title>
            <v-spacer>Review Book</v-spacer>
            <v-btn text rounded><router-link to="/">Home</router-link></v-btn>
        </v-app-bar>
        <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible
            v-if="this.$route.params.message">
            {{ this.$route.params.message }}
        </v-alert>
        <v-container>
            <v-row no-gutters>
                <v-col sm="10" class="mx-auto">
                    <v-card class="pa-5">
                        <v-card-title>Đăng nhập</v-card-title>
                        <v-divider></v-divider>
                        <v-form ref="form" @submit.prevent="loginUser" class="pa-5" enctype="multipart/from-data">
                            <v-text-field label="Tên đăng nhập" v-model="user.username" prepend-icon="mdi-account"
                                :rules="rules"></v-text-field>
                            <v-text-field label="email" v-model="user.email" prepend-icon="mdi-email"
                                :rules="rules"></v-text-field>
                            <v-text-field label="Mật khẩu" v-model="user.password"
                                :type="showPassword ? 'text' : 'password'" prepend-icon="mdi-key" :rules="rules"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPassword = !showPassword"></v-text-field>
                            <v-btn type="submit" class="mt-3" color="primary">Đăng nhập</v-btn>
                            <p v-if="loginFailed">Login failed. Please try again.</p>
                        </v-form>
                        <p v-if="loginFailed">Login failed. Please try again.</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
// import response  from 'express';
import API from '../api';
export default {
    data() {
        return {
            rules: [(value) => !!value || "Vui lòng nhập"],
            showPassword: false,
            loginFailed: false,
            user: {
                username: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        async loginUser() {
            try {
                const response = await API.getUserById(this.$route.params.id);
                if (this.user.username === response.username && this.user.email === response.email && this.user.password === response.password) {
                    this.$router.push({ name: 'HomeAdmin', params: { message: 'Đăng nhập thành công' } });
                }

            } catch (error) {
                this.$router.push({ name: 'Login', params: { message: 'Đăng nhập không thành công' } });
            }
        },
    }
};

</script>